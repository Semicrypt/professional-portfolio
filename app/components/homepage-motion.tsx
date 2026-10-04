"use client";

import { useEffect } from "react";

export function HomepageMotion() {
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const hero = document.querySelector<HTMLElement>(".hero");
    const elements = document.querySelectorAll<HTMLElement>(
      ".section-heading, .featured-project, .project-card, .minerva-project, .lab-card, .skill-row, .about-portrait, .about-copy, .timeline article, .contact-inner"
    );
    const reveal = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (!media.matches && document.documentElement.dataset.motion !== "paused") {
          entry.target.classList.add("section-enter");
        }
        reveal.unobserve(entry.target);
      }
    }, { threshold: 0.08 });
    // Content is never hidden before an observer runs, including with JS disabled.
    elements.forEach(element => {
      if (element.getBoundingClientRect().top > innerHeight) reveal.observe(element);
    });
    const heroObserver = new IntersectionObserver(([entry]) => {
      if (hero) hero.dataset.animate = String(entry.isIntersecting);
    });
    if (hero) heroObserver.observe(hero);
    const visibility = () => {
      document.documentElement.dataset.pageHidden = String(document.hidden);
    };
    visibility();
    document.addEventListener("visibilitychange", visibility);
    return () => {
      reveal.disconnect();
      heroObserver.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      delete document.documentElement.dataset.pageHidden;
    };
  }, []);
  return null;
}
