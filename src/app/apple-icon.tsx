import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#c8321f",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="150" height="150" viewBox="0 0 64 64">
        <path d="M32 10 L52 46 C40 52 24 52 12 46 Z" fill="#f2c06d" />
        <path d="M32 16 L48 44 C38 48 26 48 16 44 Z" fill="#fde7a8" />
        <circle cx="30" cy="30" r="3.6" fill="#c8321f" />
        <circle cx="38" cy="39" r="3.2" fill="#c8321f" />
        <circle cx="24" cy="40" r="2.8" fill="#c8321f" />
        <path d="M33 23 c3 -2 6 0 5 3 c-3 1 -5 0 -5 -3z" fill="#2f6b3a" />
      </svg>
    </div>,
    size,
  );
}
