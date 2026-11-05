import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/seo";

// The preview card shown when a link is shared (WhatsApp, LinkedIn, X, Facebook, Slack...).
// Each page's opengraph-image.tsx calls this with its own text.
export const ogSize = { width: 1200, height: 630 };

type OgCard = {
  /** Small line next to the logo; defaults to the site name */
  label?: string;
  title: string;
  text: string;
};

export async function ogCard({ label = siteConfig.name, title, text }: OgCard) {
  const logo = await readFile(join(process.cwd(), "public/img/Logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#123F3A",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 112,
              height: 112,
              borderRadius: 24,
              background: "#FFFFFF",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={66} height={78} alt="" />
          </div>
          <div style={{ fontSize: 44, fontWeight: 700 }}>{label}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 30, color: "#C6D9D2", maxWidth: 960 }}>{text}</div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#C6D9D2" }}>
          {siteConfig.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
