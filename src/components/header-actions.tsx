import ThemeToggleButton from "@/components/theme-toggle-button";

export default function HeaderActions() {
  return (
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
      <ThemeToggleButton />
    </div>
  );
}
