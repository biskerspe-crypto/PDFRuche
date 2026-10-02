import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { usePDFHistory } from '@/hooks/usePDFHistory';

describe('usePDFHistory', () => {
  it('pushes entries with labels and limits history size', () => {
    const { result } = renderHook(() => usePDFHistory<number>(3));
    act(() => result.current.push('Rotation 90°', 'rotate', 1));
    act(() => result.current.push('Texte ajouté', 'text', 2));
    act(() => result.current.push('Page supprimée', 'page', 3));
    act(() => result.current.push('Watermark', 'other', 4));

    expect(result.current.entries.length).toBe(3);
    expect(result.current.entries[0].label).toBe('Texte ajouté');
    expect(result.current.canUndo).toBe(true);
    expect(result.current.canRedo).toBe(false);
  });

  it('undo and redo move through history', async () => {
    const { result } = renderHook(() => usePDFHistory<string>());
    act(() => result.current.push('A', 'add', 'state-a'));
    act(() => result.current.push('B', 'add', 'state-b'));

    const entry = await act(() => result.current.undo());
    expect(entry?.label).toBe('A');
    expect(result.current.canRedo).toBe(true);
    expect(result.current.canUndo).toBe(false);

    const redone = await act(() => result.current.redo());
    expect(redone?.label).toBe('B');
    expect(result.current.canRedo).toBe(false);
  });

  it('undo returns null at the beginning', async () => {
    const { result } = renderHook(() => usePDFHistory());
    act(() => result.current.push('A', 'add', 'x'));
    const entry = await act(() => result.current.undo());
    expect(entry).toBeNull();
  });

  it('pushing after undo truncates future entries', () => {
    const { result } = renderHook(() => usePDFHistory<string>());
    act(() => result.current.push('A', 'add', 'a'));
    act(() => result.current.push('B', 'add', 'b'));
    act(() => result.current.push('C', 'add', 'c'));
    act(() => result.current.undo());
    act(() => result.current.push('D', 'edit', 'd'));

    expect(result.current.entries.map((e) => e.label)).toEqual(['A', 'B', 'D']);
    expect(result.current.canRedo).toBe(false);
  });

  it('jumpTo returns the target entry', async () => {
    const { result } = renderHook(() => usePDFHistory());
    act(() => result.current.push('A', 'add', 'a'));
    act(() => result.current.push('B', 'add', 'b'));
    const entry = await act(() => result.current.jumpTo(0));
    expect(entry?.label).toBe('A');
    expect(result.current.index).toBe(0);
  });

  it('clear wipes everything', () => {
    const { result } = renderHook(() => usePDFHistory());
    act(() => result.current.push('A', 'add', 'a'));
    act(() => result.current.clear());
    expect(result.current.entries.length).toBe(0);
    expect(result.current.index).toBe(-1);
  });
});