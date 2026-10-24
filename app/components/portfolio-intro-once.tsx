"use client";

import { useEffect, useState } from "react";

import { PortfolioIntro } from "./portfolio-intro";

declare global {
  interface Window {
    __divinePortfolioIntroPlayed?: boolean;
  }
}

export function PortfolioIntroOnce() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Already played during this browser document.
    // Internal Next.js navigation keeps this value.
    if (window.__divinePortfolioIntroPlayed) {
      return;
    }

    window.__divinePortfolioIntroPlayed = true;
    setShowIntro(true);
  }, []);

  if (!showIntro) {
    return null;
  }

  return <PortfolioIntro />;
}
