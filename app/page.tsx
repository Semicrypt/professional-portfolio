import Image from "next/image";
import Link from "next/link";

import { HomepageMotion } from "./components/homepage-motion";
import { SiteHeader, SiteFooter } from "./components/site-chrome";
import { Icon } from "./components/icons";
import {
  IcemanVisual,
  StorageVisual,
  ObservabilityVisual,
} from "./components/project-visuals";
import { skillGroups } from "./data/skills";

const github = "https://github.com/Semicrypt";
const linkedin =
  "https://www.linkedin.com/in/nwachukwu-ifeanyi-divine-31b9793a6";
const email =
  "https://mail.google.com/mail/?view=cm&fs=1&to=nifeanyidivine@gmail.com&su=Portfolio%20Enquiry";

function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span className="tag" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> {label}
        </p>
        <h2>{title}</h2>
      </div>

      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function TechnologyAnimation() {
  const pipeline = ["Commit", "Build", "Test", "Deploy", "Monitor"];

  return (
    <div
      className="tech-hero-shell"
      aria-label="Animated Cloud and DevOps delivery system"
    >
      <style>{`
        .tech-hero-layout {
          grid-template-columns: minmax(0, 1fr) !important;
        }

        .tech-hero-layout .hero-copy {
          max-width: none !important;
          width: 100%;
        }

        .tech-visually-hidden {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }

        .tech-hero-shell {
          --tech-bg: #070b10;
          --tech-panel: #090f15;
          --tech-panel-2: #05080c;
          --tech-border: rgba(62, 255, 95, 0.15);
          --tech-muted: #4e7d53;
          --tech-text: #d7ffe0;
          --tech-accent: #39ff14;
          --tech-accent-2: #00ff7f;
          --tech-ok: #66ff66;
          --tech-terminal-green: #63ff63;
          --tech-terminal-green-soft: #9bff9b;
          --tech-terminal-green-dim: #357235;

          position: relative;
          width: 100%;
          margin-top: 2.2rem;
          overflow: hidden;
          border: 1px solid var(--tech-border);
          border-radius: 32px;
          background:
            radial-gradient(circle at 70% 5%, rgba(57,255,20,.08), transparent 34%),
            linear-gradient(180deg, rgba(11,17,23,.98), rgba(5,8,12,.98));
          box-shadow:
            0 35px 90px rgba(0,0,0,.34),
            inset 0 1px 0 rgba(255,255,255,.025);
          isolation: isolate;
        }

        .tech-hero-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: .28;
          background-image:
            linear-gradient(rgba(57,255,20,.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57,255,20,.07) 1px, transparent 1px);
          background-size: 52px 52px;
          animation: techGridMove 16s linear infinite;
        }

        .tech-hero-shell::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, transparent, rgba(57,255,20,.03), transparent);
          transform: translateX(-100%);
          animation: techSweep 7s ease-in-out infinite;
        }

        .tech-hero-topbar {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.05rem 1.25rem;
          border-bottom: 1px solid var(--tech-border);
          background: rgba(4,7,10,.58);
          backdrop-filter: blur(18px);
        }

        .tech-hero-brand {
          display: flex;
          align-items: center;
          gap: .75rem;
          min-width: 0;
        }

        .tech-window-dots {
          display: flex;
          gap: .38rem;
          flex: 0 0 auto;
        }

        .tech-window-dots span {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #3f3f46;
        }

        .tech-hero-title-wrap {
          min-width: 0;
        }

        .tech-hero-eyebrow {
          margin: 0;
          font: 600 .63rem/1.2 ui-monospace, SFMono-Regular, Menlo, monospace;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: var(--tech-accent);
          text-shadow: 0 0 10px rgba(57,255,20,.18);
        }

        .tech-hero-title {
          margin: .35rem 0 0;
          font-size: clamp(1rem, 2vw, 1.15rem);
          font-weight: 650;
          letter-spacing: -.02em;
          color: var(--tech-text);
        }

        .tech-live-badge {
          display: inline-flex;
          align-items: center;
          gap: .45rem;
          flex: 0 0 auto;
          padding: .45rem .65rem;
          border: 1px solid rgba(57,255,20,.25);
          border-radius: 999px;
          background: rgba(57,255,20,.06);
          color: var(--tech-terminal-green-soft);
          font: 700 .58rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        .tech-live-badge i,
        .tech-topology-node i {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: var(--tech-accent);
          box-shadow: 0 0 16px rgba(57,255,20,.65);
          animation: techPulse 1.9s ease-in-out infinite;
        }

        .tech-hero-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0,1.05fr) minmax(320px,.95fr);
          min-height: 510px;
        }

        .tech-terminal-column {
          padding: 1.25rem;
          border-right: 1px solid var(--tech-border);
        }

        .tech-terminal {
          overflow: hidden;
          height: 100%;
          min-height: 460px;
          border: 1px solid rgba(57,255,20,.14);
          border-radius: 22px;
          background:
            linear-gradient(180deg, rgba(3,6,9,.95), rgba(6,10,14,.98));
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.018),
            0 0 35px rgba(57,255,20,.04);
          animation: techPanelGlow 6s ease-in-out infinite;
        }

        .tech-terminal-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: .85rem 1rem;
          border-bottom: 1px solid rgba(57,255,20,.12);
          background: rgba(57,255,20,.015);
        }

        .tech-terminal-name {
          font: 600 .6rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: var(--tech-terminal-green-soft);
        }

        .tech-terminal-status {
          color: var(--tech-accent);
          text-shadow: 0 0 10px rgba(57,255,20,.3);
          font: 600 .58rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
        }

        .tech-terminal-body {
          position: relative;
          min-height: 310px;
          padding: 1.15rem 1.15rem 1rem;
          font: 500 .78rem/1.9 ui-monospace, SFMono-Regular, Menlo, monospace;
          color: var(--tech-terminal-green);
          text-shadow: 0 0 8px rgba(57,255,20,.08);
        }

        .tech-terminal-body::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(57,255,20,.75), transparent);
          animation: techScanner 5.5s linear infinite;
        }

        .tech-terminal-line {
          display: block;
          margin: 0;
          opacity: 0;
          transform: translateY(7px);
          color: var(--tech-terminal-green);
          animation: techTerminalLine 8s ease-in-out infinite;
        }

        .tech-terminal-line + .tech-terminal-line {
          margin-top: .26rem;
        }

        .tech-terminal-line:nth-child(1) { animation-delay: 0s; }
        .tech-terminal-line:nth-child(2) { animation-delay: .7s; }
        .tech-terminal-line:nth-child(3) { animation-delay: 1.4s; }
        .tech-terminal-line:nth-child(4) { animation-delay: 2.1s; }
        .tech-terminal-line:nth-child(5) { animation-delay: 2.8s; }
        .tech-terminal-line:nth-child(6) { animation-delay: 3.5s; }
        .tech-terminal-line:nth-child(7) { animation-delay: 4.2s; }

        .tech-prompt {
          color: var(--tech-accent);
          text-shadow: 0 0 10px rgba(57,255,20,.25);
        }

        .tech-ok {
          color: var(--tech-terminal-green-soft);
        }

        .tech-info {
          color: #8cff8c;
        }

        .tech-dim {
          color: var(--tech-terminal-green-dim);
        }

        .tech-terminal-cursor {
          display: inline-block;
          margin-left: .2rem;
          color: var(--tech-accent);
          animation: techBlink .9s steps(1) infinite;
        }

        .tech-pipeline {
          margin: 0 1.15rem 1.15rem;
          padding: .9rem;
          border: 1px solid rgba(57,255,20,.10);
          border-radius: 16px;
          background: rgba(57,255,20,.018);
        }

        .tech-pipeline-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: .85rem;
        }

        .tech-pipeline-head span:first-child {
          font-size: .78rem;
          color: var(--tech-terminal-green-soft);
        }

        .tech-pipeline-head span:last-child {
          font: 600 .54rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #7de67d;
        }

        .tech-pipeline-track {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: .45rem;
        }

        .tech-pipeline-track::before,
        .tech-pipeline-track::after {
          content: "";
          position: absolute;
          left: 5%;
          right: 5%;
          top: 14px;
          height: 1px;
        }

        .tech-pipeline-track::before {
          background: rgba(57,255,20,.22);
        }

        .tech-pipeline-track::after {
          right: auto;
          width: 90%;
          background: linear-gradient(
            90deg,
            var(--tech-accent),
            var(--tech-terminal-green-soft),
            var(--tech-accent-2)
          );
          transform-origin: left;
          animation: techPipelineFlow 6.5s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(57,255,20,.25);
        }

        .tech-pipeline-step {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .tech-pipeline-step b {
          display: grid;
          place-items: center;
          width: 29px;
          height: 29px;
          border: 1px solid rgba(57,255,20,.35);
          border-radius: 999px;
          background: #071015;
          color: var(--tech-terminal-green-soft);
          font: 600 .58rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
          box-shadow:
            0 0 0 5px rgba(7,11,16,.9),
            0 0 15px rgba(57,255,20,.08);
        }

        .tech-pipeline-step span {
          margin-top: .55rem;
          color: #76da76;
          font: 600 .54rem/1.2 ui-monospace, SFMono-Regular, Menlo, monospace;
          letter-spacing: .10em;
          text-transform: uppercase;
        }

        .tech-topology-column {
          display: flex;
          flex-direction: column;
          padding: 1.25rem;
        }

        .tech-topology-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .tech-topology-head p,
        .tech-topology-head h3 {
          margin: 0;
        }

        .tech-topology-head p {
          color: #76da76;
          font: 600 .58rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
          letter-spacing: .18em;
          text-transform: uppercase;
        }

        .tech-topology-head h3 {
          margin-top: .35rem;
          color: var(--tech-text);
          font-size: 1rem;
          letter-spacing: -.02em;
        }

        .tech-cloud-badge {
          padding: .42rem .58rem;
          border: 1px solid rgba(57,255,20,.14);
          border-radius: 999px;
          color: var(--tech-terminal-green-soft);
          font: 600 .54rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .tech-topology {
          position: relative;
          flex: 1;
          min-height: 330px;
          overflow: hidden;
          border: 1px solid rgba(57,255,20,.10);
          border-radius: 20px;
          background:
            radial-gradient(circle at center, rgba(57,255,20,.03), transparent 55%),
            rgba(0,0,0,.12);
        }

        .tech-topology svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .tech-link {
          fill: none;
          stroke: rgba(57,255,20,.42);
          stroke-width: 1.35;
          stroke-dasharray: 7 10;
          animation: techDash 1.3s linear infinite;
        }

        .tech-flow-dot {
          fill: var(--tech-accent);
          filter: drop-shadow(0 0 7px rgba(57,255,20,.85));
        }

        .tech-topology-node {
          position: absolute;
          display: flex;
          align-items: center;
          gap: .48rem;
          min-width: 108px;
          padding: .7rem .75rem;
          border: 1px solid rgba(57,255,20,.12);
          border-radius: 14px;
          background: rgba(7,12,17,.92);
          box-shadow: 0 14px 35px rgba(0,0,0,.18);
          backdrop-filter: blur(12px);
        }

        .tech-topology-node strong,
        .tech-topology-node span {
          display: block;
        }

        .tech-topology-node strong {
          color: #e9ffe9;
          font-size: .68rem;
          font-weight: 650;
        }

        .tech-topology-node span {
          margin-top: .16rem;
          color: #76da76;
          font: 500 .52rem/1.2 ui-monospace, SFMono-Regular, Menlo, monospace;
          text-transform: uppercase;
        }

        .tech-node-engineer { left: 5%; top: 43%; }
        .tech-node-aws { left: 35%; top: 12%; }
        .tech-node-azure { left: 35%; bottom: 12%; }
        .tech-node-k8s { right: 5%; top: 22%; }
        .tech-node-grafana { right: 5%; bottom: 20%; }

        .tech-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: .65rem;
          margin-top: .8rem;
        }

        .tech-metric {
          padding: .72rem .75rem;
          border: 1px solid rgba(57,255,20,.09);
          border-radius: 13px;
          background: rgba(57,255,20,.014);
        }

        .tech-metric span,
        .tech-metric strong {
          display: block;
        }

        .tech-metric span {
          color: #76da76;
          font: 600 .5rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .tech-metric strong {
          margin-top: .45rem;
          color: #caffca;
          font-size: .68rem;
          font-weight: 600;
        }

        .tech-metric strong em {
          color: var(--tech-accent);
          font-style: normal;
        }

        @keyframes techGridMove {
          from { background-position: 0 0; }
          to { background-position: 52px 52px; }
        }

        @keyframes techSweep {
          0%, 20% { transform: translateX(-100%); opacity: 0; }
          38% { opacity: 1; }
          70%, 100% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes techPulse {
          0%, 100% { transform: scale(1); opacity: .55; }
          50% { transform: scale(1.35); opacity: 1; }
        }

        @keyframes techPanelGlow {
          0%, 100% {
            border-color: rgba(57,255,20,.10);
            box-shadow: 0 0 0 rgba(57,255,20,0);
          }
          50% {
            border-color: rgba(57,255,20,.22);
            box-shadow: 0 0 40px rgba(57,255,20,.05);
          }
        }

        @keyframes techScanner {
          from { transform: translateY(0); opacity: 0; }
          10% { opacity: .7; }
          90% { opacity: .12; }
          to { transform: translateY(305px); opacity: 0; }
        }

        @keyframes techTerminalLine {
          0%, 6% { opacity: 0; transform: translateY(7px); }
          14%, 78% { opacity: 1; transform: translateY(0); }
          90%, 100% { opacity: .35; transform: translateY(0); }
        }

        @keyframes techBlink {
          0%, 48% { opacity: 1; }
          49%, 100% { opacity: 0; }
        }

        @keyframes techPipelineFlow {
          0% { transform: scaleX(0); opacity: .25; }
          15% { opacity: 1; }
          75%, 100% { transform: scaleX(1); opacity: 1; }
        }

        @keyframes techDash {
          to { stroke-dashoffset: -34; }
        }

        @media (max-width: 980px) {
          .tech-hero-grid {
            grid-template-columns: 1fr;
          }

          .tech-terminal-column {
            border-right: 0;
            border-bottom: 1px solid var(--tech-border);
          }

          .tech-terminal {
            min-height: 420px;
          }

          .tech-topology {
            min-height: 360px;
          }
        }

        @media (max-width: 640px) {
          .tech-hero-shell {
            margin-top: 1.5rem;
            border-radius: 22px;
          }

          .tech-hero-topbar {
            align-items: flex-start;
            padding: .95rem 1rem;
          }

          .tech-window-dots {
            display: none;
          }

          .tech-live-badge {
            padding: .38rem .5rem;
            font-size: .5rem;
          }

          .tech-terminal-column,
          .tech-topology-column {
            padding: .8rem;
          }

          .tech-terminal {
            min-height: 390px;
            border-radius: 16px;
          }

          .tech-terminal-body {
            min-height: 285px;
            padding: .95rem;
            font-size: .68rem;
          }

          .tech-pipeline {
            margin: 0 .95rem .95rem;
            padding: .75rem;
          }

          .tech-pipeline-step span {
            font-size: .46rem;
            letter-spacing: .06em;
          }

          .tech-topology {
            min-height: 330px;
          }

          .tech-topology-node {
            min-width: 88px;
            padding: .58rem .62rem;
          }

          .tech-topology-node strong {
            font-size: .59rem;
          }

          .tech-topology-node span {
            font-size: .44rem;
          }

          .tech-node-engineer { left: 3%; }
          .tech-node-aws,
          .tech-node-azure { left: 34%; }
          .tech-node-k8s,
          .tech-node-grafana { right: 3%; }

          .tech-metrics {
            gap: .45rem;
          }

          .tech-metric {
            padding: .6rem;
          }
        }

        /* -------------------------------------------------------
           ENGINEERING STACK — CLASSIC TERMINAL GREEN
           Keeps the existing layout, but brings the entire stack
           section into the same green computer aesthetic.
        ------------------------------------------------------- */

        .skills-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 82% 18%, rgba(57,255,20,.035), transparent 30%),
            radial-gradient(circle at 18% 82%, rgba(0,255,127,.025), transparent 26%);
        }

        .skills-section::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .14;
          background-image:
            linear-gradient(rgba(57,255,20,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57,255,20,.055) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
          animation: techGridMove 20s linear infinite;
        }

        .skills-section > .container {
          position: relative;
          z-index: 1;
        }

        .skills-section .section-heading {
          border-color: rgba(57,255,20,.10);
        }

        .skills-section .section-heading .eyebrow,
        .skills-section .section-heading .eyebrow span {
          color: #39ff14 !important;
          text-shadow: 0 0 10px rgba(57,255,20,.16);
        }

        .skills-section .section-heading h2 {
          color: #d7ffe0;
          text-shadow: 0 0 18px rgba(57,255,20,.045);
        }

        .skills-section .section-description {
          color: #78a97d;
        }

        .skills-section .skills-list {
          border-color: rgba(57,255,20,.11);
        }

        .skills-section .skill-row {
          position: relative;
          border-color: rgba(57,255,20,.11);
          transition:
            background-color .25s ease,
            border-color .25s ease,
            transform .25s ease,
            box-shadow .25s ease;
        }

        .skills-section .skill-row::before {
          content: "";
          position: absolute;
          left: 0;
          top: 16%;
          bottom: 16%;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(57,255,20,.34),
            transparent
          );
          opacity: 0;
          transition: opacity .25s ease;
        }

        .skills-section .skill-row:hover {
          background: rgba(57,255,20,.018);
          border-color: rgba(57,255,20,.20);
          box-shadow: inset 0 0 34px rgba(57,255,20,.016);
        }

        .skills-section .skill-row:hover::before {
          opacity: 1;
        }

        .skills-section .skill-index {
          color: #39ff14;
          text-shadow: 0 0 9px rgba(57,255,20,.20);
        }

        .skills-section .skill-row h3 {
          color: #caffca;
          transition: color .25s ease, text-shadow .25s ease;
        }

        .skills-section .skill-row:hover h3 {
          color: #8cff8c;
          text-shadow: 0 0 12px rgba(57,255,20,.11);
        }

        .skills-section .skill-row p {
          color: #6f9b74;
        }

        .skills-section .tags {
          gap: .45rem;
        }

        .skills-section .tag {
          border-color: rgba(57,255,20,.15);
          background: rgba(57,255,20,.022);
          color: #84dc84;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          transition:
            color .22s ease,
            border-color .22s ease,
            background-color .22s ease,
            box-shadow .22s ease,
            transform .22s ease;
        }

        .skills-section .tag:hover {
          color: #baffba;
          border-color: rgba(57,255,20,.34);
          background: rgba(57,255,20,.055);
          box-shadow:
            0 0 0 1px rgba(57,255,20,.025),
            0 0 18px rgba(57,255,20,.07);
          transform: translateY(-1px);
        }



        /* -------------------------------------------------------
           THE TOOLKIT — NEON COMPUTER GREEN
        ------------------------------------------------------- */

        .stack-ribbon {
          border-color: rgba(57,255,20,.11) !important;
          background:
            linear-gradient(180deg, rgba(57,255,20,.012), rgba(57,255,20,.006)),
            rgba(5,10,14,.96) !important;
          box-shadow:
            inset 0 1px 0 rgba(57,255,20,.025),
            inset 0 -1px 0 rgba(57,255,20,.025);
        }

        .stack-ribbon > .container > span {
          color: #39ff14 !important;
          text-shadow: 0 0 10px rgba(57,255,20,.17);
        }

        .stack-ribbon > .container > div > span {
          color: #8cff8c !important;
          text-shadow: 0 0 8px rgba(57,255,20,.07);
          transition:
            color .22s ease,
            text-shadow .22s ease,
            transform .22s ease;
        }

        .stack-ribbon > .container > div > span:hover {
          color: #caffca !important;
          text-shadow: 0 0 14px rgba(57,255,20,.18);
          transform: translateY(-1px);
        }

        /* -------------------------------------------------------
           GREEN ACCENT — NAV, HERO IDENTITY, CONTACT & RESUME LINK
        ------------------------------------------------------- */

        .nav-contact {
          color: #baffba !important;
          border-color: rgba(57,255,20,.30) !important;
          background: rgba(57,255,20,.025) !important;
          box-shadow: inset 0 0 18px rgba(57,255,20,.018);
          transition:
            color .22s ease,
            border-color .22s ease,
            background-color .22s ease,
            box-shadow .22s ease,
            transform .22s ease !important;
        }

        .nav-contact span {
          color: #39ff14 !important;
          text-shadow: 0 0 10px rgba(57,255,20,.28);
        }

        .nav-contact:hover {
          color: #d9ffd9 !important;
          border-color: rgba(57,255,20,.55) !important;
          background: rgba(57,255,20,.065) !important;
          box-shadow:
            inset 0 0 18px rgba(57,255,20,.035),
            0 0 18px rgba(57,255,20,.065);
          transform: translateY(-1px);
        }

        .hero-intro div > span {
          color: #8cff8c !important;
          text-shadow: 0 0 10px rgba(57,255,20,.10);
        }

        .contact-email {
          color: #8cff8c !important;
          text-shadow: 0 0 9px rgba(57,255,20,.08);
          transition:
            color .22s ease,
            text-shadow .22s ease;
        }

        .contact-email:hover {
          color: #caffca !important;
          text-shadow: 0 0 13px rgba(57,255,20,.18);
        }

        .contact-links {
          color: #8cff8c !important;
        }

        .contact-links a {
          color: #8cff8c !important;
          text-shadow: 0 0 9px rgba(57,255,20,.07);
          transition:
            color .22s ease,
            text-shadow .22s ease;
        }

        .contact-links a:hover {
          color: #caffca !important;
          text-shadow: 0 0 13px rgba(57,255,20,.18);
        }

        .about-copy > .text-link {
          color: #8cff8c !important;
          text-shadow: 0 0 9px rgba(57,255,20,.07);
          transition:
            color .22s ease,
            text-shadow .22s ease,
            transform .22s ease;
        }

        .about-copy > .text-link svg {
          color: #39ff14 !important;
          filter: drop-shadow(0 0 5px rgba(57,255,20,.20));
        }

        .about-copy > .text-link:hover {
          color: #caffca !important;
          text-shadow: 0 0 13px rgba(57,255,20,.17);
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-hero-shell::before,
          .tech-hero-shell::after,
          .tech-live-badge i,
          .tech-topology-node i,
          .tech-terminal,
          .tech-terminal-body::after,
          .tech-terminal-line,
          .tech-terminal-cursor,
          .tech-pipeline-track::after,
          .tech-link,
          .skills-section::before {
            animation: none !important;
          }

          .tech-terminal-line {
            opacity: 1;
            transform: none;
          }

          .tech-pipeline-track::after {
            transform: scaleX(1);
          }
        }
      `}</style>

      <div className="tech-hero-topbar">
        <div className="tech-hero-brand">
          <div className="tech-window-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="tech-hero-title-wrap">
            <p className="tech-hero-eyebrow">Cloud engineering control plane</p>
            <p className="tech-hero-title">From commit to running infrastructure</p>
          </div>
        </div>

        <div className="tech-live-badge">
          <i />
          Systems healthy
        </div>
      </div>

      <div className="tech-hero-grid">
        <div className="tech-terminal-column">
          <div className="tech-terminal">
            <div className="tech-terminal-bar">
              <div className="tech-window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <span className="tech-terminal-name">DEVOPS@PRODUCTION</span>
              <span className="tech-terminal-status">● connected</span>
            </div>

            <div className="tech-terminal-body" aria-hidden="true">
              <p className="tech-terminal-line">
                <span className="tech-prompt">$</span> git push origin main
              </p>

              <p className="tech-terminal-line">
                <span className="tech-ok">✓</span> workflow triggered · checks queued
              </p>

              <p className="tech-terminal-line">
                <span className="tech-ok">✓</span> docker build · image published
              </p>

              <p className="tech-terminal-line">
                <span className="tech-info">↳</span> terraform plan · infrastructure validated
              </p>

              <p className="tech-terminal-line">
                <span className="tech-ok">✓</span> kubernetes rollout · deployment healthy
              </p>

              <p className="tech-terminal-line">
                <span className="tech-info">↳</span> grafana · metrics stream online
              </p>

              <p className="tech-terminal-line">
                <span className="tech-prompt">$</span> observe production
                <span className="tech-terminal-cursor">█</span>
              </p>
            </div>

            <div className="tech-pipeline">
              <div className="tech-pipeline-head">
                <span>Delivery pipeline</span>
                <span>AUTOMATED</span>
              </div>

              <div className="tech-pipeline-track">
                {pipeline.map((step, index) => (
                  <div className="tech-pipeline-step" key={step}>
                    <b>{String(index + 1).padStart(2, "0")}</b>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="tech-topology-column">
          <div className="tech-topology-head">
            <div>
              <p>Infrastructure topology</p>
              <h3>Multi-cloud delivery path</h3>
            </div>

            <span className="tech-cloud-badge">AWS + Azure</span>
          </div>

          <div className="tech-topology">
            <svg viewBox="0 0 520 360" preserveAspectRatio="none" aria-hidden="true">
              <path className="tech-link" d="M85 180 C155 180,145 80,230 80" />
              <path className="tech-link" d="M85 180 C155 180,145 280,230 280" />
              <path className="tech-link" d="M230 80 C310 80,300 125,420 125" />
              <path className="tech-link" d="M230 280 C310 280,300 235,420 235" />
              <path className="tech-link" d="M420 125 C470 150,470 210,420 235" />

              <circle className="tech-flow-dot" r="4">
                <animateMotion
                  dur="4.7s"
                  repeatCount="indefinite"
                  path="M85 180 C155 180,145 80,230 80 C310 80,300 125,420 125"
                />
              </circle>

              <circle className="tech-flow-dot" r="3.5">
                <animateMotion
                  dur="5.3s"
                  begin="1.2s"
                  repeatCount="indefinite"
                  path="M85 180 C155 180,145 280,230 280 C310 280,300 235,420 235"
                />
              </circle>
            </svg>

            <div className="tech-topology-node tech-node-engineer">
              <i />
              <div>
                <strong>Engineer</strong>
                <span>Git / CLI</span>
              </div>
            </div>

            <div className="tech-topology-node tech-node-aws">
              <i />
              <div>
                <strong>AWS</strong>
                <span>Cloud services</span>
              </div>
            </div>

            <div className="tech-topology-node tech-node-azure">
              <i />
              <div>
                <strong>Azure</strong>
                <span>Cloud services</span>
              </div>
            </div>

            <div className="tech-topology-node tech-node-k8s">
              <i />
              <div>
                <strong>Kubernetes</strong>
                <span>Workloads</span>
              </div>
            </div>

            <div className="tech-topology-node tech-node-grafana">
              <i />
              <div>
                <strong>Grafana</strong>
                <span>Observability</span>
              </div>
            </div>
          </div>

          <div className="tech-metrics">
            <div className="tech-metric">
              <span>Cloud</span>
              <strong>AWS + Azure</strong>
            </div>

            <div className="tech-metric">
              <span>Runtime</span>
              <strong>Kubernetes</strong>
            </div>

            <div className="tech-metric">
              <span>Health</span>
              <strong>
                <em>Operational</em>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HomepageMotion />
      <SiteHeader />

      <main id="main-content">
        <section id="home" className="hero">
          <div className="hero-grid" aria-hidden="true" />

          <div className="container hero-inner tech-hero-layout">
            <div className="hero-copy">
              <div className="hero-intro">
                <Image
                  src="/divine-profile.png"
                  alt="Portrait of Nwachukwu Ifeanyi Divine"
                  width={56}
                  height={56}
                  preload
                  className="hero-portrait"
                />

                <div>
                  <p>Nwachukwu Ifeanyi Divine</p>
                  <span>Cloud &amp; DevOps Engineer · Lagos, NG</span>
                </div>
              </div>

              <p className="hero-kicker">
                <span className="status-dot" /> BUILDING ACROSS CLOUDS
              </p>

              <h1 className="tech-visually-hidden">
                Cloud and DevOps Engineer building automated infrastructure,
                delivery pipelines and observable systems across AWS and Azure.
              </h1>

              <TechnologyAnimation />

              <p className="hero-description">
                I build and automate scalable cloud infrastructure, streamline
                CI/CD workflows, and improve system reliability using modern
                DevOps and cloud-native practices.
              </p>

              <div className="hero-stack" aria-label="Core engineering stack">
                {[
                  "AWS",
                  "Azure",
                  "Kubernetes",
                  "Terraform",
                  "Docker",
                  "Grafana",
                  "CI/CD",
                ].map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my work <Icon name="arrow" />
                </a>

                <a
                  className="button button-secondary"
                  href="/resume.pdf"
                  download="Nwachukwu-Ifeanyi-Divine-Resume.pdf"
                >
                  Download résumé <Icon name="download" />
                </a>
              </div>

              <div className="hero-socials">
                <a href={github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>

                <a href={linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>

                <span className="hero-location">
                  <Icon name="globe" /> Lagos, Nigeria
                </span>
              </div>
            </div>
          </div>

          <div className="container hero-bottom">
            <span>CODE. CLOUD. CONTINUOUS IMPROVEMENT.</span>

            <a href="#projects">
              SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <div className="stack-ribbon">
          <div className="container">
            <span>THE TOOLKIT</span>

            <div>
              {[
                "AWS",
                "Microsoft Azure",
                "Docker",
                "Kubernetes",
                "Terraform",
                "GitHub Actions",
                "Grafana",
                "Linux",
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <section id="projects" className="section container">
          <SectionHeading
            number="01"
            label="SELECTED WORK"
            title="Built to solve. Designed to operate."
            description="A closer look at the tools, cloud applications, and infrastructure I’m building—and the decisions behind them."
          />

          <article className="featured-project">
            <div className="featured-copy">
              <div className="project-meta">
                <span>01 / DEVELOPER TOOLING</span>

                <span className="project-status">
                  <i /> In development
                </span>
              </div>

              <div className="project-wordmark">
                <span className="project-symbol">
                  <Icon name="terminal" />
                </span>

                <h3>Iceman</h3>
              </div>

              <h4>
                DevOps, with the
                <br />
                operator in control.
              </h4>

              <p>
                A natural-language DevOps CLI that connects project inspection
                and diagnostics with command previews, approval gates, and live
                operational evidence.
              </p>

              <Tags
                items={["Python", "Docker", "Linux", "DevOps automation"]}
              />

              <Link className="text-link" href="/projects/iceman">
                Inside the build <Icon name="arrow" />
              </Link>
            </div>

            <div className="featured-art">
              <div className="project-orbit" aria-hidden="true" />
              <IcemanVisual />

              <div className="art-footnote">
                <Icon name="shield" /> Context before commands. Evidence after
                execution.
              </div>
            </div>
          </article>

          <div className="project-grid">
            <article className="project-card">
              <StorageVisual />

              <div className="project-card-body">
                <div className="project-meta">
                  <span>02 / AWS FILE STORAGE</span>
                  <Icon name="cloud" />
                </div>

                <h3>
                  CloudDrop<span className="project-period">.</span>
                </h3>

                <p>
                  Connecting the file experience to the cloud architecture
                  behind it. AWS-focused storage and delivery, built as one
                  complete application workflow.
                </p>

                <Tags items={["AWS", "File storage", "Cloud architecture"]} />

                <Link className="text-link" href="/projects/clouddrop">
                  Explore the architecture <Icon name="arrow" />
                </Link>
              </div>
            </article>

            <article className="project-card">
              <StorageVisual azure />

              <div className="project-card-body">
                <div className="project-meta">
                  <span>03 / AZURE FILE PLATFORM</span>
                  <Icon name="cloud" />
                </div>

                <h3>
                  AzureDrop<span className="project-period">.</span>
                </h3>

                <p>
                  Authenticated uploads, downloads, and share links. Azure Blob
                  Storage connected to a Node.js/Express backend and PostgreSQL.
                </p>

                <Tags
                  items={["Azure Blob Storage", "Express", "PostgreSQL"]}
                />

                <Link className="text-link" href="/projects/azuredrop">
                  Explore the architecture <Icon name="arrow" />
                </Link>
              </div>
            </article>
          </div>

          <article className="minerva-project">
            <div className="minerva-copy">
              <div className="project-meta">
                <span>04 / OBSERVABILITY &amp; OPERATIONS</span>
              </div>

              <h3>
                Minerva Sentinel<span className="project-period">.</span>
              </h3>

              <p>
                From infrastructure signals to incident response. A hybrid-cloud
                monitoring platform that brings hosts, containers, metrics, and
                operational events into one view.
              </p>

              <Tags
                items={[
                  "AWS / EKS",
                  "Docker",
                  "GitHub Actions",
                  "PostgreSQL",
                ]}
              />

              <Link className="text-link" href="/projects/minerva-sentinel">
                Read the engineering story <Icon name="arrow" />
              </Link>
            </div>

            <ObservabilityVisual />
          </article>

          <div className="lab-heading">
            <span className="eyebrow">ALSO IN THE WORKSHOP</span>
            <p>The infrastructure behind the applications.</p>
          </div>

          <div className="lab-grid">
            <a
              className="lab-card"
              href="https://github.com/Semicrypt/nodejs-docker-app"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="box" />
              <h3>Containerized Node.js</h3>
              <p>
                Docker images, Compose workflows, and repeatable application
                environments.
              </p>
              <span>View repository ↗</span>
            </a>

            <Link
              className="lab-card"
              href="/projects/minerva-sentinel#architecture"
            >
              <Icon name="layers" />
              <h3>Kubernetes &amp; EKS</h3>
              <p>
                Workload deployments, service networking, and database
                connectivity in the Minerva build.
              </p>
              <span>Explore the deployment →</span>
            </Link>

            <a className="lab-card" href="#skills">
              <Icon name="code" />
              <h3>Terraform &amp; automation</h3>
              <p>
                Infrastructure as code, cloud networking, and environment
                configuration practice.
              </p>
              <span>View engineering stack ↓</span>
            </a>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <SectionHeading
              number="02"
              label="ENGINEERING STACK"
              title="Tools with a purpose."
              description="Across application code, infrastructure, and operations. The stack changes; the focus on clear, repeatable systems stays."
            />

            <div className="skills-list">
              {skillGroups.map((group, index) => (
                <article key={group.title} className="skill-row">
                  <span className="skill-index">0{index + 1}</span>

                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>

                  <Tags items={group.items} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section container about-section">
          <div className="about-portrait">
            <Image
              src="/divine-profile.png"
              alt="Nwachukwu Ifeanyi Divine"
              width={727}
              height={728}
              sizes="(max-width: 700px) 80vw, 360px"
            />

            <div className="portrait-caption">
              <span>N. IFEANYI DIVINE</span>
              <span>LAGOS, NG ↗</span>
            </div>
          </div>

          <div className="about-copy">
            <p className="eyebrow">
              <span>03</span> THE ENGINEER BEHIND THE BUILDS
            </p>

            <h2>
              Curious by nature.
              <br />
              <span>Hands-on by default.</span>
            </h2>

            <p>
              I’m a Cloud and DevOps Engineer with a Computer Science
              background. I like understanding the whole system: the
              application, the infrastructure it runs on, and what happens when
              something breaks.
            </p>

            <p>
              My work brings AWS, Azure, containers, automation, and
              observability together through practical projects. I care about
              systems that are repeatable, understandable, and easier for the
              next engineer to operate.
            </p>

            <div className="about-principles">
              <span>
                <Icon name="code" /> Build with context
              </span>

              <span>
                <Icon name="activity" /> Make it observable
              </span>

              <span>
                <Icon name="shield" /> Keep control visible
              </span>
            </div>

            <a
              className="text-link"
              href="/resume.pdf"
              download="Nwachukwu-Ifeanyi-Divine-Resume.pdf"
            >
              Download The full résumé <Icon name="download" />
            </a>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="container experience-layout">
            <div>
              <p className="eyebrow">
                <span>04</span> EXPERIENCE &amp; FOUNDATION
              </p>

              <h2>
                Learning by
                <br />
                building.
              </h2>

              <p className="section-description">
                Practical engineering experience, a Computer Science foundation,
                and a workshop that keeps growing.
              </p>
            </div>

            <div className="timeline">
              <article>
                <div className="timeline-top">
                  <span className="eyebrow">INDEPENDENT ENGINEERING</span>
                  <span>Ongoing</span>
                </div>

                <h3>Cloud &amp; DevOps Projects</h3>

                <p>
                  Building Iceman, CloudDrop, AzureDrop, and Minerva Sentinel
                  across cloud infrastructure, containers, CI/CD, monitoring,
                  and application delivery.
                </p>
              </article>

              <article>
                <div className="timeline-top">
                  <span className="eyebrow">WHINZET DIGITAL ID LIMITED</span>
                  <span>Jan — Oct 2025</span>
                </div>

                <h3>Junior Cloud &amp; Network Engineer</h3>

                <span className="timeline-type">
                  Industrial Training Placement
                </span>

                <p>
                  Supported cloud and network engineering activities,
                  infrastructure troubleshooting, deployment workflows, and
                  technical operations.
                </p>
              </article>

              <div id="education" className="education">
                <p className="eyebrow">
                  EDUCATION / WESLEY UNIVERSITY, ONDO
                </p>

                <div>
                  <h3>B.Sc. (Hons) Computer Science</h3>
                  <span>2023 — 2026</span>
                </div>

                <p>
                  Software development, databases, networks, operating systems,
                  and systems analysis.
                </p>

                <div>
                  <h3>M.Sc. Computer Science</h3>
                  <span>2027 — Expected 2028</span>
                </div>

                <p>Planned academic progression in Computer Science.</p>
              </div>

              <div id="training" className="education">
                <p className="eyebrow">CONTINUOUS LEARNING</p>

                <div>
                  <h3>TechCrush · Cloud Computing &amp; DevOps</h3>
                  <span>Jul — Sep 2026</span>
                </div>

                <p>Completed · Certificate received</p>

                <div>
                  <h3>TechSphere Academy · Cloud Computing</h3>
                  <span>Oct 2026 — Jan 2027</span>
                </div>

                <p>Enrolled · Program begins October 2026</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-grid" aria-hidden="true" />

          <div className="container contact-inner">
            <p className="eyebrow">
              <span className="status-dot" /> LET’S BUILD SOMETHING USEFUL
            </p>

            <h2>
              Your next challenge.
              <br />
              <span>My next deep dive.</span>
            </h2>

            <p>
              Have a cloud, infrastructure, or DevOps opportunity?
              <br />
              Let’s talk about what we can build.
            </p>

            <a
              className="button button-primary"
              href={email}
              target="_blank"
              rel="noreferrer"
            >
              Start a conversation <Icon name="arrow" />
            </a>

            <a
              className="contact-email"
              href={email}
              target="_blank"
              rel="noreferrer"
            >
              nifeanyidivine@gmail.com ↗
            </a>

            <div className="contact-links">
              <a href={github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>

              <a href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
