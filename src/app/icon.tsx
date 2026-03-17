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
          background: "#4AADE8",
          borderRadius: "10px",
        }}
      >
        {/* Snowflake */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="33"
          height="33"
        >
          <line x1="24" y1="6" x2="24" y2="42" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <line x1="6" y1="24" x2="42" y2="24" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <line x1="11" y1="11" x2="37" y2="37" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="37" y1="11" x2="11" y2="37" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="24" y1="6" x2="20" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="6" x2="28" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="42" x2="20" y2="37" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="42" x2="28" y2="37" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="6" y1="24" x2="11" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="6" y1="24" x2="11" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="42" y1="24" x2="37" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="42" y1="24" x2="37" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
