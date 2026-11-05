import { notFound } from "next/navigation";
import { courses, getCourse } from "@/lib/courses";
import { ogCard, ogSize } from "@/lib/ogCard";

export const alt = "A course from BiscoTech Academy";
export const size = ogSize;
export const contentType = "image/png";

// Built ahead of time, one card per course, like the course pages
export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return ogCard({
    label: "BiscoTech Academy",
    title: `${course.title} Course`,
    text: course.description,
  });
}
