import type { CourseSection } from "@/lib/courses";
import CourseCards from "./courseCards";
import CourseExpect from "./courseExpect";
import CourseHighlights from "./courseHighlights";
import CourseModules from "./courseModules";
import CoursePackages from "./coursePackages";
import CourseStages from "./courseStages";
import CourseTicks from "./courseTicks";
import CourseTools from "./courseTools";

// Renders one section from a course's data. A course's page is its hero, its list of
// sections in the order given, and the call-to-action card. To add a new kind of section:
// add it to CourseSection in src/lib/courses, build its component, and add a case here.
export default function CourseSectionView({ section }: { section: CourseSection }) {
  switch (section.type) {
    case "expect":
      return <CourseExpect section={section} />;
    case "modules":
      return <CourseModules section={section} />;
    case "stages":
      return <CourseStages section={section} />;
    case "cards":
      return <CourseCards section={section} />;
    case "ticks":
      return <CourseTicks section={section} />;
    case "packages":
      return <CoursePackages section={section} />;
    case "tools":
      return <CourseTools section={section} />;
    case "highlights":
      return <CourseHighlights section={section} />;
  }
}
