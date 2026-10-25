"use client";

const quotes = [
  "Control what you can. Automate what you repeat.",
  "The obstacle is the way. The bug is probably DNS.",
  "Memento mori. Commit before you go.",
  "Stay calm. Logs exist for a reason.",
  "Discipline beats motivation. Backups beat regret.",
  "Amor fati. Even the failed deployment.",
  "You cannot control the traffic. You can configure the load balancer.",
  "Silence the ego. Not the alerts.",
  "Accept what you cannot change. Terraform the rest.",
  "A calm mind and a clean git status.",
];

export function StoicTicker() {
  const repeatedQuotes = [...quotes, ...quotes];

  return (
    <div
      className="stoic-ticker"
      aria-label="Stoic engineering quotes"
    >
      <div className="stoic-ticker-label">
        <span className="stoic-ticker-dot" />
        DIVINE ONCE SAID:
      </div>

      <div className="stoic-ticker-window">
        <div className="stoic-ticker-track">
          {repeatedQuotes.map((quote, index) => (
            <span
              className="stoic-ticker-quote"
              key={`${quote}-${index}`}
            >
              {quote}

              <i aria-hidden="true">
                //
              </i>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
