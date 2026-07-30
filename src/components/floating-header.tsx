"use client";

import { useEffect, useState } from "react";
import NavLinks from "@/components/nav-links";
import ThemeToggleButton from "@/components/theme-toggle-button";

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
      className={`dark:border-border dark:bg-card/80 fixed top-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-5 rounded-full border border-neutral-200 bg-white/80 px-6 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
      }`}
    >
      <NavLinks />
      <ThemeToggleButton className="pl-2" />
    </div>
  );
}
