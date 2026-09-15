import { ImageResponse } from "next/og";

export const alt =
  "Nwachukwu Ifeanyi Divine — Cloud & DevOps Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#05070a",
          color: "white",
          padding: "72px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "620px",
            height: "620px",
            borderRadius: "9999px",
            left: "380px",
            top: "-330px",
            background:
              "radial-gradient(circle, rgba(34,211,238,0.17) 0%, rgba(34,211,238,0.03) 48%, transparent 72%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.18,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "26px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              DIVINE
              <span style={{ color: "#22d3ee" }}>.</span>
            </div>

            <div
              style={{
                display: "flex",
                padding: "10px 16px",
                border: "1px solid rgba(255,255,255,.14)",
                borderRadius: "999px",
                color: "#a1a1aa",
                fontSize: "15px",
                letterSpacing: "0.06em",
              }}
            >
              PORTFOLIO
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: "21px",
                color: "#71717a",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Nwachukwu Ifeanyi Divine
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "72px",
                lineHeight: 0.95,
                letterSpacing: "-0.055em",
                fontWeight: 700,
              }}
            >
              <span>Cloud &amp; DevOps</span>
              <span style={{ color: "#71717a" }}>Engineer.</span>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "32px",
                color: "#a1a1aa",
                fontSize: "22px",
              }}
            >
              AWS · Kubernetes · Docker · Terraform · Linux · CI/CD
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "16px",
              color: "#71717a",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "999px",
                background: "#22d3ee",
              }}
            />
            Cloud Infrastructure · Automation · Observability
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
