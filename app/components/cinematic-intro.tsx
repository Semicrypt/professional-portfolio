"use client";

import Image from "next/image";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./cinematic-intro.module.css";

const scenes = [
  {
    stage: "SIGNAL",
    eyebrow: "01 // DETECT",
    title: "Production signal detected.",
    detail: "Latency moving outside baseline. Telemetry stream active.",
    speaker: "SYSTEM",
    dialogue: "Commit received. Build pipeline starting.",
  },
  {
    stage: "BUILD",
    eyebrow: "02 // BUILD",
    title: "Build with intent.",
    detail: "Dependencies resolved. Tests passing. Artifact prepared.",
    speaker: "SYSTEM",
    dialogue: "Build passed. Artifact ready for verification.",
  },
  {
    stage: "VERIFY",
    eyebrow: "03 // CONTAINERIZE",
    title: "Package what runs.",
    detail: "Image built. Integrity checked. Runtime configuration validated.",
    speaker: "OPERATOR",
    dialogue: "Verify the image. Then ship it.",
  },
  {
    stage: "SHIP",
    eyebrow: "04 // DEPLOY",
    title: "Ship with control.",
    detail: "Rolling deployment started. New replicas entering service.",
    speaker: "SYSTEM",
    dialogue: "Container ready. Rolling deployment in progress.",
  },
  {
    stage: "OBSERVE",
    eyebrow: "05 // OBSERVE",
    title: "Watch the system.",
    detail: "Latency. Errors. Saturation. Health. Signals before assumptions.",
    speaker: "OPERATOR",
    dialogue: "Watch latency, errors, and service health.",
  },
  {
    stage: "HEALTHY",
    eyebrow: "06 // STABILIZE",
    title: "Production healthy.",
    detail: "Error rate nominal. Replicas ready. Telemetry stable.",
    speaker: "SYSTEM",
    dialogue: "Telemetry stable. Production healthy.",
  },
  {
    stage: "IDENTITY",
    eyebrow: "CLOUD // DEVOPS",
    title: "Nwachukwu Ifeanyi Divine",
    detail: "Cloud & DevOps Engineer",
    speaker: "SYSTEM",
    dialogue: "Nwachukwu Ifeanyi Divine. Cloud and DevOps Engineer.",
  },
];

const sceneTimes = [
  0,
  1450,
  2900,
  4400,
  6000,
  7600,
  9300,
];

const totalDuration = 11200;

type Timer = number;

