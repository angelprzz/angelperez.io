"use client";

import confetti, { type Shape } from "canvas-confetti";
import useIsMobile from "@/hooks/use-is-mobile";

const SCALAR = 2;

let heartShape: Shape | undefined;

export default function ConfettiHeart() {
  const isMobile = useIsMobile();

  const loveExplosion = () => {
    const shape = (heartShape ??= confetti.shapeFromText({ text: "❤️", scalar: SCALAR }));

    void confetti({ shapes: [shape], scalar: SCALAR, flat: true });
  };

  if (isMobile) return <span>❤️️</span>;

  return (
    <button
      type="button"
      aria-label="Throw some hearts"
      onClick={loveExplosion}
      className="cursor-pointer transition-transform duration-300 hover:scale-125 active:scale-95"
    >
      ❤️️
    </button>
  );
}
