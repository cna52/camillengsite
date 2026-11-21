# camille ng — personal portfolio

A minimal, single-column portfolio for Camille Ng, a computer science student at Simon Fraser University. It covers my experience, hackathon wins, and events I have organized or mentored at, with contact links at the bottom.

## Features

- Hero and about combined in one section, with an ASCII scramble effect when you hover the name
- Vertical-rail experience timeline with a one-line summary for each role
- Events and projects list, newest first, with award badges and expandable details, photos, and links
- Always-playing ASCII flower banner in the contact section
- Light and dark themes that follow the system setting until you pick one with the toggle
- Mobile-friendly layout and reduced-motion support
- Dog favicon

## Built with

- React 19
- Vite 6
- JavaScript and CSS
- `react-video-ascii`

## Project structure

- `src/components/` holds one component per section (`HomeSection`, `ExperienceSection`, `ProjectsSection`, `ContactSection`) plus the navbar, theme toggle, name scramble, and flower banner
- Experience and project entries are plain arrays at the top of `ExperienceSection.jsx` and `ProjectsSection.jsx`
- `public/photos/` holds the event and project photos, referenced from the `images` field of a project

## Run locally

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Check the code with ESLint:

```bash
npm run lint
```

## Deployment

Vercel uses the standard Vite output produced by `npm run build:vercel`. The root-level `vercel.json` selects this command and serves the resulting `dist` directory.

Do not commit API keys, access tokens, or secret-filled `.env` files.
