'use client';

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { MousePointer2, Type, Square, ImagePlus } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  type ManipulableObject,
} from '@/hooks/useObjectManipulation';

export type CanvasTool = 'select' | 'text' | 'image' | 'shape';

export interface CanvasOverlayProps {
  pageWidth: number;
  pageHeight: number;
  objects: ManipulableObject[];
  selectedId: string | null;
  tool: CanvasTool;
  onToolChange: (tool: CanvasTool) => void;
  onSelect: (id: string | null) => void;
  onAddObject: (object: Omit<ManipulableObject, 'id'>) => void;
  onMoveObject: (id: string, dx: number, dy: number) => void;
  onResizeObject: (id: string, newWidth: number, newHeight: number) => void;
  onRotateObject: (id: string, angle: number) => void;
  className?: string;
}

const HANDLE_SIZE = 10;
const MIN_SIZE = 8;

interface ResizeBox {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface DragState extends ResizeBox {
  type: 'move' | 'resize' | 'drag-create';
  id?: string;
  startX: number;
  startY: number;
  originX: number;
  originY: number;
  originW: number;
  originH: number;
  originR: number;
  corner?: string;
}

/**
 * Interactive layer over the PDF page: draw-style tools (text/image/shape),
 * click-drag creation, selection, move/resize/rotate handles with live
 * preview. All coordinates are measured against the page element via
 * pageRef so pointer capture across children stays consistent.
 */
export const CanvasOverlay: React.FC<CanvasOverlayProps> = ({
  pageWidth,
  pageHeight,
  objects,
  selectedId,
  tool,
  onToolChange,
  onSelect,
  onAddObject,
  onMoveObject,
  onResizeObject,
  onRotateObject,
  className,
}) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState | null>(null);
  const [live, setLive] = useState<ResizeBox | null>(null);

