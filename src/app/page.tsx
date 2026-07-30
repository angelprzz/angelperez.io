import { GithubIcon } from "@dev.icons/react";
import { FiArrowUpRight, FiFileText, FiMail, FiSun } from "react-icons/fi";
import { VscTwitter } from "react-icons/vsc";
import ContactButton from "@/components/contact-button";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import ProjectCard from "@/components/project-card";
import TechPill from "@/components/tech-pill";
import { projects } from "@/data/projects";
import { technologies } from "@/data/technologies";

export default function Home() {
  return (
    <div className="mx-auto mb-96 w-180">
      {/* HERO */}
      <header className="mb-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="font-display hover:text-foreground text-secondary cursor-pointer text-base font-medium transition-colors">
            About
          </span>
          <span className="font-display hover:text-foreground text-secondary cursor-pointer text-base font-medium transition-colors">
            Projects
          </span>
          <span className="font-display hover:text-foreground text-secondary cursor-pointer text-base font-medium transition-colors">
            Contact
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/angelprzz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display hover:text-foreground text-secondary text-base font-medium transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://x.com/AngelTheMaker"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display hover:text-foreground text-secondary text-base font-medium transition-colors"
          >
            Twitter
          </a>
          <button
            type="button"
            aria-label="Toggle theme"
            className="hover:text-foreground text-secondary cursor-pointer transition-colors"
          >
            <FiSun size={16} />
          </button>
        </div>
      </header>

      {/* HERO */}
      <h1 className="font-display text-[40px] font-extrabold">Hey, I&apos;m Ángel :)</h1>
      <h1 className="font-display text-secondary text-[40px] font-semibold">Software Engineer, Designer, Human</h1>

      <div className="mt-5 flex gap-5">
        <div className="space-y-4 font-sans text-base">
          <p>I love building digital products.</p>
          <p>
            I&apos;m a full-stack design engineer with 7 years of experience working across small startups and large
            companies.
          </p>
          <p>My goal is to build human-centered products that help people connect, communicate and live better.</p>
          <p>Outside of work I enjoy music, cinema and philosophy.</p>
          <p>
            If you&apos;re a founder or startup seeking innovative product development, let&apos;s talk.{" "}
            <span className="hover:text-foreground hover:decoration-foreground text-secondary decoration-secondary cursor-pointer underline transition-colors">
              Reach out via email
            </span>
            .
          </p>
        </div>
        <div className="h-53.5 w-45 shrink-0 bg-neutral-200" />
      </div>

      {/* PROJECTS */}
      <h2 className="font-display text-foreground mt-8 mb-4 text-[40px] font-extrabold">Projects</h2>

      {/* Cards */}
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {/* TECHNOLOGIES */}
      <h2 className="font-display text-foreground mt-8 mb-4 text-[40px] font-extrabold">Technologies</h2>
      <div className="flex flex-wrap gap-x-2 gap-y-4">
        {technologies.map((tech) => (
          <TechPill key={tech.text} {...tech} />
        ))}
      </div>

      {/* CONTACT */}
      <h2 className="font-display text-foreground mt-8 mb-4 text-[40px] font-extrabold">Get in touch</h2>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-xl font-medium">Email</h3>
          <ContactButton icon={FiMail} name="angelpxrz@gmail.com" rightIcon={FiArrowUpRight} />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-display text-xl font-medium">Social Media</h3>
          <div className="flex gap-4">
            <ContactButton icon={VscTwitter} name="AngelTheMaker" />
            <ContactButton icon={GithubIcon} name="angelprzz" />
            <ContactButton icon={LinkedinIcon} name="angelprz" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-display text-xl font-medium">Other</h3>
          <ContactButton icon={FiFileText} name="Download CV" />
        </div>
      </div>
    </div>
  );
}
