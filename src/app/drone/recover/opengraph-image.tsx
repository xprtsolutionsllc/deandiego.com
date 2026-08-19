import { ImageResponse } from "next/og";

export const alt = "Dean Diego Drone, thermal deer recovery in Northeast Ohio";
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
          Dean Diego Drone
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1.5 }}>
            Thermal deer recovery
          </div>
          <div style={{ marginTop: 24, fontSize: 32, color: "#A3A3A3", lineHeight: 1.35 }}>
            Northeast Ohio. $250 to come out. $50 more if found.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#737373" }}>
          Ohio only. After the taking. deandiego.com/drone/recover
        </div>
      </div>
    ),
    { ...size },
  );
}
