import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "I Scream Yogurt — Sacramento's mobile frozen yogurt experience";
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
          padding: 64,
          background: "linear-gradient(135deg, #16A9A5 0%, #123047 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#FF665F",
            marginBottom: 16,
          }}
        >
          I Scream Yogurt
        </div>
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
          Sacramento&apos;s Mobile Frozen Yogurt Experience
        </div>
        <div style={{ fontSize: 28, marginTop: 24, opacity: 0.9 }}>
          Catering • Events • Sweet Memories
        </div>
      </div>
    ),
    { ...size },
  );
}
