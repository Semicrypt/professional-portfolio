import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iceman Case Study | Nwachukwu Ifeanyi Divine",
  description:
    "A technical case study of Iceman, a natural-language Cloud and DevOps CLI designed to make operational workflows easier to understand, safer to execute and faster to diagnose.",
};

const technologies = [
  "Python",
  "Linux",
  "Docker",
  "Kubernetes",
  "Terraform",
  "AWS",
  "Git",
  "GitHub Actions",
  "CLI Automation",
  "DevOps Diagnostics",
];

const capabilities = [
  {
    title: "Natural-Language Workflows",
    text: "Iceman is designed around intent rather than command memorization. Engineers describe the outcome they want, and the agent translates that request into an understandable operational workflow.",
  },
  {
    title: "Project Inspection",
    text: "The agent can inspect a repository, ignore generated or heavy directories, identify application technologies and surface useful project context before recommending an action.",
  },
  {
    title: "Environment Awareness",
    text: "Iceman reasons from the project and runtime context instead of treating every task as an isolated shell command, helping reduce incorrect assumptions about services, containers and configuration.",
  },
  {
    title: "Diagnostic Workflows",
    text: "The design includes high-signal diagnosis for Docker, connectivity, ports, runtime state and other operational problems, with evidence presented alongside the proposed remediation.",
  },
  {
    title: "Command Preview & Approval",
    text: "Potentially consequential operations are designed to remain reviewable. The engineer sees what Iceman intends to do and keeps control through approval gates before execution.",
  },
  {
    title: "Operational Evidence",
    text: "Rather than reporting only success or failure, Iceman is designed to surface progress, checks, warnings and evidence that explains what happened during the workflow.",
  },
];

const principles = [
  {
    title: "Intent first",
    text: "Start from the engineering outcome the user wants instead of forcing the user to remember the exact command sequence.",
  },
  {
    title: "Context before action",
    text: "Inspect the project and environment before forming a plan so actions are based on the actual workload.",
  },
  {
    title: "Transparent planning",
    text: "Show the plan and exact commands where appropriate so automation remains understandable.",
  },
  {
    title: "Human approval",
    text: "Keep the engineer in control for operations that can change infrastructure, configuration or running workloads.",
  },
  {
    title: "Evidence after execution",
    text: "Return useful operational output, checks and warnings instead of an opaque 'done' message.",
  },
];

const currentCapabilities = [
  "Interactive CLI workflow",
  "Repository and project inspection",
  "Technology stack discovery",
  "Configuration and environment discovery",
  "Docker-oriented diagnostic workflows",
  "Health and connectivity checks",
  "Command previews",
  "Approval-oriented execution model",
  "Live progress and evidence",
  "Advisor-style warnings",
];

const roadmap = [
  "Broader AWS provisioning and deployment workflows",
  "Terraform generation and infrastructure lifecycle assistance",
  "Deeper Kubernetes operational workflows",
  "Git and GitHub automation",
  "Reusable deployment recipes",
  "Multi-distribution Linux support",
  "Expanded cloud diagnostics and remediation",
];

const challenges = [
  {
    problem: "DevOps requests are high-level, but execution is command-specific.",
    solution:
      "Iceman separates user intent from the final shell or cloud operation, allowing the agent to inspect context and construct a reviewable plan before execution.",
  },
  {
    problem: "Blind automation can make infrastructure changes difficult to trust.",
    solution:
      "The design emphasizes command previews, approval gates and visible evidence so the engineer remains aware of what the agent intends to change.",
  },
  {
    problem: "Large repositories contain generated files and unrelated noise.",
    solution:
      "Project inspection is designed to focus on relevant source, configuration, infrastructure and workflow files while ignoring generated or heavy directories.",
  },
  {
    problem: "A useful diagnosis needs more than a generic error message.",
    solution:
      "Diagnostic workflows are structured around collecting evidence, classifying likely causes and presenting actionable remediation with the supporting operational context.",
  },
];

