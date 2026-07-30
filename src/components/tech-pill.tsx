import type { ComponentType } from "react";

interface TechPillPropsType {
  icon: ComponentType<{ size?: number }>;
  text: string;
}

export default function TechPill({ icon: Icon, text }: TechPillPropsType) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f7f7f7] px-5 py-1.5 font-sans text-base font-normal">
      <Icon size={16} />
      {text}
    </span>
  );
}
