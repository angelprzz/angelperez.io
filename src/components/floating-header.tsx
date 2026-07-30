"use client";

import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import NavLinks from "@/components/nav-links";

const SCROLL_THRESHOLD = 135;

export default function FloatingHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisible = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    updateVisible();
    window.addEventListener("scroll", updateVisible, { passive: true });
    return () => window.removeEventListener("scroll", updateVisible);
  }, []);

  return (
    <div
      className={`fixed top-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-5 rounded-full border border-neutral-200 bg-white/80 px-6 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
      }`}
    >
      <NavLinks />
      <button
        type="button"
        aria-label="Toggle theme"
        className="hover:text-foreground text-secondary cursor-pointer pl-2 transition-colors"
      >
        <FiSun size={16} />
      </button>
    </div>
  );
}
