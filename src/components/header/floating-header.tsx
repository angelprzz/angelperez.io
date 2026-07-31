"use client";

import { useEffect, useState } from "react";
import HeaderLinks from "@/components/header/header-links";
import ThemeToggleButton from "@/components/theme/theme-toggle-button";

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
      className={`dark:border-border dark:bg-card/80 border-border fixed top-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm transition-all duration-300 sm:gap-5 sm:px-6 sm:py-3 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
      }`}
    >
      <HeaderLinks />
      <ThemeToggleButton className="ml-2" />
    </div>
  );
}
