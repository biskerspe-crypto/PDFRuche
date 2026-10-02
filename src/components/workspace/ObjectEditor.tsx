'use client';

import React from 'react';
import { Trash2, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type ManipulableObject } from '@/hooks/useObjectManipulation';

export interface ObjectEditorProps {
  object: ManipulableObject | null;
  onUpdate: (id: string, patch: Partial<ManipulableObject>) => void;
  onRemove: (id: string) => void;
  onDuplicate: (id: string) => void;
  className?: string;
}

const SHAPE_COLORS = ['#1B2A5C', '#00A1E4', '#E31937', '#10B981', '#F59E0B', '#8B5CF6', '#000000', '#FFFFFF'];

/**
 * Dynamic property panel for the selected object.
 * Shows text/image/shape-specific controls.
 */
export const ObjectEditor: React.FC<ObjectEditorProps> = ({
  object,
  onUpdate,
  onRemove,
  onDuplicate,
  className,
}) => {
  if (!object) {
    return (
      <div className={cn('rounded-xl border border-dashed border-[hsl(var(--color-border))] p-4', className)}>
        <p className="text-center text-xs text-[hsl(var(--color-muted-foreground))]">
          Select an object to edit its properties
        </p>
      </div>
    );
  }

  const textData = object.data as { text?: string; fontSize?: number; bold?: boolean; italic?: boolean; align?: string } | undefined;
  const shapeData = object.data as { shape?: 'rect' | 'ellipse' | 'line'; fill?: string; stroke?: string; strokeWidth?: number } | undefined;
  const imageData = object.data as { src?: string; alt?: string } | undefined;

  const update = (patch: Partial<ManipulableObject>) => onUpdate(object.id, patch);
  const updateData = (patch: Record<string, unknown>) => onUpdate(object.id, { data: { ...object.data, ...patch } });

  return (
    <div className={cn('rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] p-4', className)}>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-bold text-[hsl(var(--color-foreground))] capitalize">
          {object.type} properties
        </h3>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onDuplicate(object.id)}
            className="p-2 rounded-md text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))] hover:text-[hsl(var(--color-foreground))] transition-colors"
            aria-label="Duplicate object"
            title="Duplicate"
          >
            <Copy className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            onClick={() => onRemove(object.id)}
            className="p-2 rounded-md text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))] hover:text-[hsl(var(--color-destructive))] transition-colors"
            aria-label="Delete object"
            title="Delete"
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Common properties */}
      <div className="flex flex-col gap-3">
        {/* Position & size */}
        <div className="grid grid-cols-2 gap-2">
          <label className="flex flex-col gap-1 text-xs text-[hsl(var(--color-muted-foreground))]">
            X
            <input
              type="number"
              value={Math.round(object.x)}
              onChange={(e) => update({ x: Number(e.target.value) })}
              className="rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] px-2 py-1 text-sm text-[hsl(var(--color-foreground))]"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-[hsl(var(--color-muted-foreground))]">
            Y
            <input
              type="number"
              value={Math.round(object.y)}
              onChange={(e) => update({ y: Number(e.target.value) })}
              className="rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] px-2 py-1 text-sm text-[hsl(var(--color-foreground))]"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-[hsl(var(--color-muted-foreground))]">
            Width
            <input
              type="number"
              value={Math.round(object.width)}
              onChange={(e) => update({ width: Number(e.target.value) })}
              className="rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] px-2 py-1 text-sm text-[hsl(var(--color-foreground))]"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-[hsl(var(--color-muted-foreground))]">
            Height
            <input
              type="number"
              value={Math.round(object.height)}
              onChange={(e) => update({ height: Number(e.target.value) })}
              className="rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] px-2 py-1 text-sm text-[hsl(var(--color-foreground))]"
            />
          </label>
        </div>

        {/* Rotation */}
        <label className="flex flex-col gap-1 text-xs text-[hsl(var(--color-muted-foreground))]">
          Rotation
          <input
            type="range"
            min={0}
            max={360}
            value={object.rotation % 360}
            onChange={(e) => update({ rotation: Number(e.target.value) })}
            className="w-full accent-[hsl(var(--color-secondary))]"
          />
          <span className="text-right text-[10px]">{Math.round(object.rotation % 360)}°</span>
        </label>

        {/* Opacity */}
        <label className="flex flex-col gap-1 text-xs text-[hsl(var(--color-muted-foreground))]">
          Opacity
          <input
            type="range"
            min={0.1}
            max={1}
            step={0.05}
            value={object.opacity}
            onChange={(e) => update({ opacity: Number(e.target.value) })}
            className="w-full accent-[hsl(var(--color-secondary))]"
          />
          <span className="text-right text-[10px]">{Math.round(object.opacity * 100)}%</span>
        </label>

        {/* Text properties */}
        {object.type === 'text' && (
          <>
            <label className="flex flex-col gap-1 text-xs text-[hsl(var(--color-muted-foreground))]">
              Text
              <textarea
                value={textData?.text ?? ''}
                onChange={(e) => updateData({ text: e.target.value })}
                rows={2}
                className="rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] px-2 py-1 text-sm text-[hsl(var(--color-foreground))]"
              />
            </label>
            <div className="grid grid-cols-2 gap-2">
              <label className="flex flex-col gap-1 text-xs text-[hsl(var(--color-muted-foreground))]">
                Font size
                <input
                  type="number"
                  value={textData?.fontSize ?? 16}
                  onChange={(e) => updateData({ fontSize: Number(e.target.value) })}
                  className="rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] px-2 py-1 text-sm"
                />
              </label>
              <fieldset className="flex items-end gap-2">
                <legend className="sr-only">Text style</legend>
                <label className="flex items-center gap-1 text-xs text-[hsl(var(--color-muted-foreground))]">
                  <input
                    type="checkbox"
                    checked={!!textData?.bold}
                    onChange={(e) => updateData({ bold: e.target.checked })}
                    className="accent-[hsl(var(--color-secondary))]"
                  />
                  B
                </label>
                <label className="flex items-center gap-1 text-xs text-[hsl(var(--color-muted-foreground))] italic">
                  <input
                    type="checkbox"
                    checked={!!textData?.italic}
                    onChange={(e) => updateData({ italic: e.target.checked })}
                    className="accent-[hsl(var(--color-secondary))]"
                  />
                  I
                </label>
                <select
                  value={textData?.align ?? 'left'}
                  onChange={(e) => updateData({ align: e.target.value })}
                  className="flex-1 rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] px-2 py-1 text-xs"
                  aria-label="Text alignment"
                >
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                </select>
              </fieldset>
            </div>
          </>
        )}

        {/* Image properties */}
        {object.type === 'image' && (
          <label className="flex flex-col gap-1 text-xs text-[hsl(var(--color-muted-foreground))]">
            Alt text
            <input
              type="text"
              value={imageData?.alt ?? ''}
              onChange={(e) => updateData({ alt: e.target.value })}
              className="rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] px-2 py-1 text-sm text-[hsl(var(--color-foreground))]"
              placeholder="Description of the image"
            />
          </label>
        )}

        {/* Shape properties */}
        {object.type === 'shape' && (
          <>
            <label className="flex flex-col gap-1 text-xs text-[hsl(var(--color-muted-foreground))]">
              Shape
              <select
                value={shapeData?.shape ?? 'rect'}
                onChange={(e) => updateData({ shape: e.target.value })}
                className="rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] px-2 py-1 text-sm"
              >
                <option value="rect">Rectangle</option>
                <option value="ellipse">Ellipse</option>
                <option value="line">Line</option>
              </select>
            </label>
            <div className="flex flex-col gap-1 text-xs text-[hsl(var(--color-muted-foreground))]">
              <span>Fill color</span>
              <div className="flex flex-wrap gap-1.5">
                {SHAPE_COLORS.map((color) => (
                  <button
                    key={color}
                    onClick={() => updateData({ fill: color })}
                    className={cn(
                      'h-6 w-6 rounded-full border-2 transition-transform hover:scale-110',
                      shapeData?.fill === color
                        ? 'border-[hsl(var(--color-secondary))] ring-2 ring-[hsl(var(--color-secondary)/0.4)]'
                        : 'border-[hsl(var(--color-border))]'
                    )}
                    style={{ backgroundColor: color }}
                    aria-label={`Fill color ${color}`}
                  />
                ))}
                <input
                  type="color"
                  value={shapeData?.fill ?? '#1B2A5C'}
                  onChange={(e) => updateData({ fill: e.target.value })}
                  className="h-6 w-8 cursor-pointer rounded border border-[hsl(var(--color-border))]"
                  aria-label="Custom fill color"
                />
              </div>
            </div>
            <label className="flex flex-col gap-1 text-xs text-[hsl(var(--color-muted-foreground))]">
              Border width
              <input
                type="number"
                min={0}
                max={20}
                value={shapeData?.strokeWidth ?? 2}
                onChange={(e) => updateData({ strokeWidth: Number(e.target.value) })}
                className="rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] px-2 py-1 text-sm"
              />
            </label>
          </>
        )}
      </div>
    </div>
  );
};

export default ObjectEditor;