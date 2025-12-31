"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

type HeroHeadlineProps = {
  text: string;
  className?: string;
};

export function HeroHeadline({ text, className }: HeroHeadlineProps) {
  const containerRef = useRef<HTMLHeadingElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const words = useMemo(() => text.split(" "), [text]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordRefs.current,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 1.1,
          stagger: 0.06,
        },
      );
    }, container);

    return () => ctx.revert();
  }, [words]);

  return (
    <h1
      ref={containerRef}
      className={`${className ?? ""} font-semibold tracking-tight text-balance`}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden">
          <span
            ref={(node) => {
              wordRefs.current[index] = node;
            }}
            className="inline-block will-change-transform"
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </h1>
  );
}
