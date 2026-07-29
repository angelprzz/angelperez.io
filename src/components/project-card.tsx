import Image from "next/image";
import Link from "next/link";
import type { ProjectType } from "@/types/project";

export default function ProjectCard({
  title,
  description,
  tags,
  year,
  isActive,
  icon,
  cover,
  coverStyle,
  href,
}: ProjectType) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-90 w-full cursor-pointer overflow-hidden rounded-3xl bg-neutral-100 shadow-md transition-transform duration-300 hover:scale-102"
    >
      <div className="flex h-full w-1/2 flex-col justify-between p-10">
        <div className="space-y-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image src={icon} alt={`${title} logo`} width={32} height={32} className="shrink-0" />
              <h3 className="font-display text-3xl font-extrabold">{title}</h3>
            </div>
            <p className="font-sans text-sm leading-relaxed tracking-widest">{description}</p>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-3">
            {tags.map((tag) => (
              <span key={tag} className="inline-block rounded-full bg-white px-3 py-1 font-sans text-sm font-normal">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="flex items-center gap-1.5 font-sans text-sm font-medium text-[#808080]">
          {year} •{" "}
          {isActive ? (
            <>
              <span className="text-green-500 drop-shadow-[0_0_6px_rgba(34,197,94,0.9)]">Active</span>
              <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_4px_2px] shadow-green-500/50" />
            </>
          ) : (
            <>
              <span className="text-[#F97171]">Closed</span>
              <span className="h-2 w-2 rounded-full bg-[#F97171]" />
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
          className={`h-full w-full object-contain ${coverStyle ?? ""}`}
        />
      </div>
    </Link>
  );
}
