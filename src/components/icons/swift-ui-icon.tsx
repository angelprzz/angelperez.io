import Image from "next/image";

export default function SwiftUIIcon({ size = 16 }: { size?: number }) {
  return <Image src="/technologies/swift-ui.svg" alt="SwiftUI" width={size} height={size} unoptimized />;
}
