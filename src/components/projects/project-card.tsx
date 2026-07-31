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
      className="bg-card flex w-full cursor-pointer flex-col overflow-hidden rounded-3xl shadow-md transition-transform duration-300 hover:scale-102 sm:h-90 sm:flex-row"
    >
      <div className="flex w-full flex-col justify-between gap-6 p-6 sm:w-1/2 sm:p-10">
        <div className="space-y-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <ProjectIcon icon={icon} title={title} />
              <h3 className="font-display text-2xl font-extrabold sm:text-3xl">{title}</h3>
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
      <div className="relative h-56 w-full sm:h-full sm:w-1/2">
        <Image
          src={cover}
          alt={`${title} cover`}
          fill
          sizes="360px"
          className="h-full w-full object-cover object-[center_-20px] sm:object-contain sm:object-center"
          priority
          unoptimized
        />
      </div>
    </Link>
  );
}
