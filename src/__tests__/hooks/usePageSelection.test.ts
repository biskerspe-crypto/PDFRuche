import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { usePageSelection } from '@/hooks/usePageSelection';

describe('usePageSelection', () => {
  it('parses custom ranges like "1-3, 5, 8-12"', () => {
    const { result } = renderHook(() => usePageSelection({ pageCount: 12 }));
    expect(result.current.parseCustomRange('1-3, 5, 8-12')).toEqual([1, 2, 3, 5, 8, 9, 10, 11, 12]);
  });

  it('ignores invalid and out-of-range numbers', () => {
    const { result } = renderHook(() => usePageSelection({ pageCount: 5 }));
    expect(result.current.parseCustomRange('0, 3, 99, abc, 2-4')).toEqual([2, 3, 4]);
  });

  it('selects even and odd pages', () => {
    const { result } = renderHook(() => usePageSelection({ pageCount: 6 }));
    act(() => result.current.selectEven());
    expect(result.current.selected).toEqual([2, 4, 6]);
    act(() => result.current.selectOdd());
    expect(result.current.selected).toEqual([1, 3, 5]);
  });

  it('toggles individual pages with ctrl-style API', () => {
    const { result } = renderHook(() => usePageSelection({ pageCount: 5 }));
    act(() => result.current.togglePage(2));
    act(() => result.current.togglePage(4));
    expect(result.current.selected).toEqual([2, 4]);
    act(() => result.current.togglePage(2));
    expect(result.current.selected).toEqual([4]);
  });

  it('selectAll and deselectAll work', () => {
    const { result } = renderHook(() => usePageSelection({ pageCount: 4 }));
    act(() => result.current.selectAll());
    expect(result.current.selected).toEqual([1, 2, 3, 4]);
    act(() => result.current.deselectAll());
    expect(result.current.selected).toEqual([]);
  });

  it('notifies callbacks of selection changes', () => {
    let last: number[] = [];
    const { result } = renderHook(() =>
      usePageSelection({ pageCount: 4, onSelectionChange: (pages) => { last = pages; } })
    );
    act(() => result.current.selectAll());
    expect(last).toEqual([1, 2, 3, 4]);
  });
});