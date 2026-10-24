"use client";

import { useEffect, useState } from "react";

const FULL_NAME = "Nwachukwu Ifeanyi Divine";

const pipeline = [
  "Commit",
  "Build",
  "Containerize",
  "Deploy",
  "Observe",
];

export function PortfolioIntro() {
  const [typedName, setTypedName] = useState("");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setTypedName(FULL_NAME);

      const reducedTimer = window.setTimeout(() => {
        setVisible(false);
      }, 120);

      return () => window.clearTimeout(reducedTimer);
    }

    let index = 0;

    const typingTimer = window.setInterval(() => {
      index += 1;
      setTypedName(FULL_NAME.slice(0, index));

      if (index >= FULL_NAME.length) {
        window.clearInterval(typingTimer);
      }
    }, 34);

    const exitTimer = window.setTimeout(() => {
      setVisible(false);
    }, 6900);

    return () => {
      window.clearInterval(typingTimer);
      window.clearTimeout(exitTimer);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    <div className="intro-root" aria-hidden="true">
      <div className="intro-grid" />
      <div className="intro-scan" />

      <div className="intro-shell">
        <div className="intro-system">
          <span className="intro-status-dot" />
          PORTFOLIO // SYSTEM INITIALIZING
        </div>

        <div className="intro-identity">
          <p className="intro-name">
            {typedName}
            <span className="intro-cursor">_</span>
          </p>

          <p className="intro-role">
            Cloud &amp; DevOps Engineer
          </p>
        </div>

        <div className="intro-divider">
          <span />
        </div>

        <div className="intro-pipeline">
          <div className="intro-pipeline-line" />

          {pipeline.map((step, index) => (
            <div
              className="intro-step"
              key={step}
              style={
                {
                  "--step": index,
                } as React.CSSProperties
              }
            >
              <span className="intro-step-node">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="intro-step-label">
                {step}
              </span>
            </div>
          ))}
        </div>

        <div className="intro-terminal">
          <p className="intro-terminal-line intro-terminal-1">
            <span>$</span> git push origin main
          </p>

          <p className="intro-terminal-line intro-terminal-2">
            <span>✓</span> build pipeline passed
          </p>

          <p className="intro-terminal-line intro-terminal-3">
            <span>✓</span> containers ready · infrastructure reconciled
          </p>

          <p className="intro-terminal-line intro-terminal-4">
            <span>●</span> deployment healthy · telemetry streaming
          </p>
        </div>

        <div className="intro-stoic">
          <span className="intro-stoic-1">
            BUILD DELIBERATELY.
          </span>

          <span className="intro-stoic-2">
            SHIP WITH CONTROL.
          </span>

          <span className="intro-stoic-3">
            OBSERVE EVERYTHING.
          </span>
        </div>

        <div className="intro-story">
          <span className="intro-story-1">
            Systems are tested when pressure arrives.
          </span>

          <span className="intro-story-2">
            Noise grows. Signals narrow. Discipline remains.
          </span>

          <span className="intro-story-3">
            Build with intent. Observe what matters. Restore order.
          </span>
        </div>

        <div className="intro-stack">
          AWS
          <i />
          AZURE
          <i />
          DOCKER
          <i />
          KUBERNETES
          <i />
          TERRAFORM
          <i />
          GRAFANA
        </div>
      </div>

    </div>
  );
}
