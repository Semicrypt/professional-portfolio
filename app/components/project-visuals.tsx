"use client";

import { useRef } from "react";
import { Icon } from "./icons";
import { usePreviewMotion } from "./use-preview-motion";
import styles from "./project-visuals.module.css";

const icemanSteps = [
  { title: "Understand the request", command: "Why is my API container unhealthy?", lines: ["Natural-language intent received", "Starting with project context"] },
  { title: "Inspect the project", command: "docker compose ps", lines: ["Compose stack detected · api / database", "api: unhealthy · database: running"] },
  { title: "Collect diagnostic evidence", command: "docker compose logs --tail=20 api", lines: ["Health probe is not ready", "Review runtime logs before changing state"] },
  { title: "Preview the exact command", command: "docker compose restart api", lines: ["Proposed action: restart the API service", "Approval required · nothing executed"] },
  { title: "Execute the approved sample", command: "docker compose restart api", lines: ["Demo approval received", "Sample API container restart completed"] },
  { title: "Inspect the resulting evidence", command: "curl -fsS http://localhost:3000/health", lines: ["Example response: HTTP 200", "Evidence: service running · health check passed"] },
];

function PreviewToggle({ paused, reduced, globalPaused, toggle, name }: {
  paused: boolean; reduced: boolean; globalPaused: boolean; toggle: () => void; name: string;
}) {
  return <button className={styles.toggle} disabled={reduced || globalPaused}
    aria-label={(paused ? "Resume " : "Pause ") + name + " preview"} onClick={toggle}>
    {reduced || globalPaused ? "Static" : paused ? "▷" : "Ⅱ"}
  </button>;
}

export function IcemanVisual() {
  const previewRef = useRef<HTMLDivElement>(null);
  const motion = usePreviewMotion(previewRef, icemanSteps.length, 3800, 3);
  const step = icemanSteps[motion.index];
  const gate = motion.index === 3;
  const next = () => {
    motion.setIndex((motion.index + 1) % icemanSteps.length);
    motion.setPaused(!gate && motion.index !== 5);
  };

  return <div ref={previewRef} className={styles.iceman} data-running={motion.running} data-gate={gate}>
    <div className={styles.titlebar}><span><Icon name="terminal"/> ICEMAN / WORKSPACE</span><PreviewToggle {...motion} name="Iceman" toggle={() => motion.setPaused(!motion.paused)}/></div>
    <div className={styles.demoLabel}>INTERACTIVE WORKFLOW PREVIEW · SAMPLE OUTPUT</div>
    <div className={styles.request}><span>❯</span><p>“Why is my container unhealthy?”</p></div>
    <div className={styles.stepTitle}><span>0{motion.index + 1} / 06</span><strong>{step.title}</strong></div>
    <div className={styles.commandPanel}>
      <div className={styles.commandLabel}><span>{gate ? "PROPOSED COMMAND" : motion.index === 0 ? "INTENT" : "EXAMPLE TERMINAL"}</span><Icon name={gate ? "shield" : "terminal"}/></div>
      <code>{step.command}</code>
      <div className={styles.icemanLogs} key={motion.index}>{step.lines.map((line, index) => <p key={line}><span>{gate ? "·" : index === 0 ? "›" : "↳"}</span>{line}</p>)}</div>
    </div>
    <div className={styles.approvalRow}>
      <span className={gate ? styles.gateStatus : styles.stepStatus}><Icon name={gate ? "shield" : "activity"}/>{gate ? "Waiting for your demo approval" : "No real commands are executed"}</span>
      <button className={gate ? styles.approveButton : styles.nextButton} onClick={next}>{gate ? "Approve demo command" : motion.index === 5 ? "Replay demo ↻" : "Next sample step →"}</button>
    </div>
    <div className={styles.icemanProgress} aria-hidden="true">{["Inspect", "Diagnose", "Approve", "Evidence"].map((label, index) => <span className={Math.min(3, Math.max(0, motion.index - 1)) === index ? styles.active : undefined} key={label}><i/>{label}</span>)}</div>
  </div>;
}

const awsSteps = ["Upload prepared", "Object entering storage", "File delivery requested", "Delivery complete"];
const azureSteps = ["Authenticated request", "Upload to Blob Storage", "Application data connected", "Share link ready"];

