export default function TechnologyAnimation() {
  const pipeline = ["Commit", "Build", "Test", "Deploy", "Monitor"];

  return (
    <section className="relative mt-12 overflow-hidden rounded-[32px] border border-white/10 bg-[#070b10] shadow-2xl shadow-black/40">
      <style>{`
        @keyframes techDash {
          to { stroke-dashoffset: -44; }
        }

        @keyframes techPulse {
          0%, 100% {
            opacity: .45;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.35);
          }
        }

        @keyframes techGlow {
          0%, 100% {
            box-shadow: 0 0 0 rgba(45,212,191,0);
            border-color: rgba(255,255,255,.08);
          }
          50% {
            box-shadow: 0 0 32px rgba(45,212,191,.08);
            border-color: rgba(45,212,191,.22);
          }
        }

        @keyframes terminalLine {
          0%, 8% {
            opacity: 0;
            transform: translateY(6px);
          }
          15%, 78% {
            opacity: 1;
            transform: translateY(0);
          }
          88%, 100% {
            opacity: .35;
          }
        }

        @keyframes scan {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          12% {
            opacity: .6;
          }
          88% {
            opacity: .12;
          }
          100% {
            transform: translateY(440px);
            opacity: 0;
          }
        }

        @keyframes blink {
          0%, 48% { opacity: 1; }
          49%, 100% { opacity: 0; }
        }

        @keyframes gridMove {
          from { background-position: 0 0; }
          to { background-position: 48px 48px; }
        }

        @keyframes stageFlow {
          0% { width: 0%; }
          75%, 100% { width: 100%; }
        }

        .tech-grid {
          background-image:
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
          background-size: 48px 48px;
          animation: gridMove 12s linear infinite;
        }

        .tech-dash {
          animation: techDash 1.3s linear infinite;
        }

        .tech-pulse {
          transform-box: fill-box;
          transform-origin: center;
          animation: techPulse 2s ease-in-out infinite;
        }

        .tech-node {
          animation: techGlow 4s ease-in-out infinite;
        }

        .tech-scan {
          animation: scan 5s linear infinite;
        }

        .terminal-cursor {
          animation: blink .9s steps(1) infinite;
        }

        .pipeline-progress {
          animation: stageFlow 6s ease-in-out infinite;
        }

        .terminal-line-1 {
          animation: terminalLine 7s ease-in-out infinite 0s;
        }

        .terminal-line-2 {
          animation: terminalLine 7s ease-in-out infinite .8s;
        }

        .terminal-line-3 {
          animation: terminalLine 7s ease-in-out infinite 1.6s;
        }

        .terminal-line-4 {
          animation: terminalLine 7s ease-in-out infinite 2.4s;
        }

        .terminal-line-5 {
          animation: terminalLine 7s ease-in-out infinite 3.2s;
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-grid,
          .tech-dash,
          .tech-pulse,
          .tech-node,
          .tech-scan,
          .terminal-cursor,
          .pipeline-progress,
          .terminal-line-1,
          .terminal-line-2,
          .terminal-line-3,
          .terminal-line-4,
          .terminal-line-5 {
            animation: none !important;
          }
        }
      `}</style>

      {/* background */}
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-teal-400/[0.07] blur-[140px]" />

      <div className="tech-scan pointer-events-none absolute left-0 top-0 z-20 h-px w-full bg-gradient-to-r from-transparent via-teal-300/50 to-transparent" />

      {/* header */}
      <div className="relative z-10 flex flex-col gap-4 border-b border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-teal-300">
            Cloud engineering control plane
          </p>

          <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
            From code to running infrastructure
          </h2>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
          <span className="tech-pulse h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Systems healthy
        </div>
      </div>

      <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr]">
        {/* TERMINAL / COMPUTER */}
        <div className="border-b border-white/10 p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <div className="tech-node overflow-hidden rounded-2xl border border-white/10 bg-[#05080c]">
            {/* terminal title bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              </div>

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                devops@production
              </span>

              <span className="text-[9px] text-emerald-400">
                ● connected
              </span>
            </div>

            {/* terminal */}
            <div className="min-h-[300px] p-5 font-mono text-[11px] leading-6 sm:text-xs">
              <p className="terminal-line-1 text-zinc-400">
                <span className="text-teal-300">$</span> git push origin main
              </p>

              <p className="terminal-line-2 mt-3 text-zinc-500">
                <span className="text-emerald-400">✓</span> GitHub Actions workflow triggered
              </p>

              <p className="terminal-line-3 mt-2 text-zinc-500">
                <span className="text-emerald-400">✓</span> docker build completed
              </p>

              <p className="terminal-line-4 mt-2 text-zinc-500">
                <span className="text-emerald-400">✓</span> kubectl rollout status deployment/api
              </p>

              <p className="terminal-line-5 mt-2 text-zinc-500">
                <span className="text-emerald-400">✓</span> observability pipeline streaming
              </p>

              <p className="mt-7 text-zinc-400">
                <span className="text-teal-300">$</span>{" "}
                terraform plan
              </p>

              <div className="mt-3 space-y-1 text-zinc-600">
                <p>+ infrastructure changes validated</p>
                <p>+ network policy verified</p>
                <p>+ workload health checks passing</p>
              </div>

              <p className="mt-7 text-zinc-400">
                <span className="text-teal-300">$</span>{" "}
                monitor --stack production
                <span className="terminal-cursor ml-1 text-teal-300">█</span>
              </p>
            </div>
          </div>

          {/* pipeline */}
          <div className="mt-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-medium text-zinc-300">
                CI/CD pipeline
              </p>

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                automated delivery
              </span>
            </div>

            <div className="relative">
              <div className="absolute left-5 right-5 top-[17px] h-px bg-white/10" />

              <div className="pipeline-progress absolute left-5 top-[17px] h-px max-w-[calc(100%-40px)] bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400" />

              <div className="relative grid grid-cols-5 gap-2">
                {pipeline.map((item, index) => (
                  <div
                    key={item}
                    className="flex flex-col items-center text-center"
                  >
                    <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-teal-400/20 bg-[#081015] font-mono text-[9px] text-teal-300">
                      0{index + 1}
                    </span>

                    <span className="mt-2 text-[9px] uppercase tracking-[0.12em] text-zinc-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CLOUD TOPOLOGY */}
        <div className="p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                Infrastructure topology
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white">
                Multi-cloud delivery
              </h3>
            </div>

            <span className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-zinc-500">
              AWS + Azure
            </span>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.07] bg-black/20 p-4">
            <svg
              viewBox="0 0 500 390"
              className="h-auto w-full"
              aria-label="Animated cloud and DevOps infrastructure topology"
            >
              {/* connections */}
              {[
                [80, 195, 190, 95],
                [80, 195, 190, 295],
                [190, 95, 310, 95],
                [190, 295, 310, 295],
                [310, 95, 420, 195],
                [310, 295, 420, 195],
                [420, 195, 420, 330],
              ].map(([x1, y1, x2, y2], index) => (
                <line
                  key={index}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="rgb(45 212 191)"
                  strokeOpacity=".32"
                  strokeWidth="2"
                  strokeDasharray="7 10"
                  className="tech-dash"
                />
              ))}

              {/* client */}
              <g>
                <rect
                  x="28"
                  y="160"
                  width="104"
                  height="70"
                  rx="16"
                  fill="#0a1015"
                  stroke="rgba(255,255,255,.12)"
                />
                <text
                  x="80"
                  y="191"
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="13"
                >
                  Engineer
                </text>
                <text
                  x="80"
                  y="211"
                  textAnchor="middle"
                  fill="#71717a"
                  fontSize="10"
                >
                  Git / CLI
                </text>
              </g>

              {/* AWS */}
              <g>
                <rect
                  x="145"
                  y="55"
                  width="92"
                  height="80"
                  rx="16"
                  fill="#0a1015"
                  stroke="rgba(45,212,191,.28)"
                />
                <circle
                  cx="190"
                  cy="76"
                  r="5"
                  fill="rgb(45 212 191)"
                  className="tech-pulse"
                />
                <text
                  x="190"
                  y="101"
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="13"
                >
                  AWS
                </text>
                <text
                  x="190"
                  y="119"
                  textAnchor="middle"
                  fill="#71717a"
                  fontSize="9"
                >
                  Cloud
                </text>
              </g>

              {/* Azure */}
              <g>
                <rect
                  x="145"
                  y="255"
                  width="92"
                  height="80"
                  rx="16"
                  fill="#0a1015"
                  stroke="rgba(45,212,191,.28)"
                />
                <circle
                  cx="190"
                  cy="276"
                  r="5"
                  fill="rgb(45 212 191)"
                  className="tech-pulse"
                />
                <text
                  x="190"
                  y="301"
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="13"
                >
                  Azure
                </text>
                <text
                  x="190"
                  y="319"
                  textAnchor="middle"
                  fill="#71717a"
                  fontSize="9"
                >
                  Cloud
                </text>
              </g>

              {/* Kubernetes */}
              <g>
                <rect
                  x="267"
                  y="55"
                  width="92"
                  height="80"
                  rx="16"
                  fill="#0a1015"
                  stroke="rgba(255,255,255,.12)"
                />
                <circle
                  cx="312"
                  cy="76"
                  r="5"
                  fill="rgb(34 211 238)"
                  className="tech-pulse"
                />
                <text
                  x="312"
                  y="101"
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="13"
                >
                  Kubernetes
                </text>
                <text
                  x="312"
                  y="119"
                  textAnchor="middle"
                  fill="#71717a"
                  fontSize="9"
                >
                  Workloads
                </text>
              </g>

              {/* Terraform */}
              <g>
                <rect
                  x="267"
                  y="255"
                  width="92"
                  height="80"
                  rx="16"
                  fill="#0a1015"
                  stroke="rgba(255,255,255,.12)"
                />
                <circle
                  cx="312"
                  cy="276"
                  r="5"
                  fill="rgb(34 211 238)"
                  className="tech-pulse"
                />
                <text
                  x="312"
                  y="301"
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="13"
                >
                  Terraform
                </text>
                <text
                  x="312"
                  y="319"
                  textAnchor="middle"
                  fill="#71717a"
                  fontSize="9"
                >
                  IaC
                </text>
              </g>

              {/* Platform */}
              <g>
                <rect
                  x="378"
                  y="155"
                  width="88"
                  height="80"
                  rx="16"
                  fill="#0a1015"
                  stroke="rgba(52,211,153,.3)"
                />
                <circle
                  cx="422"
                  cy="176"
                  r="5"
                  fill="rgb(52 211 153)"
                  className="tech-pulse"
                />
                <text
                  x="422"
                  y="201"
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="13"
                >
                  Platform
                </text>
                <text
                  x="422"
                  y="219"
                  textAnchor="middle"
                  fill="#71717a"
                  fontSize="9"
                >
                  Healthy
                </text>
              </g>

              {/* Grafana */}
              <g>
                <rect
                  x="378"
                  y="300"
                  width="88"
                  height="60"
                  rx="14"
                  fill="#0a1015"
                  stroke="rgba(255,255,255,.12)"
                />
                <circle
                  cx="422"
                  cy="316"
                  r="4"
                  fill="rgb(45 212 191)"
                  className="tech-pulse"
                />
                <text
                  x="422"
                  y="338"
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="12"
                >
                  Grafana
                </text>
                <text
                  x="422"
                  y="353"
                  textAnchor="middle"
                  fill="#71717a"
                  fontSize="8"
                >
                  Observability
                </text>
              </g>
            </svg>
          </div>

          {/* status strip */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              ["Cloud", "AWS + Azure"],
              ["Runtime", "Kubernetes"],
              ["Monitor", "Grafana"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
              >
                <p className="text-[8px] uppercase tracking-[0.16em] text-zinc-700">
                  {label}
                </p>

                <p className="mt-2 text-[11px] font-medium text-zinc-400">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
