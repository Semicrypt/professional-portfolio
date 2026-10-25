"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

const links = [
  ["Projects", "/#projects"],
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
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        text-decoration: none;
      }

      .brand-burning-logo {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.18rem;
        border-radius: 13px;
        border: 1.6px solid rgba(57, 255, 20, 0.72);
        background:
          linear-gradient(180deg, rgba(57, 255, 20, 0.08), rgba(57, 255, 20, 0.03)),
          rgba(5, 7, 10, 0.96);
        box-shadow:
          0 0 0 1px rgba(57, 255, 20, 0.08) inset,
          0 0 14px rgba(57, 255, 20, 0.14);
      }

      .brand-logo-image {
        display: block;
        width: 44px;
        height: 44px;
        object-fit: contain;
        border-radius: 10px;
        transition:
          transform 0.25s ease,
          filter 0.25s ease;
      }

      .brand-home-link:hover .brand-logo-image {
        transform: translateY(-1px) scale(1.025);
        filter: brightness(1.06);
      }

      .brand-home-link:focus-visible {
        outline: 1px solid #39ff14;
        outline-offset: 5px;
        border-radius: 12px;
      }


        35% {
          transform:
            translateY(-1px)
            scaleX(1.02)
            scaleY(1.04)
            skewX(2deg);

          opacity: .96;
        }

        65% {
          transform:
            translateY(1px)
            scaleX(.98)
            scaleY(.9)
            skewX(-3deg);

          opacity: .78;
        }

        100% {
          transform:
            translateY(-3px)
            scaleX(1.04)
            scaleY(1.17)
            skewX(3deg);

          opacity: 1;
        }
      }


        100% {
          transform:
            translateY(-2px)
            scaleX(1.04)
            scaleY(1.12);

          opacity: 1;
        }
      }


        to {
          opacity: .75;
          transform: scale(1.025);
        }
      }


      @media (max-width: 640px) {
        .brand-logo-image {
          width: 36px;
          height: 36px;
        }
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

      /* View résumé button in the hero */
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

      /* The mobile View résumé row */
      .mobile-navigation a[href="/resume.pdf"] {
        color: #baffba !important;
        border-color: rgba(57, 255, 20, 0.22) !important;
        background: rgba(57, 255, 20, 0.018) !important;
      }

      .mobile-navigation a[href="/resume.pdf"]:hover {
        color: #d9ffd9 !important;
        border-color: rgba(57, 255, 20, 0.5) !important;
        background: rgba(57, 255, 20, 0.055) !important;
      }
    

        /* =====================================================
           MOBILE NAV — DIAMOND ICE
        ===================================================== */

        @media (max-width: 760px) {
          .mobile-navigation {
            border-color: rgba(118,231,220,.12) !important;
          }

          .mobile-navigation a {
            color: #bdfbf4 !important;
            border-color: rgba(118,231,220,.13) !important;
            text-shadow: 0 0 8px rgba(118,231,220,.12) !important;
          }

          .mobile-navigation a span,
          .mobile-navigation a svg {
            color: #76e7dc !important;
          }

          .mobile-navigation a:hover,
          .mobile-navigation a:focus-visible {
            color: #efffff !important;
            border-color: rgba(118,231,220,.32) !important;
            background: rgba(118,231,220,.055) !important;
          }

          .mobile-navigation a[href="/resume.pdf"] {
            color: #dffffc !important;
            border-color: rgba(118,231,220,.28) !important;

            background:
              linear-gradient(
                90deg,
                rgba(118,231,220,.07),
                rgba(118,231,220,.025)
              ) !important;
          }

          .mobile-navigation a[href="/resume.pdf"]:hover {
            color: #ffffff !important;
            border-color: rgba(118,231,220,.52) !important;
            background: rgba(118,231,220,.10) !important;
          }

          .nav-contact {
            color: #dffffc !important;
            border-color: rgba(118,231,220,.34) !important;
            background: rgba(118,231,220,.025) !important;
          }

          .nav-contact span,
          .nav-contact svg {
            color: #76e7dc !important;
          }

          .mobile-menu-toggle,
          .mobile-menu-button,
          .mobile-navigation-toggle,
          .mobile-navigation-close,
          .theme-toggle,
          .mobile-theme-toggle {
            color: #76e7dc !important;
            border-color: rgba(118,231,220,.32) !important;
            background: rgba(118,231,220,.025) !important;
          }
        }



        /* =====================================================
           MOBILE NAV — SECTION MOTION
        ===================================================== */

        @media (max-width: 760px) {

          .mobile-navigation a {
            position: relative;

            overflow: hidden;

            padding-right: 6.2rem !important;

            animation:
              mobileNavTextDrift 4.5s ease-in-out infinite;

            will-change:
              letter-spacing,
              text-shadow;
          }

          /* stagger every line so they do not move together */
          .mobile-navigation a:nth-child(2) {
            animation-delay: -.55s;
          }

          .mobile-navigation a:nth-child(3) {
            animation-delay: -1.1s;
          }

          .mobile-navigation a:nth-child(4) {
            animation-delay: -1.65s;
          }

          .mobile-navigation a:nth-child(5) {
            animation-delay: -2.2s;
          }

          .mobile-navigation a:nth-child(6) {
            animation-delay: -2.75s;
          }

          .mobile-navigation a:nth-child(7) {
            animation-delay: -3.3s;
          }

          /* ---------------------------------------------------
             MINI DISPLAY ON THE RIGHT OF EVERY MENU ITEM
          --------------------------------------------------- */

          .mobile-navigation a::before {
            content: "";

            position: absolute;

            right: 2.2rem;
            top: 50%;

            width: 48px;
            height: 25px;

            transform:
              translateY(-50%);

            border:
              1px solid rgba(118,231,220,.18);

            border-radius:
              6px;

            background:
              rgba(118,231,220,.018);

            box-shadow:
              inset 0 0 12px rgba(118,231,220,.025);

            opacity: .82;

            pointer-events: none;
          }

          .mobile-navigation a:hover::before,
          .mobile-navigation a:focus-visible::before {
            border-color:
              rgba(118,231,220,.42);

            background:
              rgba(118,231,220,.055);

            box-shadow:
              inset 0 0 12px rgba(118,231,220,.05),
              0 0 12px rgba(118,231,220,.07);
          }

          /* ===================================================
             PROJECTS — DEPLOYMENT / PIPELINE SIGNAL
          =================================================== */

          .mobile-navigation a[href*="#projects"]::before {
            background:
              radial-gradient(
                circle,
                #76e7dc 0 2px,
                transparent 2.5px
              )
              5px 50% / 14px 14px repeat-x,
              linear-gradient(
                90deg,
                transparent 8%,
                rgba(118,231,220,.32) 8% 92%,
                transparent 92%
              )
              center / 100% 1px no-repeat,
              rgba(118,231,220,.018);

            animation:
              mobileProjectFlow 1.9s linear infinite;
          }

          /* ===================================================
             STACK — MOVING INFRASTRUCTURE GRID
          =================================================== */

          .mobile-navigation a[href*="#skills"]::before,
          .mobile-navigation a[href*="#stack"]::before {
            background:
              linear-gradient(
                90deg,
                rgba(118,231,220,.22) 1px,
                transparent 1px
              ),
              linear-gradient(
                rgba(118,231,220,.22) 1px,
                transparent 1px
              ),
              radial-gradient(
                circle at center,
                #76e7dc 0 2px,
                transparent 2.5px
              );

            background-size:
              10px 10px,
              10px 10px,
              100% 100%;

            animation:
              mobileStackGrid 3s linear infinite;
          }

          /* ===================================================
             EXPERIENCE — TIMELINE / PULSE
          =================================================== */

          .mobile-navigation a[href*="#experience"]::before {
            background:
              radial-gradient(
                circle at 18% 50%,
                #76e7dc 0 2px,
                transparent 3px
              ),
              radial-gradient(
                circle at 50% 50%,
                #76e7dc 0 2px,
                transparent 3px
              ),
              radial-gradient(
                circle at 82% 50%,
                #76e7dc 0 2px,
                transparent 3px
              ),
              linear-gradient(
                90deg,
                transparent 10%,
                rgba(118,231,220,.4) 10% 90%,
                transparent 90%
              );

            background-size:
              100% 100%;

            animation:
              mobileTimelinePulse 2s ease-in-out infinite;
          }

          /* ===================================================
             ABOUT — RADAR / IDENTITY SCAN
          =================================================== */

          .mobile-navigation a[href*="#about"]::before {
            border-radius:
              999px;

            background:
              radial-gradient(
                circle,
                transparent 0 5px,
                rgba(118,231,220,.30) 6px,
                transparent 7px 10px,
                rgba(118,231,220,.16) 11px,
                transparent 12px
              ),
              conic-gradient(
                from 0deg,
                transparent,
                rgba(118,231,220,.52),
                transparent 28%
              );

            animation:
              mobileRadarSpin 2.8s linear infinite;
          }

          /* ===================================================
             EDUCATION — SCANNING DOCUMENT
          =================================================== */

          .mobile-navigation a[href*="#education"]::before {
            background:
              linear-gradient(
                90deg,
                transparent 7px,
                rgba(118,231,220,.28) 7px 36px,
                transparent 36px
              )
              0 7px / 100% 1px no-repeat,

              linear-gradient(
                90deg,
                transparent 7px,
                rgba(118,231,220,.18) 7px 30px,
                transparent 30px
              )
              0 12px / 100% 1px no-repeat,

              linear-gradient(
                90deg,
                transparent 7px,
                rgba(118,231,220,.25) 7px 33px,
                transparent 33px
              )
              0 17px / 100% 1px no-repeat,

              linear-gradient(
                180deg,
                transparent,
                rgba(118,231,220,.52),
                transparent
              );

            background-size:
              100% 100%,
              100% 100%,
              100% 100%,
              100% 8px;

            background-repeat:
              no-repeat;

            animation:
              mobileDocumentScan 2.4s ease-in-out infinite;
          }

          /* ===================================================
             CONTACT — RADIO / NETWORK SIGNAL
          =================================================== */

          .mobile-navigation a[href*="#contact"]::before {
            background:
              radial-gradient(
                circle at center,
                #76e7dc 0 2px,
                transparent 3px
              ),
              radial-gradient(
                circle at center,
                transparent 0 5px,
                rgba(118,231,220,.38) 6px,
                transparent 7px
              ),
              radial-gradient(
                circle at center,
                transparent 0 10px,
                rgba(118,231,220,.18) 11px,
                transparent 12px
              );

            animation:
              mobileSignalPulse 1.7s ease-out infinite;
          }

          /* ===================================================
             RESUME — DOCUMENT / TERMINAL SCAN
          =================================================== */

          .mobile-navigation a[href="/resume.pdf"]::before {
            background:
              linear-gradient(
                90deg,
                transparent 8px,
                rgba(118,231,220,.30) 8px 35px,
                transparent 35px
              )
              0 7px / 100% 1px no-repeat,

              linear-gradient(
                90deg,
                transparent 8px,
                rgba(118,231,220,.18) 8px 29px,
                transparent 29px
              )
              0 12px / 100% 1px no-repeat,

              linear-gradient(
                90deg,
                transparent 8px,
                rgba(118,231,220,.30) 8px 32px,
                transparent 32px
              )
              0 17px / 100% 1px no-repeat,

              linear-gradient(
                90deg,
                transparent,
                #76e7dc,
                transparent
              )
              0 0 / 100% 2px no-repeat;

            animation:
              mobileResumeScan 2s linear infinite;
          }

          /* ===================================================
             MOTION
          =================================================== */

          @keyframes mobileNavTextDrift {
            0%,
            100% {
              letter-spacing: 0;
              text-shadow:
                0 0 6px rgba(118,231,220,.05);
            }

            50% {
              letter-spacing: .025em;

              text-shadow:
                0 0 10px rgba(118,231,220,.18);
            }
          }

          @keyframes mobileProjectFlow {
            from {
              background-position:
                0 50%,
                center,
                center;
            }

            to {
              background-position:
                14px 50%,
                center,
                center;
            }
          }

          @keyframes mobileStackGrid {
            from {
              background-position:
                0 0,
                0 0,
                center;
            }

            to {
              background-position:
                10px 0,
                0 10px,
                center;
            }
          }

          @keyframes mobileTimelinePulse {
            0%,
            100% {
              opacity: .45;
            }

            50% {
              opacity: 1;

              box-shadow:
                inset 0 0 12px rgba(118,231,220,.08),
                0 0 8px rgba(118,231,220,.08);
            }
          }

          @keyframes mobileRadarSpin {
            from {
              transform:
                translateY(-50%)
                rotate(0deg);
            }

            to {
              transform:
                translateY(-50%)
                rotate(360deg);
            }
          }

          @keyframes mobileDocumentScan {
            0%,
            100% {
              background-position:
                0 7px,
                0 12px,
                0 17px,
                0 -8px;
            }

            50% {
              background-position:
                0 7px,
                0 12px,
                0 17px,
                0 25px;
            }
          }

          @keyframes mobileSignalPulse {
            0% {
              opacity: .35;
              transform:
                translateY(-50%)
                scale(.75);
            }

            55% {
              opacity: 1;
            }

            100% {
              opacity: .25;

              transform:
                translateY(-50%)
                scale(1.05);
            }
          }

          @keyframes mobileResumeScan {
            from {
              background-position:
                0 7px,
                0 12px,
                0 17px,
                -48px 0;
            }

            to {
              background-position:
                0 7px,
                0 12px,
                0 17px,
                48px 0;
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mobile-navigation a,
          .mobile-navigation a::before {
            animation:
              none !important;
          }
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
            aria-label="Ifeanyi Divine — back to top"
            onClick={handleHomeClick}
          >
            <span className="header-identity-avatar">
              <Image
                src="/divine-profile.png"
                alt="Nwachukwu Ifeanyi Divine"
                width={64}
                height={64}
                priority
                className="header-identity-photo"
              />
            </span>
          </Link>

          <div className="desktop-nav">
            {links.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>

          <ThemeToggle />

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
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            View Résumé <span aria-hidden="true">↗</span>
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
