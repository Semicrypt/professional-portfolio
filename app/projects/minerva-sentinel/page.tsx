import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minerva Sentinel Case Study | Nwachukwu Ifeanyi Divine",
  description:
    "A technical case study of Minerva Sentinel, a hybrid-cloud monitoring and observability platform built with AWS, Docker, Kubernetes, PostgreSQL, React, Node.js and GitHub Actions.",
};

const technologies = [
  "AWS",
  "Docker",
  "Kubernetes",
  "Amazon EKS",
  "Amazon ECR",
  "Amazon RDS",
  "React",
  "Vite",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Socket.IO",
  "GitHub Actions",
  "OIDC",
  "Linux",
];

const capabilities = [
  {
    title: "Infrastructure Monitoring",
    text: "Connected hosts report operational metrics to the platform, giving users a centralized view of infrastructure health and host status.",
  },
  {
    title: "Incident Management",
    text: "Incidents support acknowledgement, resolution and an event timeline containing operational actions such as detection, remediation and comments.",
  },
  {
    title: "AWS Resource Integration",
    text: "AWS accounts connect through IAM role assumption with STS and external IDs, avoiding the storage of long-lived AWS access keys.",
  },
  {
    title: "Container Visibility",
    text: "Docker and container data are surfaced alongside hosts, services, logs, metrics and alerts in the monitoring interface.",
  },
  {
    title: "CI/CD Automation",
    text: "GitHub Actions integrates with AWS through OIDC and publishes application images to Amazon ECR for cloud deployment workflows.",
  },
  {
    title: "Kubernetes Deployment",
    text: "The backend has been deployed and tested on Amazon EKS, extending the project beyond local Docker and EC2-based environments.",
  },
];

const challenges = [
  {
    problem: "Host agent could not reach the backend from its container.",
    solution:
      "Published the backend service correctly and adjusted the container-to-backend networking configuration so host metrics could reach the API.",
  },
  {
    problem: "AWS integration needed secure cross-account access.",
    solution:
      "Implemented role-based access using STS AssumeRole and external IDs instead of storing AWS access keys in the application database.",
  },
  {
    problem: "Kubernetes workload could not connect to the database.",
    solution:
      "Traced the failure to environment configuration where the application was still targeting localhost, then moved the deployment toward an RDS-backed configuration.",
  },
  {
    problem: "Incident state needed to remain synchronized across the UI.",
    solution:
      "Connected backend incident state, global incident counts and browser events so acknowledgement and resolution changes propagate through the interface.",
  },
];

