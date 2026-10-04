"use client";

import { useRef, useState } from "react";
import { Icon, type IconName } from "./icons";
import { usePreviewMotion } from "./use-preview-motion";
import styles from "./operations-console.module.css";

const stages: { name: string; icon: IconName; command: string; logs: string[]; status: string }[] = [
  { name: "Commit", icon: "branch", command: "git push origin main", logs: ["main → origin/main · source received", "GitHub Actions · delivery workflow queued", "Preparing an isolated build environment"], status: "Workflow queued" },
  { name: "Build", icon: "box", command: "docker build -t app:preview .", logs: ["[build 1/2] COPY application source", "[build 2/2] RUN npm ci --omit=dev", "exporting layers · image ready"], status: "Container image ready" },
  { name: "Test", icon: "shield", command: "npm test && curl -fsS http://localhost:3000/health", logs: ["Application checks completed", "Health endpoint · HTTP 200", "Deployment configuration reviewed"], status: "Checks complete" },
  { name: "Deploy", icon: "cloud", command: "kubectl rollout status deployment/app", logs: ["Waiting for rollout to finish…", "Updated replicas are available", "deployment \"app\" successfully rolled out"], status: "Rollout complete" },
  { name: "Monitor", icon: "activity", command: "kubectl top pods -l app=app", logs: ["NAME          CPU(cores)   MEMORY(bytes)", "app-preview   28m          96Mi", "Health checks passing · metrics received"], status: "Observing workload health" },
];
const telemetry = [
  [124, 82, 18], [138, 86, 24], [132, 79, 21], [146, 91, 28], [140, 84, 23],
];
const waves = [
  "0,25 8,24 16,27 24,18 32,21 40,13 48,17 56,10 64,16 72,9 80,12 88,5 96,10 104,8 112,14 120,9",
  "0,18 8,20 16,12 24,15 32,10 40,19 48,16 56,24 64,20 72,16 80,20 88,12 96,17 104,10 112,12 120,8",
  "0,26 8,22 16,23 24,19 32,21 40,14 48,18 56,13 64,17 72,12 80,16 88,11 96,13 104,8 112,13 120,10",
];

function Sparkline({ variant }: { variant: number }) {
  return <svg viewBox="0 0 120 34" className={styles.sparkline} aria-hidden="true">
    <path d="M0 30H120M0 15H120" className={styles.chartGrid}/>
    <polyline points={waves[variant]}/><circle cx="120" cy={variant === 0 ? 9 : variant === 1 ? 8 : 10} r="2"/>
  </svg>;
}

function Topology() {
  return <div className={styles.topology} aria-hidden="true">
    <div className={styles.topologyLabel}><span>INFRASTRUCTURE MAP</span><span>EXAMPLE ENVIRONMENT</span></div>
    <svg className={styles.connections} viewBox="0 0 1000 180" preserveAspectRatio="none">
      <path d="M85 65H350H620H900M620 65V143H350M620 143H900"/>
      <path className={styles.packets} d="M85 65H350H620H900M620 65V143H350M620 143H900"/>
    </svg>
    <div className={styles.client}><Icon name="globe"/><span>Client</span></div>
    <div className={styles.balancer}><Icon name="branch"/><span>Load balancer</span></div>
    <div className={styles.workloads}><Icon name="box"/><span>Workloads</span><div className={styles.pods}><i/><i/><i/></div></div>
    <div className={styles.database}><Icon name="layers"/><span>Database</span></div>
    <div className={styles.monitor}><Icon name="activity"/><span>Observability</span><i/></div>
    <div className={styles.services}><Icon name="cloud"/><span>Cloud services</span></div>
  </div>;
}

