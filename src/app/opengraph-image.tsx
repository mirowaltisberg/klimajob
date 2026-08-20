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
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 86px",
          background: "#eff8f4",
          borderTop: "18px solid #46a998",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="90" height="90">
            <g fill="none" stroke="#26737d" strokeWidth="2.4" strokeLinecap="round">
              <path d="M6 15c9-8 27-8 36 0M4 24c11-7 29-7 40 0M8 33c8-5 24-5 32 0" />
              <path d="M13 10v28M13 38l-4-5M13 38l4-5" stroke="#46a998" />
            </g>
            <circle cx="35" cy="24" r="3" fill="#b1c83f" stroke="#eff8f4" strokeWidth="1.2" />
          </svg>
          <div style={{ color: "#26737d", fontSize: 24, fontWeight: 800, letterSpacing: 3 }}>
            KÄLTE · KLIMA · SCHWEIZ
          </div>
        </div>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 0,
          }}
        >
          <span style={{ fontSize: 84, fontWeight: 900, color: "#1d424b", letterSpacing: -4 }}>
            klima
          </span>
          <span style={{ fontSize: 84, fontWeight: 900, color: "#26737d", letterSpacing: -4 }}>
            job
          </span>
          <span style={{ fontSize: 58, fontWeight: 700, color: "#718426", letterSpacing: -2 }}>
            .ch
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#456b70",
            marginTop: 20,
            letterSpacing: 0.5,
          }}
        >
          Klimastellen. Präzise gefunden.
        </div>
      </div>
    ),
    { ...size }
  );
}
