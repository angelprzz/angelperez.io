import Link from "next/link";
import type { ContactButtonPropsType } from "@/types/contact-button";

export default function ContactButton({ icon: Icon, name, rightIcon: RightIcon, url }: ContactButtonPropsType) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-fit cursor-pointer items-center gap-3 rounded-lg border border-neutral-200 bg-[#f7f7f7] px-7 py-6 shadow-xs transition-transform duration-300 hover:scale-102"
    >
      <Icon size={28} />
      <span className="text-foreground font-sans text-xl font-medium underline">{name}</span>
      {RightIcon && <RightIcon size={24} className="ml-2" />}
    </Link>
  );
}
