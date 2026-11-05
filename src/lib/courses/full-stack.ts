import type { CourseDetails } from ".";
import { backEnd } from "./back-end";

// The "Full stack development" frame in Figma currently has the same text as "Back end", so
// this reuses it. When the real content is ready, write it out here like the other courses.
export const fullStack: CourseDetails = {
  ...backEnd,
  heroTitle: undefined,
};
