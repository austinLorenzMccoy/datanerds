# DataNerds v2.0
> The 100% free, AI-augmented, job-ready data science platform for the global community

## Table of Contents
1. [Vision](#vision)
2. [Repository Layout](#repository-layout)
3. [Frontend Experience](#frontend-experience)
4. [Feature Highlights](#feature-highlights)
5. [Technology Stack](#technology-stack)
6. [Getting Started](#getting-started)
7. [Environment Variables](#environment-variables)
8. [Available Scripts](#available-scripts)
9. [API Integrations](#api-integrations)
10. [Roadmap](#roadmap)
11. [Contributing](#contributing)

---

## Vision
DataNerds v2.0 expands the core learning community with Web3 curriculum, AI/LLM copilots, and a global job+internship hub, all powered by free APIs so the product can scale impactfully with near-zero operating cost. Key bets include an AI study assistant (Groq), six-plus job sources, community gamification, and crypto analytics tracks layered onto the original learning experience.@docs/DataNerds-Enhanced-PRD-v2.0.md#12-200

## Repository Layout
```
.
├── docs/                # PRDs, wireframes, API references
│   ├── DataNerds-Enhanced-PRD-v2.0.md
│   ├── DataNerds-Frontend-PRD.md
│   ├── DataNerds-Wireframes.html
│   └── Quick-API-Reference-Guide.md
├── frontend/            # Next.js 16 (App Router) implementation
│   ├── app/             # Route groups and pages
│   ├── components/      # UI primitives + landing sections
│   ├── hooks/, lib/     # Client utilities
│   └── styles/          # Global Tailwind layers
└── README.md            # (this file)
```
Each document in `docs/` contains canonical requirements—Enhanced PRD for product scope, Frontend PRD for page-level specs, Quick API Guide for integrations, and HTML wireframes for visual references.

## Frontend Experience
- **Landing Page:** Implements the "Academic Futurism" hero (immersive background, animated counters, dual CTA) and subsequent feature, tracks, testimonial, stats, and CTA blocks defined in the Frontend PRD.@docs/DataNerds-Frontend-PRD.md#151-327  The current `HeroSection` already brings the gradient overlays, particle system, stat counters, and CTAs to life following that spec.@frontend/components/landing/hero-section.tsx#1-160
- **Component System:** Tailwind CSS + shadcn/radix primitives, with brand tokens (Space Grotesk, JetBrains Mono, neural-dark palette) translating the design kit from the PRD into reusable UI pieces.@docs/DataNerds-Frontend-PRD.md#11-140
- **Planned Pages:** Authentication, dashboard, learning tracks, job board, AI tutor, and code playground views are all detailed in the Frontend PRD for subsequent implementation phases.@docs/DataNerds-Frontend-PRD.md#330-479

## Feature Highlights
| Pillar | Description |
| --- | --- |
| **AI & LLM Copilots** | Groq-powered study assistant, smart content generator, semantic search, code helper—prioritized for real-time tutoring and personalized recommendations.@docs/DataNerds-Enhanced-PRD-v2.0.md#64-114 |
| **Job & Internship Hub** | Aggregates Adzuna, GitHub Jobs, Remotive, JSearch, Arbeitnow, USAJobs plus internship repos, with filters, deduping, application tracking, and company insights.@docs/DataNerds-Enhanced-PRD-v2.0.md#116-170 |
| **Learning Ecosystem** | Nine learning tracks (Web3 addition), PDF/video resource library, dataset hub, interactive playground, research paper recommender, and news feeds to keep learners current.@docs/DataNerds-Enhanced-PRD-v2.0.md#43-235 |
| **Gamification & Community** | Daily streaks, badges, leaderboards, mentorship matching, project showcase, and study challenges amplify engagement and retention.@docs/DataNerds-Enhanced-PRD-v2.0.md#173-201 |
| **Web3 & Blockchain** | Crypto dashboards, NFT trackers, DeFi analytics, and whale-watching features powered by CoinGecko, Etherscan, Alchemy, The Graph, Moralis, and QuickNode.@docs/DataNerds-Enhanced-PRD-v2.0.md#27-61 |

## Technology Stack
- **Frontend:** Next.js 16 App Router, React 19, Tailwind CSS 4, shadcn/ui, Radix UI, Zustand/React Context for state, React Hook Form + Zod for forms/validation.@frontend/package.json#1-73  @docs/Quick-API-Reference-Guide.md#356-378
- **Backend & Infra (planned):** Supabase (Postgres + Auth + Storage), Vercel hosting, Vercel Cron, Cloudinary for media, Clerk for auth UI, Resend for transactional email, Sentry for monitoring.@docs/Quick-API-Reference-Guide.md#74-199

## Getting Started
1. **Prerequisites**
   - Node.js 18.18+ (Next.js 16 requirement)
   - Corepack-enabled package manager (repo ships with `pnpm-lock.yaml`).
2. **Install dependencies**
   ```bash
   corepack enable
   pnpm install
   ```
3. **Run the dev server**
   ```bash
   pnpm dev
   ```
   Visit `http://localhost:3000` to explore the landing experience.
4. **Build for production**
   ```bash
   pnpm build && pnpm start
   ```
5. **Lint (optional)**
   ```bash
   pnpm lint
   ```

## Environment Variables
Create `frontend/.env.local` (or configure in Vercel) using the template below. Keep secrets out of version control.
```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
ADZUNA_APP_ID=
ADZUNA_API_KEY=
GROQ_API_KEY=
HUGGINGFACE_API_KEY=
COHERE_API_KEY=
JDOODLE_CLIENT_ID=
JDOODLE_CLIENT_SECRET=
YOUTUBE_API_KEY=
NEWS_API_KEY=
KAGGLE_USERNAME=
KAGGLE_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
RESEND_API_KEY=
ALCHEMY_API_KEY=
ETHERSCAN_API_KEY=
```
@docs/Quick-API-Reference-Guide.md#309-352

## Available Scripts
All commands should be executed from the `frontend/` directory.
| Script | Purpose |
| --- | --- |
| `pnpm dev` | Start Next.js dev server with hot reload.@frontend/package.json#5-9 |
| `pnpm build` | Compile the production bundle.@frontend/package.json#5-9 |
| `pnpm start` | Run the production server (after `build`).@frontend/package.json#5-9 |
| `pnpm lint` | Execute ESLint across the project.@frontend/package.json#5-9 |

## API Integrations
The platform is intentionally architected around 35+ free services spanning four pillars:
1. **Web3 & Blockchain:** CoinGecko, Etherscan, Alchemy, The Graph, CryptoCompare, Moralis, QuickNode for price feeds, NFT data, chain analytics, and wallet insights.@docs/Quick-API-Reference-Guide.md#5-18
2. **AI & LLM:** Groq Cloud, HuggingFace, Together AI, OpenRouter, Replicate, Stability, Cohere, Anthropic for tutoring, content generation, semantic search, and media creation.@docs/Quick-API-Reference-Guide.md#21-35
3. **Jobs & Internships:** Adzuna, GitHub Jobs, Remotive, JSearch, Arbeitnow, USAJobs, SimplifyJobs, Ouckah internship listings for a comprehensive opportunity board.@docs/Quick-API-Reference-Guide.md#38-52
4. **Learning & Content:** Kaggle, arXiv, YouTube Data, NewsAPI, Reddit, JDoodle, Judge0, Open Trivia DB, Stack Exchange, CORE powering datasets, research, news, code execution, and quizzes.@docs/Quick-API-Reference-Guide.md#55-70

## Roadmap
- **Priority 1 (Week 1-2):** Launch-ready MVP—homepage, learning tracks overview, resource uploads, baseline search, and multi-source job board with cron-based refresh.@docs/Quick-API-Reference-Guide.md#89-118
- **Priority 2 (Week 3-4):** AI tutor integration, code playground, foundational gamification (points, streaks, badges), dataset hub, and news feed.@docs/Quick-API-Reference-Guide.md#120-142
- **Priority 3 (Week 5-8):** Web3 dashboards, semantic search, research library, certification tracker, and advanced analytics across the community experience.@docs/Quick-API-Reference-Guide.md#145-199

## Contributing
1. Fork the repository and create a feature branch (`git checkout -b feat/amazing-module`).
2. Follow the design and product specs in `docs/` before coding.
3. Ensure `pnpm lint` and `pnpm build` pass locally.
4. Submit a PR with screenshots or screen recordings for UI updates.

*License to be defined. Until then, contributions default to this repository's owners.*
