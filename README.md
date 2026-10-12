# Brianna — Portfolio

Personal portfolio website of Brianna, UI/UX designer building production frontend skills in React, TypeScript and Next.js.

**Live:** [briwebsite.vercel.app](https://briwebsite.vercel.app)

## Features

- **Projects** — design and code work in one place, each with its own case-study page (live link, code, Figma)
- **Experience** — timeline of work and education
- **Skills** — tools, languages, databases and frameworks
- **CV** — a CV page with a download option
- **Contact** — contact form and social links (LinkedIn, GitHub)
- **Data-driven content** — projects and experience are edited in data files, not in components

## Tech stack

- [Next.js](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- react-icons
- Formspree (contact form)
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
git clone https://github.com/Bribri0na/Briwebsite.git
cd Briwebsite
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Before pushing, run a production build. It catches type errors that `npm run dev` tolerates:

```bash
npm run build
```

## Project structure

```
app/                    Routes (home, projects, projects/[slug], contacts, cv)
components/             UI components (Header, Hero, Experience, ProjectCard, Footer, ...)
data/projects.ts        Project list and case-study content
data/experience.ts      Experience timeline
lib/                    Helpers (e.g. CV data)
public/projects/<slug>/ Images for each project
```

## Editing content

- **Add or edit a project:** `data/projects.ts`. Each project has a slug, title, cover, tech, description and a list of content blocks (text, image, section, quote, details, links). The first three projects in the array appear on the homepage.
- **Edit experience:** `data/experience.ts`.
- **Edit the intro text:** `components/Hero.tsx`.
- **Project images:** put them in `public/projects/<slug>/` and reference them as `/projects/<slug>/<file>`. File names are case-sensitive on Vercel.

## Deployment

Pushing to `main` triggers an automatic deployment on Vercel. If a build fails, the previous version stays live, so check the build logs in Vercel.

## Contact

- Email: briannatt007@gmail.com
- GitHub: [github.com/Bribri0na](https://github.com/Bribri0na)
- LinkedIn: [linkedin.com/in/briannastrand](https://www.linkedin.com/in/briannastrand)