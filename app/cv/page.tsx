import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { CV_PREVIEW_URL } from "@/lib/cv";

export const metadata: Metadata = {
  title: "CV — Brianna Strand",
  description: "CV of Brianna Strand, frontend developer with a UI/UX design background.",
};

export default function CVPage() {
  return (
    <main className="mx-auto max-w-[1000px] px-6 pt-16 pb-28">
      <SectionHeading title="CV" />

      <div className="mx-auto max-w-[820px]">
        <div className="mb-6 flex justify-end">
          <a
            href="/cv/download"
            className="inline-flex items-center gap-2 border border-accent px-4 py-2 font-mono text-sm text-accent transition hover:bg-accent hover:text-black"
          >
            Download PDF ↓
          </a>
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10 bg-white">
          <iframe
            src={CV_PREVIEW_URL}
            title="Brianna Strand CV"
            className="block aspect-[1/1.414] w-full"
          />
        </div>
      </div>
    </main>
  );
}