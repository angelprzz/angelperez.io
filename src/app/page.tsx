import ContactButton from "@/components/contact/contact-button";
import FloatingHeader from "@/components/header/floating-header";
import HeaderActions from "@/components/header/header-actions";
import HeaderLinks from "@/components/header/header-links";
import Map from "@/components/location/map";
import ProjectCard from "@/components/projects/project-card";
import TechPill from "@/components/technologies/tech-pill";
import { email, others, socials } from "@/data/contact";
import { projects } from "@/data/projects";
import { technologies } from "@/data/technologies";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-180 space-y-8 px-4 md:px-0">
      <FloatingHeader />

      {/* HEADER */}
      <header id="about" className="flex h-16 items-center justify-between gap-4">
        <HeaderLinks />
        <HeaderActions />
      </header>

      <main className="space-y-8">
        {/* HERO */}
        <section className="space-y-4">
          <div>
            <h1 className="font-display text-2xl leading-snug font-extrabold md:text-[40px] md:leading-15">
              Hey, I&apos;m Ángel :)
            </h1>
            <h1 className="font-display text-secondary text-2xl leading-snug font-semibold md:-mt-2 md:text-[40px] md:leading-15">
              Software Engineer, Designer, Human
            </h1>
          </div>

          <div className="mt-4 flex flex-col gap-5 md:flex-row">
            <div className="space-y-4 font-sans text-sm md:text-base">
              <p>I love building digital products.</p>
              <p>
                I&apos;m a full-stack design engineer with 7 years of experience working across small startups and large
                companies.
              </p>
              <p>My goal is to build human-centered products that help people connect, communicate and live better.</p>
              <p>Outside of work I enjoy music, cinema and philosophy.</p>
              <p>
                If you&apos;re a founder or startup seeking innovative product development, let&apos;s talk.{" "}
                <a
                  href="mailto:angelpxrz@gmail.com"
                  className="hover:text-foreground hover:decoration-foreground text-secondary decoration-secondary cursor-pointer italic underline underline-offset-3 transition-colors"
                >
                  Reach out via email
                </a>
                .
              </p>
            </div>
            <div className="bg-card h-56 w-full shrink-0 md:h-53.5 md:w-45" />
          </div>
        </section>

        {/* PROJECTS */}
        <section className="space-y-4">
          <h2 id="projects" className="font-display text-foreground text-2xl font-extrabold sm:text-4xl">
            Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="space-y-4">
          <h2 className="font-display text-foreground text-2xl font-extrabold sm:text-4xl">Technologies</h2>
          <div className="flex flex-wrap gap-x-2 gap-y-4">
            {technologies.map((tech) => (
              <TechPill key={tech.text} {...tech} />
            ))}
          </div>
        </section>

        {/* LOCATION */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="font-display text-foreground text-2xl font-extrabold sm:text-4xl">Location</h2>
            <p className="text-muted font-sans text-sm font-medium sm:text-base">
              Open to relocate anywhere on planet Earth 🌎
            </p>
          </div>
          <div className="flex flex-col gap-5 sm:flex-row">
            <Map
              location="Madrid, Spain"
              timeZone="Europe/Madrid"
              pillText="In between"
              centerLat={40.4168}
              centerLng={-3.7038}
              markerLat={40.411491}
              markerLng={-3.702453}
              zoom={10.75}
            />
            <Map
              location="Bali, Indonesia"
              timeZone="Asia/Makassar"
              pillText="and"
              centerLat={-8.5144}
              centerLng={115.1763}
              markerLat={-8.64608}
              markerLng={115.116306}
              zoom={7}
            />
          </div>
        </section>

        {/* CONTACT */}
        <section className="space-y-4">
          <h2 id="contact" className="font-display text-foreground text-2xl font-extrabold sm:text-4xl">
            Get in touch
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-base font-medium sm:text-lg">Email</h3>
              <ContactButton {...email} />
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="font-display text-base font-medium sm:text-lg">Social Media</h3>
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => (
                  <ContactButton key={social.name} {...social} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="font-display text-base font-medium sm:text-lg">Other</h3>
              <div className="flex flex-wrap gap-4">
                {others.map((item) => (
                  <ContactButton key={item.name} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="bg-card h-px w-full" />
        <div className="my-8 flex flex-col items-center gap-2">
          <p className="text-center font-sans text-sm font-normal sm:text-base">
            © 2026 Ángel Pérez • Handcrafted with ❤️️
          </p>
          <p className="text-muted text-center font-sans text-[10px] font-light sm:text-xs">
            <a
              href="https://www.figma.com/design/v2gYW1YtS4525qJr2aB18W/angelperez.io?node-id=170-275&t=8d5Nm3iTTlOTghnr-1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground underline underline-offset-3 transition-colors"
            >
              Designed
            </a>{" "}
            in Figma and{" "}
            <a
              href="https://github.com/angelprzz/angelperez.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground underline underline-offset-3 transition-colors"
            >
              coded
            </a>{" "}
            on Visual Studio Code. Built with NextJS and TailwindCSS, deployed with Cloudflare. All text is set in Inter
            and Bricolage Grotesque typefaces.
          </p>
        </div>
      </footer>
    </div>
  );
}
