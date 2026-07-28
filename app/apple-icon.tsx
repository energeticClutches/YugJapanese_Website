import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
          background: "#b64232",
          color: "#ffffff",
          fontSize: 84,
          fontWeight: 800,
        }}
      >
        YJ
      </div>
    ),
    { ...size },
  );
}
