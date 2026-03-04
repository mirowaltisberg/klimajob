import { ImageResponse } from "next/og";

export const alt = "klimajob.ch — Klimajobs Schweiz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #0c1929 50%, #0e2a3d 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Snowflake */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="120"
          height="120"
          style={{ marginBottom: 32 }}
        >
          <line x1="24" y1="6" x2="24" y2="42" stroke="#4AADE8" strokeWidth="3" strokeLinecap="round" />
          <line x1="6" y1="24" x2="42" y2="24" stroke="#4AADE8" strokeWidth="3" strokeLinecap="round" />
          <line x1="11" y1="11" x2="37" y2="37" stroke="#4AADE8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="37" y1="11" x2="11" y2="37" stroke="#4AADE8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="24" y1="6" x2="20" y2="11" stroke="#4AADE8" strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="6" x2="28" y2="11" stroke="#4AADE8" strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="42" x2="20" y2="37" stroke="#4AADE8" strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="42" x2="28" y2="37" stroke="#4AADE8" strokeWidth="2" strokeLinecap="round" />
          <line x1="6" y1="24" x2="11" y2="20" stroke="#4AADE8" strokeWidth="2" strokeLinecap="round" />
          <line x1="6" y1="24" x2="11" y2="28" stroke="#4AADE8" strokeWidth="2" strokeLinecap="round" />
          <line x1="42" y1="24" x2="37" y2="20" stroke="#4AADE8" strokeWidth="2" strokeLinecap="round" />
          <line x1="42" y1="24" x2="37" y2="28" stroke="#4AADE8" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 0,
          }}
        >
          <span style={{ fontSize: 72, fontWeight: 900, color: "#f8fafc", letterSpacing: -1 }}>
            Klima
          </span>
          <span style={{ fontSize: 72, fontWeight: 900, color: "#4AADE8", letterSpacing: -1 }}>
            job
          </span>
          <span style={{ fontSize: 52, fontWeight: 400, color: "#94a3b8", letterSpacing: -1 }}>
            .ch
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            marginTop: 20,
            letterSpacing: 0.5,
          }}
        >
          Die Jobbörse für Klima- und Kältetechnik-Fachkräfte in der Schweiz
        </div>
      </div>
    ),
    { ...size }
  );
}
