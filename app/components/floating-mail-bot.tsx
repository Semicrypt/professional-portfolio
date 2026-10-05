"use client";

export function FloatingMailBot() {
  return (
    <>
      <style jsx global>{`
        .mail-bot-wrap {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 80;
        }

        .mail-bot {
          position: relative;
          display: grid;
          place-items: center;
          width: 66px;
          height: 66px;
          border-radius: 22px;
          border: 1px solid rgba(96, 165, 250, 0.35);
          background:
            radial-gradient(
              circle at 35% 25%,
              rgba(147, 197, 253, 0.36),
              transparent 34%
            ),
            linear-gradient(145deg, #13243a, #0b1625);
          box-shadow:
            0 12px 38px rgba(0, 0, 0, 0.35),
            0 0 28px rgba(59, 130, 246, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          cursor: pointer;
          text-decoration: none;
          animation: mailBotFloat 3.8s ease-in-out infinite;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .mail-bot:hover {
          transform: translateY(-5px) scale(1.05);
          border-color: rgba(96, 165, 250, 0.7);
          box-shadow:
            0 16px 44px rgba(0, 0, 0, 0.42),
            0 0 34px rgba(59, 130, 246, 0.28);
        }

        .mail-bot-face {
          position: relative;
          width: 34px;
          height: 26px;
          border: 1px solid rgba(147, 197, 253, 0.28);
          border-radius: 10px;
          background: rgba(8, 18, 31, 0.82);
          box-shadow: inset 0 0 18px rgba(59, 130, 246, 0.05);
        }

        .mail-bot-eye {
          position: absolute;
          top: 7px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #60a5fa;
          box-shadow: 0 0 10px rgba(96, 165, 250, 0.85);
          animation: mailBotBlink 4.8s infinite;
        }

        .mail-bot-eye.left {
          left: 8px;
        }

        .mail-bot-eye.right {
          right: 8px;
        }

        .mail-bot-mouth {
          position: absolute;
          left: 50%;
          bottom: 5px;
          width: 10px;
          height: 2px;
          border-radius: 99px;
          background: rgba(147, 197, 253, 0.75);
          transform: translateX(-50%);
        }

        .mail-bot-antenna {
          position: absolute;
          top: -11px;
          left: 50%;
          width: 1px;
          height: 9px;
          background: rgba(96, 165, 250, 0.6);
          transform: translateX(-50%);
        }

        .mail-bot-antenna::after {
          content: "";
          position: absolute;
          left: 50%;
          top: -4px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #60a5fa;
          box-shadow: 0 0 12px rgba(96, 165, 250, 0.9);
          transform: translateX(-50%);
          animation: mailBotPulse 1.8s ease-in-out infinite;
        }

        .mail-bot-envelope {
          position: absolute;
          right: -4px;
          bottom: -4px;
          display: grid;
          place-items: center;
          width: 24px;
          height: 24px;
          border-radius: 8px;
          background: #2563eb;
          color: white;
          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.4);
        }

        .mail-bot-tooltip {
          position: absolute;
          right: 78px;
          top: 50%;
          width: max-content;
          max-width: 180px;
          padding: 9px 12px;
          border: 1px solid rgba(96, 165, 250, 0.18);
          border-radius: 10px;
          background: rgba(7, 15, 26, 0.94);
          color: #bfdbfe;
          font-size: 12px;
          font-weight: 600;
          opacity: 0;
          pointer-events: none;
          transform: translate(8px, -50%);
          transition:
            opacity 0.2s ease,
            transform 0.2s ease;
          white-space: nowrap;
          backdrop-filter: blur(12px);
        }

        .mail-bot:hover .mail-bot-tooltip,
        .mail-bot:focus-visible .mail-bot-tooltip {
          opacity: 1;
          transform: translate(0, -50%);
        }

        .mail-bot:focus-visible {
          outline: 2px solid #60a5fa;
          outline-offset: 4px;
        }

        @keyframes mailBotFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes mailBotBlink {
          0%,
          45%,
          49%,
          100% {
            transform: scaleY(1);
          }
          46%,
          48% {
            transform: scaleY(0.1);
          }
        }

        @keyframes mailBotPulse {
          0%,
          100% {
            opacity: 0.5;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scale(1.35);
          }
        }

        @media (max-width: 640px) {
          .mail-bot-wrap {
            right: 16px;
            bottom: 16px;
          }

          .mail-bot {
            width: 58px;
            height: 58px;
            border-radius: 19px;
          }

          .mail-bot-tooltip {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mail-bot,
          .mail-bot-eye,
          .mail-bot-antenna::after {
            animation: none !important;
          }
        }
      `}</style>

      <div className="mail-bot-wrap">
        <a
          className="mail-bot"
          href="mailto:nifeanyidivine@gmail.com?subject=Portfolio%20Enquiry"
          aria-label="Send an email to Nwachukwu Ifeanyi Divine"
          title="Send me an email"
        >
          <span className="mail-bot-tooltip">Send me a message</span>

          <span className="mail-bot-face" aria-hidden="true">
            <span className="mail-bot-antenna" />
            <span className="mail-bot-eye left" />
            <span className="mail-bot-eye right" />
            <span className="mail-bot-mouth" />
          </span>

          <span className="mail-bot-envelope" aria-hidden="true">
            ✉
          </span>
        </a>
      </div>
    </>
  );
}
