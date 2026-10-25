"use client";

import { useEffect, useState } from "react";

import { CinematicIntro } from "./cinematic-intro";

declare global {
  interface Window {
    __divinePortfolioIntroPlayed?: boolean;
  }
}

export function PortfolioIntroOnce() {
  const [showIntro, setShowIntro] =
    useState(false);

  useEffect(() => {
    if (
      window.__divinePortfolioIntroPlayed
    ) {
      return;
    }

    window.__divinePortfolioIntroPlayed =
      true;

    setShowIntro(true);
  }, []);

  if (!showIntro) {
    return null;
  }

  return <CinematicIntro />;
}
