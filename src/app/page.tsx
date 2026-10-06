import Image from "next/image";
import { LuMail } from "react-icons/lu";
import ContactButton from "@/components/contact/contact-button";
import ConfettiHeart from "@/components/footer/confetti-heart";
import FloatingHeader from "@/components/header/floating-header";
import HeaderActions from "@/components/header/header-actions";
import HeaderLinks from "@/components/header/header-links";
import Map from "@/components/location/map";
import ProjectCard from "@/components/projects/project-card";
import TechPill from "@/components/technologies/tech-pill";
import { calUrl, code, email, socials } from "@/data/contact";
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
            <p className="font-display text-secondary text-2xl leading-snug font-semibold md:-mt-2 md:text-[40px] md:leading-15">
              Product Engineer, Designer, Human
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-5 md:flex-row">
            <div className="space-y-4 font-sans text-sm md:text-base">
              <p>I love building digital products.</p>
              <p>
                I&apos;m a product engineer with 7+ years of experience taking products from idea to launch, often as
                the founding engineer at early-stage startups.
              </p>
              <p>I care about making human-centered products that help people connect, communicate and live better.</p>
              <p>When I&apos;m not working, I&apos;m into music, cinema and philosophy.</p>
              <p>Founder with an idea? Let&apos;s talk.</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={calUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-800 px-3 py-1.5 text-white transition-colors duration-200 hover:bg-neutral-700 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
                >
                  <Image
                    src="/icons/cal-com-light.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="size-[0.875em] rounded-[3px] dark:hidden"
                    unoptimized
                  />
                  <Image
                    src="/icons/cal-com.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="hidden size-[0.875em] rounded-[3px] dark:block"
                    unoptimized
                  />
                  Book a call
                </a>
                <a
                  href={email.url}
                  className="border-border bg-card text-foreground hover:bg-foreground/8 inline-flex cursor-pointer items-center gap-1.5 rounded-md border px-3 py-1.5 transition-colors duration-200"
                >
                  <LuMail className="text-secondary size-[0.875em]" aria-hidden />
                  Send an email
                </a>
              </div>
            </div>
            <Image
              src="/hero/polaroid.webp"
              alt="polaroid"
              width={612}
              height={720}
              className="hidden h-53.5 w-auto shrink-0 self-start md:block dark:drop-shadow-[0_0_40px_rgba(255,255,255,0.28)]"
              priority
              unoptimized
            />
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
              <h3 className="font-display text-base font-medium sm:text-lg">Code</h3>
              <div className="flex flex-wrap gap-4">
                {code.map((item) => (
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
            © 2026 Ángel Pérez • Handcrafted with <ConfettiHeart />
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