export default function IcemanCaseStudy() {
  return (
    <main className="min-h-screen bg-[#05070a] text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070a]/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="/" className="text-lg font-bold tracking-tight text-white">
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

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-24 lg:px-8 lg:pb-32 lg:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[720px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[170px]" />
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
              Active Development
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-8xl lg:text-[112px]">
            Iceman<span className="text-cyan-400">.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400 lg:text-2xl lg:leading-10">
            A natural-language Cloud and DevOps CLI designed to turn engineering
            intent into transparent, reviewable and safer operational workflows.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {technologies.map((tech) => (
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
              href="/#contact"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              Contact me
            </a>

            <a
              href="/#projects"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              View other projects
            </a>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              01 — Overview
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white">
              Why I built Iceman.
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 text-zinc-300">
              Cloud and DevOps work often begins with a simple intention — deploy
              this service, inspect this project, diagnose this container or fix
              this connection — but completing the task can require many tools,
              commands and environment-specific decisions.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-500">
              I created Iceman to reduce that gap. The goal is not to hide DevOps
              behind a black box. It is to let an engineer express the outcome in
              natural language while the agent inspects the environment, builds a
              plan, explains the proposed actions, asks for approval where needed
              and returns useful evidence from the result.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Interface", "Natural language CLI"],
                ["Operating model", "Inspect → Plan → Approve"],
                ["Design goal", "Safe DevOps assistance"],
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

      {/* OPERATING MODEL */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              02 — Operating Model
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              From intent to evidence.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-500">
              Iceman is structured around an agent workflow rather than a single
              command wrapper.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-[32px] border border-white/10 bg-[#070b10] p-5 sm:p-8 lg:p-10">
            <div className="grid gap-3 lg:grid-cols-6">
              {[
                ["01", "Natural-language request", "Describe the outcome"],
                ["02", "Context inspection", "Read project & environment"],
                ["03", "Plan", "Build the workflow"],
                ["04", "Validation", "Check assumptions & risks"],
                ["05", "Approval", "Keep the engineer in control"],
                ["06", "Execution", "Run and return evidence"],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
                >
                  <span className="font-mono text-xs text-cyan-400">{number}</span>
                  <h3 className="mt-8 text-base font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.025] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
                Example interaction
              </p>

              <div className="mt-5 font-mono text-sm leading-7">
                <p className="text-zinc-400">
                  <span className="text-cyan-400">iceman &gt;</span>{" "}
                  inspect ~/hybrid-cloud-monitor-v2
                </p>
                <p className="mt-3 text-zinc-500">
                  Project scanned · generated/heavy directories ignored
                </p>
                <p className="text-zinc-500">
                  Backend: Express · Socket.IO
                </p>
                <p className="text-zinc-500">
                  CI/CD: GitHub Actions
                </p>
                <p className="text-zinc-500">
                  Cloud: AWS SDK
                </p>
                <p className="text-zinc-500">
                  Configuration: environment files discovered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              03 — Capabilities
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              What Iceman is designed to do.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-7"
              >
                <span className="font-mono text-xs text-zinc-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 text-xl font-semibold text-white">
                  {capability.title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-500">
                  {capability.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY MODEL */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              04 — Safety Model
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white">
              Automation without losing control.
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 text-zinc-300">
              Iceman is intentionally not designed as an opaque autopilot.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-500">
              The core philosophy is that an engineering agent should make complex
              operations easier while preserving visibility into what it intends
              to do. That is especially important when a workflow can alter
              infrastructure, containers, configuration or deployments.
            </p>

            <div className="mt-10 space-y-4">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:grid-cols-[52px_1fr]"
                >
                  <span className="font-mono text-xs text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-zinc-200">{principle.title}</h3>
                    <p className="mt-2 leading-7 text-zinc-500">{principle.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT BUILD */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[32px] border border-emerald-400/15 bg-emerald-400/[0.02] p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                05 — Current Build
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">
                Implemented direction.
              </h2>

              <div className="mt-8 space-y-3">
                {currentCapabilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/10 px-4 py-3 text-sm text-zinc-400"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[32px] border border-white/10 bg-white/[0.02] p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Roadmap
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">
                Where Iceman is going.
              </h2>

              <p className="mt-5 leading-7 text-zinc-500">
                Iceman is an active engineering project. The roadmap expands the
                same natural-language and safety model into broader cloud and
                platform operations.
              </p>

              <div className="mt-8 space-y-3">
                {roadmap.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/10 px-4 py-3 text-sm text-zinc-500"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ENGINEERING CHALLENGES */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              06 — Engineering Challenges
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Problems the design has to solve.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {challenges.map((challenge) => (
              <article
                key={challenge.problem}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
                  Challenge
                </p>
                <h3 className="mt-4 text-xl font-semibold leading-8 text-white">
                  {challenge.problem}
                </h3>

                <div className="my-6 h-px bg-white/10" />

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  Engineering approach
                </p>
                <p className="mt-4 leading-7 text-zinc-500">
                  {challenge.solution}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            07 — Technology
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Engineering stack.
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-white/[0.025] p-8 sm:p-12 lg:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Iceman
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Natural-language DevOps without opaque automation.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-500">
            Iceman is being developed as an engineering assistant that helps turn
            operational intent into understandable, reviewable and evidence-driven
            workflows.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/#projects"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              ← Back to projects
            </a>

            <a
              href="/#contact"
              className="rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Nwachukwu Ifeanyi Divine.</p>
          <a href="/" className="transition hover:text-white">
            Portfolio home ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
