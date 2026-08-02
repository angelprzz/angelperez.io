import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "404 — Page not found" };

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-180 flex-1 flex-col items-center justify-center gap-4 px-4 text-center md:px-0">
      <h1 className="font-display text-2xl leading-snug font-extrabold md:text-4xl md:leading-15">
        404 - page not found
      </h1>

      <p className="font-sans text-sm md:text-base">
        The good stuff is on the home page.{" "}
        <Link
          href="/"
          className="hover:text-foreground hover:decoration-foreground text-secondary decoration-secondary cursor-pointer italic underline underline-offset-3 transition-colors"
        >
          Go back home
        </Link>
        .
      </p>
    </div>
  );
}
