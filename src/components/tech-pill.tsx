import type { TechnologyType } from "@/types/technology";

export default function TechPill({ icon: Icon, text }: TechnologyType) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f7f7f7] px-5 py-1.5 font-sans text-base font-normal">
      <Icon size={16} />
      {text}
    </span>
  );
}
