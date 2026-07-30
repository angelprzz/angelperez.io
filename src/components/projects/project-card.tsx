import Image from "next/image";
import Link from "next/link";
import ProjectIcon from "@/components/projects/project-icon";
import type { ProjectType } from "@/types/project";

export default function ProjectCard({ title, description, tags, year, isActive, icon, cover, href }: ProjectType) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-card flex h-90 w-full cursor-pointer overflow-hidden rounded-3xl shadow-md transition-transform duration-300 hover:scale-102"
    >
      <div className="flex h-full w-1/2 flex-col justify-between p-10">
        <div className="space-y-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <ProjectIcon icon={icon} title={title} />
              <h3 className="font-display text-3xl font-extrabold">{title}</h3>
            </div>
            <p className="font-sans text-sm leading-relaxed tracking-widest">{description}</p>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="dark:bg-border dark:text-foreground inline-block rounded-full bg-white px-3 py-1 font-sans text-sm font-normal"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="text-muted flex items-center gap-1.5 font-sans text-sm font-medium">
          {year} •{" "}
          {isActive ? (
            <>
              <span className="text-success drop-shadow-success/90 drop-shadow-[0_0_6px]">Active</span>
              <span className="bg-success shadow-success/50 h-2 w-2 rounded-full shadow-[0_0_4px_2px]" />
            </>
          ) : (
            <>
              <span className="text-danger">Closed</span>
              <span className="bg-danger h-2 w-2 rounded-full" />
            </>
          )}
        </span>
      </div>
      <div className="relative h-full w-1/2">
        <Image
          src={cover}
          alt={`${title} cover`}
          fill
          sizes="360px"
          className="h-full w-full object-contain"
          priority
          unoptimized
        />
      </div>
    </Link>
  );
}
