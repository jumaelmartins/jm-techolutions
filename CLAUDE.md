# CLAUDE.md

## Project Overview

**JMTechSolutions** — Corporate website for a technology company, built with Next.js App Router and TypeScript. Includes a landing page, service/project/about/contact pages, and an admin dashboard for content management.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript 5
- **Styling**: SCSS Modules (`*.module.scss`) + global CSS variables in `src/styles/theme.css`
- **Auth**: bcryptjs (password hashing) + jose (JWT tokens)
- **Icons**: lucide-react
- **Infra**: Docker (multi-stage build), port 7000

## Project Structure

```
src/
├── app/
│   ├── admin/          # Admin dashboard pages
│   ├── api/            # API routes (auth, content)
│   ├── components/     # Shared React components
│   ├── contato/        # Contact page
│   ├── projetos/       # Projects page
│   ├── servicos/       # Services page
│   ├── sobre/          # About page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global base styles
├── lib/                # auth.ts, content.ts utilities
├── data/               # content.json (persisted via Docker volume)
├── styles/             # theme.css (CSS custom properties / design tokens)
└── proxy.ts
```

## Development

```bash
npm run dev     # Dev server at http://localhost:7000
npm run build   # Production build
npm run start   # Production server at port 7000
npm run lint    # ESLint
```

Docker:
```bash
docker-compose up -d    # Start with Docker (port 7000)
```

Environment variables required:
- `ADMIN_PASSWORD` — admin dashboard password
- `JWT_SECRET` — secret for JWT signing

## Styling Conventions

- Use **SCSS Modules** (`*.module.scss`) for component/page styles — no inline styles
- Design tokens (colors, spacing, fonts) are CSS custom properties in `src/styles/theme.css`
- Dark mode premium design: primary purple `#635BFF`, cyan `#00D4FF`, dark backgrounds `#0B0D12`
- Mobile-first responsive design

## Path Aliases

- `@/*` maps to `./src/*`
