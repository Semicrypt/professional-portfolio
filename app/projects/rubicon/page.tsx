import type { Metadata } from "next";
import Link from "next/link";

import {
  SiteFooter,
  SiteHeader,
} from "../../components/site-chrome";

export const metadata: Metadata = {
  title: "Rubicon Case Study | Nwachukwu Ifeanyi Divine",
  description:
    "Production deployment case study for Rubicon: Vercel, AWS EC2, Terraform, Docker Compose, Caddy, Flask, InsightFace and PostgreSQL.",
};

const stack = [
  "React",
  "Vite",
  "Python",
  "Flask",
  "Docker Compose",
  "Terraform",
  "AWS EC2",
  "Caddy",
  "PostgreSQL",
  "Supabase",
  "InsightFace",
  "Google OAuth",
];

export default function RubiconCaseStudy() {
  return (
    <>
      <SiteHeader />

      <main
        id="main-content"
        className="rubicon-case-study"
      >
        <style>{`
          .rubicon-case-study {
            --rubicon-green: #39ff14;
            --rubicon-soft: #a4f6a4;
            --rubicon-border: rgba(120,255,110,.18);
            --rubicon-panel: #1b251e;
            --rubicon-panel-2: #151e18;
            --rubicon-copy: #bbc8bd;
            --rubicon-muted: #829086;

            min-height: 100vh;

            background:
              radial-gradient(
                circle at 75% 3%,
                rgba(57,255,20,.06),
                transparent 27%
              ),
              #111713;

            color: #f6fff7;
          }

          .rubicon-container {
            width: min(1160px, calc(100% - 2rem));
            margin: 0 auto;
          }

          .rubicon-breadcrumb {
            display: flex;
            align-items: center;
            gap: .6rem;

            padding-top: 2rem;

            color: #839587;

            font-size: .72rem;
          }

          .rubicon-breadcrumb a {
            color: #abc0ae;
            text-decoration: none;
          }

          .rubicon-breadcrumb a:hover {
            color: var(--rubicon-green);
          }

          .rubicon-hero {
            display: grid;
            grid-template-columns:
              minmax(0, 1.08fr)
              minmax(330px, .92fr);

            gap: 3rem;

            padding: 4rem 0 5rem;

            align-items: center;
          }

          .rubicon-kicker {
            color: #65b96d;

            font-family:
              ui-monospace,
              SFMono-Regular,
              Menlo,
              monospace;

            font-size: .62rem;
            font-weight: 700;

            letter-spacing: .16em;
            text-transform: uppercase;
          }

          .rubicon-status {
            display: inline-flex;
            align-items: center;
            gap: .45rem;

            margin-top: 1.1rem;

            padding: .48rem .7rem;

            border:
              1px solid var(--rubicon-border);

            border-radius: 999px;

            background:
              rgba(57,255,20,.035);

            color: #a4dca9;

            font-size: .62rem;
          }

          .rubicon-status i {
            width: 6px;
            height: 6px;

            border-radius: 50%;

            background: var(--rubicon-green);

            box-shadow:
              0 0 8px rgba(57,255,20,.5);
          }

          .rubicon-hero h1 {
            margin: 1.5rem 0 0;

            color: #f8fff8;

            font-size:
              clamp(3.4rem, 8vw, 7rem);

            line-height: .88;

            letter-spacing: -.065em;
          }

          .rubicon-hero h1 span {
            display: block;

            color: #92ff91;
          }

          .rubicon-lead {
            max-width: 720px;

            margin: 1.5rem 0 0;

            color: #c1cec3;

            font-size:
              clamp(1rem, 1.7vw, 1.22rem);

            line-height: 1.75;
          }

          .rubicon-tags {
            display: flex;
            flex-wrap: wrap;
            gap: .45rem;

            margin-top: 1.5rem;
          }

          .rubicon-tags span {
            padding: .48rem .62rem;

            border:
              1px solid rgba(120,255,110,.16);

            border-radius: 8px;

            background:
              rgba(57,255,20,.03);

            color: #a8d9ad;

            font-size: .6rem;
          }

          .rubicon-actions {
            display: flex;
            flex-wrap: wrap;
            gap: .7rem;

            margin-top: 1.8rem;
          }

          .rubicon-action-primary,
          .rubicon-action-secondary {
            display: inline-flex;
            align-items: center;

            min-height: 43px;

            padding: .7rem 1rem;

            border-radius: 10px;

            font-size: .72rem;
            font-weight: 700;

            text-decoration: none;
          }

          .rubicon-action-primary {
            border:
              1px solid rgba(57,255,20,.4);

            background:
              rgba(57,255,20,.11);

            color: #dcffda;
          }

          .rubicon-action-secondary {
            border:
              1px solid rgba(255,255,255,.12);

            background:
              rgba(255,255,255,.035);

            color: #c5d1c7;
          }

          /* ---------------------------------------
             ARCHITECTURE VISUAL
          --------------------------------------- */

          .rubicon-architecture {
            padding: 1.15rem;

            border:
              1px solid var(--rubicon-border);

            border-radius: 22px;

            background:
              linear-gradient(
                145deg,
                #202c23,
                #151d18
              );

            box-shadow:
              inset 0 1px 0 rgba(255,255,255,.04),
              0 25px 60px rgba(0,0,0,.18);
          }

          .rubicon-architecture-header {
            display: flex;
            justify-content: space-between;

            padding:
              .2rem .2rem .85rem;

            color: #719276;

            font-family:
              ui-monospace,
              monospace;

            font-size: .48rem;
            font-weight: 700;

            letter-spacing: .13em;
          }

          .rubicon-architecture-header span:last-child {
            color: #7bdd82;
          }

          .rubicon-arch-node {
            padding: .9rem;

            border:
              1px solid rgba(120,255,110,.17);

            border-radius: 12px;

            background:
              linear-gradient(
                145deg,
                #243127,
                #1a241d
              );

            text-align: center;
          }

          .rubicon-arch-node small,
          .rubicon-service-node small {
            display: block;

            color: #719477;

            font-family:
              ui-monospace,
              monospace;

            font-size: .43rem;
            font-weight: 700;

            letter-spacing: .13em;
          }

          .rubicon-arch-node strong,
          .rubicon-service-node strong {
            display: block;

            margin-top: .3rem;

            color: #effff0;

            font-size: .9rem;
          }

          .rubicon-arch-node p,
          .rubicon-service-node p {
            margin: .25rem 0 0;

            color: #91a495;

            font-size: .58rem;
          }

          .rubicon-arch-line {
            display: flex;
            flex-direction: column;
            align-items: center;

            height: 34px;

            padding-top: 4px;

            color: #67916c;

            font-family:
              ui-monospace,
              monospace;

            font-size: .4rem;
          }

          .rubicon-arch-line::after {
            content: "";

            width: 1px;
            flex: 1;

            margin-top: 3px;

            background:
              linear-gradient(
                #39ff14,
                rgba(57,255,20,.12)
              );
          }

          .rubicon-service-row {
            display: grid;
            grid-template-columns:
              repeat(2, 1fr);

            gap: .55rem;
          }

          .rubicon-service-node {
            padding: .8rem;

            border:
              1px solid rgba(120,255,110,.14);

            border-radius: 11px;

            background: #19231c;

            text-align: center;
          }

          /* ---------------------------------------
             SECTIONS
          --------------------------------------- */

          .rubicon-section {
            padding: 5rem 0;

            border-top:
              1px solid rgba(120,255,110,.12);
          }

          .rubicon-section-grid {
            display: grid;
            grid-template-columns:
              minmax(210px,.65fr)
              minmax(0,1.35fr);

            gap: 4rem;
          }

          .rubicon-section-label {
            color: #6caf73;

            font-family:
              ui-monospace,
              monospace;

            font-size: .58rem;
            font-weight: 700;

            letter-spacing: .17em;
          }

          .rubicon-section h2 {
            margin: .7rem 0 0;

            color: #f7fff7;

            font-size:
              clamp(1.8rem, 4vw, 3rem);

            letter-spacing: -.045em;
          }

          .rubicon-copy p {
            margin: 0;

            color: var(--rubicon-copy);

            line-height: 1.8;
          }

          .rubicon-copy p + p {
            margin-top: 1rem;
          }

          .rubicon-facts {
            display: grid;
            grid-template-columns:
              repeat(3, 1fr);

            gap: .65rem;

            margin-top: 1.6rem;
          }

          .rubicon-fact {
            padding: 1rem;

            border:
              1px solid var(--rubicon-border);

            border-radius: 12px;

            background:
              linear-gradient(
                145deg,
                var(--rubicon-panel),
                var(--rubicon-panel-2)
              );
          }

          .rubicon-fact span {
            display: block;

            color: #729078;

            font-size: .48rem;
            font-weight: 700;

            letter-spacing: .13em;
          }

          .rubicon-fact strong {
            display: block;

            margin-top: .45rem;

            color: #e9f7ea;

            font-size: .78rem;
          }

          .rubicon-responsibilities {
            display: grid;
            grid-template-columns:
              repeat(2, 1fr);

            gap: .7rem;
          }

          .rubicon-responsibility {
            padding: 1.2rem;

            border:
              1px solid var(--rubicon-border);

            border-radius: 14px;

            background:
              linear-gradient(
                145deg,
                #1d2820,
                #161f19
              );
          }

          .rubicon-responsibility span {
            color: #64ad6b;

            font-family:
              ui-monospace,
              monospace;

            font-size: .5rem;
            font-weight: 700;
          }

          .rubicon-responsibility h3 {
            margin: .55rem 0 .45rem;

            color: #edf9ee;

            font-size: .9rem;
          }

          .rubicon-responsibility p {
            margin: 0;

            color: #a7b7aa;

            font-size: .72rem;

            line-height: 1.65;
          }

          .rubicon-health {
            padding: 1.3rem;

            border:
              1px solid rgba(57,255,20,.22);

            border-radius: 15px;

            background:
              #121b15;

            font-family:
              ui-monospace,
              SFMono-Regular,
              Menlo,
              monospace;
          }

          .rubicon-health-head {
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-bottom: 1rem;

            color: #74a97a;

            font-size: .54rem;
          }

          .rubicon-health-head strong {
            color: #62e16a;
          }

          .rubicon-health-row {
            display: grid;
            grid-template-columns:
              1fr auto;

            gap: 1rem;

            padding: .65rem 0;

            border-top:
              1px solid rgba(120,255,110,.08);

            color: #a8b9aa;

            font-size: .62rem;
          }

          .rubicon-health-row span:last-child {
            color: #7ee486;
          }

          .rubicon-challenges {
            display: grid;
            gap: .7rem;
          }

          .rubicon-challenge {
            display: grid;
            grid-template-columns:
              1fr 1.4fr;

            gap: 1.2rem;

            padding: 1.15rem;

            border:
              1px solid var(--rubicon-border);

            border-radius: 14px;

            background:
              linear-gradient(
                145deg,
                #1b251e,
                #151e18
              );
          }

          .rubicon-challenge strong {
            color: #eaf7eb;

            font-size: .78rem;
          }

          .rubicon-challenge p {
            margin: 0;

            color: #a8b5aa;

            font-size: .7rem;
            line-height: 1.65;
          }

          .rubicon-outcome {
            padding: 2rem;

            border:
              1px solid rgba(57,255,20,.22);

            border-radius: 20px;

            background:
              radial-gradient(
                circle at 90% 10%,
                rgba(57,255,20,.07),
                transparent 35%
              ),
              linear-gradient(
                145deg,
                #202c23,
                #161f19
              );
          }

          .rubicon-outcome h3 {
            margin: 0;

            color: #f5fff6;

            font-size: 1.35rem;
          }

          .rubicon-outcome p {
            max-width: 760px;

            margin: .9rem 0 0;

            color: #b5c4b7;

            line-height: 1.8;
          }

          @media (max-width: 820px) {
            .rubicon-hero,
            .rubicon-section-grid {
              grid-template-columns: 1fr;
            }

            .rubicon-hero {
              gap: 2.2rem;

              padding:
                2.7rem 0 3.5rem;
            }

            .rubicon-section-grid {
              gap: 1.7rem;
            }

            .rubicon-section {
              padding: 3.6rem 0;
            }
          }

          @media (max-width: 600px) {
            .rubicon-container {
              width:
                min(100% - 1.4rem, 1160px);
            }

            .rubicon-hero h1 {
              font-size:
                clamp(3rem, 18vw, 4.6rem);
            }

            .rubicon-lead {
              font-size: .92rem;
            }

            .rubicon-service-row,
            .rubicon-facts,
            .rubicon-responsibilities {
              grid-template-columns: 1fr;
            }

            .rubicon-challenge {
              grid-template-columns: 1fr;

              gap: .55rem;
            }

            .rubicon-actions {
              display: grid;

              grid-template-columns: 1fr;
            }

            .rubicon-action-primary,
            .rubicon-action-secondary {
              justify-content: center;
            }
          }
        `}</style>

        <div className="rubicon-container">
          <nav
            className="rubicon-breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link href="/#projects">
              Engineering Projects
            </Link>

            <span>/</span>

            <span>Rubicon</span>
          </nav>

          <section className="rubicon-hero">
            <div>
              <p className="rubicon-kicker">
                CASE STUDY 03 / PRODUCTION CLOUD DEPLOYMENT
              </p>

              <span className="rubicon-status">
                <i />
                Production deployment verified
              </span>

              <h1>
                Rubicon
                <span>Production delivery.</span>
              </h1>

              <p className="rubicon-lead">
                A production application deployed across a Vercel frontend
                and Terraform-managed AWS infrastructure, with containerized
                backend, face-processing, reverse-proxy and database services.
              </p>

              <div className="rubicon-tags">
                {stack.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="rubicon-actions">
                <a
                  className="rubicon-action-primary"
                  href="https://rubiconn.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live Deployment ↗
                </a>

                <a
                  className="rubicon-action-secondary"
                  href="https://github.com/ahm-destino/Rubicon"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub ↗
                </a>
              </div>
            </div>

            <div className="rubicon-architecture">
              <div className="rubicon-architecture-header">
                <span>PRODUCTION TOPOLOGY</span>
                <span>● HEALTHY</span>
              </div>

              <div className="rubicon-arch-node">
                <small>PUBLIC FRONTEND</small>
                <strong>Vercel</strong>
                <p>React 19 + Vite</p>
              </div>

              <div className="rubicon-arch-line">
                HTTPS
              </div>

              <div className="rubicon-arch-node">
                <small>AWS EC2 / REVERSE PROXY</small>
                <strong>Caddy</strong>
                <p>TLS termination + service routing</p>
              </div>

              <div className="rubicon-arch-line">
                Docker network
              </div>

              <div className="rubicon-service-row">
                <div className="rubicon-service-node">
                  <small>BACKEND</small>
                  <strong>Flask</strong>
                  <p>Application API</p>
                </div>

                <div className="rubicon-service-node">
                  <small>PRIVATE SERVICE</small>
                  <strong>Face API</strong>
                  <p>InsightFace / buffalo_l</p>
                </div>
              </div>

              <div className="rubicon-arch-line">
                Data
              </div>

              <div className="rubicon-arch-node">
                <small>PRODUCTION DATABASE</small>
                <strong>PostgreSQL</strong>
                <p>Supabase integration</p>
              </div>
            </div>
          </section>

          <section className="rubicon-section">
            <div className="rubicon-section-grid">
              <div>
                <span className="rubicon-section-label">
                  01 / OVERVIEW
                </span>

                <h2>
                  Moving an application into production.
                </h2>
              </div>

              <div className="rubicon-copy">
                <p>
                  Rubicon became a practical deployment exercise in connecting
                  application code, containerized services, infrastructure as
                  code, HTTPS routing, database connectivity and production
                  frontend hosting into one working system.
                </p>

                <p>
                  The deployment separates the public Vercel frontend from the
                  AWS-hosted backend stack while keeping the face-processing
                  service private behind the application infrastructure.
                </p>

                <div className="rubicon-facts">
                  <div className="rubicon-fact">
                    <span>FRONTEND</span>
                    <strong>Vercel</strong>
                  </div>

                  <div className="rubicon-fact">
                    <span>INFRASTRUCTURE</span>
                    <strong>AWS + Terraform</strong>
                  </div>

                  <div className="rubicon-fact">
                    <span>RUNTIME</span>
                    <strong>Docker Compose</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rubicon-section">
            <div className="rubicon-section-grid">
              <div>
                <span className="rubicon-section-label">
                  02 / MY ENGINEERING WORK
                </span>

                <h2>
                  Infrastructure, containers, and production fixes.
                </h2>
              </div>

              <div className="rubicon-responsibilities">
                <article className="rubicon-responsibility">
                  <span>01</span>
                  <h3>Containerized the services</h3>
                  <p>
                    Prepared the primary Flask backend and separate Face API
                    for production Docker-based execution.
                  </p>
                </article>

                <article className="rubicon-responsibility">
                  <span>02</span>
                  <h3>Provisioned AWS with Terraform</h3>
                  <p>
                    Created the AWS deployment infrastructure and repeatable
                    configuration required to host the service stack.
                  </p>
                </article>

                <article className="rubicon-responsibility">
                  <span>03</span>
                  <h3>Configured Caddy HTTPS</h3>
                  <p>
                    Routed production traffic securely through Caddy to the
                    appropriate backend services.
                  </p>
                </article>

                <article className="rubicon-responsibility">
                  <span>04</span>
                  <h3>Connected production systems</h3>
                  <p>
                    Connected the Vercel frontend, production database,
                    authentication configuration and AWS-hosted services.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="rubicon-section">
            <div className="rubicon-section-grid">
              <div>
                <span className="rubicon-section-label">
                  03 / PRODUCTION VALIDATION
                </span>

                <h2>
                  Verified at runtime.
                </h2>
              </div>

              <div className="rubicon-health">
                <div className="rubicon-health-head">
                  <span>RUBICON // PRODUCTION HEALTH</span>
                  <strong>STATUS: OK</strong>
                </div>

                <div className="rubicon-health-row">
                  <span>Flask backend</span>
                  <span>HEALTHY</span>
                </div>

                <div className="rubicon-health-row">
                  <span>Caddy reverse proxy</span>
                  <span>RUNNING</span>
                </div>

                <div className="rubicon-health-row">
                  <span>Face API</span>
                  <span>RUNNING</span>
                </div>

                <div className="rubicon-health-row">
                  <span>PostgreSQL service</span>
                  <span>HEALTHY</span>
                </div>

                <div className="rubicon-health-row">
                  <span>Google OAuth</span>
                  <span>ENABLED</span>
                </div>

                <div className="rubicon-health-row">
                  <span>Face model</span>
                  <span>buffalo_l / 512D</span>
                </div>
              </div>
            </div>
          </section>

          <section className="rubicon-section">
            <div className="rubicon-section-grid">
              <div>
                <span className="rubicon-section-label">
                  04 / PROBLEMS SOLVED
                </span>

                <h2>
                  Production failures became engineering work.
                </h2>
              </div>

              <div className="rubicon-challenges">
                <article className="rubicon-challenge">
                  <strong>Face detection route failures</strong>
                  <p>
                    Diagnosed and corrected production behavior around the
                    detection endpoint so requests reached the expected
                    processing path.
                  </p>
                </article>

                <article className="rubicon-challenge">
                  <strong>Model-volume permissions</strong>
                  <p>
                    Resolved filesystem and container permission issues affecting
                    the InsightFace model volume in the deployed environment.
                  </p>
                </article>

                <article className="rubicon-challenge">
                  <strong>Multi-service connectivity</strong>
                  <p>
                    Connected the frontend, reverse proxy, backend, private
                    face-processing API and database through the production
                    deployment topology.
                  </p>
                </article>

                <article className="rubicon-challenge">
                  <strong>HTTPS production routing</strong>
                  <p>
                    Configured Caddy to expose the required application surface
                    securely while keeping internal services behind the proxy.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="rubicon-section">
            <div className="rubicon-outcome">
              <span className="rubicon-section-label">
                05 / OUTCOME
              </span>

              <h3>
                A working production deployment, not just a local demo.
              </h3>

              <p>
                Rubicon demonstrates end-to-end deployment work across
                infrastructure as code, container orchestration with Docker
                Compose, HTTPS routing, database connectivity, application
                services, authentication configuration, health verification
                and production debugging.
              </p>

              <div className="rubicon-actions">
                <a
                  className="rubicon-action-primary"
                  href="https://rubiconn.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Rubicon ↗
                </a>

                <Link
                  className="rubicon-action-secondary"
                  href="/#projects"
                >
                  ← All Engineering Projects
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
