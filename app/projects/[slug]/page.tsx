import Link from "next/link";
import { notFound } from "next/navigation";
import { MoveLeft } from "lucide-react";
import { projects } from "@/data/projects";
import LinkButton from "@/components/LinkButton";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-[1000px] px-6 py-12">
      <Link
        href="/projects"
        className="mb-12 inline-flex items-center gap-2 font-mono text-sm text-gray-400 transition hover:text-accent"
      >
        <MoveLeft size={14} /> Back to Projects
      </Link>

      <h1 className="mb-3 font-mono text-4xl font-semibold text-white">
        <span className="text-accent">#</span>
        {project.title}
      </h1>
      <p className="mb-10 font-mono text-sm text-gray-400">{project.tech}</p>

      {(project.live || project.code || project.figma) && (
        <div className="mb-12 flex flex-wrap gap-3">
          {project.live && (
            <LinkButton href={project.live} external>Live</LinkButton>
          )}
          {project.code && (
            <LinkButton href={project.code} external>Code</LinkButton>
          )}
          {project.figma && (
            <LinkButton href={project.figma} external>Figma</LinkButton>
          )}
        </div>
      )}

      <div className="flex flex-col gap-10">
        {project.blocks.map((block, i) => {
          if (block.type === "section") {
            return (
              <div key={i} className="flex items-baseline gap-3 border-t border-gray-800 pt-10">
                <span className="font-mono text-sm text-accent">{block.number}</span>
                <h2 className="font-mono text-xl font-semibold uppercase tracking-wide text-white">
                  {block.title}
                </h2>
              </div>
            );
          }

          if (block.type === "text") {
            return (
              <div key={i}>
                {block.heading && (
                  <h2 className="mb-3 font-mono text-2xl font-semibold text-white">
                    {block.heading}
                  </h2>
                )}
                <p className="text-lg leading-relaxed text-gray-300">
                  {block.body}
                </p>
              </div>
            );
          }

          if (block.type === "quote") {
            return (
              <blockquote
                key={i}
                className="border-l-2 border-accent pl-5 font-mono italic leading-relaxed text-gray-200"
              >
                {block.body}
              </blockquote>
            );
          }

          if (block.type === "details") {
            return (
              <div
                key={i}
                className="grid grid-cols-1 gap-4 border border-gray-700 p-5 sm:grid-cols-2"
              >
                {block.items.map((item) => (
                  <div key={item.label}>
                    <p className="mb-1 font-mono text-xs uppercase tracking-wide text-gray-500">
                      {item.label}
                    </p>
                    <p className="text-sm text-gray-300">{item.value}</p>
                  </div>
                ))}
              </div>
            );
          }

          if (block.type === "image") {
            return (
              <figure key={i}>
                <img src={block.src} alt={project.title} className="w-full" />
                {block.caption && (
                  <figcaption className="mt-2 text-center font-mono text-xs uppercase tracking-wide text-gray-500">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          }

          if (block.type === "links") {
            return (
              <div key={i} className="flex flex-wrap gap-3">
                {block.items.map((item) => (
                  <LinkButton key={item.url} href={item.url} external>
                    {item.label}
                  </LinkButton>
                ))}
              </div>
            );
          }

          return null;
        })}
      </div>
    </main>
  );
}