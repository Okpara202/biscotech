import { logoCrops, logoIcon } from "@/lib/logoIcon";

// Browser-tab / bookmark icon (replaces the default favicon.ico): the BiscoTech "b" mark
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return logoIcon(size.width, logoCrops.mark);
}
