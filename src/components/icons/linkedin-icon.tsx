import Image from "next/image";

export default function LinkedinIcon({ size = 16 }: { size?: number }) {
  return <Image src="/social-media/linkedin-icon.svg" alt="LinkedIn" width={size} height={size} />;
}
