'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  twinklePhase: number;
  twinkleSpeed: number;
  color: string;
  layer: 0 | 1 | 2;
  hasCrossGlow?: boolean;
}

interface StardustParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  pulsePhase: number;
  color: string;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  len: number;
  life: number; // 0..1
  decay: number;
  color: string;
}

const TAU = Math.PI * 2;
const STAR_COLORS = [
  '240,253,244', // Pure botanical white
  '52,211,153',  // Luminous emerald leaf spore
  '251,191,36',  // Warm amber firefly gold
  '125,211,252', // Crisp dewdrop cyan
];

const DUST_COLORS = [
  'rgba(52, 211, 153, 0.45)', // Jade spore
  'rgba(251, 191, 36, 0.4)',  // Warm golden amber firefly
  'rgba(56, 189, 248, 0.35)', // Crystal dew
  'rgba(167, 243, 208, 0.35)', // Leaf chlorophyll mist
];

const LAYER_PARALLAX = [0.08, 0.22, 0.45];

export const AuroraBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseGlowRef = useRef<HTMLDivElement>(null);

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
    let lastTime = 0;
    let nextMeteorAt = 3500; // First meteor after 3.5s

    let stars: Star[] = [];
    let dustParticles: StardustParticle[] = [];
    const meteors: Meteor[] = [];

    // Mouse parallax
    const mouseTarget = { x: 0, y: 0 };
    const mouseSmooth = { x: 0, y: 0 };
    let scrollY = 0;

    // Sprite for star glow
    const starGlowSprite = document.createElement('canvas');
    starGlowSprite.width = 36;
    starGlowSprite.height = 36;
    {
      const gctx = starGlowSprite.getContext('2d');
      if (gctx) {
        const grad = gctx.createRadialGradient(18, 18, 0, 18, 18, 18);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        grad.addColorStop(0.25, 'rgba(186, 230, 253, 0.45)');
        grad.addColorStop(0.65, 'rgba(165, 180, 252, 0.15)');
        grad.addColorStop(1, 'rgba(165, 180, 252, 0)');
        gctx.fillStyle = grad;
        gctx.fillRect(0, 0, 36, 36);
      }
    }

    /* -------------------------- Build Elements -------------------------- */

    const buildStars = () => {
      const count = Math.min(220, Math.max(90, Math.floor((width * height) / 4500)));
      stars = Array.from({ length: count }, (_, i) => {
        const layer = (i % 3) as 0 | 1 | 2;
        const isBright = layer === 2 && Math.random() > 0.65;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r:
            layer === 2
              ? Math.random() * 1.1 + 0.85
              : layer === 1
              ? Math.random() * 0.75 + 0.4
              : Math.random() * 0.45 + 0.2,
          baseAlpha: layer === 2 ? Math.random() * 0.4 + 0.5 : Math.random() * 0.35 + 0.25,
          twinklePhase: Math.random() * TAU,
          twinkleSpeed: (Math.random() * 1.1 + 0.4) * (Math.random() > 0.5 ? 1 : -1),
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
          layer,
          hasCrossGlow: isBright,
        };
      });
    };

    const buildDust = () => {
      const dustCount = Math.min(36, Math.max(16, Math.floor(width / 40)));
      dustParticles = Array.from({ length: dustCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.14 - 0.06, // Gentle upward drift
        r: Math.random() * 1.5 + 0.6,
        alpha: Math.random() * 0.35 + 0.2,
        pulsePhase: Math.random() * TAU,
        color: DUST_COLORS[Math.floor(Math.random() * DUST_COLORS.length)],
      }));
    };

    /* ----------------------------- Meteors ------------------------------ */

    const spawnMeteor = () => {
      const dir = -1; // Graceful diagonal descent from top-right to bottom-left
      const speed = Math.random() * 0.38 + 0.28;
      const meteorColors = [
        'rgba(224, 242, 254,', // Cyan white
        'rgba(241, 245, 249,', // Pure silver
        'rgba(199, 210, 254,', // Soft indigo
      ];
      const color = meteorColors[Math.floor(Math.random() * meteorColors.length)];

      meteors.push({
        x: Math.random() * width * 0.7 + width * 0.25,
        y: Math.random() * (height * 0.35) + 15,
        vx: dir * speed * 1.4,
        vy: speed * 0.9,
        len: Math.random() * 70 + 80,
        life: 0,
        decay: Math.random() * 0.00045 + 0.0005,
        color,
      });
    };

    const drawMeteors = (dt: number) => {
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.life += m.decay * dt;
        if (m.life >= 1 || m.x < -180 || m.x > width + 180 || m.y > height + 180) {
          meteors.splice(i, 1);
          continue;
        }

        m.x += m.vx * dt;
        m.y += m.vy * dt;

        const fade = Math.sin(m.life * Math.PI);
        const dist = Math.hypot(m.vx, m.vy);
        const nx = m.vx / dist;
        const ny = m.vy / dist;

        const grad = ctx.createLinearGradient(m.x, m.y, m.x - nx * m.len, m.y - ny * m.len);
        grad.addColorStop(0, `${m.color}${0.95 * fade})`);
        grad.addColorStop(0.3, `${m.color}${0.45 * fade})`);
        grad.addColorStop(1, `${m.color}0)`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - nx * m.len, m.y - ny * m.len);
        ctx.stroke();

        // Glowing star head
        ctx.globalAlpha = fade * 0.9;
        ctx.drawImage(starGlowSprite, m.x - 9, m.y - 9, 18, 18);
        ctx.globalAlpha = 1;
      }
    };

    /* ----------------------------- Render ------------------------------- */

    const drawFrame = (animate: boolean, dt = 16) => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Twinkling Stars
      for (const s of stars) {
        const twinkle = animate ? 0.65 + 0.35 * Math.sin(s.twinklePhase) : 0.85;
        const parallaxX = LAYER_PARALLAX[s.layer] * (mouseSmooth.x * 25);
        const parallaxY = LAYER_PARALLAX[s.layer] * (mouseSmooth.y * 18) - (scrollY * LAYER_PARALLAX[s.layer] * 0.08);

        const posX = (s.x + parallaxX + width) % width;
        const posY = (s.y + parallaxY + height) % height;

        const alpha = s.baseAlpha * twinkle;
        ctx.globalAlpha = alpha;

        // Subtle glow halo for brightest stars
        if (s.r > 0.9) {
          const glowSize = 12 + s.r * 6;
          ctx.drawImage(starGlowSprite, posX - glowSize / 2, posY - glowSize / 2, glowSize, glowSize);
        }

        // Micro cross sparkle for key stars
        if (s.hasCrossGlow && twinkle > 0.8) {
          ctx.strokeStyle = `rgba(${s.color}, ${alpha * 0.45})`;
          ctx.lineWidth = 0.75;
          const crossLen = 4 + s.r * 2;
          ctx.beginPath();
          ctx.moveTo(posX - crossLen, posY);
          ctx.lineTo(posX + crossLen, posY);
          ctx.moveTo(posX, posY - crossLen);
          ctx.lineTo(posX, posY + crossLen);
          ctx.stroke();
        }

        ctx.fillStyle = `rgb(${s.color})`;
        ctx.beginPath();
        ctx.arc(posX, posY, s.r, 0, TAU);
        ctx.fill();
      }

      // 2. Draw Floating Cosmic Dust Particles
      for (const p of dustParticles) {
        if (animate) {
          p.x += p.vx;
          p.y += p.vy;
          p.pulsePhase += 0.015;

          // Wrap edges
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        const pulse = 0.7 + 0.3 * Math.sin(p.pulsePhase);
        ctx.globalAlpha = p.alpha * pulse;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, TAU);
        ctx.fill();
      }

      // 3. Draw Shooting Stars / Meteors
      ctx.globalAlpha = 1;
      if (animate) drawMeteors(dt);
    };

    /* ------------------------------ Loop -------------------------------- */

    const loop = (now: number) => {
      if (!running) return;
      const dt = Math.min(48, now - lastTime || 16);
      lastTime = now;

      // Smooth mouse interpolation
      mouseSmooth.x += (mouseTarget.x - mouseSmooth.x) * 0.04;
      mouseSmooth.y += (mouseTarget.y - mouseSmooth.y) * 0.04;

      // Update star twinkle phases
      for (const s of stars) {
        s.twinklePhase += s.twinkleSpeed * dt * 0.0015;
      }

      // Sporadic shooting stars
      nextMeteorAt -= dt;
      if (nextMeteorAt <= 0 && meteors.length < 2) {
        spawnMeteor();
        nextMeteorAt = 4200 + Math.random() * 5800; // Next meteor in 4.2 - 10 seconds
      }

      drawFrame(true, dt);
      raf = requestAnimationFrame(loop);
    };

    /* ----------------------------- Sizing ------------------------------- */

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
      buildDust();
      if (!running) drawFrame(false);
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseTarget.x = Math.max(-1, Math.min(1, (e.clientX / width) - 0.5));
      mouseTarget.y = Math.max(-1, Math.min(1, (e.clientY / height) - 0.5));

      // Cursor subtle ambient glow
      if (mouseGlowRef.current) {
        mouseGlowRef.current.style.transform = `translate3d(${e.clientX - 260}px, ${e.clientY - 260}px, 0)`;
      }
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const start = () => {
      if (running || reducedMotion || document.hidden) return;
      running = true;
      lastTime = performance.now();
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else start();
    };

    /* ------------------------------ Init -------------------------------- */

    resize();
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    start();

    return () => {
      stop();
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* 1. Deep Space Midnight Base */}
      <div
        className="absolute inset-0 bg-[#04060d] transition-colors duration-700"
        style={{
          background: 'radial-gradient(ellipse 120% 80% at 50% -10%, #061e16 0%, #051410 55%, #020806 100%)',
        }}
      />

      {/* 2. Stylized Tree Canopy Halo & Bio-Aura (Top Center) */}
      <div
        className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[700px] h-[550px] rounded-full bg-gradient-to-b from-emerald-500/20 via-teal-600/15 to-transparent blur-[120px] animate-lv4-moon-aura"
        aria-hidden="true"
      />

      {/* 3. Forest Canopy Aurora Nebula Clouds */}
      <div
        className="absolute top-[8%] left-[10%] w-[550px] h-[550px] rounded-full bg-emerald-600/20 blur-[140px] animate-lv4-aurora-1"
        aria-hidden="true"
      />
      <div
        className="absolute top-[28%] right-[8%] w-[500px] h-[500px] rounded-full bg-teal-500/18 blur-[130px] animate-lv4-aurora-2"
        aria-hidden="true"
      />
      <div
        className="absolute top-[55%] left-[6%] w-[600px] h-[600px] rounded-full bg-amber-500/15 blur-[150px] animate-lv4-aurora-3"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[8%] right-[14%] w-[520px] h-[520px] rounded-full bg-emerald-500/16 blur-[140px] animate-lv4-aurora-1"
        aria-hidden="true"
      />

      {/* 4. Foliage Light Rays (Sunlight filtering through canopy) */}
      <div
        className="absolute inset-x-0 -top-40 h-[600px] w-[180%] -left-[40%] bg-gradient-to-r from-transparent via-emerald-400/[0.04] to-transparent pointer-events-none animate-lv4-cosmic-beam-1"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-[40%] h-[500px] w-[180%] -left-[40%] bg-gradient-to-r from-transparent via-amber-400/[0.035] to-transparent pointer-events-none animate-lv4-cosmic-beam-2"
        aria-hidden="true"
      />

      {/* 5. Cybernetic Subtle Foliage Mesh */}
      <div className="absolute inset-0 lv4-grid-texture opacity-30" />

      {/* 6. Dynamic Bioluminescent Spores, Stardust Particles & Fireflies (Canvas 2D) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* 7. Subtle Cursor Glow */}
      <div
        ref={mouseGlowRef}
        className="absolute top-0 left-0 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-emerald-400/10 via-amber-400/8 to-transparent blur-[100px] opacity-75 transition-opacity duration-300 hidden lg:block"
        aria-hidden="true"
      />

      {/* 8. Fine Film Grain Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default AuroraBackground;