export function OperationsConsole() {
  const previewRef = useRef<HTMLDivElement>(null);
  const motion = usePreviewMotion(previewRef, stages.length, 4300);
  const [mode, setMode] = useState<"delivery" | "infrastructure">("delivery");
  const [approved, setApproved] = useState(false);
  const current = stages[motion.index];
  const values = telemetry[motion.index];
  const command = mode === "delivery" ? current.command : approved ? "terraform apply review.tfplan" : "terraform plan -out=review.tfplan";
  const logs = mode === "delivery" ? current.logs : approved
    ? ["Demo approval received · applying saved plan", "Apply complete! Resources: 1 added, 0 changed, 0 destroyed.", "Illustration only · no infrastructure was modified"]
    : ["Refreshing infrastructure state…", "Plan: 1 to add, 0 to change, 0 to destroy.", "Saved plan ready · awaiting operator approval"];
  const restricted = motion.reduced || motion.globalPaused;

  return <div ref={previewRef} className={styles.scene} data-running={motion.running}
    onPointerMove={event => {
      if (!motion.running || event.pointerType !== "mouse") return;
      const bounds = event.currentTarget.getBoundingClientRect();
      event.currentTarget.style.setProperty("--tilt-x", ((event.clientX - bounds.left) / bounds.width * 3 - 1.5) + "deg");
      event.currentTarget.style.setProperty("--tilt-y", (1 - (event.clientY - bounds.top) / bounds.height * 2) + "deg");
    }}
    onPointerLeave={event => {
      event.currentTarget.style.removeProperty("--tilt-x");
      event.currentTarget.style.removeProperty("--tilt-y");
    }}>
    <div className={styles.coordinates}>BUILD SYSTEMS / UNDERSTAND THE SIGNAL</div>
    <div className={styles.console}>
      <div className={styles.titlebar}><span className={styles.dots}><i/><i/><i/></span><span>divine / cloud-operations</span><Icon name="terminal"/></div>
      <div className={styles.heading}><div><span className={styles.eyebrow}>CI/CD DELIVERY</span><h2>One commit. A complete journey.</h2></div><span className={styles.simulation}>SIMULATION</span></div>
      <div className={styles.pipeline} role="group" aria-label="Explore the sample delivery pipeline">
        {stages.map((stage, index) => <button key={stage.name} aria-pressed={motion.index === index} className={motion.index === index ? styles.current : motion.index > index ? styles.complete : undefined}
          onClick={() => { motion.setIndex(index); motion.setPaused(true); setMode("delivery"); }}>
          <span className={styles.stageIcon}><Icon name={motion.index > index ? "check" : stage.icon}/></span><span>{stage.name}</span>
        </button>)}
      </div>
      <Topology/>
      <div className={styles.metricsHeading}><span>SAMPLE TELEMETRY</span><span>No live connection</span></div>
      <div className={styles.metrics} aria-label="Illustrative metrics, not production measurements">
        {["Requests / sec", "Latency / ms", "CPU / %"].map((label, index) => <div key={label}><span>{label}</span><div><strong>{values[index]}</strong><Sparkline variant={index}/></div></div>)}
      </div>
      <div className={styles.terminal}>
        <div className={styles.terminalHeader}><div role="group" aria-label="Sample terminal workflow"><button aria-pressed={mode === "delivery"} onClick={() => setMode("delivery")}>Delivery</button><button aria-pressed={mode === "infrastructure"} onClick={() => setMode("infrastructure")}>Terraform</button></div><span>ILLUSTRATIVE OUTPUT</span></div>
        <div className={styles.command}><span>❯</span><code>{command}</code></div>
        <div className={styles.logs} key={mode + motion.index + approved}>{logs.map((line, index) => <p key={line}><span>{String(index + 1).padStart(2, "0")}</span>{line}</p>)}</div>
        {mode === "infrastructure" && <button className={styles.approval} onClick={() => setApproved(!approved)}><Icon name="shield"/>{approved ? "Reset sample plan" : "Approve demo apply"}<span>Simulation only</span></button>}
      </div>
      <div className={styles.footer}><span><i/>{mode === "infrastructure" ? approved ? "Sample apply complete" : "Waiting for demo approval" : current.status}</span><button disabled={restricted} onClick={() => motion.setPaused(!motion.paused)} aria-label={motion.paused ? "Resume hero animation" : "Pause hero animation"}>{motion.reduced ? "Reduced motion" : motion.globalPaused ? "Motion paused" : motion.paused ? "Resume ▷" : "Pause Ⅱ"}</button></div>
    </div>
    <p className={styles.caption}><Icon name="shield"/> Illustrative workflows and sample metrics. Human decisions stay visible.</p>
  </div>;
}
