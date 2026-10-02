import '@testing-library/dom';
import '@testing-library/jest-dom/vitest';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock URL.createObjectURL and URL.revokeObjectURL for jsdom
if (typeof URL.createObjectURL === 'undefined') {
  URL.createObjectURL = vi.fn(() => 'blob:mock-url');
}
if (typeof URL.revokeObjectURL === 'undefined') {
  URL.revokeObjectURL = vi.fn();
}

// Mock window.matchMedia for responsive tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
});

// Mock ResizeObserver
class MockResizeObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: MockResizeObserver,
});

// PointerEvent polyfill — jsdom's PointerEvent is non-constructible and does
// not apply PointerEventInit properties, which breaks pointer-based drag/drop
// tests.
class PointerEventPolyfill extends Event {
  pointerId: number;
  pointerType: string;
  isPrimary: boolean;
  button: number;
  buttons: number;
  clientX: number;
  clientY: number;
  screenX: number;
  screenY: number;

  constructor(type: string, init: PointerEventInit = {}) {
    super(type, init);
    this.pointerId = init.pointerId ?? 0;
    this.pointerType = init.pointerType ?? 'mouse';
    this.isPrimary = init.isPrimary ?? true;
    this.button = init.button ?? 0;
    this.buttons = init.buttons ?? 0;
    this.clientX = init.clientX ?? 0;
    this.clientY = init.clientY ?? 0;
    this.screenX = init.screenX ?? 0;
    this.screenY = init.screenY ?? 0;
  }
}

Object.defineProperty(window, 'PointerEvent', {
  writable: true,
  configurable: true,
  value: PointerEventPolyfill,
});

// localStorage polyfill — on Node >= 24, Node ships an unavailable
// `localStorage` stub global that shadows jsdom's implementation in vitest
// (vitest does not overwrite existing globals), leaving `localStorage`
// undefined. Provide an in-memory fallback so preference/storage tests
// pass on any Node version. No-op where jsdom already provides one.
if (typeof (window as any).localStorage === 'undefined') {
  const store = new Map<string, string>();
  const stubStorage = {
    get length() {
      return store.size;
    },
    clear: () => {
      store.clear();
    },
    getItem: (key: string) => (store.has(key) ? store.get(key)! : null),
    key: (index: number) => [...store.keys()][index] ?? null,
    removeItem: (key: string) => {
      store.delete(key);
    },
    setItem: (key: string, value: string) => {
      store.set(String(key), String(value));
    },
  };
  Object.defineProperty(window, 'localStorage', {
    writable: true,
    configurable: true,
    value: stubStorage,
  });
  try {
    if (typeof (globalThis as any).localStorage === 'undefined') {
      Object.defineProperty(globalThis, 'localStorage', {
        writable: true,
        configurable: true,
        value: stubStorage,
      });
    }
  } catch {
    // Non-configurable Node stub: bare `localStorage` keeps resolving
    // via window in jsdom globals mode.
  }
}