  const getLocalPoint = useCallback((e: React.PointerEvent) => {
    const rect = pageRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  const tools: { id: CanvasTool; label: string; icon: typeof MousePointer2 }[] = [
    { id: 'select', label: 'Select', icon: MousePointer2 },
    { id: 'text', label: 'Text', icon: Type },
    { id: 'image', label: 'Image', icon: ImagePlus },
    { id: 'shape', label: 'Shape', icon: Square },
  ];

  const objectAt = useCallback(
    (x: number, y: number): ManipulableObject | null => {
      for (let i = objects.length - 1; i >= 0; i -= 1) {
        const o = objects[i];
        if (x >= o.x && x <= o.x + o.width && y >= o.y && y <= o.y + o.height) {
          return o;
        }
      }
      return null;
    },
    [objects]
  );

  const clampBox = useCallback(
    (box: ResizeBox): ResizeBox => ({
      x: Math.max(0, Math.min(box.x, pageWidth - box.w)),
      y: Math.max(0, Math.min(box.y, pageHeight - box.h)),
      w: Math.max(MIN_SIZE, Math.min(box.w, pageWidth)),
      h: Math.max(MIN_SIZE, Math.min(box.h, pageHeight)),
    }),
    [pageWidth, pageHeight]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      const drag = dragRef.current;
      if (!drag) return;

      const pt = getLocalPoint(e);
      const dx = pt.x - drag.startX;
      const dy = pt.y - drag.startY;

      if (drag.type === 'move' && drag.id) {
        onMoveObject(drag.id, dx, dy);
        drag.x = drag.originX + dx;
        drag.y = drag.originY + dy;
        return;
      }

      if (drag.type === 'resize' && drag.id && drag.corner) {
        let x = drag.originX;
        let y = drag.originY;
        let w = drag.originW + dx;
        let h = drag.originH + dy;

        if (drag.corner.includes('w')) {
          w = drag.originW - dx;
          x = drag.originX + dx;
        }
        if (drag.corner.includes('n')) {
          h = drag.originH - dy;
          y = drag.originY + dy;
        }

        const box = clampBox({ x, y, w, h });
        drag.x = box.x;
        drag.y = box.y;
        drag.w = box.w;
        drag.h = box.h;
        setLive(box);
        return;
      }

      if (drag.type === 'drag-create') {
        const box = clampBox({
          x: Math.min(drag.originX, pt.x),
          y: Math.min(drag.originY, pt.y),
          w: Math.abs(pt.x - drag.originX),
          h: Math.abs(pt.y - drag.originY),
        });
        drag.x = box.x;
        drag.y = box.y;
        drag.w = box.w;
        drag.h = box.h;
        setLive(box);
      }
    },
    [getLocalPoint, clampBox, onMoveObject]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      const drag = dragRef.current;
      if (!drag) return;

      if (drag.type === 'resize' && drag.id) {
        onResizeObject(drag.id, drag.w, drag.h);
        if (drag.x !== drag.originX || drag.y !== drag.originY) {
          onMoveObject(drag.id, drag.x - drag.originX, drag.y - drag.originY);
        }
      }

      if (drag.type === 'drag-create' && drag.w > 4 && drag.h > 4) {
        const base = {
          x: drag.x,
          y: drag.y,
          width: drag.w,
          height: drag.h,
          rotation: 0,
          opacity: 1,
        };
        if (tool === 'text') {
          onAddObject({
            ...base,
            type: 'text',
            data: {
              text: 'Text',
              fontSize: 16,
              bold: false,
              italic: false,
              align: 'left',
              color: '#1B2A5C',
            },
          });
        } else if (tool === 'image') {
          onAddObject({
            ...base,
            type: 'image',
            data: { src: '', alt: 'Image' },
          });
        } else if (tool === 'shape') {
          onAddObject({
            ...base,
            type: 'shape',
            data: { shape: 'rect', fill: '#00A1E4', stroke: '#1B2A5C', strokeWidth: 2 },
          });
        }
      }

      dragRef.current = null;
      setLive(null);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // pointer already released
      }
    },
    [tool, onAddObject, onResizeObject, onMoveObject]
  );

  const selected = useMemo(
    () => objects.find((o) => o.id === selectedId) ?? null,
    [objects, selectedId]
  );

  const corners = useMemo(
    () => [
      { id: 'nw', cx: 0, cy: 0 },
      { id: 'ne', cx: 1, cy: 0 },
      { id: 'sw', cx: 0, cy: 1 },
      { id: 'se', cx: 1, cy: 1 },
    ],
    []
  );

  return (
    <div className={cn('flex h-full flex-col gap-3', className)}>
      {/* Toolbar */}
      <div
        className="flex flex-wrap items-center gap-1 rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] p-1.5"
        role="toolbar"
        aria-label="Drawing tools"
      >
        {tools.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onToolChange(id)}
            className={cn(
              'flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors',
              tool === id
                ? 'bg-[hsl(var(--color-secondary)/0.15)] text-[hsl(var(--color-secondary))]'
                : 'text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))] hover:text-[hsl(var(--color-foreground))]'
            )}
            aria-pressed={tool === id}
          >
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            {label}
          </button>
        ))}
      </div>

      {/* Scrollable page area */}
      <div
        className="relative flex flex-1 items-start justify-center overflow-auto rounded-xl bg-[hsl(var(--color-muted)/0.4)] p-6"
        onPointerDown={(e) => {
          if (e.target === e.currentTarget) {
            if (tool !== 'select') {
              const pt = getLocalPoint(e);
              dragRef.current = {
                type: 'drag-create',
                startX: pt.x,
                startY: pt.y,
                originX: pt.x,
                originY: pt.y,
                originW: 0,
                originH: 0,
                originR: 0,
                x: pt.x,
                y: pt.y,
                w: 0,
                h: 0,
              };
              e.currentTarget.setPointerCapture(e.pointerId);
            } else {
              onSelect(null);
            }
          }
        }}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          ref={pageRef}
          className="relative bg-white shadow-xl"
          style={{ width: pageWidth, height: pageHeight }}
          onPointerDown={(e) => {
            if (tool !== 'select') {
              const pt = getLocalPoint(e);
              dragRef.current = {
                type: 'drag-create',
                startX: pt.x,
                startY: pt.y,
                originX: pt.x,
                originY: pt.y,
                originW: 0,
                originH: 0,
                originR: 0,
                x: pt.x,
                y: pt.y,
                w: 0,
                h: 0,
              };
              e.currentTarget.setPointerCapture(e.pointerId);
              return;
            }
            const pt = getLocalPoint(e);
            const obj = objectAt(pt.x, pt.y);
            if (obj) {
              onSelect(obj.id);
              dragRef.current = {
                type: 'move',
                id: obj.id,
                startX: pt.x,
                startY: pt.y,
                originX: obj.x,
                originY: obj.y,
                originW: obj.width,
                originH: obj.height,
                originR: obj.rotation,
                x: obj.x,
                y: obj.y,
                w: obj.width,
                h: obj.height,
              };
              e.currentTarget.setPointerCapture(e.pointerId);
            }
          }}
        >
          {/* Object layers */}
          {objects.map((obj) => {
            const isSelected = obj.id === selectedId;
            const style: React.CSSProperties = {
              position: 'absolute',
              left: obj.x,
              top: obj.y,
              width: obj.width,
              height: obj.height,
              transform: `rotate(${obj.rotation}deg)`,
              transformOrigin: 'center',
              opacity: obj.opacity,
            };

            return (
              <div
                key={obj.id}
                style={style}
                onPointerDown={(e) => {
                  if (tool === 'select') {
                    e.stopPropagation();
                    onSelect(obj.id);
                    const pt = getLocalPoint(e);
                    dragRef.current = {
                      type: 'move',
                      id: obj.id,
                      startX: pt.x,
                      startY: pt.y,
                      originX: obj.x,
                      originY: obj.y,
                      originW: obj.width,
                      originH: obj.height,
                      originR: obj.rotation,
                      x: obj.x,
                      y: obj.y,
                      w: obj.width,
                      h: obj.height,
                    };
                    e.currentTarget.setPointerCapture(e.pointerId);
                  }
                }}
                className={cn(
                  'touch-none',
                  isSelected && 'ring-2 ring-[hsl(var(--color-secondary))] rounded-sm'
                )}
                aria-label={`${obj.type} object`}
              >
                {obj.type === 'text' && (
                  <span
                    className="inline-block w-full select-none"
                    style={{
                      fontSize: (obj.data?.fontSize as number) ?? 16,
                      fontWeight: obj.data?.bold ? 700 : 400,
                      fontStyle: obj.data?.italic ? 'italic' : 'normal',
                      textAlign: ((obj.data?.align as string) ?? 'left') as React.CSSProperties['textAlign'],
                      color: (obj.data?.color as string) ?? '#1B2A5C',
                      lineHeight: 1.2,
                    }}
                  >
                    {(obj.data?.text as string) ?? 'Text'}
                  </span>
                )}
                {obj.type === 'image' &&
                  (obj.data?.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={obj.data.src as string}
                      alt={((obj.data?.alt as string) ?? '') || 'Image'}
                      className="h-full w-full select-none object-contain"
                      draggable={false}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-sm border border-dashed border-[hsl(var(--color-border))] bg-[hsl(var(--color-muted)/0.3)] text-[10px] text-[hsl(var(--color-muted-foreground))]">
                      image
                    </div>
                  ))}
                {obj.type === 'shape' && (
                  <div className="h-full w-full">
                    {((obj.data?.shape as string) ?? 'rect') === 'rect' && (
                      <div
                        className="h-full w-full"
                        style={{ backgroundColor: (obj.data?.fill as string) ?? '#00A1E4' }}
                      />
                    )}
                    {((obj.data?.shape as string) ?? 'rect') === 'ellipse' && (
                      <div
                        className="h-full w-full rounded-full"
                        style={{ backgroundColor: (obj.data?.fill as string) ?? '#00A1E4' }}
                      />
                    )}
                    {((obj.data?.shape as string) ?? 'rect') === 'line' && (
                      <svg
                        className="h-full w-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <line
                          x1="0"
                          y1="100"
                          x2="100"
                          y2="0"
                          stroke={(obj.data?.stroke as string) ?? '#1B2A5C'}
                          strokeWidth={((obj.data?.strokeWidth as number) ?? 2) * 10}
                        />
                      </svg>
                    )}
                  </div>
                )}

                {isSelected && (
                  <>
                    {/* Rotate handle */}
                    <div
                      className="absolute -top-4 left-1/2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-[hsl(var(--color-secondary))] cursor-grab touch-none"
                      aria-label="Rotate"
                      onPointerDown={(e) => {
                        e.stopPropagation();
                        e.currentTarget.setPointerCapture(e.pointerId);
                        const cx = obj.x + obj.width / 2;
                        const cy = obj.y + obj.height / 2;
                        const startRotation = obj.rotation;
                        const pt = getLocalPoint(e);
                        const startAngle = Math.atan2(pt.y - cy, pt.x - cx);
                        const end = (ev: PointerEvent) => {
                          const p = pageRef.current!.getBoundingClientRect();
                          const a = Math.atan2(
                            ev.clientY - p.top - cy,
                            ev.clientX - p.left - cx
                          );
                          let delta = ((a - startAngle) * 180) / Math.PI;
                          delta = Math.round(delta / 5) * 5;
                          onRotateObject(obj.id, (startRotation + delta + 360) % 360);
                        };
                        const up = () => {
                          window.removeEventListener('pointermove', end);
                          window.removeEventListener('pointerup', up);
                        };
                        window.addEventListener('pointermove', end);
                        window.addEventListener('pointerup', up);
                      }}
                    />
                    {/* Corner handles */}
                    {corners.map(({ id, cx, cy }) => (
                      <div
                        key={id}
                        style={{
                          left: cx * obj.width - HANDLE_SIZE / 2,
                          top: cy * obj.height - HANDLE_SIZE / 2,
                        }}
                        className="absolute h-[10px] w-[10px] cursor-nwse-resize rounded-full border border-white bg-[hsl(var(--color-secondary))] shadow touch-none"
                        aria-label={`Resize ${id}`}
                        onPointerDown={(e) => {
                          e.stopPropagation();
                          e.currentTarget.setPointerCapture(e.pointerId);
                          onSelect(obj.id);
                          const pt = getLocalPoint(e);
                          dragRef.current = {
                            type: 'resize',
                            id: obj.id,
                            startX: pt.x,
                            startY: pt.y,
                            originX: obj.x,
                            originY: obj.y,
                            originW: obj.width,
                            originH: obj.height,
                            originR: obj.rotation,
                            corner: id,
                            x: obj.x,
                            y: obj.y,
                            w: obj.width,
                            h: obj.height,
                          };
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
            );
          })}

          {/* Live drag preview */}
          {live && dragRef.current?.type === 'drag-create' && (
            <div
              className="pointer-events-none absolute border-2 border-dashed border-[hsl(var(--color-secondary))] bg-[hsl(var(--color-secondary)/0.1)]"
              style={{ left: live.x, top: live.y, width: live.w, height: live.h }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CanvasOverlay;