export default function MinervaSentinelCaseStudy() {
  return (
    <main className="min-h-screen bg-[#05070a] text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070a]/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a
            href="/"
            className="text-lg font-bold tracking-tight text-white"
          >
            DIVINE<span className="text-cyan-400">.</span>
          </a>

          <a
            href="/#projects"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            ← Back to portfolio
          </a>
        </nav>
      </header>

      {/* CASE STUDY HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-24 lg:px-8 lg:pb-32 lg:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[170px]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Case Study
            </span>

            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Flagship Project
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[96px]">
            Minerva
            <span className="block text-zinc-500">Sentinel.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400 lg:text-2xl lg:leading-10">
            A hybrid-cloud monitoring and observability platform for
            infrastructure health, hosts, services, containers, AWS resources,
            incidents, metrics, logs and alerts.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {technologies.slice(0, 9).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="https://github.com/Semicrypt/minerva-sentinel"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              View GitHub Repository ↗
            </a>

            <a
              href="/#contact"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              01 — Overview
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white">
              Why I built it.
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 text-zinc-300">
              Minerva Sentinel was designed as a practical cloud engineering
              project that brings monitoring, infrastructure visibility and
              incident handling into one platform.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-500">
              Rather than treating frontend development, backend APIs,
              databases, containers, cloud infrastructure and observability as
              separate exercises, the project combines them into one operating
              system for hybrid infrastructure.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Frontend", "React + Vite"],
                ["Backend", "Node.js + Express"],
                ["Database", "PostgreSQL / RDS"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                    {label}
                  </p>
                  <p className="mt-3 font-medium text-zinc-300">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              02 — Architecture
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              From interface to infrastructure.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-500">
              The platform is organized around a web application, API,
              PostgreSQL data layer, monitoring agents and cloud integrations.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-[32px] border border-white/10 bg-[#070b10] p-6 sm:p-10 lg:p-14">
            <div className="grid gap-5 lg:grid-cols-5 lg:items-center">
              {/* USERS */}
              <ArchitectureCard
                eyebrow="Client"
                title="Users"
                subtitle="Browser"
              />

              <Arrow />

              {/* APP */}
              <ArchitectureCard
                eyebrow="Application"
                title="React UI"
                subtitle="Vite / CloudFront"
              />

              <Arrow />

              {/* API */}
              <ArchitectureCard
                eyebrow="API"
                title="Node.js"
                subtitle="Express + Socket.IO"
              />
            </div>

            <div className="my-8 flex justify-center">
              <span className="text-xl text-zinc-700">↓</span>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <ArchitectureCard
                eyebrow="Data"
                title="PostgreSQL"
                subtitle="Local / Amazon RDS"
              />

              <ArchitectureCard
                eyebrow="Telemetry"
                title="Host Agents"
                subtitle="Metrics + Heartbeats"
              />

              <ArchitectureCard
                eyebrow="Cloud"
                title="AWS Integration"
                subtitle="STS + IAM Roles"
              />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {["EC2", "Docker", "Amazon EKS", "Amazon ECR"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-center text-sm text-zinc-500"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                03 — Capabilities
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                What the platform does.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-zinc-500 lg:justify-self-end">
              The project grew beyond a dashboard into a multi-service
              monitoring platform with real operational workflows.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20 hover:bg-white/[0.035]"
              >
                <span className="font-mono text-xs text-zinc-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-500">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AWS SECURITY */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              04 — AWS Integration
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Secure cloud access without stored access keys.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-500">
              AWS account connections are based on IAM role ARNs and external
              IDs. The backend verifies access using AWS STS rather than
              requiring users to store long-lived access keys in the platform.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-7 sm:p-10">
            <div className="space-y-6">
              {[
                ["1", "User provides IAM role ARN and region"],
                ["2", "Minerva stores role metadata and external ID"],
                ["3", "Backend calls AWS STS AssumeRole"],
                ["4", "GetCallerIdentity verifies the assumed identity"],
                ["5", "Connection status is stored and surfaced in the UI"],
              ].map(([number, text]) => (
                <div key={number} className="flex gap-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5 font-mono text-xs text-cyan-300">
                    {number}
                  </span>

                  <p className="pt-1.5 text-zinc-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INCIDENT LIFECYCLE */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            05 — Incident Workflow
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Operational events, not just alerts.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-500">
            Incidents are backed by persistent data and an event timeline,
            allowing operational actions to be recorded through the incident
            lifecycle.
          </p>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["DETECTED", "Incident created"],
              ["ACKNOWLEDGED", "Operator acknowledges"],
              ["ROOT_CAUSE", "Cause documented"],
              ["RESOLVED", "Incident closed"],
            ].map(([event, detail], index) => (
              <div
                key={event}
                className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <span className="font-mono text-xs text-zinc-700">
                  0{index + 1}
                </span>

                <p className="mt-8 text-xs font-semibold tracking-[0.16em] text-cyan-300">
                  {event}
                </p>

                <p className="mt-3 text-sm text-zinc-500">{detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm text-zinc-600">
            The event model also supports remediation and comments.
          </p>
        </div>
      </section>

      {/* DEVOPS DELIVERY */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                06 — Delivery
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Built as a DevOps system.
              </h2>
            </div>

            <div className="space-y-5">
              {[
                {
                  name: "Docker",
                  description:
                    "Frontend, backend and PostgreSQL services can run together through Docker Compose, while host agents are deployed as containers.",
                },
                {
                  name: "GitHub Actions",
                  description:
                    "CI/CD workflows authenticate to AWS with OIDC and publish application images to Amazon ECR.",
                },
                {
                  name: "Amazon EC2",
                  description:
                    "Containerized application services have been deployed on EC2 as part of the project's cloud runtime.",
                },
                {
                  name: "Amazon EKS",
                  description:
                    "Kubernetes deployments extend the platform into a managed cluster environment and provide practical orchestration experience.",
                },
                {
                  name: "Amazon RDS",
                  description:
                    "PostgreSQL data has been migrated toward managed RDS infrastructure to separate application compute from database persistence.",
                },
              ].map((item) => (
                <article
                  key={item.name}
                  className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:grid-cols-[150px_1fr]"
                >
                  <h3 className="font-semibold text-zinc-200">{item.name}</h3>
                  <p className="leading-7 text-zinc-500">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TROUBLESHOOTING */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              07 — Engineering Challenges
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Problems encountered and solved.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-500">
              A large part of the project involved diagnosing real integration,
              networking, deployment and state-management problems.
            </p>
          </div>

          <div className="mt-14 space-y-4">
            {challenges.map((item, index) => (
              <article
                key={item.problem}
                className="grid gap-7 rounded-3xl border border-white/10 bg-white/[0.02] p-7 lg:grid-cols-[70px_1fr_1fr] lg:p-9"
              >
                <span className="font-mono text-sm text-zinc-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
                    Challenge
                  </p>

                  <p className="mt-3 leading-7 text-zinc-300">{item.problem}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                    Resolution
                  </p>

                  <p className="mt-3 leading-7 text-zinc-500">
                    {item.solution}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FULL STACK */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            08 — Technology
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Technology stack.
          </h2>

          <div className="mt-12 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-sm text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.025] p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Explore the work
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Want to inspect the implementation?
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-500">
              The repository contains the application, backend services,
              frontend interface, database migrations and deployment-related
              work behind Minerva Sentinel.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://github.com/Semicrypt/minerva-sentinel"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                Open GitHub ↗
              </a>

              <a
                href="/"
                className="rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
              >
                Back to portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Nwachukwu Ifeanyi Divine.</p>

          <a href="/" className="transition hover:text-white">
            Portfolio ↑
          </a>
        </div>
      </footer>
    </main>
  );
}

function ArchitectureCard({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
        {eyebrow}
      </p>

      <p className="mt-3 font-semibold text-white">{title}</p>

      <p className="mt-1 text-xs text-zinc-600">{subtitle}</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden items-center justify-center text-xl text-zinc-700 lg:flex">
      →
    </div>
  );
}
