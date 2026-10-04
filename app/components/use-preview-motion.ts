"use client";

import { useEffect, useState, type RefObject } from "react";

/** One clock per preview; no work while offscreen, hidden, paused, or reduced. */
export function usePreviewMotion(ref: RefObject<HTMLDivElement | null>, count: number, delay = 4200, stopAt?: number) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [environment, setEnvironment] = useState({
    reduced: false, globalPaused: false, hidden: true, visible: false,
  });

  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnvironment(previous => ({
      ...previous,
      reduced: preference.matches,
      globalPaused: document.documentElement.dataset.motion === "paused",
      hidden: document.hidden,
    }));
    const observer = new IntersectionObserver(([entry]) => {
      setEnvironment(previous => ({ ...previous, visible: entry.isIntersecting }));
    }, { threshold: 0.08 });
    if (ref.current) observer.observe(ref.current);
    sync();
    preference.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    window.addEventListener("portfolio-motion-change", sync);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("portfolio-motion-change", sync);
    };
  }, [ref]);

  const running = environment.visible && !environment.hidden &&
    !environment.reduced && !environment.globalPaused && !paused;

  useEffect(() => {
    if (!running || index === stopAt) return;
    const timer = window.setTimeout(() => setIndex(value => (value + 1) % count), delay);
    return () => window.clearTimeout(timer);
  }, [running, index, count, delay, stopAt]);

  return { index, setIndex, paused, setPaused, running, ...environment };
}
