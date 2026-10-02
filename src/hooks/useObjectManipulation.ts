'use client';

import { useCallback, useRef, useState } from 'react';
import { usePDFHistory, type HistoryAction } from '@/hooks/usePDFHistory';

export type ManipulableObjectType = 'text' | 'image' | 'shape' | 'annotation';

export interface ManipulableObject {
  id: string;
  type: ManipulableObjectType;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  opacity: number;
  data?: Record<string, unknown>;
}

export interface UseObjectManipulationOptions {
  limit?: number;
  onStateChange?: (objects: ManipulableObject[]) => void;
  onHistoryChange?: (entries: ReturnType<typeof usePDFHistory<ManipulableObject[]>>) => void;
}

export interface ManipulationResult {
  objects: ManipulableObject[];
  selectedId: string | null;
  select: (id: string | null) => void;
  addObject: (object: Omit<ManipulableObject, 'id'>) => void;
  updateObject: (id: string, patch: Partial<ManipulableObject>, pushHistory?: boolean) => void;
  removeObject: (id: string) => void;
  moveObject: (id: string, dx: number, dy: number) => void;
  resizeObject: (id: string, newWidth: number, newHeight: number) => void;
  rotateObject: (id: string, angle: number) => void;
  duplicateObject: (id: string) => void;
  undo: () => ManipulableObject[] | null;
  redo: () => ManipulableObject[] | null;
  canUndo: boolean;
  canRedo: boolean;
  history: ReturnType<typeof usePDFHistory<ManipulableObject[]>>;
}

/**
 * Hook managing the manipulation (move/resize/rotate/duplicate/delete) of
 * objects overlaid on the PDF canvas, wired into the undo/redo history.
 */
export function useObjectManipulation({
  limit = 50,
  onStateChange,
}: UseObjectManipulationOptions = {}): ManipulationResult {
  const [objects, setObjects] = useState<ManipulableObject[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const history = usePDFHistory<ManipulableObject[]>(limit);
  const idRef = useRef(0);

  const nextId = useCallback(() => {
    idRef.current += 1;
    return `obj-${Date.now()}-${idRef.current}`;
  }, []);

  const commit = useCallback(
    (next: ManipulableObject[], label: string, action: HistoryAction) => {
      setObjects(next);
      onStateChange?.(next);
      history.push(label, action, next);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onStateChange]
  );

  const select = useCallback((id: string | null) => setSelectedId(id), []);

  const addObject = useCallback(
    (object: Omit<ManipulableObject, 'id'>) => {
      const full: ManipulableObject = { ...object, id: nextId() };
      commit([...objects, full], 'Objet ajouté', 'add');
      setSelectedId(full.id);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [objects, commit]
  );

  const updateObject = useCallback(
    (id: string, patch: Partial<ManipulableObject>, pushHistory = true) => {
      const next = objects.map((o) => (o.id === id ? { ...o, ...patch } : o));
      if (pushHistory) {
        commit(next, 'Objet modifié', 'edit');
      } else {
        setObjects(next);
        onStateChange?.(next);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [objects, commit, onStateChange]
  );

  const removeObject = useCallback(
    (id: string) => {
      commit(objects.filter((o) => o.id !== id), 'Objet supprimé', 'remove');
      if (selectedId === id) setSelectedId(null);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [objects, commit, selectedId]
  );

  const moveObject = useCallback(
    (id: string, dx: number, dy: number) => {
      const target = objects.find((o) => o.id === id);
      if (!target) return;
      const next = objects.map((o) =>
        o.id === id ? { ...o, x: o.x + dx, y: o.y + dy } : o
      );
      setObjects(next);
      onStateChange?.(next);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [objects, onStateChange]
  );

  const resizeObject = useCallback(
    (id: string, newWidth: number, newHeight: number) => {
      const target = objects.find((o) => o.id === id);
      if (!target) return;
      const next = objects.map((o) =>
        o.id === id
          ? { ...o, width: Math.max(1, newWidth), height: Math.max(1, newHeight) }
          : o
      );
      setObjects(next);
      onStateChange?.(next);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [objects, onStateChange]
  );

  const rotateObject = useCallback(
    (id: string, angle: number) => {
      commit(
        objects.map((o) => (o.id === id ? { ...o, rotation: angle } : o)),
        'Rotation appliquée',
        'rotate'
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [objects, commit]
  );

  const duplicateObject = useCallback(
    (id: string) => {
      const target = objects.find((o) => o.id === id);
      if (!target) return;
      const copy: ManipulableObject = {
        ...target,
        id: nextId(),
        x: target.x + 16,
        y: target.y + 16,
      };
      commit([...objects, copy], 'Objet dupliqué', 'add');
      setSelectedId(copy.id);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [objects, commit]
  );

  const undo = useCallback(() => {
    const entry = history.undo();
    if (entry) {
      setObjects(entry.snapshot);
      onStateChange?.(entry.snapshot);
    }
    return entry?.snapshot ?? null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, onStateChange]);

  const redo = useCallback(() => {
    const entry = history.redo();
    if (entry) {
      setObjects(entry.snapshot);
      onStateChange?.(entry.snapshot);
    }
    return entry?.snapshot ?? null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, onStateChange]);

  return {
    objects,
    selectedId,
    select,
    addObject,
    updateObject,
    removeObject,
    moveObject,
    resizeObject,
    rotateObject,
    duplicateObject,
    undo,
    redo,
    canUndo: history.canUndo,
    canRedo: history.canRedo,
    history,
  };
}

export default useObjectManipulation;