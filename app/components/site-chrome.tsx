"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./icons";

const links = [
  ["Work", "/#projects"],
  ["Stack", "/#skills"],
  ["Experience", "/#experience"],
  ["About", "/#about"],
];

function ChromeAccentStyles() {
  return (
    <style jsx global>{`
      /* Footer links */
      .footer-bottom a {
        color: #8cff8c !important;
        text-shadow: 0 0 9px rgba(57, 255, 20, 0.08);
        transition:
          color 0.22s ease,
          text-shadow 0.22s ease,
          transform 0.22s ease;
      }

      .footer-bottom a:hover {
        color: #caffca !important;
        text-shadow: 0 0 14px rgba(57, 255, 20, 0.2);
      }

      .footer-bottom a:focus-visible {
        outline: 1px solid #39ff14;
        outline-offset: 4px;
        border-radius: 2px;
      }

      /* Top brand */
      .brand-home-link {
        cursor: pointer;
      }

      /* Mobile hamburger button */
      .menu-toggle {
        color: #8cff8c !important;
        border-color: rgba(57, 255, 20, 0.28) !important;
        background: rgba(57, 255, 20, 0.025) !important;
        box-shadow: inset 0 0 16px rgba(57, 255, 20, 0.02);
      }

      .menu-toggle:hover,
      .menu-toggle[aria-expanded="true"] {
        color: #caffca !important;
        border-color: rgba(57, 255, 20, 0.52) !important;
        background: rgba(57, 255, 20, 0.055) !important;
        box-shadow:
          inset 0 0 16px rgba(57, 255, 20, 0.035),
          0 0 18px rgba(57, 255, 20, 0.06);
      }

      /* Mobile navigation rows */
      .mobile-navigation a {
        color: #8cff8c !important;
        border-color: rgba(57, 255, 20, 0.11) !important;
        text-shadow: 0 0 8px rgba(57, 255, 20, 0.06);
        transition:
          color 0.2s ease,
          border-color 0.2s ease,
          background-color 0.2s ease,
          text-shadow 0.2s ease,
          padding-left 0.2s ease;
      }

      .mobile-navigation a:hover,
      .mobile-navigation a:focus-visible {
        color: #caffca !important;
        border-color: rgba(57, 255, 20, 0.27) !important;
        background: rgba(57, 255, 20, 0.025) !important;
        text-shadow: 0 0 12px rgba(57, 255, 20, 0.14);
        padding-left: 0.4rem;
      }

      .mobile-navigation a span,
      .mobile-navigation a svg {
        color: #39ff14 !important;
      }

      /* Download résumé button in the hero */
      .hero-actions .button-secondary {
        color: #baffba !important;
        border-color: rgba(57, 255, 20, 0.28) !important;
        background: rgba(57, 255, 20, 0.025) !important;
        box-shadow: inset 0 0 18px rgba(57, 255, 20, 0.018);
      }

      .hero-actions .button-secondary svg {
        color: #39ff14 !important;
        filter: drop-shadow(0 0 5px rgba(57, 255, 20, 0.18));
      }

      .hero-actions .button-secondary:hover {
        color: #d9ffd9 !important;
        border-color: rgba(57, 255, 20, 0.55) !important;
        background: rgba(57, 255, 20, 0.065) !important;
        box-shadow:
          inset 0 0 18px rgba(57, 255, 20, 0.035),
          0 0 18px rgba(57, 255, 20, 0.065);
      }

      /* The mobile Download résumé row */
      .mobile-navigation a[download] {
        color: #baffba !important;
        border-color: rgba(57, 255, 20, 0.22) !important;
        background: rgba(57, 255, 20, 0.018) !important;
      }

      .mobile-navigation a[download]:hover {
        color: #d9ffd9 !important;
        border-color: rgba(57, 255, 20, 0.5) !important;
        background: rgba(57, 255, 20, 0.055) !important;
      }
    `}</style>
  );
}


function scrollToHomeTop() {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: reduceMotion ? "auto" : "smooth",
  });

  window.history.replaceState(null, "", "/#home");
}


export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };

    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);

    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);

  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      event.preventDefault();
      scrollToHomeTop();
      setOpen(false);
    }
  };

  return (
    <>
      <ChromeAccentStyles />

      <header ref={header} className="site-header">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>

        <nav className="container nav" aria-label="Main navigation">
          <Link
            href="/#home"
            className="brand brand-home-link"
            aria-label="Divine home — back to top"
            onClick={handleHomeClick}
          >
            D<span className="brand-mark">/</span>
            <span className="brand-name">
              DIVINE<span>.</span>
            </span>
          </Link>

          <div className="desktop-nav">
            {links.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>

          <Link className="nav-contact" href="/#contact">
            Let’s talk <span aria-hidden="true">↗</span>
          </Link>

          <button
            ref={trigger}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? "✕" : "☰"}
          </button>
        </nav>

        <div
          id="mobile-navigation"
          className="mobile-navigation"
          hidden={!open}
        >
          {[
            ...links,
            ["Education", "/#education"],
            ["Contact", "/#contact"],
          ].map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}

          <a
            href="/resume.pdf"
            download="Nwachukwu-Ifeanyi-Divine-Resume.pdf"
            onClick={() => setOpen(false)}
          >
            Download résumé <Icon name="download" />
          </a>
        </div>
      </header>
    </>
  );
}

export function MotionControl() {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setReduced(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion =
      paused || reduced ? "paused" : "running";

    window.dispatchEvent(new Event("portfolio-motion-change"));
  }, [paused, reduced]);

  return (
    <button
      className="motion-control"
      onClick={() => setPaused(!paused)}
      aria-pressed={paused || reduced}
      disabled={reduced}
    >
      <span aria-hidden="true">{paused || reduced ? "▷" : "Ⅱ"}</span>
      {reduced
        ? "Reduced motion"
        : paused
          ? "Resume motion"
          : "Pause motion"}
    </button>
  );
}

export function SiteFooter() {
  return (
    <>
      <ChromeAccentStyles />

      <footer className="site-footer">
        <div className="container footer-top">
          <Link href="/#home" className="brand-name">
            DIVINE<span>.</span>
          </Link>

          <p>Built with intention. Operated with care.</p>

          <MotionControl />
        </div>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Nwachukwu Ifeanyi Divine
          </span>

          <div>
            <a
              href="https://github.com/Semicrypt"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/nwachukwu-ifeanyi-divine-31b9793a6"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <Link
              href="/#home"
              onClick={(event) => {
                if (window.location.pathname === "/") {
                  event.preventDefault();
                  scrollToHomeTop();
                }
              }}
            >
              Back to top ↑
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
