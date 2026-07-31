import type { TechnologyType } from "@/types/technology";

export default function TechPill({ icon: Icon, text }: TechnologyType) {
  return (
    <span className="bg-card inline-flex cursor-default items-center gap-1.5 rounded-full px-3 py-1.5 font-sans text-xs font-normal sm:px-5 sm:text-base transition-transform duration-275 hover:scale-110">
      <Icon size={16} />
      {text}
    </span>
  );
}
