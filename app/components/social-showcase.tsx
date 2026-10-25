import styles from "./social-showcase.module.css";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Semicrypt",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.39.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.29 1.2-3.09-.12-.29-.52-1.47.11-3.05 0 0 .98-.31 3.16 1.18A10.9 10.9 0 0 1 12 6.12c.98 0 1.95.13 2.86.39 2.18-1.49 3.15-1.18 3.15-1.18.64 1.58.24 2.76.12 3.05.75.8 1.2 1.83 1.2 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.07.79 2.16v3.25c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nwachukwu-ifeanyi-divine-31b9793a6",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4.7 7.6H1.2V22h3.5V7.6ZM3 1.8a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM22.8 13.3c0-4.3-2.3-6.3-5.4-6.3-2.5 0-3.6 1.4-4.2 2.3V7.6H9.7V22h3.5v-7.1c0-1.9.4-3.7 2.7-3.7 2.2 0 2.3 2.1 2.3 3.8v7h3.5v-7.8c0-.3 0-.6.1-.9Z"
        />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/DivineIfy2700",
    accent: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.2 2H22l-8.3 9.5L23.5 22h-7.6l-6-7.8L3.1 22H-.7l8.8-10.1L-1.3 2h7.8l5.4 7.1L18.2 2Zm-1.3 18h2.1L5.3 3.9H3.1L16.9 20Z"
        />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:nifeanyidivine@gmail.com?subject=Portfolio%20Enquiry&body=Hi%20Ifeanyi%2C%0A%0AI%20came%20across%20your%20Cloud%20%26%20DevOps%20portfolio%20and%20would%20like%20to%20connect.%0A%0A",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="2.5"
          y="4.5"
          width="19"
          height="15"
          rx="2.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="m4 7 8 6 8-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function SocialShowcase() {
  return (
    <div className={styles.wrap}>
      <p className={styles.label}>
        CONNECT // ELSEWHERE
      </p>

      <div
        className={styles.panel}
        aria-label="Ifeanyi Divine social profiles"
      >
        {socials.map((social) => {
          const external =
            social.name !== "Email";

          return (
            <a
              key={social.name}
              href={social.href}
              className={`${styles.link} ${
                social.accent ? styles.accent : ""
              }`}
              aria-label={social.name}
              title={social.name}
              {...(external
                ? {
                    target: "_blank",
                    rel: "noreferrer",
                  }
                : {})}
            >
              <span className={styles.icon}>
                {social.icon}
              </span>

              <span className={styles.name}>
                {social.name}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
