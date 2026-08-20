import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#eff8f4",
          borderRadius: "10px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="33"
          height="33"
        >
          <g fill="none" stroke="#26737d" strokeWidth="2.4" strokeLinecap="round">
            <path d="M6 15c9-8 27-8 36 0M4 24c11-7 29-7 40 0M8 33c8-5 24-5 32 0" />
            <path d="M13 10v28M13 38l-4-5M13 38l4-5" stroke="#46a998" />
          </g>
          <circle cx="35" cy="24" r="3" fill="#b1c83f" stroke="#eff8f4" strokeWidth="1.2" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
