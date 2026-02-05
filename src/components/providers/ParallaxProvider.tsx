'use client';

import { ParallaxProvider as LibParallaxProvider } from 'react-scroll-parallax';

/**
 * Envuelve la app para habilitar parallax en toda la página.
 * Usa react-scroll-parallax para múltiples capas a distintas velocidades.
 */
export function ParallaxProvider({ children }: { children: React.ReactNode }) {
  return <LibParallaxProvider>{children}</LibParallaxProvider>;
}
