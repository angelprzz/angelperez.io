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
      className="border-border bg-card flex w-fit cursor-pointer items-center gap-2 rounded-lg border px-5 py-4 transition-all duration-300 hover:scale-102 hover:shadow-xs sm:px-6 sm:py-5"
    >
      <Icon size={24} className={iconStyle} />
      <span className="text-foreground font-sans text-sm font-medium underline underline-offset-3 sm:text-lg">
        {name}
      </span>
      {RightIcon && <RightIcon size={20} className="ml-2" />}
    </Link>
  );
}
