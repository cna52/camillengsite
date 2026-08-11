# camille ng — personal portfolio

A minimalist, terminal-inspired portfolio for Camille Ng, a computer science student at Simon Fraser University. The site highlights my experience, interests, hackathon and case-competition wins, and contact information.

## Features

- Animated ASCII flower hero
- Terminal-style typing and printing animations
- About and experience sections
- Expandable entries for winning hackathon and case-competition projects
- Contact terminal with email, GitHub, and LinkedIn links
- Responsive layout and reduced-motion support
- Custom `>` favicon

## Built with

- React 19
- Vite 6
- JavaScript and CSS
- `react-video-ascii`

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

The portfolio is configured for OpenAI Sites through `.openai/hosting.json`. This file is intentionally committed because its project ID associates the repository with the hosted site; the ID is not an authentication credential.

Do not commit API keys, access tokens, or secret-filled `.env` files.
