import Link from "next/link";
import type { ContactButtonPropsType } from "@/types/contact-button";

export default function ContactButton({
  icon: Icon,
  iconStyle,
  name,
  rightIcon: RightIcon,
  url,
}: ContactButtonPropsType) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="border-border bg-card hover:bg-foreground/8 flex w-fit cursor-pointer items-center gap-2 rounded-lg border px-5 py-4 transition-colors duration-200 sm:px-6 sm:py-5"
    >
      <Icon size={24} className={iconStyle} />
      <span className="text-foreground font-sans text-sm font-medium underline underline-offset-3 sm:text-lg">
        {name}
      </span>
      {RightIcon && <RightIcon size={20} className="ml-2" />}
    </Link>
  );
}
