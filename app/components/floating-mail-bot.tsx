"use client";

export function FloatingMailBot() {
  return (
    <>
      <style jsx>{`
        .mail-bot-wrap {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 80;
          pointer-events: none;
        }

        .mail-bot-float {
          position: relative;
          width: 140px;
          height: 140px;
          pointer-events: auto;
          animation: botTravel 7s ease-in-out infinite;
          transform-origin: center;
        }

        .mail-bot-link {
          position: absolute;
          inset: 0;
          display: block;
          text-decoration: none;
          border-radius: 999px;
          outline: none;
        }

        .mail-bot-link:focus-visible {
          outline: 2px solid #60a5fa;
          outline-offset: 6px;
          border-radius: 999px;
        }

        .ring {
          position: absolute;
          inset: 0;
          animation: ringSpin 10s linear infinite;
          filter: drop-shadow(0 0 18px rgba(59, 130, 246, 0.22));
        }

        .ring-two {
          animation:
            ringSpin 10s linear infinite reverse,
            ringSwap 6s ease-in-out infinite;
          opacity: 0;
        }

        .ring-one {
          animation:
            ringSpin 10s linear infinite,
            ringSwapAlt 6s ease-in-out infinite;
          opacity: 1;
        }

        .bot-core {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 88px;
          height: 88px;
          border-radius: 28px;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(96, 165, 250, 0.28);
          background:
            radial-gradient(
              circle at 30% 25%,
              rgba(147, 197, 253, 0.22),
              transparent 34%
            ),
            linear-gradient(145deg, #15263e, #0a1220 72%);
          box-shadow:
            0 10px 34px rgba(0, 0, 0, 0.38),
            0 0 24px rgba(59, 130, 246, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.07);
          display: grid;
          place-items: center;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .mail-bot-link:hover .bot-core {
          transform: translate(-50%, -50%) scale(1.04);
          border-color: rgba(96, 165, 250, 0.52);
          box-shadow:
            0 14px 42px rgba(0, 0, 0, 0.42),
            0 0 30px rgba(59, 130, 246, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .bot-face {
          position: relative;
          width: 42px;
          height: 32px;
          border-radius: 12px;
          border: 1px solid rgba(147, 197, 253, 0.2);
          background: rgba(10, 18, 32, 0.9);
          box-shadow: inset 0 0 16px rgba(59, 130, 246, 0.06);
        }

        .bot-eye {
          position: absolute;
          top: 9px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #60a5fa;
          box-shadow: 0 0 12px rgba(96, 165, 250, 0.95);
          animation: eyeBlink 4.5s infinite;
        }

        .bot-eye.left {
          left: 9px;
        }

        .bot-eye.right {
          right: 9px;
        }

        .bot-mouth {
          position: absolute;
          left: 50%;
          bottom: 7px;
          width: 12px;
          height: 2px;
          border-radius: 999px;
          background: rgba(191, 219, 254, 0.9);
          transform: translateX(-50%);
        }

        .bot-antenna {
          position: absolute;
          top: -12px;
          left: 50%;
          width: 1px;
          height: 10px;
          background: rgba(96, 165, 250, 0.6);
          transform: translateX(-50%);
        }

        .bot-antenna::after {
          content: "";
          position: absolute;
          left: 50%;
          top: -5px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #60a5fa;
          box-shadow: 0 0 14px rgba(96, 165, 250, 0.95);
          transform: translateX(-50%);
          animation: pulse 2s ease-in-out infinite;
        }

        .bot-mail {
          position: absolute;
          right: 18px;
          bottom: 16px;
          width: 30px;
          height: 30px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background: linear-gradient(145deg, #3b82f6, #2563eb);
          border: 1px solid rgba(191, 219, 254, 0.2);
          color: #eff6ff;
          font-size: 15px;
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.38);
        }

        .bot-tooltip {
          position: absolute;
          right: 150px;
          top: 50%;
          transform: translateY(-50%);
          padding: 10px 13px;
          border-radius: 12px;
          border: 1px solid rgba(96, 165, 250, 0.2);
          background: rgba(8, 15, 26, 0.94);
          color: #bfdbfe;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.24);
          opacity: 0;
          pointer-events: none;
          transition:
            opacity 0.2s ease,
            transform 0.2s ease;
        }

        .mail-bot-link:hover .bot-tooltip,
        .mail-bot-link:focus-visible .bot-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(-4px);
        }

        @keyframes botTravel {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-45px) rotate(-4deg);
          }
          50% {
            transform: translateY(-95px) rotate(0deg);
          }
          75% {
            transform: translateY(-45px) rotate(4deg);
          }
        }

        @keyframes ringSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ringSwapAlt {
          0%,
          42% {
            opacity: 1;
          }
          50%,
          92% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes ringSwap {
          0%,
          42% {
            opacity: 0;
          }
          50%,
          92% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes eyeBlink {
          0%,
          45%,
          49%,
          100% {
            transform: scaleY(1);
          }
          46%,
          48% {
            transform: scaleY(0.08);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.55;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scale(1.35);
          }
        }

        @media (max-width: 640px) {
          .mail-bot-wrap {
            right: 14px;
            bottom: 14px;
          }

          .mail-bot-float {
            width: 118px;
            height: 118px;
          }

          .bot-core {
            width: 76px;
            height: 76px;
            border-radius: 24px;
          }

          .bot-tooltip {
            display: none;
          }

          .bot-mail {
            right: 15px;
            bottom: 12px;
            width: 28px;
            height: 28px;
          }

          @keyframes botTravel {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }
            25% {
              transform: translateY(-28px) rotate(-3deg);
            }
            50% {
              transform: translateY(-58px) rotate(0deg);
            }
            75% {
              transform: translateY(-28px) rotate(3deg);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mail-bot-float,
          .ring,
          .ring-one,
          .ring-two,
          .bot-eye,
          .bot-antenna::after {
            animation: none !important;
          }
        }
      `}</style>

      <div className="mail-bot-wrap">
        <div className="mail-bot-float">
          <a
            className="mail-bot-link"
            href="mailto:nifeanyidivine@gmail.com?subject=Portfolio%20Enquiry"
            aria-label="Send an email to Nwachukwu Ifeanyi Divine"
            title="Send me a mail"
          >
            <span className="bot-tooltip">Send me a message</span>

            <svg
              className="ring ring-one"
              viewBox="0 0 140 140"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="mailBotCircleOne"
                  d="M 70,70
                     m -48,0
                     a 48,48 0 1,1 96,0
                     a 48,48 0 1,1 -96,0"
                />
              </defs>

              <text
                fill="#60a5fa"
                fontSize="9.5"
                fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                letterSpacing="2"
              >
                <textPath href="#mailBotCircleOne" startOffset="0%">
                  SEND ME A MAIL • SEND ME A MAIL •
                </textPath>
              </text>
            </svg>

            <svg
              className="ring ring-two"
              viewBox="0 0 140 140"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="mailBotCircleTwo"
                  d="M 70,70
                     m -48,0
                     a 48,48 0 1,1 96,0
                     a 48,48 0 1,1 -96,0"
                />
              </defs>

              <text
                fill="#93c5fd"
                fontSize="9.5"
                fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                letterSpacing="2"
              >
                <textPath href="#mailBotCircleTwo" startOffset="0%">
                  CONTACT ME • CONTACT ME •
                </textPath>
              </text>
            </svg>

            <span className="bot-core" aria-hidden="true">
              <span className="bot-face">
                <span className="bot-antenna" />
                <span className="bot-eye left" />
                <span className="bot-eye right" />
                <span className="bot-mouth" />
              </span>
            </span>

            <span className="bot-mail" aria-hidden="true">
              ✉
            </span>
          </a>
        </div>
      </div>
    </>
  );
}