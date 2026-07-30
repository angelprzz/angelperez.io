import Link from "next/link";
import type { ContactButtonPropsType } from "@/types/contact-button";

export default function ContactButton({ icon: Icon, name, rightIcon: RightIcon, url }: ContactButtonPropsType) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="border-border bg-card flex w-fit cursor-pointer items-center gap-2 rounded-lg border px-6 py-5 transition-all duration-300 hover:scale-102 hover:shadow-xs"
    >
      <Icon size={24} />
      <span className="text-foreground font-sans text-lg font-medium underline underline-offset-3">{name}</span>
      {RightIcon && <RightIcon size={20} className="ml-2" />}
    </Link>
  );
}
