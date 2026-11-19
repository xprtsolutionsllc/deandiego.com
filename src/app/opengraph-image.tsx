import { ImageResponse } from "next/og";

export const alt = "Dean Diego, Forward Deployed Engineer. Systems integration and AI automation.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          color: "#F5F5F5",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#DC2626",
            fontWeight: 700,
          }}
        >
          Dean Diego
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2, color: "#F5F5F5" }}>
            Forward Deployed Engineer
          </div>
          <div style={{ marginTop: 22, fontSize: 40, fontWeight: 600, color: "#A3A3A3", lineHeight: 1.25 }}>
            Systems Integration and AI Automation
          </div>
          <div style={{ marginTop: 26, fontSize: 28, color: "#737373", lineHeight: 1.35 }}>
            Dealer operations at Window Depot USA. XPRT Cloud.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#737373" }}>
          Youngstown, Ohio. deandiego.com
        </div>
      </div>
    ),
    { ...size },
  );
}
