import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonView } from "@/components/learning/LessonView";
import { getLesson, requireTrack } from "@/lib/learning";

const track = requireTrack("hiragana");

type Params = { params: Promise<{ lesson: string }> };

export function generateStaticParams() {
  return track.lessons.map((lesson) => ({ lesson: lesson.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lesson: slug } = await params;
  const lesson = getLesson("hiragana", slug);

  if (!lesson) {
    return { title: "Lesson not found" };
  }

  return {
    title: `${lesson.title} — Hiragana`,
    description: lesson.summary,
  };
}

export default async function HiraganaLessonPage({ params }: Params) {
  const { lesson: slug } = await params;
  const lesson = getLesson("hiragana", slug);

  if (!lesson) {
    notFound();
  }

  return <LessonView track={track} lesson={lesson} />;
}