export function CinematicIntro() {
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [run, setRun] = useState(0);

  const timersRef = useRef<Timer[]>([]);
  const voiceTimersRef = useRef<Timer[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(window.clearTimeout);
    voiceTimersRef.current.forEach(window.clearTimeout);

    timersRef.current = [];
    voiceTimersRef.current = [];
  }, []);

  const speak = useCallback(
    (
      text: string,
      speaker: "SYSTEM" | "OPERATOR",
    ) => {
      if (
        typeof window === "undefined" ||
        !("speechSynthesis" in window)
      ) {
        return;
      }

      const utterance =
        new SpeechSynthesisUtterance(text);

      const voices =
        window.speechSynthesis.getVoices();

      const english =
        voices.filter((voice) =>
          voice.lang
            .toLowerCase()
            .startsWith("en"),
        );

      if (english.length > 0) {
        utterance.voice =
          speaker === "OPERATOR"
            ? english[
                Math.min(1, english.length - 1)
              ]
            : english[0];
      }

      utterance.rate =
        speaker === "OPERATOR"
          ? 0.94
          : 0.98;

      utterance.pitch =
        speaker === "OPERATOR"
          ? 0.82
          : 1.02;

      utterance.volume = 0.92;

      window.speechSynthesis.speak(
        utterance,
      );
    },
    [],
  );

  useEffect(() => {
    clearTimers();

    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      window.speechSynthesis.cancel();
    }

    setPhase(0);

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    if (reducedMotion) {
      setPhase(scenes.length - 1);

      const timer = window.setTimeout(
        () => setVisible(false),
        1500,
      );

      timersRef.current.push(timer);

      return clearTimers;
    }

    sceneTimes.forEach((time, index) => {
      const timer = window.setTimeout(
        () => setPhase(index),
        time,
      );

      timersRef.current.push(timer);
    });

    if (voiceEnabled) {
      scenes.forEach((scene, index) => {
        const timer = window.setTimeout(
          () => {
            speak(
              scene.dialogue,
              scene.speaker as
                | "SYSTEM"
                | "OPERATOR",
            );
          },
          sceneTimes[index] + 120,
        );

        voiceTimersRef.current.push(timer);
      });
    }

    const finish = window.setTimeout(
      () => setVisible(false),
      totalDuration,
    );

    timersRef.current.push(finish);

    return () => {
      clearTimers();

      if (
        typeof window !== "undefined" &&
        "speechSynthesis" in window
      ) {
        window.speechSynthesis.cancel();
      }
    };
  }, [
    run,
    voiceEnabled,
    clearTimers,
    speak,
  ]);

  const enableVoice = () => {
    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      window.speechSynthesis.cancel();

      /*
       * Prime speech synthesis from the actual
       * user interaction.
       */
      const primer =
        new SpeechSynthesisUtterance("");

      primer.volume = 0;

      window.speechSynthesis.speak(primer);
    }

    setVoiceEnabled(true);
    setRun((value) => value + 1);
  };

  const skip = () => {
    clearTimers();

    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      window.speechSynthesis.cancel();
    }

    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  const scene = scenes[phase];

  return (
    <div
      className={styles.root}
      data-phase={scene.stage}
      role="dialog"
      aria-label="Cloud and DevOps engineering introduction"
    >
      <div className={styles.letterboxTop} />
      <div className={styles.letterboxBottom} />

      <div className={styles.grid} />
      <div className={styles.scan} />
      <div className={styles.vignette} />

      <header className={styles.topbar}>
        <div>
          <span className={styles.liveDot} />
          DIVINE // DEPLOYMENT CONTROL
        </div>

        <div className={styles.controls}>
          {!voiceEnabled && (
            <button
              type="button"
              onClick={enableVoice}
            >
              ENABLE VOICE
            </button>
          )}

          {voiceEnabled && (
            <span className={styles.voiceOn}>
              ● VOICE ON
            </span>
          )}

          <button
            type="button"
            onClick={skip}
          >
            SKIP INTRO
          </button>
        </div>
      </header>

      <main className={styles.stage}>
        <section className={styles.leftPanel}>
          <span className={styles.panelLabel}>
            DEPLOYMENT PIPELINE
          </span>

          {[
            "COMMIT",
            "BUILD",
            "CONTAINER",
            "DEPLOY",
            "OBSERVE",
          ].map((item, index) => {
            const activeIndex =
              Math.min(
                phase,
                4,
              );

            return (
              <div
                key={item}
                className={`${styles.pipelineRow} ${
                  index <= activeIndex
                    ? styles.pipelineDone
                    : ""
                }`}
              >
                <i />

                <span>
                  0{index + 1}
                </span>

                <strong>
                  {item}
                </strong>

                <small>
                  {index < activeIndex
                    ? "DONE"
                    : index === activeIndex
                      ? "RUNNING"
                      : "WAIT"}
                </small>
              </div>
            );
          })}
        </section>

        <section
          className={styles.centerStage}
          key={`${run}-${phase}`}
        >
          <p className={styles.eyebrow}>
            {scene.eyebrow}
          </p>

          <h1>
            {scene.title}
          </h1>

          <p className={styles.detail}>
            {scene.detail}
          </p>

          <div className={styles.commandWindow}>
            <div className={styles.commandBar}>
              <span />
              <span />
              <span />

              <strong>
                production://deploy
              </strong>
            </div>

            <div className={styles.commandLines}>
              <p>
                <span>$</span>{" "}
                git push origin main
              </p>

              <p>
                <b>✓</b>{" "}
                pipeline validation passed
              </p>

              <p>
                <b>✓</b>{" "}
                image immutable · artifact signed
              </p>

              <p>
                <b>●</b>{" "}
                {scene.stage === "HEALTHY" ||
                scene.stage === "IDENTITY"
                  ? "deployment healthy · telemetry stable"
                  : "deployment state streaming..."}
              </p>
            </div>
          </div>
        </section>

        <section className={styles.rightPanel}>
          <span className={styles.panelLabel}>
            LIVE TELEMETRY
          </span>

          <Metric
            label="LATENCY"
            value={
              phase >= 5
                ? "42ms"
                : "86ms"
            }
            level={
              phase >= 5
                ? 32
                : 63
            }
          />

          <Metric
            label="ERROR RATE"
            value={
              phase >= 5
                ? "0.02%"
                : "0.41%"
            }
            level={
              phase >= 5
                ? 12
                : 48
            }
          />

          <Metric
            label="REPLICAS"
            value={
              phase >= 3
                ? "3 / 3"
                : "2 / 3"
            }
            level={
              phase >= 3
                ? 100
                : 67
            }
          />

          <Metric
            label="HEALTH"
            value={
              phase >= 5
                ? "HEALTHY"
                : "WATCHING"
            }
            level={
              phase >= 5
                ? 100
                : 72
            }
          />

          <div className={styles.pulseGraph}>
            {Array.from(
              { length: 22 },
              (_, index) => (
                <i
                  key={index}
                  style={{
                    height: `${
                      18 +
                      ((index * 17) % 62)
                    }%`,
                  }}
                />
              ),
            )}
          </div>
        </section>
      </main>

      <div
        className={styles.dialogue}
        key={`dialogue-${run}-${phase}`}
      >
        <span>
          {scene.speaker}
        </span>

        <p>
          “{scene.dialogue}”
        </p>
      </div>

      {scene.stage === "IDENTITY" && (
        <div className={styles.identity}>
          <div
            className={styles.identityBackdrop}
            aria-hidden="true"
          />

          <div className={styles.identityScene}>
            <div className={styles.identityStatusTop}>
              <span className={styles.identityStatusDot} />

              <div>
                <span>PRODUCTION://</span>
                <strong>HEALTHY</strong>
              </div>
            </div>

            <div className={styles.identityPortraitStage}>
              <div className={styles.identitySideLeft}>
                <span>CLOUD</span>
                <span>INFRASTRUCTURE</span>
                <span>DEVOPS</span>
                <span>AUTOMATION</span>
                <span>SCALABILITY</span>
              </div>

              <div className={styles.identityPhotoFrame}>
                <div
                  className={styles.identityCornerTL}
                  aria-hidden="true"
                />

                <div
                  className={styles.identityCornerTR}
                  aria-hidden="true"
                />

                <div
                  className={styles.identityCornerBL}
                  aria-hidden="true"
                />

                <div
                  className={styles.identityCornerBR}
                  aria-hidden="true"
                />

                <Image
                  src="/intro/divinephoto.png"
                  alt="Nwachukwu Ifeanyi Divine"
                  fill
                  priority
                  sizes="(max-width: 700px) 78vw, 420px"
                  className={styles.identityPhoto}
                />

                <div
                  className={styles.identityPhotoScan}
                  aria-hidden="true"
                />
              </div>

              <div className={styles.identitySideRight}>
                <span>BUILD</span>
                <span>DEPLOY</span>
                <span>MONITOR</span>
                <span>SCALE</span>
                <span>REPEAT</span>
              </div>
            </div>

            <div className={styles.identityHealthy}>
              PRODUCTION&nbsp;&nbsp;//&nbsp;&nbsp;HEALTHY
            </div>

            <h2 className={styles.identityName}>
              <span>Nwachukwu</span>
              <span>Ifeanyi Divine</span>
            </h2>

            <div className={styles.identityRole}>
              CLOUD &amp; DEVOPS ENGINEER
            </div>

            <div className={styles.identityTerminal}>
              <div className={styles.identityTerminalBar}>
                <div>
                  <i />
                  <i />
                  <i />
                </div>

                <span>
                  production://deploy
                </span>
              </div>

              <div className={styles.identityTerminalBody}>
                <p>
                  <span>$</span>{" "}
                  git push origin main
                </p>

                <p>
                  <b>✓</b>{" "}
                  pipeline validation passed
                </p>

                <p>
                  <b>✓</b>{" "}
                  deploying to production...
                  <i className={styles.identityCursor} />
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className={styles.progress}>
        <div
          key={run}
          className={styles.progressFill}
        />

        <span>
          {String(
            phase + 1,
          ).padStart(2, "0")}
          {" / "}
          {String(
            scenes.length,
          ).padStart(2, "0")}
        </span>
      </footer>
    </div>
  );
}

function Metric({
  label,
  value,
  level,
}: {
  label: string;
  value: string;
  level: number;
}) {
  return (
    <div className={styles.metric}>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>

      <div className={styles.metricTrack}>
        <i
          style={{
            width: `${level}%`,
          }}
        />
      </div>
    </div>
  );
}
