import Image from "next/image";

interface ProjectIconPropsType {
  icon: string;
  title: string;
}

export default function ProjectIcon({ icon, title }: ProjectIconPropsType) {
  const alt = `${title} logo`;

  if (icon.endsWith(".svg")) {
    return (
      <span
        role="img"
        aria-label={alt}
        className="bg-foreground h-7 w-7 shrink-0 sm:h-8 sm:w-8"
        style={{
          WebkitMaskImage: `url(${icon})`,
          maskImage: `url(${icon})`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
    );
  }

  return (
    <Image
      src={icon}
      alt={alt}
      width={32}
      height={32}
      unoptimized
      className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
    />
  );
}
