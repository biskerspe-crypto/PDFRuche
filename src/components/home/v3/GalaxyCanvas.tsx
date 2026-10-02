'use client';

import React, { useEffect, useRef } from 'react';

interface GalaxyCanvasProps {
  className?: string;
}

interface Star {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  twinklePhase: number;
  twinkleSpeed: number;
  color: string;
  layer: 0 | 1 | 2;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  len: number;
  life: number; // 0..1
  decay: number;
}

const TAU = Math.PI * 2;
const STAR_COLORS = ['255,255,255', '191,222,255', '216,205,255', '255,240,220'];
const LAYER_PARALLAX = [0.12, 0.32, 0.6];

/**
 * V3 "Living galaxy" engine — pure Canvas 2D, zero dependencies.
 *
 * - ~250 procedural stars in 3 parallax depths (mouse + scroll)
 * - Pre-rendered nebula clouds composited with `lighter`
 * - Procedural meteors with fading trails
 * - Performance guards: DPR ≤ 2, single rAF loop, pauses when the tab is
 *   hidden or the canvas leaves the viewport, renders a single static frame
 *   under `prefers-reduced-motion`.
 */
export default function GalaxyCanvas({ className }: GalaxyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    let inView = true;
    let lastTime = 0;
    let nextMeteorAt = 2600;
    let scrollProgress = 0; // hero-local scroll offset in px

    let stars: Star[] = [];
    const meteors: Meteor[] = [];

    // Parallax state (target vs smoothed)
    const mouseTarget = { x: 0, y: 0 };
    const mouseSmooth = { x: 0, y: 0 };

    /* ------------------------- offscreen layers ------------------------- */

    const nebulaCanvas = document.createElement('canvas');

    const paintNebula = () => {
      const w = Math.max(1, Math.ceil(width / 2));
      const h = Math.max(1, Math.ceil(height / 2));
      nebulaCanvas.width = w;
      nebulaCanvas.height = h;
      const nctx = nebulaCanvas.getContext('2d');
      if (!nctx) return;
      nctx.clearRect(0, 0, w, h);
      nctx.globalCompositeOperation = 'lighter';

      const blob = (
        xRatio: number,
        yRatio: number,
        radius: number,
        color: string,
        alpha: number
      ) => {
        const x = w * xRatio;
        const y = h * yRatio;
        const grad = nctx.createRadialGradient(x, y, 0, x, y, radius);
        grad.addColorStop(0, `rgba(${color},${alpha})`);
        grad.addColorStop(1, `rgba(${color},0)`);
        nctx.fillStyle = grad;
        nctx.beginPath();
        nctx.arc(x, y, radius, 0, TAU);
        nctx.fill();
      };

      blob(0.22, 0.3, w * 0.42, '99,102,241', 0.16);
      blob(0.78, 0.22, w * 0.36, '56,189,248', 0.13);
      blob(0.62, 0.72, w * 0.4, '167,139,250', 0.12);
      blob(0.12, 0.82, w * 0.3, '244,114,182', 0.07);
      blob(0.45, 0.5, w * 0.5, '30,58,138', 0.1);
    };

    // Soft glow sprite for the brightest stars (cheaper than shadowBlur)
    const glowSprite = document.createElement('canvas');
    glowSprite.width = 32;
    glowSprite.height = 32;
    {
      const gctx = glowSprite.getContext('2d');
      if (gctx) {
        const grad = gctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        grad.addColorStop(0, 'rgba(255,255,255,0.9)');
        grad.addColorStop(0.35, 'rgba(210,230,255,0.35)');
        grad.addColorStop(1, 'rgba(210,230,255,0)');
        gctx.fillStyle = grad;
        gctx.fillRect(0, 0, 32, 32);
      }
    }

    /* ------------------------------ stars ------------------------------- */

    const buildStars = () => {
      const count = Math.min(280, Math.max(120, Math.floor((width * height) / 3800)));
      stars = Array.from({ length: count }, (_, i) => {
        const layer = (i % 3) as 0 | 1 | 2;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r:
            layer === 2
              ? Math.random() * 1.3 + 0.9
              : layer === 1
                ? Math.random() * 0.9 + 0.5
                : Math.random() * 0.6 + 0.25,
          baseAlpha: Math.random() * 0.5 + 0.3,
          twinklePhase: Math.random() * TAU,
          twinkleSpeed: (Math.random() * 1.2 + 0.35) * (Math.random() > 0.5 ? 1 : -1),
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
          layer,
        };
      });
    };

    /* ----------------------------- meteors ------------------------------ */

    const spawnMeteor = () => {
      const dir = Math.random() > 0.5 ? 1 : -1;
      const speed = Math.random() * 0.28 + 0.22;
      meteors.push({
        x: Math.random() * width * 0.8 + width * 0.1,
        y: Math.random() * height * 0.3 + 10,
        vx: dir * speed,
        vy: speed * (0.5 + Math.random() * 0.3),
        len: Math.random() * 60 + 70,
        life: 0,
        decay: Math.random() * 0.00035 + 0.00045,
      });
    };

    const drawMeteors = (dt: number) => {
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.life += m.decay * dt;
        if (m.life >= 1 || m.x < -160 || m.x > width + 160 || m.y > height + 160) {
          meteors.splice(i, 1);
          continue;
        }
        m.x += m.vx * dt;
        m.y += m.vy * dt;

        const fade = Math.sin(m.life * Math.PI);
        const nx = m.vx / Math.hypot(m.vx, m.vy);
        const ny = m.vy / Math.hypot(m.vx, m.vy);

        const grad = ctx.createLinearGradient(m.x, m.y, m.x - nx * m.len, m.y - ny * m.len);
        grad.addColorStop(0, `rgba(235,245,255,${0.95 * fade})`);
        grad.addColorStop(1, 'rgba(235,245,255,0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - nx * m.len, m.y - ny * m.len);
        ctx.stroke();

        // bright head
        ctx.globalAlpha = fade;
        ctx.drawImage(glowSprite, m.x - 7, m.y - 7, 14, 14);
        ctx.globalAlpha = 1;
      }
    };

    /* ------------------------------ frame ------------------------------- */

    const drawFrame = (animate: boolean) => {
      ctx.clearRect(0, 0, width, height);

      // Nebula with slow drift + parallax
      const driftX = animate ? Math.sin(performance.now() * 0.00006) * 14 : 0;
      const driftY = animate ? Math.cos(performance.now() * 0.00005) * 10 : 0;
      ctx.globalCompositeOperation = 'lighter';
      ctx.drawImage(
        nebulaCanvas,
        -width * 0.03 + driftX + mouseSmooth.x * -10,
        -height * 0.03 + driftY + mouseSmooth.y * -8 - scrollProgress * 0.04,
        width * 1.06,
        height * 1.06
      );

      // Stars
      for (const s of stars) {
        const twinkle = animate
          ? 0.68 + 0.32 * Math.sin(s.twinklePhase)
          : 0.85;
        const parallax =
          LAYER_PARALLAX[s.layer] * (mouseSmooth.x * 30) + (s.layer === 2 && animate ? Math.sin(s.twinklePhase * 0.5) * 0.4 : 0);
        const parallaxY =
          LAYER_PARALLAX[s.layer] * (mouseSmooth.y * 22) -
          scrollProgress * LAYER_PARALLAX[s.layer] * 0.55;

        ctx.globalAlpha = s.baseAlpha * twinkle;
        if (s.r > 1.15) {
          const g = 10 + s.r * 6;
          ctx.drawImage(glowSprite, s.x + parallax - g / 2, s.y + parallaxY - g / 2, g, g);
        }
        ctx.fillStyle = `rgb(${s.color})`;
        ctx.beginPath();
        ctx.arc(s.x + parallax, s.y + parallaxY, s.r, 0, TAU);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      if (animate) drawMeteors(16);
      ctx.globalCompositeOperation = 'source-over';
    };

    const loop = (now: number) => {
      if (!running) return;
      const dt = Math.min(48, now - lastTime || 16);
      lastTime = now;

      // Smoothed parallax
      mouseSmooth.x += (mouseTarget.x - mouseSmooth.x) * 0.045;
      mouseSmooth.y += (mouseTarget.y - mouseSmooth.y) * 0.045;

      for (const s of stars) s.twinklePhase += s.twinkleSpeed * dt * 0.0014;

      nextMeteorAt -= dt;
      if (nextMeteorAt <= 0 && meteors.length < 2) {
        spawnMeteor();
        nextMeteorAt = 3200 + Math.random() * 5200;
      }

      drawFrame(true);
      raf = requestAnimationFrame(loop);
    };

    /* --------------------------- orchestration -------------------------- */

    const start = () => {
      if (running || reducedMotion || !inView || document.hidden) return;
      running = true;
      lastTime = performance.now();
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const sync = () => {
      if (reducedMotion) {
        stop();
        drawFrame(false);
        return;
      }
      if (inView && !document.hidden) start();
      else stop();
    };

    /* ------------------------------ sizing ------------------------------ */

    let resizeTimer: ReturnType<typeof setTimeout>;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
      paintNebula();
      if (!running) drawFrame(false);
    };

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.bottom < 0) return;
      mouseTarget.x = Math.max(-1, Math.min(1, (e.clientX - rect.left) / rect.width - 0.5));
      mouseTarget.y = Math.max(-1, Math.min(1, (e.clientY - rect.top) / rect.height - 0.5));
    };

    const onScroll = () => {
      scrollProgress = Math.max(0, window.scrollY);
    };

    const onVisibility = () => sync();
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.02 }
    );

    /* -------------------------------- init ------------------------------ */

    resize();
    observer.observe(canvas);
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    sync();

    return () => {
      stop();
      observer.disconnect();
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
