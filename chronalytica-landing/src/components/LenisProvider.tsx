"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      syncTouch: true,
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    let frame = requestAnimationFrame(raf);

    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
