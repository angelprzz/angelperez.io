# angelperez.io

My personal site, a portfolio of what I build, the tools I use, and how to reach me.

Live at [angelperez.io](https://angelperez.io).

## Stack

- [Next.js](https://nextjs.org) (App Router) with React 19 and the React Compiler
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com), themed with CSS custom properties in `src/app/globals.css`
- [Mapbox GL](https://docs.mapbox.com/mapbox-gl-js) through `react-map-gl` for the location maps
- Deployed to [Cloudflare Workers](https://workers.cloudflare.com) with [OpenNext](https://opennext.js.org/cloudflare)

## Getting started

Install dependencies and start the dev server:

```bash
bun install
bun dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

The maps need a Mapbox token. Copy the example env file and add yours:

```bash
cp .env.example .env
```

```
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN="pk.your_token_here"
```

It's a public token, so it ships in the client bundle. Restrict it by URL in the Mapbox dashboard.

## Scripts

| Command              | What it does                          |
| -------------------- | ------------------------------------- |
| `bun dev`            | Dev server                            |
| `bun run build`      | Production build                      |
| `bun check`          | ESLint + TypeScript, no emit          |
| `bun run lint:fix`   | Autofix lint errors                   |
| `bun run cf:build`   | Build for Cloudflare through OpenNext |
| `bun run cf:preview` | Preview the Worker locally            |
| `bun run cf:deploy`  | Deploy to Cloudflare                  |

## Structure

```
src/
  app/          Routes, layout, global styles
  components/   UI, grouped by section (header, projects, location, …)
  data/         Site content — projects, technologies, contact links
  hooks/        Shared React hooks
  types/        Shared types
public/         Images and static assets
```

Content lives in `src/data`, apart from the components that render it — updating a project or adding a link means editing one object, not the markup.

## License

The source code is [MIT licensed](LICENSE) — read it, learn from it, reuse it.

The content is not: images, copy, and the visual design are © Ángel Pérez, all rights reserved. Third-party logos in the project covers belong to their owners. Please don't republish this site as your own.
