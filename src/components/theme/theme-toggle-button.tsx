"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/components/theme/theme-provider";

export default function ThemeToggleButton({ className = "" }: { className?: string }) {
  const { isDark, toggle } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggle}
      className={`hover:text-foreground text-secondary cursor-pointer transition-colors ${className}`}
    >
      {isDark ? <FiMoon size={16} /> : <FiSun size={16} />}
    </button>
  );
}
