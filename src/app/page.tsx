import Image from "next/image";
import { Moon } from "lucide-react";

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
            <Moon size={16} />
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
      <h2 className="font-display text-foreground mt-8 text-[40px] font-extrabold">Projects</h2>

      {/* Card */}
      <div className="mt-4 flex h-90 w-full cursor-pointer overflow-hidden rounded-3xl bg-neutral-100 shadow-md transition-transform duration-300 hover:scale-102">
        <div className="flex h-full w-1/2 flex-col justify-between p-10">
          <div className="space-y-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Image src="/projects/sedcst/icon.svg" alt="Sedcst logo" width={32} height={32} className="shrink-0" />
                <h3 className="font-display text-3xl font-extrabold">Sedcst.</h3>
              </div>
              <p className="font-sans text-sm leading-relaxed tracking-widest">
                A social network for fashion models and industry professionals. I designed the product and developed the
                platform end to end.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-3">
              <span className="inline-block rounded-full bg-white px-3 py-1 font-sans text-sm font-normal">UI</span>
              <span className="inline-block rounded-full bg-white px-3 py-1 font-sans text-sm font-normal">UX</span>
              <span className="inline-block rounded-full bg-white px-3 py-1 font-sans text-sm font-normal">
                Frontend
              </span>
              <span className="inline-block rounded-full bg-white px-3 py-1 font-sans text-sm font-normal">
                Backend
              </span>
              <span className="inline-block rounded-full bg-white px-3 py-1 font-sans text-sm font-normal">
                Desktop
              </span>
              <span className="inline-block rounded-full bg-white px-3 py-1 font-sans text-sm font-normal">Mobile</span>
            </div>
          </div>
          <span className="flex items-center gap-1.5 font-sans text-sm font-medium text-[#808080]">
            2025 • <span className="text-green-500 drop-shadow-[0_0_6px_rgba(34,197,94,0.9)]">Active</span>
            <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_4px_2px] shadow-green-500/50" />
          </span>
        </div>
        <div className="relative h-full w-1/2">
          <Image
            src="/projects/sedcst/cover.png"
            alt="Sedcst Cover"
            fill
            sizes="360px"
            className="h-full w-full bg-[#F9FAFB] object-contain px-3"
          />
        </div>
      </div>
    </div>
  );
}
