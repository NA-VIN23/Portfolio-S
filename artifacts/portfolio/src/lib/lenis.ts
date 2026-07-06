import type Lenis from '@studio-freight/lenis';

// Module-level singleton so any component can stop/start the scroll engine
let _instance: Lenis | null = null;

export function registerLenis(l: Lenis) {
  _instance = l;
}

export function getLenis() {
  return _instance;
}
