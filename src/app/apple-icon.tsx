import { logoCrops, logoIcon } from "@/lib/logoIcon";

// Home-screen icon on iPhone/iPad (and used by Android): the full logo with the wordmark
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return logoIcon(size.width, logoCrops.full);
}
