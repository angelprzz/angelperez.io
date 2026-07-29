import { Moon } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto w-180">
      <header className="mb-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="font-display cursor-pointer text-base font-medium text-neutral-500 transition-colors hover:text-neutral-700">
            About
          </span>
          <span className="font-display cursor-pointer text-base font-medium text-neutral-500 transition-colors hover:text-neutral-700">
            Projects
          </span>
          <span className="font-display cursor-pointer text-base font-medium text-neutral-500 transition-colors hover:text-neutral-700">
            Contact
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/angelprzz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-base font-medium text-neutral-500 transition-colors hover:text-neutral-700"
          >
            GitHub
          </a>
          <a
            href="https://x.com/AngelTheMaker"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-base font-medium text-neutral-500 transition-colors hover:text-neutral-700"
          >
            Twitter
          </a>
          <button
            type="button"
            aria-label="Toggle theme"
            className="cursor-pointer text-neutral-500 transition-colors hover:text-neutral-700"
          >
            <Moon size={16} />
          </button>
        </div>
      </header>

      <h1 className="font-display text-[40px] font-extrabold text-neutral-700">Hey, I&apos;m Ángel :)</h1>
      <h1 className="font-display text-[40px] font-semibold text-neutral-500">Software Engineer, Designer, Human</h1>

      <div className="mt-5 flex gap-5">
        <div className="space-y-4 font-sans text-base text-neutral-700">
          <p>I love building digital products.</p>
          <p>
            I&apos;m a full-stack design engineer with 7 years of experience working across small startups and large
            companies.
          </p>
          <p>My goal is to build human-centered products that help people connect, communicate and live better.</p>
          <p>Outside of work I enjoy music, cinema and philosophy.</p>
          <p>
            If you&apos;re a founder or startup seeking innovative product development, let&apos;s talk.{" "}
            <span className="cursor-pointer text-neutral-500 underline decoration-neutral-500">
              Reach out via email
            </span>
            .
          </p>
        </div>
        <div className="h-53.5 w-45 shrink-0 bg-neutral-200" />
      </div>
    </div>
  );
}
