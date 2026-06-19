import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "I Scream Yogurt — Sacramento mobile frozen yogurt truck";
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
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #16A9A5 0%, #123047 55%, #FF665F 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 800, color: "#FFF9F2", marginBottom: 12 }}>
          I Scream Yogurt
        </div>
        <div style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.08, maxWidth: 900 }}>
          Sacramento&apos;s Mobile Frozen Yogurt Experience
        </div>
        <div style={{ fontSize: 26, marginTop: 28, color: "#FFF9F2", opacity: 0.95 }}>
          Catering • Events • Sweet Memories
        </div>
      </div>
    ),
    { ...size },
  );
}
