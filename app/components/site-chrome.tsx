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

      .brand-home-link {
        cursor: pointer;
      }
    `}</style>
  );
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
    // When already on the homepage, keep the interaction smooth and avoid a reload.
    if (window.location.pathname === "/") {
      event.preventDefault();

      const home = document.getElementById("home");

      if (home) {
        home.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(null, "", "/#home");
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        window.history.replaceState(null, "", "/");
      }

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

            <Link href="/#home">Back to top ↑</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
