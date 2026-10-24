"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type SoundSession = {
  context: AudioContext;
  sources: AudioScheduledSourceNode[];
};

export function IntroSoundscape() {
  const sessionRef = useRef<SoundSession | null>(null);
  const [soundOn, setSoundOn] = useState(false);

  const stopSound = useCallback(async () => {
    const session = sessionRef.current;

    if (session) {
      for (const source of session.sources) {
        try {
          source.stop();
        } catch {}
      }

      try {
        await session.context.close();
      } catch {}
    }

    sessionRef.current = null;
    setSoundOn(false);
  }, []);

  const startSound = useCallback(async () => {
    if (sessionRef.current) {
      return;
    }

    const context = new window.AudioContext();

    if (context.state === "suspended") {
      await context.resume();
    }

    if (context.state !== "running") {
      try {
        await context.close();
      } catch {}

      return;
    }

    const now = context.currentTime;
    const sources: AudioScheduledSourceNode[] = [];

    // Overall volume.
    const master = context.createGain();

    master.gain.setValueAtTime(0.18, now);
    master.gain.setValueAtTime(0.18, now + 5.8);

    master.gain.exponentialRampToValueAtTime(
      0.0001,
      now + 6.35,
    );

    master.connect(context.destination);

    // -----------------------------------------------------
    // ONE MECHANICAL KEY PRESS
    // -----------------------------------------------------

    const keyPress = (
      at: number,
      index: number,
      intensity = 1,
    ) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const filter = context.createBiquadFilter();

      oscillator.type = "square";

      const frequencies = [
        980,
        1120,
        860,
        1240,
        1040,
      ];

      const frequency =
        frequencies[index % frequencies.length];

      oscillator.frequency.setValueAtTime(
        frequency,
        at,
      );

      oscillator.frequency.exponentialRampToValueAtTime(
        frequency * 0.72,
        at + 0.03,
      );

      filter.type = "bandpass";
      filter.frequency.value = 1350;
      filter.Q.value = 0.8;

      gain.gain.setValueAtTime(
        0.0001,
        at,
      );

      gain.gain.exponentialRampToValueAtTime(
        0.13 * intensity,
        at + 0.002,
      );

      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        at + 0.035,
      );

      oscillator.connect(filter);
      filter.connect(gain);
      gain.connect(master);

      oscillator.start(at);
      oscillator.stop(at + 0.04);

      sources.push(oscillator);
    };

    // -----------------------------------------------------
    // DEEPER ENTER / RETURN KEY
    // -----------------------------------------------------

    const enterPress = (at: number) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = "triangle";

      oscillator.frequency.setValueAtTime(
        190,
        at,
      );

      oscillator.frequency.exponentialRampToValueAtTime(
        82,
        at + 0.11,
      );

      gain.gain.setValueAtTime(
        0.0001,
        at,
      );

      gain.gain.exponentialRampToValueAtTime(
        0.2,
        at + 0.004,
      );

      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        at + 0.13,
      );

      oscillator.connect(gain);
      gain.connect(master);

      oscillator.start(at);
      oscillator.stop(at + 0.14);

      sources.push(oscillator);

      keyPress(at, 2, 1.25);
    };

    // -----------------------------------------------------
    // NAME TYPING
    // Matches the visual ~34ms-per-letter typing.
    // -----------------------------------------------------

    const name = "Nwachukwu Ifeanyi Divine";
    const nameStart = now + 0.08;

    [...name].forEach((character, index) => {
      if (character === " ") {
        return;
      }

      keyPress(
        nameStart + index * 0.034,
        index,
        0.9,
      );
    });

    enterPress(
      nameStart +
        name.length * 0.034 +
        0.09,
    );

    // -----------------------------------------------------
    // TERMINAL COMMAND TYPING BURSTS
    // -----------------------------------------------------

    const typingBurst = (
      start: number,
      count: number,
      interval: number,
      offset: number,
    ) => {
      for (let i = 0; i < count; i += 1) {
        keyPress(
          now + start + i * interval,
          i + offset,
          0.66,
        );
      }

      enterPress(
        now +
          start +
          count * interval +
          0.025,
      );
    };

    // $ git push origin main
    typingBurst(
      1.28,
      17,
      0.035,
      20,
    );

    // build pipeline passed
    typingBurst(
      1.82,
      12,
      0.032,
      40,
    );

    // containers ready
    typingBurst(
      2.28,
      15,
      0.031,
      60,
    );

    // deployment healthy
    typingBurst(
      2.76,
      14,
      0.032,
      80,
    );

    // -----------------------------------------------------
    // STOIC STORY — slower, deliberate keystrokes
    // -----------------------------------------------------

    typingBurst(
      4.05,
      9,
      0.052,
      100,
    );

    typingBurst(
      4.57,
      11,
      0.047,
      120,
    );

    typingBurst(
      5.12,
      10,
      0.05,
      140,
    );

    // -----------------------------------------------------
    // FINAL TERMINAL CONFIRMATION BEEP
    // -----------------------------------------------------

    const confirmation = context.createOscillator();
    const confirmationGain = context.createGain();

    confirmation.type = "sine";

    confirmation.frequency.setValueAtTime(
      880,
      now + 5.78,
    );

    confirmation.frequency.exponentialRampToValueAtTime(
      1320,
      now + 5.92,
    );

    confirmationGain.gain.setValueAtTime(
      0.0001,
      now + 5.78,
    );

    confirmationGain.gain.exponentialRampToValueAtTime(
      0.12,
      now + 5.8,
    );

    confirmationGain.gain.exponentialRampToValueAtTime(
      0.0001,
      now + 6.05,
    );

    confirmation.connect(confirmationGain);
    confirmationGain.connect(master);

    confirmation.start(now + 5.78);
    confirmation.stop(now + 6.1);

    sources.push(confirmation);

    sessionRef.current = {
      context,
      sources,
    };

    setSoundOn(true);

    window.setTimeout(() => {
      if (
        sessionRef.current?.context === context
      ) {
        context.close().catch(() => {});

        sessionRef.current = null;
        setSoundOn(false);
      }
    }, 6500);
  }, []);

  useEffect(() => {
    return () => {
      const session = sessionRef.current;

      if (!session) {
        return;
      }

      for (const source of session.sources) {
        try {
          source.stop();
        } catch {}
      }

      session.context.close().catch(() => {});
      sessionRef.current = null;
    };
  }, []);

  return (
    <button
      type="button"
      className="intro-sound-toggle"
      aria-label={
        soundOn
          ? "Mute terminal sound"
          : "Play terminal sound"
      }
      onClick={async (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (soundOn) {
          await stopSound();
        } else {
          await startSound();
        }
      }}
    >
      <span
        className={`intro-sound-dot ${
          soundOn ? "is-on" : ""
        }`}
        aria-hidden="true"
      />

      {soundOn ? "MUTE" : "PLAY SOUND"}
    </button>
  );
}
