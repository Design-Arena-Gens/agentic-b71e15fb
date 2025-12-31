"use client";

import { type ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

const ensureScrollTrigger = () => {
  if (!isRegistered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    isRegistered = true;
  }
};

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function RevealOnScroll({ children, className, delay = 0, id }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ensureScrollTrigger();
    const element = ref.current;

    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { y: 52, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
          },
        },
      );
    }, element);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className} id={id}>
      {children}
    </div>
  );
}
