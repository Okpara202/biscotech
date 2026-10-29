import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// LogoLarge.png is the 640×640 logo (white background) that Logo.svg embeds. These are the
// square areas of it the icons show, in that image's pixels.
export const logoCrops = {
  // Just the "b" mark — the wordmark is unreadable at browser-tab size
  mark: { x: 199, y: 121, size: 240 },
  // Mark + "BiscoTech" wordmark, for the bigger home-screen icon
  full: { x: 185, y: 130, size: 270 },
};

// Renders one square crop of the logo as a PNG icon of the given size
export async function logoIcon(
  size: number,
  crop: (typeof logoCrops)[keyof typeof logoCrops],
) {
  const logo = await readFile(join(process.cwd(), "public/img/LogoLarge.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  const scale = size / crop.size;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#FFFFFF",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          width={640 * scale}
          height={640 * scale}
          style={{
            position: "absolute",
            left: -crop.x * scale,
            top: -crop.y * scale,
          }}
        />
      </div>
    ),
    { width: size, height: size },
  );
}
