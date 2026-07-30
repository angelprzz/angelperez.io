"use client";

import { useEffect, useState } from "react";

type SectionType = "about" | "projects" | "contact";

const ACTIVE_THRESHOLD = 100;

export default function NavLinks() {
  const [active, setActive] = useState<SectionType>("about");

  useEffect(() => {
    const updateActive = () => {
      const projectsTop = document.getElementById("projects")?.getBoundingClientRect().top ?? Infinity;
      const contactTop = document.getElementById("contact")?.getBoundingClientRect().top ?? Infinity;

      if (contactTop <= ACTIVE_THRESHOLD) {
        setActive("contact");
      } else if (projectsTop <= ACTIVE_THRESHOLD) {
        setActive("projects");
      } else {
        setActive("about");
      }
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  const linkClassName = (section: SectionType) =>
    `font-display cursor-pointer text-base font-medium transition-colors ${
      active === section ? "text-foreground" : "text-secondary hover:text-foreground"
    }`;

  return (
    <div className="flex items-center gap-5">
      <a href="#about" className={linkClassName("about")}>
        About
      </a>
      <a href="#projects" className={linkClassName("projects")}>
        Projects
      </a>
      <a href="#contact" className={linkClassName("contact")}>
        Contact
      </a>
    </div>
  );
}
