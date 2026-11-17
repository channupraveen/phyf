"use client";

import { useInView } from "./useInView";

// Heading whose letters rise in one after another when scrolled into view.
export function RevealText({ text, className = "" }: { text: string; className?: string }) {
  const { ref, inView } = useInView<HTMLHeadingElement>(0.4);
  return (
    <h2 ref={ref} aria-label={text} className={`${className} ${inView ? "is-visible" : ""}`}>
      {text.split(" ").map((word, w, words) => {
        const start = words.slice(0, w).join(" ").length + (w ? 1 : 0);
        return (
          <span key={w} className="inline-block whitespace-nowrap">
            {word.split("").map((ch, i) => (
              <span key={i} aria-hidden className="reveal-char" style={{ transitionDelay: `${(start + i) * 35}ms` }}>
                {ch}
              </span>
            ))}
            {w < words.length - 1 && <span aria-hidden>{"\u00A0"}</span>}
          </span>
        );
      })}
    </h2>
  );
}

// Wrapper that fades its children up when scrolled into view.
export function FadeUp({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div ref={ref} className={`fade-up ${inView ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