export function StorageVisual({ azure = false }: { azure?: boolean }) {
  const previewRef = useRef<HTMLDivElement>(null);
  const motion = usePreviewMotion(previewRef, 4, 3600);
  const steps = azure ? azureSteps : awsSteps;
  return <div ref={previewRef} className={styles.storage + " " + (azure ? styles.azure : styles.aws)} data-running={motion.running}>
    <div className={styles.storageTitle}><span>{azure ? "AZUREDROP / FILE PLATFORM" : "CLOUDDROP / AWS STORAGE"}</span><PreviewToggle {...motion} name={azure ? "AzureDrop" : "CloudDrop"} toggle={() => motion.setPaused(!motion.paused)}/></div>
    <p className={styles.storageCaption}>Illustrative {azure ? "authenticated file workflow" : "object-storage and delivery flow"}</p>
    <div className={styles.storageMap} aria-hidden="true">
      <svg viewBox="0 0 600 142" preserveAspectRatio="none"><path d="M75 56H300H525M300 56V123H525"/><path className={styles.storagePackets} d="M75 56H300H525M300 56V123H525"/></svg>
      <div className={styles.storageSource}><Icon name={azure ? "shield" : "code"}/><span>{azure ? "Signed-in user" : "Upload client"}</span></div>
      <div className={styles.storageCore}><Icon name={azure ? "code" : "layers"}/><strong>{azure ? "Express API" : "AWS storage"}</strong>{!azure && <div className={styles.objectBlocks}><i/><i/><i/></div>}</div>
      <div className={styles.storageTarget}><Icon name={azure ? "cloud" : "download"}/><span>{azure ? "Blob Storage" : "File delivery"}</span></div>
      <div className={styles.storageData}><Icon name={azure ? "layers" : "box"}/><span>{azure ? "PostgreSQL" : "Stored objects"}</span><i/></div>
      <div className={styles.movingObject}><Icon name="box"/></div>
    </div>
    <div className={styles.transfer}><Icon name={azure && motion.index === 3 ? "shield" : "box"}/><div><span>{azure && motion.index === 3 ? "file-share / access link" : "design-assets.zip"}</span><div className={styles.transferTrack}><i style={{ width: ((motion.index + 1) / 4 * 100) + "%" }}/></div></div><span>{String(motion.index + 1).padStart(2, "0")} / 04</span></div>
    <div className={styles.storageFooter}><span><i/>{steps[motion.index]}</span><span>SAMPLE FLOW</span></div>
  </div>;
}

const monitorFrames = [
  { cpu: 23, latency: 82, status: "Observing", color: "normal", event: "Host agent → metrics received", detail: "Baseline signals visible" },
  { cpu: 68, latency: 146, status: "Detected", color: "warning", event: "Threshold crossed → incident opened", detail: "Review the supporting logs" },
  { cpu: 41, latency: 105, status: "Acknowledged", color: "warning", event: "Incident acknowledged in timeline", detail: "Investigation in progress" },
  { cpu: 24, latency: 84, status: "Resolved", color: "normal", event: "Signals recovered → incident resolved", detail: "Resolution added to event timeline" },
];

export function ObservabilityVisual() {
  const previewRef = useRef<HTMLDivElement>(null);
  const motion = usePreviewMotion(previewRef, monitorFrames.length, 4300);
  const frame = monitorFrames[motion.index];
  return <div ref={previewRef} className={styles.monitoring} data-running={motion.running} data-health={frame.color}>
    <div className={styles.titlebar}><span><Icon name="activity"/> MINERVA / OBSERVABILITY</span><PreviewToggle {...motion} name="Minerva Sentinel" toggle={() => motion.setPaused(!motion.paused)}/></div>
    <div className={styles.monitorHeading}><span>SAMPLE METRICS · ILLUSTRATIVE INCIDENT</span><span className={styles.health}><i/>{frame.status}</span></div>
    <div className={styles.monitorMetrics}><div><span>CPU usage</span><strong>{frame.cpu}<small>%</small></strong></div><div><span>Request latency</span><strong>{frame.latency}<small>ms</small></strong></div><div className={styles.hostHealth}><span>Example host</span><strong><i/>{frame.color === "warning" ? "Review" : "Healthy"}</strong></div></div>
    <div className={styles.monitorChart} aria-hidden="true"><span>METRICS / ROLLING WINDOW</span><svg viewBox="0 0 600 100" preserveAspectRatio="none"><path className={styles.chartGrid} d="M0 20H600M0 50H600M0 80H600M100 0V100M200 0V100M300 0V100M400 0V100M500 0V100"/><path className={styles.baseline} d="M0 70 40 65 65 68 90 50 115 55 140 60 165 56 195 45 220 55 245 15 260 70 280 62 310 65 335 45 360 50 390 42 415 62 445 48 475 68 510 52 540 58 570 30 600 37"/><path className={styles.secondaryLine} d="M0 86 60 84 90 78 120 82 180 75 220 80 260 60 300 75 360 72 400 79 430 70 460 78 500 73 550 63 600 67"/></svg><i className={styles.chartSweep}/></div>
    <div className={styles.monitorLog} key={motion.index}><p><span>EVENT</span>{frame.event}</p><p><span>DETAIL</span>{frame.detail}</p></div>
    <div className={styles.incidentStages} aria-hidden="true">{["Observe", "Detect", "Acknowledge", "Resolve"].map((label, index) => <span key={label} className={index === motion.index ? styles.active : undefined}><i/>{label}</span>)}</div>
  </div>;
}
