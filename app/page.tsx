const skills = [
  "AWS",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Linux",
  "CI/CD",
];

const minervaTechnologies = [
  "AWS",
  "Docker",
  "Kubernetes",
  "React",
  "Node.js",
  "PostgreSQL",
  "GitHub Actions",
];

const minervaFeatures = [
  "Real-time infrastructure monitoring",
  "AWS IAM role integration via STS",
  "Incident detection & lifecycle management",
  "Containerized multi-service architecture",
  "CI/CD with GitHub Actions & OIDC",
  "Kubernetes / EKS deployments",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070a] text-white">
      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#05070a]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Brand */}
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-white"
          >
            DIVINE<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>

            <a href="#education" className="transition hover:text-white">
              Education
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition hover:border-cyan-400/60 hover:bg-white/5 md:inline-flex"
          >
            Let&apos;s talk
          </a>

          {/* Mobile Menu */}
          <details className="group relative md:hidden">
            <summary
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/15 bg-white/[0.02] text-white transition hover:border-cyan-400/40 hover:bg-white/[0.05] [&::-webkit-details-marker]:hidden"
              aria-label="Open navigation menu"
            >
              <span className="relative h-4 w-5">
                <span className="absolute left-0 top-0 h-px w-5 bg-white transition-all duration-200 group-open:top-[7px] group-open:rotate-45" />
                <span className="absolute left-0 top-[7px] h-px w-5 bg-white transition-all duration-200 group-open:opacity-0" />
                <span className="absolute left-0 top-[14px] h-px w-5 bg-white transition-all duration-200 group-open:top-[7px] group-open:-rotate-45" />
              </span>
            </summary>

            <div className="absolute right-0 top-14 w-[min(86vw,320px)] overflow-hidden rounded-2xl border border-white/10 bg-[#090c10]/98 p-3 shadow-2xl shadow-black/60 backdrop-blur-xl">
              <div className="flex flex-col">
                {[
                  ["Projects", "#projects"],
                  ["Experience", "#experience"],
                  ["Education", "#education"],
                  ["Skills", "#skills"],
                  ["About", "#about"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="rounded-xl px-4 py-3.5 text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    {label}
                  </a>
                ))}

                <div className="my-2 h-px bg-white/10" />

                <a
                  href="/resume.pdf"
                  download="Nwachukwu-Ifeanyi-Divine-Resume.pdf"
                  className="rounded-xl px-4 py-3.5 text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                >
                  Download résumé
                </a>

                <a
                  href="#contact"
                  className="mt-2 rounded-xl bg-white px-4 py-3.5 text-center text-sm font-semibold text-black transition hover:bg-cyan-300"
                >
                  Let&apos;s talk
                </a>
              </div>
            </div>
          </details>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28 lg:px-8 lg:pb-24 lg:pt-28"
      >
        {/* Hero Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[38%] top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.09] blur-[170px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          <div className="hero-scan absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 xl:gap-16">
          {/* Hero Copy */}
          <div className="max-w-4xl">
            {/* Name */}
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 sm:text-base">
              Nwachukwu Ifeanyi Divine
            </p>

            {/* Main Heading */}
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[78px] xl:text-[92px]">
              Cloud &amp; DevOps
              <span className="block text-zinc-500">Engineer.</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              I design, automate, deploy and operate reliable cloud
              infrastructure using modern DevOps practices.
            </p>

            {/* Hero Skills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Hero Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                View my work
              </a>

              <a
                href="/resume.pdf"
                download="Nwachukwu-Ifeanyi-Divine-Resume.pdf"
                className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Download résumé
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex gap-6 text-sm text-zinc-500">
              <a
                href="https://github.com/Semicrypt"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/nwachukwu-ifeanyi-divine-31b9793a6"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Live DevOps / CI-CD Animation */}
          <DevOpsPipelineAnimation />
        </div>

        {/* Hero Bottom Text */}
        <div className="absolute bottom-7 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 items-center justify-between px-8 text-xs uppercase tracking-[0.2em] text-zinc-600 xl:flex">
          <span>Lagos, Nigeria</span>
          <span>Scroll to explore ↓</span>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section
        id="projects"
        className="border-t border-white/10 px-6 py-28 lg:px-8 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Selected work
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Engineering projects.
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-zinc-500">
              Production-minded cloud infrastructure, automation and DevOps
              projects built through practical engineering work.
            </p>
          </div>

          {/* MINERVA SENTINEL */}
          <article className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.025]">
            {/* Dashboard Preview Area */}
            <div className="relative min-h-[380px] overflow-hidden border-b border-white/10 bg-[#070b10] p-5 sm:p-8 lg:min-h-[540px] lg:p-12">
              {/* Background Glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.07] blur-[130px]" />

              {/* Dashboard Window */}
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#090d12] shadow-2xl shadow-black/60">
                {/* Window Top Bar */}
                <div className="flex h-12 items-center justify-between border-b border-white/10 px-4">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                    Minerva Sentinel
                  </span>

                  <div className="w-12" />
                </div>

                {/* Main Fake Dashboard */}
                <div className="grid min-h-[350px] grid-cols-12 lg:min-h-[420px]">
                  {/* Sidebar */}
                  <aside className="col-span-2 hidden border-r border-white/10 p-5 md:block">
                    <div className="mb-8 flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400 text-xs font-bold text-black">
                        M
                      </div>

                      <span className="text-xs font-semibold text-white">
                        Minerva
                      </span>
                    </div>

                    <div className="space-y-3">
                      {[
                        "Overview",
                        "Infrastructure",
                        "AWS",
                        "Containers",
                        "Observability",
                        "Alerts",
                        "Logs",
                      ].map((item, index) => (
                        <div
                          key={item}
                          className={`rounded-lg px-3 py-2 text-[10px] ${
                            index === 0
                              ? "bg-white/[0.07] text-white"
                              : "text-zinc-600"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </aside>

                  {/* Dashboard Content */}
                  <div className="col-span-12 p-5 sm:p-7 md:col-span-10">
                    {/* Dashboard Header */}
                    <div className="mb-7 flex items-start justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                          Infrastructure overview
                        </p>

                        <h3 className="mt-2 text-xl font-semibold text-white">
                          System Health
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-[9px] uppercase tracking-wider text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Operational
                      </div>
                    </div>

                    {/* Dashboard Stats */}
                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                      {[
                        ["Hosts", "08", "+2 connected"],
                        ["Services", "24", "Healthy"],
                        ["Incidents", "03", "Active"],
                        ["Uptime", "99.9%", "30 days"],
                      ].map(([label, value, note]) => (
                        <div
                          key={label}
                          className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"
                        >
                          <p className="text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                            {label}
                          </p>

                          <p className="mt-3 text-xl font-semibold text-white">
                            {value}
                          </p>

                          <p className="mt-1 text-[9px] text-zinc-600">
                            {note}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Dashboard Bottom Grid */}
                    <div className="mt-4 grid gap-4 lg:grid-cols-3">
                      {/* Infrastructure Chart */}
                      <div className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 lg:col-span-2">
                        <div className="mb-6 flex items-center justify-between">
                          <div>
                            <p className="text-xs font-medium text-zinc-300">
                              Infrastructure load
                            </p>

                            <p className="mt-1 text-[9px] text-zinc-600">
                              Last 24 hours
                            </p>
                          </div>

                          <span className="text-[9px] text-emerald-400">
                            ● Live
                          </span>
                        </div>

                        <div className="relative h-28 overflow-hidden">
                          {/* Chart Grid */}
                          <div className="absolute inset-0 grid grid-rows-4">
                            {[1, 2, 3, 4].map((line) => (
                              <div
                                key={line}
                                className="border-t border-white/[0.04]"
                              />
                            ))}
                          </div>

                          {/* Chart Lines */}
                          <svg
                            viewBox="0 0 500 120"
                            className="absolute inset-0 h-full w-full"
                            preserveAspectRatio="none"
                          >
                            <polyline
                              fill="none"
                              stroke="rgb(34 211 238)"
                              strokeWidth="2"
                              vectorEffect="non-scaling-stroke"
                              points="0,95 45,80 90,87 135,52 180,63 225,40 270,55 315,28 360,42 405,21 450,33 500,16"
                            />

                            <polyline
                              fill="none"
                              stroke="rgb(113 113 122)"
                              strokeWidth="1.5"
                              vectorEffect="non-scaling-stroke"
                              points="0,105 45,99 90,92 135,96 180,75 225,84 270,70 315,80 360,63 405,71 450,55 500,60"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Incidents Widget */}
                      <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                        <p className="text-xs font-medium text-zinc-300">
                          Recent incidents
                        </p>

                        <div className="mt-5 space-y-3">
                          {[
                            ["CPU threshold", "Warning", "warning"],
                            ["API latency", "Resolved", "healthy"],
                            ["Host heartbeat", "Healthy", "healthy"],
                          ].map(([name, status, tone]) => (
                            <div
                              key={name}
                              className="rounded-lg border border-white/[0.05] p-3"
                            >
                              <div className="flex items-center justify-between gap-3">
                                <span className="text-[10px] text-zinc-400">
                                  {name}
                                </span>

                                <span
                                  className={`text-[8px] uppercase tracking-wider ${
                                    tone === "warning"
                                      ? "text-amber-400"
                                      : "text-emerald-400"
                                  }`}
                                >
                                  {status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Minerva Project Details */}
            <div className="grid gap-12 p-7 sm:p-10 lg:grid-cols-[1fr_1.25fr] lg:p-14">
              {/* Left Column */}
              <div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-zinc-600">01</span>

                  <span className="h-px w-10 bg-white/10" />

                  <span className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                    Flagship project
                  </span>
                </div>

                <h3 className="mt-7 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                  Minerva Sentinel
                </h3>

                <p className="mt-3 text-sm font-medium text-zinc-500">
                  Hybrid Cloud Monitoring Platform
                </p>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {minervaTechnologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div>
                <p className="max-w-2xl text-lg leading-8 text-zinc-400">
                  A hybrid-cloud observability platform designed to monitor
                  infrastructure health, hosts, services, containers, AWS
                  resources, metrics, logs, alerts and operational incidents
                  from a unified interface.
                </p>

                {/* Feature List */}
                <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {minervaFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm text-zinc-500"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="https://github.com/Semicrypt/minerva-sentinel"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
                  >
                    GitHub repository ↗
                  </a>

                  <a
                    href="/projects/minerva-sentinel"
                    className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.04]"
                  >
                    View case study →
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* MORE PROJECTS PLACEHOLDER */}
          <div className="mt-24">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-600">
                  More work
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                  Additional engineering projects
                </h3>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {/* Docker Project */}
              <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20 hover:bg-white/[0.035]">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-zinc-600">02</span>

                  <span className="text-zinc-600">↗</span>
                </div>

                <div className="mt-20">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                    Containers
                  </p>

                  <h4 className="mt-4 text-2xl font-semibold text-white">
                    Node.js Docker Application
                  </h4>

                  <p className="mt-4 leading-7 text-zinc-500">
                    Containerized Node.js application packaged with Docker,
                    published as a reusable image and deployed through a
                    reproducible container workflow.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Docker", "Node.js", "Linux", "Git"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/Semicrypt/nodejs-docker-app"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-block text-sm font-medium text-zinc-300 transition hover:text-cyan-300"
                  >
                    View repository ↗
                  </a>
                </div>
              </article>

              {/* Kubernetes Project */}
              <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20 hover:bg-white/[0.035]">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-zinc-600">03</span>

                  <span className="text-zinc-600">↗</span>
                </div>

                <div className="mt-20">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                    Kubernetes
                  </p>

                  <h4 className="mt-4 text-2xl font-semibold text-white">
                    Kubernetes &amp; EKS Lab
                  </h4>

                  <p className="mt-4 leading-7 text-zinc-500">
                    Kubernetes deployment work covering local Minikube
                    environments, Amazon EKS, container workloads, service
                    configuration and cloud database connectivity.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Kubernetes", "EKS", "ECR", "AWS"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>

              {/* Terraform Project */}
              <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20 hover:bg-white/[0.035]">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-zinc-600">04</span>

                  <span className="text-zinc-600">↗</span>
                </div>

                <div className="mt-20">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                    Infrastructure as Code
                  </p>

                  <h4 className="mt-4 text-2xl font-semibold text-white">
                    Terraform AWS Infrastructure
                  </h4>

                  <p className="mt-4 leading-7 text-zinc-500">
                    Infrastructure-as-code work focused on repeatable AWS
                    environments, networking, compute, managed databases and
                    production-oriented deployment practices.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Terraform", "AWS", "VPC", "RDS"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="border-t border-white/10 px-6 py-28 lg:px-8 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Experience
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Professional experience.
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-500">
                Practical experience supporting cloud, networking and technical
                operations, alongside hands-on DevOps project work.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-[7px] top-4 hidden h-[calc(100%-2rem)] w-px bg-white/10 sm:block" />

              <article className="relative border-b border-white/10 pb-12 sm:pl-10">
                <span className="absolute left-0 top-2 hidden h-[15px] w-[15px] rounded-full border-4 border-[#05070a] bg-cyan-400 sm:block" />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      WHINZET Digital ID Limited
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                      Junior Cloud &amp; Network Engineer
                    </h3>

                    <p className="mt-2 text-sm text-zinc-600">
                      Industrial Training Placement
                    </p>
                  </div>

                  <span className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-zinc-600">
                    Jan 2025 — Oct 2025
                  </span>
                </div>

                <p className="mt-7 max-w-3xl leading-7 text-zinc-400">
                  Supported cloud and network engineering activities while
                  developing practical experience with infrastructure,
                  troubleshooting, deployment workflows and technical
                  operations.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Cloud Infrastructure",
                    "Networking",
                    "Linux",
                    "Troubleshooting",
                    "Technical Support",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>

              <article className="relative pt-12 sm:pl-10">
                <span className="absolute left-0 top-[55px] hidden h-[15px] w-[15px] rounded-full border-4 border-[#05070a] bg-zinc-700 sm:block" />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      Independent Engineering Work
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                      Cloud &amp; DevOps Projects
                    </h3>
                  </div>

                  <span className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-zinc-600">
                    Ongoing
                  </span>
                </div>

                <p className="mt-7 max-w-3xl leading-7 text-zinc-400">
                  Building and deploying hands-on projects across AWS, Docker,
                  Kubernetes, Terraform, CI/CD, monitoring, PostgreSQL and Linux
                  environments, including Minerva Sentinel.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="border-t border-white/10 px-6 py-28 lg:px-8 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Education
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Academic foundation.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-500">
              A Computer Science foundation supporting my work across software,
              cloud infrastructure, networking and DevOps engineering.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {/* MASTERS DEGREE */}
            <article className="overflow-hidden rounded-[32px] border border-cyan-400/20 bg-cyan-400/[0.025]">
              <div className="p-7 sm:p-10 lg:p-12">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-sm font-bold text-cyan-300">
                      WU
                    </span>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                        Wesley University, Ondo
                      </p>

                      <span className="mt-2 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                        In Progress
                      </span>
                    </div>
                  </div>

                  <span className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-zinc-600">
                    2027 — Expected 2028
                  </span>
                </div>

                <div className="mt-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                    Master&apos;s Degree
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                    M.Sc. Computer Science
                  </h3>

                  <p className="mt-5 leading-7 text-zinc-500">
                    Advanced study in Computer Science, building on my academic
                    and practical experience across software systems, cloud
                    infrastructure and DevOps engineering.
                  </p>
                </div>
              </div>
            </article>

            {/* BACHELORS DEGREE */}
            <article className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02]">
              <div className="p-7 sm:p-10 lg:p-12">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-sm font-bold text-cyan-300">
                    WU
                  </span>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                      Wesley University, Ondo
                    </p>

                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      Bachelor&apos;s Degree
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                    Degree
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                    B.Sc. (Hons) Computer Science
                  </h3>

                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-zinc-600">
                    2023 — 2026
                  </p>

                  <p className="mt-5 leading-7 text-zinc-500">
                    Computer Science studies covering software development,
                    computing systems, databases, networking and the technical
                    foundations that support modern cloud and DevOps engineering.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Academic foundation
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Software Development",
                "Database Systems",
                "Computer Networks",
                "Operating Systems",
                "Systems Analysis",
                "Cloud & DevOps Practice",
              ].map((subject) => (
                <div
                  key={subject}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-sm text-zinc-500"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  {subject}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & TRAINING */}
      <section
        id="training"
        className="border-t border-white/10 px-6 py-28 lg:px-8 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Certifications &amp; Training
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Continuous learning.
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-zinc-500">
              Structured cloud and DevOps training complementing hands-on
              engineering practice and independent project work.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    Completed
                  </span>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    TechCrush
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    Cloud Computing &amp; DevOps
                  </h3>
                </div>

                <span className="font-mono text-xs text-zinc-600">
                  Jul — Sep 2026
                </span>
              </div>

              <p className="mt-6 leading-7 text-zinc-500">
                Practical cloud and DevOps training covering infrastructure,
                Linux, containers, cloud services, automation and deployment
                workflows.
              </p>

              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="text-sm text-zinc-400">
                  Certificate received
                </p>
              </div>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    Enrolled
                  </span>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    TechSphere Academy
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    Cloud Computing Program
                  </h3>
                </div>

                <span className="font-mono text-xs text-zinc-600">
                  Oct 2026 — Jan 2027
                </span>
              </div>

              <p className="mt-6 leading-7 text-zinc-500">
                Upcoming structured cloud computing program focused on
                strengthening practical cloud engineering knowledge and
                production-oriented infrastructure skills.
              </p>

              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="text-sm text-zinc-400">
                  Program begins October 2026
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-t border-white/10 px-6 py-28 lg:px-8 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Skills &amp; Technology
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Engineering stack.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-zinc-500 lg:justify-self-end">
              Tools and platforms I use across cloud infrastructure,
              containerization, automation, deployment, monitoring and
              application delivery.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Cloud",
                description:
                  "Designing and operating cloud infrastructure across core AWS services.",
                items: [
                  "AWS EC2",
                  "Amazon S3",
                  "Amazon RDS",
                  "IAM",
                  "VPC",
                  "ECR",
                  "EKS",
                  "CloudFront",
                  "ACM",
                  "STS",
                ],
              },
              {
                number: "02",
                title: "Containers & Orchestration",
                description:
                  "Packaging workloads and managing containerized application environments.",
                items: [
                  "Docker",
                  "Docker Compose",
                  "Kubernetes",
                  "Amazon EKS",
                  "Minikube",
                  "kubectl",
                ],
              },
              {
                number: "03",
                title: "Infrastructure as Code",
                description:
                  "Building repeatable infrastructure and automation-oriented cloud workflows.",
                items: [
                  "Terraform",
                  "AWS Infrastructure",
                  "Networking",
                  "Environment Configuration",
                ],
              },
              {
                number: "04",
                title: "CI/CD & Version Control",
                description:
                  "Automating delivery workflows and managing source-controlled engineering work.",
                items: [
                  "GitHub Actions",
                  "AWS OIDC",
                  "Git",
                  "GitHub",
                  "ECR Pipelines",
                ],
              },
              {
                number: "05",
                title: "Systems & Operations",
                description:
                  "Working across Linux systems, cloud hosts and operational troubleshooting.",
                items: [
                  "Linux",
                  "Ubuntu",
                  "WSL",
                  "SSH",
                  "Bash",
                  "Networking",
                  "Troubleshooting",
                ],
              },
              {
                number: "06",
                title: "Application & Data",
                description:
                  "Building and supporting the application layers behind cloud-native projects.",
                items: [
                  "Node.js",
                  "Express",
                  "React",
                  "Vite",
                  "PostgreSQL",
                  "Socket.IO",
                  "REST APIs",
                ],
              },
            ].map((group) => (
              <article
                key={group.title}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20 hover:bg-white/[0.035]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-700">
                    {group.number}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </div>

                <h3 className="mt-10 text-2xl font-semibold tracking-tight text-white">
                  {group.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-500">
                  {group.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-[#070b10] p-7 sm:p-9">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Focus areas
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Cloud infrastructure &amp; DevOps
                </h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Cloud Architecture",
                  "Infrastructure Automation",
                  "Container Platforms",
                  "CI/CD",
                  "Observability",
                  "Incident Response",
                  "Cloud Networking",
                  "Platform Operations",
                ].map((focus) => (
                  <div
                    key={focus}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-zinc-500"
                  >
                    {focus}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PLACEHOLDER */}
      <section
        id="about"
        className="border-t border-white/10 px-6 py-28 lg:px-8 lg:py-36"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              About
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Building reliable systems.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-zinc-400">
              I&apos;m a Cloud and DevOps Engineer with a Computer Science
              background focused on cloud infrastructure, containerization,
              automation, observability and modern deployment workflows.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-500">
              My work combines AWS, Docker, Kubernetes, Terraform, Linux and
              CI/CD with practical software engineering to build systems that
              are reliable, repeatable and easier to operate.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/10 px-6 py-28 lg:px-8 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.025] px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Let&apos;s connect
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Building something in the cloud?
              <span className="block text-zinc-600">Let&apos;s talk.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-500">
              I&apos;m open to Cloud Engineering, DevOps Engineering, Junior
              DevOps and Cloud Support opportunities.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nifeanyidivine@gmail.com&su=Portfolio%20Enquiry"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                Send me an email ↗
              </a>

              <a
                href="https://www.linkedin.com/in/nwachukwu-ifeanyi-divine-31b9793a6"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/[0.05]"
              >
                LinkedIn ↗
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-600">
              Email:{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nifeanyidivine@gmail.com&su=Portfolio%20Enquiry"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-300"
              >
                nifeanyidivine@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Nwachukwu Ifeanyi Divine.</p>

          <div className="flex gap-6">
            <a
              href="https://github.com/Semicrypt"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nwachukwu-ifeanyi-divine-31b9793a6"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="#home"
              className="transition hover:text-white"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function DevOpsPipelineAnimation() {
  const stages = [
    { name: "Commit", detail: "main", status: "01" },
    { name: "Build", detail: "image", status: "02" },
    { name: "Test", detail: "passed", status: "03" },
    { name: "Deploy", detail: "prod", status: "04" },
    { name: "Monitor", detail: "healthy", status: "05" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <style>{`
        @keyframes pipelineDash {
          to { stroke-dashoffset: -34; }
        }

        @keyframes nodePulse {
          0%, 100% { opacity: .45; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.35); }
        }

        @keyframes terminalBlink {
          0%, 48% { opacity: 1; }
          49%, 100% { opacity: 0; }
        }

        @keyframes scanDown {
          0% { transform: translateY(-24px); opacity: 0; }
          10% { opacity: .65; }
          85% { opacity: .2; }
          100% { transform: translateY(440px); opacity: 0; }
        }

        @keyframes heroScan {
          0% { transform: translateY(0); opacity: 0; }
          15% { opacity: .7; }
          85% { opacity: .2; }
          100% { transform: translateY(760px); opacity: 0; }
        }

        @keyframes stageGlow {
          0%, 100% { border-color: rgba(255,255,255,.08); background: rgba(255,255,255,.02); }
          50% { border-color: rgba(34,211,238,.28); background: rgba(34,211,238,.035); }
        }

        .pipeline-dash {
          animation: pipelineDash 1.25s linear infinite;
        }

        .pipeline-node {
          transform-box: fill-box;
          transform-origin: center;
          animation: nodePulse 2s ease-in-out infinite;
        }

        .pipeline-stage-1 { animation: stageGlow 6s ease-in-out infinite 0s; }
        .pipeline-stage-2 { animation: stageGlow 6s ease-in-out infinite 1.2s; }
        .pipeline-stage-3 { animation: stageGlow 6s ease-in-out infinite 2.4s; }
        .pipeline-stage-4 { animation: stageGlow 6s ease-in-out infinite 3.6s; }
        .pipeline-stage-5 { animation: stageGlow 6s ease-in-out infinite 4.8s; }

        .terminal-cursor {
          animation: terminalBlink .9s steps(1) infinite;
        }

        .pipeline-scan {
          animation: scanDown 5s linear infinite;
        }

        .hero-scan {
          animation: heroScan 7s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .pipeline-dash,
          .pipeline-node,
          .pipeline-stage-1,
          .pipeline-stage-2,
          .pipeline-stage-3,
          .pipeline-stage-4,
          .pipeline-stage-5,
          .terminal-cursor,
          .pipeline-scan,
          .hero-scan {
            animation: none !important;
          }
        }
      `}</style>

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#080c11]/90 shadow-2xl shadow-black/50 backdrop-blur-xl">
        {/* Animated scanner */}
        <div className="pipeline-scan pointer-events-none absolute left-0 top-0 z-10 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

        {/* Panel Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-zinc-700" />
              <span className="h-2 w-2 rounded-full bg-zinc-700" />
              <span className="h-2 w-2 rounded-full bg-zinc-700" />
            </div>

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              pipeline.yml
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
            <span className="pipeline-node h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live
          </div>
        </div>

        <div className="p-5 sm:p-6">
          {/* Title */}
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                CI/CD Workflow
              </p>

              <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
                Production delivery
              </h2>
            </div>

            <span className="font-mono text-[10px] text-cyan-400">
              RUN #284
            </span>
          </div>

          {/* Animated Pipeline SVG */}
          <div className="mt-7 rounded-2xl border border-white/[0.07] bg-black/20 px-4 py-5">
            <svg
              viewBox="0 0 460 74"
              className="h-auto w-full"
              role="img"
              aria-label="Animated CI/CD pipeline from commit to monitoring"
            >
              <defs>
                <filter id="pipelineGlow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                d="M28 37 H432"
                stroke="rgba(255,255,255,.10)"
                strokeWidth="2"
                fill="none"
              />

              <path
                d="M28 37 H432"
                stroke="rgb(34 211 238)"
                strokeOpacity=".62"
                strokeWidth="2"
                strokeDasharray="8 12"
                className="pipeline-dash"
                fill="none"
              />

              {[28, 129, 230, 331, 432].map((x, index) => (
                <g key={x}>
                  <circle
                    cx={x}
                    cy="37"
                    r="12"
                    fill="#090d12"
                    stroke={
                      index === 4
                        ? "rgba(52,211,153,.55)"
                        : "rgba(34,211,238,.4)"
                    }
                    strokeWidth="1.5"
                  />

                  <circle
                    cx={x}
                    cy="37"
                    r="3.5"
                    fill={index === 4 ? "rgb(52 211 153)" : "rgb(34 211 238)"}
                    className="pipeline-node"
                    style={{ animationDelay: `${index * 0.35}s` }}
                  />
                </g>
              ))}

              <circle
                r="5"
                fill="rgb(103 232 249)"
                filter="url(#pipelineGlow)"
              >
                <animateMotion
                  dur="5.5s"
                  repeatCount="indefinite"
                  path="M28 37 H432"
                />
              </circle>
            </svg>

            <div className="mt-3 grid grid-cols-5 gap-1">
              {["Commit", "Build", "Test", "Deploy", "Monitor"].map((item) => (
                <span
                  key={item}
                  className="text-center font-mono text-[8px] uppercase tracking-[0.08em] text-zinc-600 sm:text-[9px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Stage Cards */}
          <div className="mt-4 grid grid-cols-5 gap-2">
            {stages.map((stage, index) => (
              <div
                key={stage.name}
                className={`pipeline-stage-${
                  index + 1
                } min-w-0 rounded-xl border border-white/[0.08] bg-white/[0.02] px-2 py-3 text-center transition`}
              >
                <p className="font-mono text-[8px] text-zinc-700">
                  {stage.status}
                </p>

                <p className="mt-2 truncate text-[10px] font-medium text-zinc-300 sm:text-xs">
                  {stage.name}
                </p>

                <p
                  className={`mt-1 truncate font-mono text-[8px] ${
                    stage.name === "Monitor"
                      ? "text-emerald-400"
                      : "text-zinc-600"
                  }`}
                >
                  {stage.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Live terminal output */}
          <div className="mt-4 rounded-2xl border border-white/[0.07] bg-[#05070a] p-4 font-mono text-[10px] leading-6">
            <p className="text-zinc-600">
              <span className="text-cyan-400">$</span> github-actions deploy
              --environment production
            </p>

            <p className="text-zinc-500">
              ✓ tests passed{" "}
              <span className="text-zinc-700">·</span> image pushed to ECR
            </p>

            <p className="text-emerald-400">
              ✓ deployment healthy{" "}
              <span className="terminal-cursor ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-emerald-400" />
            </p>
          </div>

          {/* Footer metrics */}
          <div className="mt-4 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/[0.07] bg-white/[0.02] py-3">
            {[
              ["Build", "38s"],
              ["Tests", "42 / 42"],
              ["Status", "Healthy"],
            ].map(([label, value]) => (
              <div key={label} className="px-3 text-center">
                <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-zinc-700">
                  {label}
                </p>

                <p
                  className={`mt-1 text-xs font-medium ${
                    label === "Status" ? "text-emerald-400" : "text-zinc-300"
                  }`}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative infrastructure nodes */}
      <div className="pointer-events-none absolute -right-4 -top-5 hidden h-20 w-20 rounded-2xl border border-white/[0.06] bg-white/[0.015] lg:block">
        <div className="absolute left-4 top-4 h-2 w-2 rounded-full bg-cyan-400/50" />
        <div className="absolute bottom-4 right-4 h-1.5 w-1.5 rounded-full bg-emerald-400/50" />
        <div className="absolute left-5 top-5 h-10 w-px rotate-45 bg-gradient-to-b from-cyan-400/20 to-transparent" />
      </div>
    </div>
  );
}

