import type { ComponentType } from "react";

interface ContactButtonPropsType {
  icon: ComponentType<{ size?: number; className?: string }>;
  name: string;
  rightIcon?: ComponentType<{ size?: number; className?: string }>;
}

export default function ContactButton({ icon: Icon, name, rightIcon: RightIcon }: ContactButtonPropsType) {
  return (
    <div className="flex w-fit cursor-pointer items-center gap-3 rounded-lg border border-neutral-200 bg-[#f7f7f7] px-7 py-6 shadow-xs transition-transform duration-300 hover:scale-102">
      <Icon size={28} />
      <span className="text-foreground font-sans text-xl font-medium underline">{name}</span>
      {RightIcon && <RightIcon size={24} className="ml-2" />}
    </div>
  );
}
