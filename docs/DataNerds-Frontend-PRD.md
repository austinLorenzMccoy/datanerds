# DataNerds Frontend PRD v2.0
## Complete Frontend Specification & Wireframes

**Version:** 2.0  
**Date:** January 29, 2026  
**Status:** Ready for Implementation  
**Design Philosophy:** Academic Futurism with Data-Driven Aesthetics

---

## 🎨 DESIGN SYSTEM & BRAND IDENTITY

### Core Design Philosophy

**Aesthetic Direction: "Academic Futurism Meets Data Visualization"**

DataNerds combines the credibility of academic institutions with the excitement of data science innovation. The design system features:

- **Primary Theme:** Clean, data-inspired interfaces with subtle grid overlays and terminal-like elements
- **Secondary Accents:** Mathematical patterns, code syntax highlighting influences, and algorithmic flow
- **Personality:** Professional yet approachable, technical but not intimidating, community-focused

### Typography System

**Primary Font Stack:**
```css
--font-display: 'Space Grotesk', 'Inter', sans-serif; /* Headers, CTAs */
--font-body: 'JetBrains Mono', 'Fira Code', monospace; /* Body, code */
--font-accent: 'Atkinson Hyperlegible', sans-serif; /* Accessibility-first for UI elements */
```

**Type Scale:**
- Display: 72px (Hero headlines)
- H1: 48px (Page titles)
- H2: 36px (Section headers)
- H3: 28px (Card titles)
- H4: 20px (Subsections)
- Body: 16px (Primary content)
- Small: 14px (Metadata, labels)
- Tiny: 12px (Captions, timestamps)

### Color Palette

**Base Theme: "Neural Network Dark"**
```css
:root {
  /* Primary Brand Colors */
  --dn-neural-blue: #3B82F6;        /* Primary actions, links */
  --dn-data-green: #10B981;         /* Success, progress */
  --dn-code-orange: #F59E0B;        /* Warnings, highlights */
  --dn-syntax-purple: #8B5CF6;      /* Accents, special features */
  
  /* Semantic Colors */
  --dn-ai-pink: #EC4899;            /* AI features */
  --dn-web3-cyan: #06B6D4;          /* Web3 track */
  --dn-job-yellow: #EAB308;         /* Job board */
  
  /* Neutrals - Dark Theme */
  --dn-bg-primary: #0A0E27;         /* Main background */
  --dn-bg-secondary: #141B3D;       /* Cards, containers */
  --dn-bg-tertiary: #1E293B;        /* Hover states */
  --dn-bg-code: #0F172A;            /* Code blocks */
  
  --dn-text-primary: #F1F5F9;       /* Main text */
  --dn-text-secondary: #94A3B8;     /* Subtle text */
  --dn-text-tertiary: #64748B;      /* Metadata */
  
  --dn-border: #334155;             /* Subtle borders */
  --dn-border-focus: #3B82F6;       /* Focus states */
  
  /* Grid Overlay (subtle data aesthetic) */
  --dn-grid-color: rgba(59, 130, 246, 0.05);
  
  /* Gradients */
  --dn-gradient-hero: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
  --dn-gradient-card: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  --dn-gradient-overlay: linear-gradient(180deg, transparent 0%, rgba(10, 14, 39, 0.8) 100%);
}
```

**Light Theme: "Clean Laboratory"** (Secondary theme for accessibility)
```css
[data-theme="light"] {
  --dn-bg-primary: #FFFFFF;
  --dn-bg-secondary: #F8FAFC;
  --dn-bg-tertiary: #F1F5F9;
  --dn-text-primary: #0F172A;
  --dn-text-secondary: #475569;
  --dn-text-tertiary: #64748B;
  --dn-border: #E2E8F0;
}
```

### Component Design Tokens

**Spacing System (8px base unit):**
```css
--space-xs: 4px;    /* Tight spacing */
--space-sm: 8px;    /* Small gaps */
--space-md: 16px;   /* Standard spacing */
--space-lg: 24px;   /* Section spacing */
--space-xl: 32px;   /* Large spacing */
--space-2xl: 48px;  /* Hero spacing */
--space-3xl: 64px;  /* Major sections */
```

**Border Radius:**
```css
--radius-sm: 4px;   /* Buttons, tags */
--radius-md: 8px;   /* Cards, inputs */
--radius-lg: 12px;  /* Modals */
--radius-xl: 16px;  /* Hero sections */
--radius-full: 9999px; /* Avatars, pills */
```

**Shadows:**
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.2);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.25);
--shadow-glow: 0 0 20px rgba(59, 130, 246, 0.3);
```

### Animation System

**Timing Functions:**
```css
--ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);
--ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-smooth: cubic-bezier(0.33, 1, 0.68, 1);
```

**Duration:**
```css
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;
--duration-slower: 500ms;
```

**Key Animations:**
- **Fade In Up:** Elements slide up 20px while fading in
- **Stagger Reveal:** Sequential animation with 50ms delays
- **Pulse:** Subtle scale effect for attention
- **Shimmer:** Loading skeleton effect
- **Ripple:** Material-inspired interaction feedback

---

## 📐 PAGE-BY-PAGE SPECIFICATIONS

### 1. LANDING PAGE (`/`)

**Purpose:** First impression, conversion to sign-up, showcase unique value proposition

**Design Concept:** Full-screen immersive experience with dynamic data visualization background

#### Section Breakdown:

**Hero Section (Above the fold)**
```
Layout:
┌──────────────────────────────────────────────────────┐
│  [Logo]                    [Login] [Get Started →]   │ <- Transparent nav
│                                                        │
│              ╔══════════════════════════════╗         │
│              ║  Master Data Science         ║         │ <- 72px Display
│              ║  Without Breaking the Bank   ║         │
│              ╚══════════════════════════════╝         │
│                                                        │
│     100% Free • AI-Powered • Job Ready • Web3        │ <- Benefit badges
│                                                        │
│    [Start Learning Free →]  [View Tracks ↓]          │ <- Primary CTAs
│                                                        │
│     [Stats Counter: 1,234 Members | 50+ Jobs]        │
│                                                        │
│              ↓ Scroll to explore ↓                    │
└──────────────────────────────────────────────────────┘

Background: User-provided image with gradient overlay
Animation: Particles floating upward (data points visualization)
```

**Features Showcase Section**
```
┌──────────────────────────────────────────────────────┐
│                                                        │
│        Why DataNerds is Different                     │ <- H1
│        ════════════════════════════                   │
│                                                        │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐    │
│  │ 🤖 AI  │  │ 💼 Jobs│  │ 🔗 Web3│  │ 👥 Community│ │
│  │ Tutor  │  │ Board  │  │ Track  │  │ 1200+ │    │
│  │        │  │ 6 APIs │  │ Live   │  │ Members│    │
│  │ Free   │  │        │  │ Crypto │  │        │    │
│  │ Groq   │  │ Real   │  │ Data   │  │ Active │    │
│  └────────┘  └────────┘  └────────┘  └────────┘    │
│                                                        │
│                 [Explore All Features →]              │
└──────────────────────────────────────────────────────┘

Layout: 4-column grid (2x2 on mobile)
Cards: Glassmorphism effect with subtle hover animations
Icons: Custom SVG with brand colors
```

**Learning Tracks Preview**
```
┌──────────────────────────────────────────────────────┐
│                                                        │
│        9 Complete Learning Tracks                     │
│        ═══════════════════════════                    │
│                                                        │
│  Horizontal Scroll / Carousel                         │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐           │
│  │ SQL │ │ ML  │ │Stats│ │Web3 │ │MLOps│ →          │
│  │ 📊  │ │ 🤖  │ │ 📈  │ │ 🔗  │ │ ⚙️  │           │
│  │ 15  │ │ 23  │ │ 12  │ │ NEW │ │ 18  │           │
│  │items│ │items│ │items│ │     │ │items│           │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘           │
│                                                        │
│              [View All Tracks →]                      │
└──────────────────────────────────────────────────────┘

Style: Card carousel with snap scrolling
Interaction: Swipe/drag on mobile, arrows on desktop
Animation: Parallax effect on scroll
```

**Social Proof Section**
```
┌──────────────────────────────────────────────────────┐
│                                                        │
│        Real Success Stories                           │
│        ══════════════════════                         │
│                                                        │
│  ┌────────────────────────────────────────┐          │
│  │ "Got my first data analyst job!"       │          │
│  │                                         │          │
│  │ DataNerds helped me transition from    │          │
│  │ teaching to data science in 6 months   │          │
│  │                                         │          │
│  │ [Avatar] Sarah K. • Data Analyst       │          │
│  │          @ Tech Corp                    │          │
│  └────────────────────────────────────────┘          │
│                                                        │
│     [3 more testimonial cards in grid]                │
│                                                        │
└──────────────────────────────────────────────────────┘

Layout: Masonry grid of testimonial cards
Style: Different card heights, staggered reveal
Animation: Fade in on scroll
```

**Stats & Metrics**
```
┌──────────────────────────────────────────────────────┐
│                                                        │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│   │  1,234   │  │   450+   │  │   100%   │          │
│   │ Members  │  │ Resources│  │   FREE   │          │
│   └──────────┘  └──────────┘  └──────────┘          │
│                                                        │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│   │   50+    │  │    9     │  │   24/7   │          │
│   │   Jobs   │  │  Tracks  │  │ AI Help  │          │
│   └──────────┘  └──────────┘  └──────────┘          │
│                                                        │
└──────────────────────────────────────────────────────┘

Style: Animated counters on scroll into view
Animation: Count-up effect with easing
```

**Final CTA Section**
```
┌──────────────────────────────────────────────────────┐
│                                                        │
│     ╔═══════════════════════════════════════╗        │
│     ║  Ready to Start Your Journey?         ║        │
│     ║                                         ║        │
│     ║  Join 1,200+ aspiring data scientists  ║        │
│     ║  learning, building, and growing       ║        │
│     ║  together. 100% free. Forever.         ║        │
│     ║                                         ║        │
│     ║  [Create Free Account →]               ║        │
│     ║                                         ║        │
│     ║  No credit card • No hidden fees       ║        │
│     ╚═══════════════════════════════════════╝        │
│                                                        │
└──────────────────────────────────────────────────────┘

Style: Full-width gradient background
Animation: Gradient animation, CTA pulse effect
```

**Footer**
```
┌──────────────────────────────────────────────────────┐
│  [DataNerds Logo]                                     │
│                                                        │
│  Product          Resources        Community          │
│  • Features       • Docs           • WhatsApp         │
│  • Tracks         • Blog           • Discord          │
│  • Jobs           • FAQ            • Twitter          │
│  • Pricing        • Support        • LinkedIn         │
│                                                        │
│  © 2026 DataNerds • Built with ❤️ for learners       │
│  [Privacy] [Terms] [Cookies]                          │
└──────────────────────────────────────────────────────┘

Style: Dark background, subtle borders
Links: Hover underline animation
```

**Landing Page Technical Requirements:**
- Server-side rendering for SEO
- Lazy loading for images below fold
- Intersection Observer for scroll animations
- Preload critical assets
- Target LCP < 1.5s
- Mobile-first responsive design
- Smooth scroll behavior
- Link back to dashboard: "Dashboard" button in nav (visible only when logged in)

---

### 2. AUTHENTICATION PAGES

**Login Page (`/login`)**
```
┌──────────────────────────────────────────────────────┐
│                                                        │
│  [← Back to Home]                                     │
│                                                        │
│              [DataNerds Logo]                         │
│                                                        │
│         Welcome Back, Data Nerd!                      │
│         ═══════════════════════                       │
│                                                        │
│    ┌────────────────────────────────┐                │
│    │ Email                           │                │
│    │ ┌──────────────────────────┐  │                │
│    │ │ your.email@example.com   │  │                │
│    │ └──────────────────────────┘  │                │
│    │                                 │                │
│    │ Password                        │                │
│    │ ┌──────────────────────────┐  │                │
│    │ │ ••••••••••••••••         │  │                │
│    │ └──────────────────────────┘  │                │
│    │                                 │                │
│    │ □ Remember me   Forgot pwd?    │                │
│    │                                 │                │
│    │ [Sign In →]                    │                │
│    │                                 │                │
│    │ ────── or continue with ────── │                │
│    │                                 │                │
│    │ [Google] [GitHub] [Discord]    │                │
│    │                                 │                │
│    │ Don't have an account?          │                │
│    │ [Sign up →]                    │                │
│    └────────────────────────────────┘                │
│                                                        │
└──────────────────────────────────────────────────────┘

Style: Centered card with glassmorphism
Background: Subtle animated gradient
Form: Clean inputs with floating labels
OAuth: Brand-colored social buttons
```

**Sign Up Page (`/signup`)**
```
┌──────────────────────────────────────────────────────┐
│                                                        │
│  [← Back to Home]                                     │
│                                                        │
│         Join the DataNerds Community                  │
│         ════════════════════════════                  │
│                                                        │
│    ┌────────────────────────────────┐                │
│    │ Full Name                       │                │
│    │ [Input]                         │                │
│    │                                 │                │
│    │ Email Address                   │                │
│    │ [Input]                         │                │
│    │                                 │                │
│    │ Password                        │                │
│    │ [Input with strength meter]    │                │
│    │ ▓▓▓▓░░░░░░ Medium              │                │
│    │                                 │                │
│    │ I'm interested in:              │                │
│    │ [x] Machine Learning            │                │
│    │ [x] Data Analysis               │                │
│    │ [ ] Web3 & Blockchain           │                │
│    │ [x] Career Transition           │                │
│    │                                 │                │
│    │ □ I agree to Terms & Privacy    │                │
│    │                                 │                │
│    │ [Create Account →]              │                │
│    │                                 │                │
│    │ ────── or sign up with ────── │                │
│    │                                 │                │
│    │ [Google] [GitHub] [Discord]    │                │
│    │                                 │                │
│    │ Already have an account?        │                │
│    │ [Sign in →]                    │                │
│    └────────────────────────────────┘                │
│                                                        │
└──────────────────────────────────────────────────────┘

Features:
- Real-time email validation
- Password strength indicator
- Interest tags for personalization
- Multi-step form (can be expanded)
- Social OAuth options
```

---

### 3. DASHBOARD PAGE (`/dashboard`)

**Purpose:** Central hub for personalized learning, progress tracking, quick access to all features

**Layout Architecture:**
```
┌──────────────────────────────────────────────────────┐
│ [☰] DataNerds     🔍 Search...    [🔔] [👤] [⚙️]   │ <- Top Nav (60px)
├────┬─────────────────────────────────────────────────┤
│    │                                                  │
│ S  │  Dashboard Overview                             │ <- Main Content
│ I  │  ═══════════════════                            │
│ D  │                                                  │
│ E  │  [Greeting Banner with streak]                  │
│ B  │                                                  │
│ A  │  Quick Stats Row                                │
│ R  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐  │
│    │  │Progress│ │Streak  │ │Points  │ │Next    │  │
│ 2  │  │  45%   │ │  7🔥   │ │  1,234 │ │Badge   │  │
│ 4  │  └────────┘ └────────┘ └────────┘ └────────┘  │
│ 0  │                                                  │
│ p  │  Continue Learning                              │
│ x  │  ┌──────────────────┐ ┌──────────────────┐    │
│    │  │ SQL Track        │ │ ML Track         │    │
│    │  │ [Progress bar]   │ │ [Progress bar]   │    │
│    │  │ 12/15 complete   │ │ 5/23 complete    │    │
│    │  └──────────────────┘ └──────────────────┘    │
│    │                                                  │
│    │  Latest Jobs                                    │
│    │  [Job cards with bookmark icons]                │
│    │                                                  │
│    │  Recommended Resources                          │
│    │  [Resource cards]                               │
│    │                                                  │
└────┴─────────────────────────────────────────────────┘
```

**Sidebar (Collapsible)**
```
Collapsed (64px):          Expanded (240px):
┌──────┐                  ┌─────────────────────────┐
│ [☰] │                  │ [☰] DataNerds          │
├──────┤                  ├─────────────────────────┤
│ [🏠] │                  │ 🏠 Dashboard            │
│      │                  │                         │
│ [📚] │                  │ 📚 Learning             │
│      │                  │   └─ Tracks             │
│ [💼] │                  │   └─ Resources          │
│      │                  │   └─ Code Playground    │
│ [🤖] │                  │                         │
│      │                  │ 💼 Jobs                 │
│ [👥] │                  │   └─ Browse Jobs        │
│      │                  │   └─ Applications       │
│ [📊] │                  │   └─ Saved              │
│      │                  │                         │
│ [⚙️] │                  │ 🤖 AI Assistant         │
│      │                  │                         │
└──────┘                  │ 👥 Community            │
                          │   └─ Leaderboard        │
                          │   └─ Mentorship         │
                          │   └─ Projects           │
                          │                         │
                          │ 📊 My Progress          │
                          │                         │
                          │ ─────────────────────   │
                          │                         │
                          │ ⚙️ Settings             │
                          │ 🌓 Theme Toggle         │
                          │ 🚪 Logout               │
                          └─────────────────────────┘

Features:
- Persist collapsed state in localStorage
- Smooth expand/collapse animation (250ms ease-in-out)
- Hover preview on collapsed icons
- Active route highlighting
- Collapsible section labels with smooth animation
- Settings integrated into sidebar (not separate page)
```

**Dashboard Content Sections:**

**1. Greeting Banner**
```
┌─────────────────────────────────────────────────────┐
│ Good evening, Alex! 👋                   🔥 7 Day Streak│
│                                                      │
│ You're on fire! Complete one more lesson today      │
│ to maintain your streak.                            │
│                                                      │
│ [Continue where you left off →]                     │
└─────────────────────────────────────────────────────┘

Style: Gradient background based on time of day
Animation: Fade in on load
Dynamic: Personalized message based on activity
```

**2. Quick Stats Cards**
```
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│ 📊       │ │ 🔥       │ │ ⭐       │ │ 🎯       │
│ Learning │ │ Streak   │ │ Points   │ │ Next     │
│ Progress │ │          │ │          │ │ Badge    │
│          │ │   7      │ │  1,234   │ │          │
│ ████░░   │ │  Days    │ │  XP      │ │ [Icon]   │
│ 45%      │ │          │ │ Top 15%  │ │ 50 pts   │
└──────────┘ └──────────┘ └──────────┘ └──────────┘

Layout: 4-column grid (2x2 on mobile)
Style: Glassmorphism cards with hover lift effect
Animation: Counter animations on load
```

**3. Continue Learning Section**
```
┌───────────────────────────────────────────────────────┐
│ Continue Learning                        [View All →] │
│                                                        │
│ ┌──────────────────────┐  ┌──────────────────────┐  │
│ │ [Track Icon]         │  │ [Track Icon]         │  │
│ │ SQL Fundamentals     │  │ Machine Learning     │  │
│ │                      │  │                      │  │
│ │ ████████████░░░░     │  │ ████░░░░░░░░░░░░     │  │
│ │ 12/15 lessons (80%)  │  │ 5/23 lessons (22%)   │  │
│ │                      │  │                      │  │
│ │ [Continue →]         │  │ [Continue →]         │  │
│ └──────────────────────┘  └──────────────────────┘  │
└───────────────────────────────────────────────────────┘

Style: Horizontal scroll on mobile
Cards: Show last accessed, most progress
Progress: Animated progress bars
```

**4. Latest Jobs Widget**
```
┌───────────────────────────────────────────────────────┐
│ Latest Job Opportunities            [View All Jobs →] │
│                                                        │
│ ┌─────────────────────────────────────────────────┐  │
│ │ [Logo] Junior Data Analyst            [Bookmark] │  │
│ │        Tech Startup Inc.                          │  │
│ │        📍 Remote • 💰 $60k-80k • ⏰ Posted 2h ago │  │
│ │        Python • SQL • Tableau                     │  │
│ │        [View Details →]                           │  │
│ └─────────────────────────────────────────────────┘  │
│                                                        │
│ [2 more job cards]                                    │
│                                                        │
└───────────────────────────────────────────────────────┘

Style: Compact card design
Features: Quick bookmark, skill tags
Animation: Slide in from right
```

**5. AI Assistant Widget (Persistent)**
```
Fixed Bottom Right:
┌─────────────────────┐
│ 🤖 AI Assistant     │
│ ─────────────────── │
│ Ask me anything     │
│ about data science! │
│                     │
│ [Chat Now →]        │
└─────────────────────┘

Interaction: Expands to chat interface
Position: Fixed bottom-right, always visible
Style: Floating card with shadow
Animation: Gentle pulse every 30s
```

---

### 4. LEARNING TRACKS PAGE (`/tracks`)

**Purpose:** Browse all 9 learning tracks, understand curriculum, track progress

**Layout:**
```
┌──────────────────────────────────────────────────────┐
│ [Sidebar] │ Learning Tracks                   [🏠]  │
│           │ ═════════════════                        │
│           │                                          │
│           │ Master data science with our            │
│           │ comprehensive learning paths            │
│           │                                          │
│           │ Filters:                                │
│           │ [All] [Beginner] [Intermediate] [Advanced]│
│           │ [In Progress] [Completed]               │
│           │                                          │
│           │ ┌────────────────────────────────────┐  │
│           │ │ [Icon] 1. SQL Fundamentals         │  │
│           │ │ ─────────────────────────          │  │
│           │ │ Learn database querying from       │  │
│           │ │ scratch to advanced analytics      │  │
│           │ │                                    │  │
│           │ │ 📊 15 Resources • ⏱️ 20 hours     │  │
│           │ │ [██████░░░░] 12/15 (80%)          │  │
│           │ │                                    │  │
│           │ │ Topics:                            │  │
│           │ │ • SELECT, WHERE, JOINs            │  │
│           │ │ • Window Functions                 │  │
│           │ │ • Query Optimization               │  │
│           │ │                                    │  │
│           │ │ [Continue Learning →] [View Details]│  │
│           │ └────────────────────────────────────┘  │
│           │                                          │
│           │ [8 more track cards...]                 │
│           │                                          │
└──────────────────────────────────────────────────────┘

Card Style: Glassmorphism with category color accent
Animation: Stagger reveal on scroll
Interaction: Expand to show full curriculum
```

**Track Detail View (Modal or Page):**
```
┌──────────────────────────────────────────────────────┐
│ [← Back to Tracks]                         [Start →] │
│                                                        │
│ [Large Icon] SQL Fundamentals                         │
│ ══════════════════════════                            │
│                                                        │
│ Master database querying from SELECT to               │
│ advanced analytics and optimization                   │
│                                                        │
│ 📊 15 Resources • ⏱️ 20 hours • 🎯 Beginner         │
│                                                        │
│ Your Progress: [████████░░] 80% (12/15)              │
│                                                        │
│ ┌────────────────────────────────────────┐           │
│ │ Curriculum                              │           │
│ │ ──────────                              │           │
│ │                                          │           │
│ │ Week 1: Basics                           │           │
│ │ ✅ Introduction to SQL                  │           │
│ │ ✅ SELECT and WHERE clauses             │           │
│ │ ✅ Practice: First Queries              │           │
│ │                                          │           │
│ │ Week 2: Joins & Aggregations            │           │
│ │ ✅ INNER, LEFT, RIGHT JOINs             │           │
│ │ ✅ GROUP BY and HAVING                  │           │
│ │ 🔒 Practice: Aggregations               │ <- Locked │
│ │                                          │           │
│ │ Week 3: Advanced Topics                 │           │
│ │ 🔒 Window Functions                     │           │
│ │ 🔒 CTEs and Subqueries                  │           │
│ │ 🔒 Query Optimization                   │           │
│ │                                          │           │
│ │ Week 4: Final Project                   │           │
│ │ 🔒 End-to-end SQL Analysis              │           │
│ └────────────────────────────────────────┘           │
│                                                        │
│ [Start Next Lesson →]                                 │
└──────────────────────────────────────────────────────┘

Features:
- Sequential unlocking (complete to unlock next)
- Checkmarks for completed items
- Time estimates for each section
- Download all materials button
```

---

### 5. RESOURCES PAGE (`/resources`)

**Purpose:** Browse, search, filter all learning materials (PDFs, videos, notebooks)

**Layout:**
```
┌──────────────────────────────────────────────────────┐
│ [Sidebar] │ Resource Library                  [🏠]  │
│           │ ══════════════════                       │
│           │                                          │
│           │ ┌────────────────────────────────────┐  │
│           │ │ 🔍 Search resources...             │  │
│           │ └────────────────────────────────────┘  │
│           │                                          │
│           │ Filters:                                │
│           │ Type: [All] [PDFs] [Videos] [Notebooks] │
│           │ Track: [All Tracks ▼]                   │
│           │ Level: [All] [Beginner] [Int] [Adv]    │
│           │ Sort: [Latest] [Popular] [A-Z]          │
│           │                                          │
│           │ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐   │
│           │ │[PDF] │ │[VID] │ │[NB]  │ │[PDF] │   │
│           │ │Intro │ │ML    │ │Data  │ │SQL   │   │
│           │ │to    │ │Crash │ │Clean │ │Best  │   │
│           │ │Python│ │Course│ │ing   │ │Prac  │   │
│           │ │      │ │      │ │      │ │tices │   │
│           │ │⭐4.8 │ │⭐4.9 │ │⭐4.7 │ │⭐4.6 │   │
│           │ │📥1.2k│ │👀3.4k│ │📥890 │ │📥2.1k│   │
│           │ │      │ │      │ │      │ │      │   │
│           │ │[View]│ │[Watch│ │[Open]│ │[View]│   │
│           │ └──────┘ └──────┘ └──────┘ └──────┘   │
│           │                                          │
│           │ [More resource cards in grid...]        │
│           │                                          │
│           │ [Load More] or [Infinite Scroll]        │
└──────────────────────────────────────────────────────┘

Grid: 4 columns desktop, 2 mobile
Cards: Consistent size, hover effect
Badges: Show resource type, difficulty, new
Actions: View, download, bookmark, share
```

**Resource Detail Page:**
```
┌──────────────────────────────────────────────────────┐
│ [← Back]                                    [⋯ Menu] │
│                                                        │
│ [PDF Icon] Introduction to Python for Data Science   │
│ ═══════════════════════════════════════════          │
│                                                        │
│ By DataNerds Team • Published Jan 15, 2026           │
│ Track: Python Basics • Level: Beginner               │
│                                                        │
│ ⭐ 4.8 (234 ratings) • 📥 1,234 downloads            │
│                                                        │
│ [📥 Download PDF] [🔖 Bookmark] [💬 Discuss]        │
│                                                        │
│ ┌────────────────────────────────────────┐           │
│ │ [PDF Preview/Thumbnail]                 │           │
│ │                                          │           │
│ │ [View Full PDF in new tab →]            │           │
│ └────────────────────────────────────────┘           │
│                                                        │
│ Description                                           │
│ ───────────                                           │
│ A comprehensive guide to getting started with         │
│ Python for data analysis. Covers variables, loops,    │
│ functions, and data structures.                       │
│                                                        │
│ What You'll Learn                                     │
│ ─────────────────                                     │
│ • Python syntax basics                                │
│ • Data types and structures                           │
│ • Control flow and functions                          │
│ • File I/O operations                                 │
│                                                        │
│ Related Resources                                     │
│ [3 resource cards]                                    │
│                                                        │
│ Community Reviews                                     │
│ [Review cards with ratings]                           │
│                                                        │
└──────────────────────────────────────────────────────┘
```

---

### 6. CODE PLAYGROUND PAGE (`/playground`)

**Purpose:** Browser-based code editor for Python, R, SQL with execution

**Layout:**
```
┌──────────────────────────────────────────────────────┐
│ [Sidebar] │ Code Playground                   [🏠]  │
│           │                                          │
│           │ [Python ▼] [Run Code] [Save] [Share]   │
│           │ [New] [Examples ▼] [Clear]              │
│           │                                          │
│           │ ┌────────────────────────────────────┐  │
│           │ │ 1  import pandas as pd            │  │ <- Editor
│           │ │ 2  import numpy as np             │  │
│           │ │ 3                                  │  │
│           │ │ 4  # Load sample dataset           │  │
│           │ │ 5  df = pd.read_csv('data.csv')   │  │
│           │ │ 6                                  │  │
│           │ │ 7  # Analyze data                  │  │
│           │ │ 8  print(df.describe())            │  │
│           │ │ 9                                  │  │
│           │ │                                    │  │
│           │ │ [Editor area - Monaco/CodeMirror] │  │
│           │ │                                    │  │
│           │ └────────────────────────────────────┘  │
│           │                                          │
│           │ Output                                   │
│           │ ┌────────────────────────────────────┐  │
│           │ │ Running Python code...             │  │
│           │ │                                    │  │
│           │ │ >>> count    1000.000000          │  │
│           │ │ >>> mean        24.567890         │  │
│           │ │ >>> std          5.432100         │  │
│           │ │ >>> min          0.000000         │  │
│           │ │                                    │  │
│           │ │ Execution time: 234ms              │  │
│           │ └────────────────────────────────────┘  │
│           │                                          │
│           │ Sample Datasets                         │
│           │ [Iris] [Titanic] [Housing] [Upload]    │
└──────────────────────────────────────────────────────┘

Editor: Monaco Editor (VS Code engine)
Features:
- Syntax highlighting
- Autocomplete
- Linting
- Multiple language support
- Dark/light themes
- Keyboard shortcuts
- Save to account
- Share via URL
```

---

### 7. JOBS BOARD PAGE (`/jobs`)

**Purpose:** Browse and apply to data science jobs/internships

**Layout:**
```
┌──────────────────────────────────────────────────────┐
│ [Sidebar] │ Job Opportunities                 [🏠]  │
│           │ ════════════════════                     │
│           │                                          │
│           │ Find your next data science role         │
│           │                                          │
│           │ ┌────────────────────────────────────┐  │
│           │ │ 🔍 Search jobs, companies...       │  │
│           │ └────────────────────────────────────┘  │
│           │                                          │
│           │ Filters:                                │
│           │ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐   │
│           │ │Remote│ │Junior│ │Python│ │$50k+ │   │
│           │ │  ✓   │ │      │ │  ✓   │ │      │   │
│           │ └──────┘ └──────┘ └──────┘ └──────┘   │
│           │                                          │
│           │ Type: [All] [Full-time] [Internship]   │
│           │ Location: [Anywhere ▼]                  │
│           │ Experience: [All Levels ▼]              │
│           │ Salary: [Any ▼]                         │
│           │ Posted: [Last 7 days ▼]                 │
│           │                                          │
│           │ 247 jobs found                          │
│           │ ─────────────                           │
│           │                                          │
│           │ ┌────────────────────────────────────┐  │
│           │ │ [Logo]  Data Analyst               │  │
│           │ │         TechCorp Inc.          [💾] │ <- Bookmark
│           │ │         ─────────────────────────   │  │
│           │ │ 📍 Remote • 💰 $60k-$80k           │  │
│           │ │ ⏰ Posted 2 hours ago               │  │
│           │ │                                    │  │
│           │ │ We're looking for a junior data    │  │
│           │ │ analyst to join our growing team...│  │
│           │ │                                    │  │
│           │ │ Skills: Python, SQL, Tableau       │  │
│           │ │                                    │  │
│           │ │ [Quick Apply →] [View Details]     │  │
│           │ └────────────────────────────────────┘  │
│           │                                          │
│           │ [More job cards...]                     │
│           │                                          │
│           │ [Load More Jobs]                        │
└──────────────────────────────────────────────────────┘

Features:
- Real-time search
- Advanced filters with persistence
- Bookmark/save jobs
- Quick apply flow
- Job recommendations based on skills
- New badge for recent posts
```

**Job Detail Page:**
```
┌──────────────────────────────────────────────────────┐
│ [← Back to Jobs]                         [💾 Save]  │
│                                                        │
│ ┌────┐ Data Analyst                                  │
│ │Logo│ TechCorp Inc.                                 │
│ └────┘ San Francisco, CA (Remote)                    │
│                                                        │
│ 📍 Remote • 💰 $60k-$80k • ⏰ Posted 2 hours ago    │
│ 👁️ 234 views • 12 applicants                        │
│                                                        │
│ [Apply Now →] [💾 Save] [📤 Share]                  │
│                                                        │
│ ┌────────────────────────────────────────┐           │
│ │ Job Description                         │           │
│ │ ───────────────                         │           │
│ │                                          │           │
│ │ We're looking for a talented junior data│           │
│ │ analyst to join our growing team...     │           │
│ │                                          │           │
│ │ Responsibilities:                        │           │
│ │ • Analyze large datasets                │           │
│ │ • Create dashboards in Tableau          │           │
│ │ • Collaborate with stakeholders         │           │
│ │                                          │           │
│ │ Requirements:                            │           │
│ │ • 1+ years experience                   │           │
│ │ • Strong Python and SQL skills          │           │
│ │ • Data visualization experience         │           │
│ │                                          │           │
│ │ Nice to Have:                            │           │
│ │ • Machine learning knowledge            │           │
│ │ • Cloud platform experience (AWS/GCP)   │           │
│ └────────────────────────────────────────┘           │
│                                                        │
│ Required Skills                                       │
│ [Python] [SQL] [Tableau] [Statistics]                │
│                                                        │
│ Your Match: 85% ⭐⭐⭐⭐⭐                            │
│ You have 3/4 required skills                          │
│                                                        │
│ About TechCorp                                        │
│ [Company info, culture, benefits]                     │
│                                                        │
│ Similar Jobs                                          │
│ [3 job cards]                                         │
│                                                        │
└──────────────────────────────────────────────────────┘
```

---

### 8. AI ASSISTANT PAGE (`/ai-assistant`)

**Purpose:** Chat interface for learning assistance, code help, Q&A

**Layout:**
```
┌──────────────────────────────────────────────────────┐
│ [Sidebar] │ AI Study Assistant 🤖             [🏠]  │
│           │ ════════════════════                     │
│           │                                          │
│           │ Powered by Groq • Lightning Fast        │
│           │                                          │
│           │ ┌────────────────────────────────────┐  │
│           │ │ Chat History                       │  │
│           │ │ ────────────                       │  │
│           │ │ [+] New Chat                       │  │
│           │ │                                    │  │
│           │ │ ▸ Today                            │  │
│           │ │   • Python loops help              │  │
│           │ │   • SQL JOIN explanation           │  │
│           │ │                                    │  │
│           │ │ ▸ Yesterday                        │  │
│           │ │   • ML algorithms comparison       │  │
│           │ │   • Pandas dataframe questions     │  │
│           │ │                                    │  │
│           │ │ ▸ This Week                        │  │
│           │ │   • Statistics concepts            │  │
│           │ └────────────────────────────────────┘  │
│           │                                          │
│           │ ┌────────────────────────────────────┐  │
│           │ │ Chat Area (Main)                   │  │
│           │ │                                    │  │
│           │ │ [AI Avatar]                        │  │
│           │ │ Hi! I'm your AI study assistant.   │  │
│           │ │ Ask me anything about data science!│  │
│           │ │                                    │  │
│           │ │ Quick prompts:                     │  │
│           │ │ [Explain gradient descent]         │  │
│           │ │ [Debug my Python code]             │  │
│           │ │ [SQL query help]                   │  │
│           │ │ [ML algorithm comparison]          │  │
│           │ │                                    │  │
│           │ │                                    │  │
│           │ │ ╭─ You ─────────────────────╮     │  │
│           │ │ │ How does gradient descent  │     │  │
│           │ │ │ work in machine learning?  │     │  │
│           │ │ ╰────────────────────────────╯     │  │
│           │ │                                    │  │
│           │ │ ╭─ AI ──────────────────────╮     │  │
│           │ │ │ Great question! Gradient   │     │  │
│           │ │ │ descent is an optimization │     │  │
│           │ │ │ algorithm that...          │     │  │
│           │ │ │                            │     │  │
│           │ │ │ [Code example]             │     │  │
│           │ │ │ [Copy] [Explain More]      │     │  │
│           │ │ ╰────────────────────────────╯     │  │
│           │ │                                    │  │
│           │ └────────────────────────────────────┘  │
│           │                                          │
│           │ ┌────────────────────────────────────┐  │
│           │ │ Type your question...       [Send]│  │
│           │ │ [📎] [💬] [🎤]                    │  │
│           │ └────────────────────────────────────┘  │
│           │                                          │
└──────────────────────────────────────────────────────┘

Features:
- Real-time streaming responses
- Code syntax highlighting
- Copy code button
- Save conversations
- Quick prompt suggestions
- Voice input (future)
- File attachment (paste code)
```

---

### 9. WEB3 TRACK PAGE (`/tracks/web3`)

**Purpose:** Dedicated page for Web3 & blockchain learning with live data

**Layout:**
```
┌──────────────────────────────────────────────────────┐
│ [Sidebar] │ Web3 & Blockchain Data Science    [🏠]  │
│           │ ═══════════════════════════════          │
│           │                                          │
│           │ ┌────────────────────────────────────┐  │
│           │ │ Live Crypto Dashboard              │  │
│           │ │ ──────────────────                 │  │
│           │ │                                    │  │
│           │ │ BTC: $43,567 (+2.3%) ETH: $2,345  │  │
│           │ │ [Mini chart] [Mini chart]          │  │
│           │ │                                    │  │
│           │ │ [View Full Dashboard →]            │  │
│           │ └────────────────────────────────────┘  │
│           │                                          │
│           │ Learning Path                           │
│           │ ═════════════                           │
│           │                                          │
│           │ Module 1: Blockchain Fundamentals       │
│           │ ✅ What is blockchain?                  │
│           │ ✅ Distributed ledgers explained        │
│           │ ⬜ Consensus mechanisms                 │
│           │                                          │
│           │ Module 2: On-Chain Analytics            │
│           │ ⬜ Reading blockchain data              │
│           │ ⬜ Transaction analysis                 │
│           │ ⬜ Wallet behavior patterns             │
│           │                                          │
│           │ Module 3: DeFi Data Science             │
│           │ ⬜ Liquidity pool analytics             │
│           │ ⬜ Yield farming strategies             │
│           │ ⬜ DEX volume tracking                  │
│           │                                          │
│           │ Module 4: NFT Analytics                 │
│           │ Module 5: Crypto Price Prediction       │
│           │ Module 6: Smart Contract Data           │
│           │                                          │
│           │ Hands-On Projects                       │
│           │ ┌──────┐ ┌──────┐ ┌──────┐             │
│           │ │Build │ │Analyze│ │Create│             │
│           │ │Price │ │Whale  │ │NFT   │             │
│           │ │Tracker│Movements│Dashboard│            │
│           │ └──────┘ └──────┘ └──────┘             │
│           │                                          │
└──────────────────────────────────────────────────────┘

Special Features:
- Live crypto price widgets
- Interactive blockchain explorer
- Sample datasets from CoinGecko
- Code templates for Web3.py
- Gas price tracker
- NFT floor price tracker
```

---

### 10. COMMUNITY PAGE (`/community`)

**Purpose:** Social features, leaderboard, mentorship, project showcase

**Layout:**
```
┌──────────────────────────────────────────────────────┐
│ [Sidebar] │ Community                         [🏠]  │
│           │ ═════════                                │
│           │                                          │
│           │ [Tabs: Leaderboard | Projects | Mentors]│
│           │                                          │
│           │ ═══ LEADERBOARD ═══                     │
│           │                                          │
│           │ ┌─────────────────────────────────────┐ │
│           │ │ 🏆 Top Contributors This Month      │ │
│           │ │                                     │ │
│           │ │ 1. 🥇 Sarah K.    2,456 pts 🔥 45  │ │
│           │ │    [Avatar] Level 12 • ML Expert    │ │
│           │ │    ████████████████░░░░             │ │
│           │ │                                     │ │
│           │ │ 2. 🥈 Alex M.     2,123 pts 🔥 38  │ │
│           │ │    [Avatar] Level 10 • Data Viz     │ │
│           │ │                                     │ │
│           │ │ 3. 🥉 Jordan L.   1,987 pts 🔥 52  │ │
│           │ │    [Avatar] Level 11 • SQL Guru     │ │
│           │ │                                     │ │
│           │ │ ...                                 │ │
│           │ │                                     │ │
│           │ │ 47. You           456 pts 🔥 7      │ │
│           │ │     [Your Avatar] Level 4           │ │
│           │ │     Keep going! 44 pts to next rank│ │
│           │ └─────────────────────────────────────┘ │
│           │                                          │
│           │ ═══ PROJECT SHOWCASE ═══                │
│           │                                          │
│           │ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐   │
│           │ │[IMG] │ │[IMG] │ │[IMG] │ │[IMG] │   │
│           │ │House │ │Senti │ │Stock │ │Face  │   │
│           │ │Price │ │ment  │ │Pred  │ │Recog │   │
│           │ │Pred  │ │Analys│ │iction│ │Model │   │
│           │ │      │ │is    │ │      │ │      │   │
│           │ │⭐125 │ │⭐98  │ │⭐156 │ │⭐203 │   │
│           │ │💬 23 │ │💬 15 │ │💬 34 │ │💬 45 │   │
│           │ └──────┘ └──────┘ └──────┘ └──────┘   │
│           │                                          │
│           │ [View All Projects →]                   │
│           │                                          │
│           │ ═══ FIND A MENTOR ═══                   │
│           │                                          │
│           │ ┌─────────────────────────────────────┐ │
│           │ │ [Avatar] Sarah Khan                 │ │
│           │ │ ────────────────                    │ │
│           │ │ Senior ML Engineer @ Google         │ │
│           │ │ Expertise: NLP, Deep Learning       │ │
│           │ │ Available: Weekends                 │ │
│           │ │                                     │ │
│           │ │ "I love helping beginners get       │ │
│           │ │ started with machine learning!"     │ │
│           │ │                                     │ │
│           │ │ [Request Mentorship →]              │ │
│           │ └─────────────────────────────────────┘ │
│           │                                          │
│           │ [3 more mentor cards]                   │
│           │                                          │
└──────────────────────────────────────────────────────┘

Features:
- Real-time leaderboard updates
- Project voting and commenting
- Mentor matching algorithm
- Activity feed
- Achievement showcase
```

---

### 11. SETTINGS PAGE (Integrated in Sidebar)

**Purpose:** User preferences, account management, theme toggle

**Layout (as dropdown in sidebar):**
```
Sidebar expanded:
┌─────────────────────────┐
│ ⚙️ Settings             │
│                         │
│ Account                 │
│ ├─ Profile              │
│ ├─ Email Preferences    │
│ ├─ Privacy              │
│ └─ Connected Apps       │
│                         │
│ Appearance              │
│ ├─ Theme [Dark ▼]       │
│ ├─ Font Size [M ▼]      │
│ └─ Animations [On]      │
│                         │
│ Notifications           │
│ ├─ Email [✓]            │
│ ├─ Push [✓]             │
│ └─ Weekly Digest [✓]    │
│                         │
│ Learning                │
│ ├─ Streak Reminders [✓] │
│ ├─ Daily Goal [30 min]  │
│ └─ Difficulty [Auto ▼]  │
│                         │
│ ─────────────────────   │
│ [Save Changes]          │
│ [Log Out]               │
└─────────────────────────┘

Alternative: Clicking Settings opens a modal with tabs
```

---

### 12. 404 ERROR PAGE (`/404`)

**Purpose:** Friendly error handling with navigation back

**Layout:**
```
┌──────────────────────────────────────────────────────┐
│                                                        │
│                  [DataNerds Logo]                     │
│                                                        │
│                       404                             │ <- Huge, animated
│                                                        │
│              Oops! Page Not Found                     │
│              ═══════════════════                      │
│                                                        │
│     This page seems to have vanished into the void... │
│     Like a poorly trained model! 🤖                   │
│                                                        │
│            [← Go Home] [View Dashboard]               │
│                                                        │
│                 ╭───────────────╮                     │
│                 │ Quick Links:   │                     │
│                 │ • Tracks       │                     │
│                 │ • Resources    │                     │
│                 │ • Jobs         │                     │
│                 │ • Community    │                     │
│                 ╰───────────────╯                     │
│                                                        │
│              [Illustration: Lost robot/data]          │
│                                                        │
└──────────────────────────────────────────────────────┘

Features:
- Humorous, on-brand message
- Clear navigation options
- Animated illustration
- Search bar to find content
- Auto-redirect suggestion
```

---

## 🎨 INTERACTIVE COMPONENT SPECIFICATIONS

### Navigation Components

**Top Navigation Bar**
```css
Height: 60px
Position: Sticky top
Background: var(--dn-bg-secondary) with blur
Backdrop-filter: blur(10px)
Border-bottom: 1px solid var(--dn-border)
Z-index: 1000

Elements:
- Logo (left): 40px height, links to dashboard if logged in, home if not
- Search bar (center): Expandable, cmd+k shortcut
- Icons (right): Notifications (badge count), user avatar (dropdown)
- "Home" link: Visible always, links to / landing page

Responsive:
- Mobile: Hamburger menu, search icon only
- Tablet: Collapsed search, visible icons
- Desktop: Full layout
```

**Collapsible Sidebar**
```css
Collapsed: 64px width
Expanded: 240px width
Transition: 250ms ease-in-out
Persist state: localStorage key 'sidebar-collapsed'

Collapsed State:
- Show only icons (24px)
- Tooltip on hover (300ms delay)
- Bottom items: settings, theme, logout

Expanded State:
- Show icons + labels
- Section headers with collapse toggle
- Active route highlight (left border accent)
- Sub-items indented 16px

Animation:
- Labels fade in/out
- Icons stay centered
- Smooth width transition
- Content area adjusts automatically

Responsive:
- Mobile (<768px): Overlay mode, slide from left
- Tablet (768-1024px): Collapsed by default
- Desktop (>1024px): Expanded by default
```

**Collapse Label Animation:**
```css
/* Smooth open/close for nested items */
.sidebar-section {
  transition: max-height 250ms ease-in-out;
  overflow: hidden;
}

.sidebar-section.open {
  max-height: 500px; /* or calculate dynamically */
}

.sidebar-section.closed {
  max-height: 0;
}

/* Icon rotation */
.collapse-icon {
  transition: transform 250ms ease-in-out;
}

.collapsed .collapse-icon {
  transform: rotate(-90deg);
}
```

### Card Components

**Standard Card**
```css
Background: var(--dn-bg-secondary)
Border: 1px solid var(--dn-border)
Border-radius: var(--radius-md)
Padding: var(--space-lg)
Box-shadow: var(--shadow-sm)

Hover:
- Transform: translateY(-4px)
- Shadow: var(--shadow-lg)
- Border-color: var(--dn-border-focus)
- Transition: 250ms ease-in-out

Active:
- Border: 2px solid var(--dn-neural-blue)
- Background: gradient overlay
```

**Glass Card (Hero sections)**
```css
Background: rgba(20, 27, 61, 0.7)
Backdrop-filter: blur(20px) saturate(180%)
Border: 1px solid rgba(255, 255, 255, 0.1)
Box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37)
```

### Button Components

**Primary Button**
```css
Background: var(--dn-gradient-hero)
Color: white
Padding: 12px 24px
Border-radius: var(--radius-sm)
Font-weight: 600
Transition: all 200ms ease-in-out

Hover:
- Transform: translateY(-2px)
- Box-shadow: var(--shadow-glow)
- Brightness: 110%

Active:
- Transform: translateY(0)
- Box-shadow: var(--shadow-md)
```

**Secondary Button**
```css
Background: transparent
Border: 2px solid var(--dn-neural-blue)
Color: var(--dn-neural-blue)

Hover:
- Background: var(--dn-neural-blue)
- Color: white
```

**Ghost Button**
```css
Background: transparent
Color: var(--dn-text-secondary)

Hover:
- Background: var(--dn-bg-tertiary)
- Color: var(--dn-text-primary)
```

### Form Components

**Input Fields**
```css
Height: 48px
Padding: 0 16px
Background: var(--dn-bg-tertiary)
Border: 2px solid var(--dn-border)
Border-radius: var(--radius-sm)
Font-size: 16px
Transition: border-color 200ms

Focus:
- Border-color: var(--dn-border-focus)
- Box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1)

Error:
- Border-color: var(--dn-code-orange)
- Shake animation

Success:
- Border-color: var(--dn-data-green)
```

**Floating Labels**
```css
/* Label starts in input, floats up on focus/fill */
.floating-label-input {
  position: relative;
}

.floating-label-input label {
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  transition: all 200ms ease;
  pointer-events: none;
  color: var(--dn-text-tertiary);
}

.floating-label-input input:focus ~ label,
.floating-label-input input:not(:placeholder-shown) ~ label {
  top: 0;
  left: 12px;
  transform: translateY(-50%) scale(0.85);
  background: var(--dn-bg-tertiary);
  padding: 0 4px;
  color: var(--dn-neural-blue);
}
```

### Loading States

**Skeleton Loader**
```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--dn-bg-tertiary) 0%,
    var(--dn-bg-secondary) 50%,
    var(--dn-bg-tertiary) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-md);
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

**Spinner**
```css
.spinner {
  border: 3px solid var(--dn-bg-tertiary);
  border-top-color: var(--dn-neural-blue);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Modal Components

**Standard Modal**
```css
Overlay:
- Background: rgba(10, 14, 39, 0.8)
- Backdrop-filter: blur(4px)
- Z-index: 9999

Modal:
- Max-width: 600px
- Background: var(--dn-bg-primary)
- Border-radius: var(--radius-lg)
- Padding: var(--space-2xl)
- Box-shadow: var(--shadow-xl)

Animation:
- Fade in overlay
- Scale up modal from 95% to 100%
- Duration: 300ms ease-out

Close:
- X button (top-right)
- Click overlay
- Escape key
```

### Toast Notifications

**Toast**
```css
Position: Fixed top-right
Width: 360px
Max-width: 90vw
Background: var(--dn-bg-secondary)
Border-left: 4px solid var(--type-color)
Border-radius: var(--radius-md)
Padding: var(--space-md)
Box-shadow: var(--shadow-lg)

Types:
- Success: green left border
- Error: orange left border
- Info: blue left border
- Warning: yellow left border

Animation:
- Slide in from right
- Auto-dismiss after 5s
- Progress bar at bottom
- Stack multiple toasts
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Mobile First Approach */
:root {
  --breakpoint-xs: 0px;      /* Mobile portrait */
  --breakpoint-sm: 640px;    /* Mobile landscape */
  --breakpoint-md: 768px;    /* Tablet */
  --breakpoint-lg: 1024px;   /* Desktop */
  --breakpoint-xl: 1280px;   /* Large desktop */
  --breakpoint-2xl: 1536px;  /* Extra large */
}

/* Responsive Grid */
.grid {
  display: grid;
  gap: var(--space-md);
}

/* Mobile: 1 column */
@media (min-width: 640px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Tablet: 2-3 columns */
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}

/* Desktop: 3-4 columns */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(4, 1fr); }
}
```

**Mobile Specific Adjustments:**
- Navigation: Hamburger menu
- Sidebar: Overlay drawer
- Cards: Full width stacking
- Typography: Smaller scale
- Spacing: Reduced padding
- Touch targets: Minimum 44px
- Horizontal scrolling for carousels
- Bottom navigation bar (optional)

---

## 🎭 ANIMATION LIBRARY

### Page Transitions
```css
/* Fade in on route change */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.page-transition {
  animation: fadeIn 300ms ease-in-out;
}

/* Slide up on scroll */
@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.reveal-on-scroll {
  animation: slideUp 500ms ease-out;
}

/* Stagger children */
.stagger-container > * {
  animation: slideUp 500ms ease-out;
  animation-fill-mode: backwards;
}

.stagger-container > *:nth-child(1) { animation-delay: 0ms; }
.stagger-container > *:nth-child(2) { animation-delay: 50ms; }
.stagger-container > *:nth-child(3) { animation-delay: 100ms; }
.stagger-container > *:nth-child(4) { animation-delay: 150ms; }
/* Continue pattern... */
```

### Micro-interactions
```css
/* Button ripple effect */
.ripple {
  position: relative;
  overflow: hidden;
}

.ripple::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.ripple:active::after {
  width: 300px;
  height: 300px;
}

/* Pulse animation for attention */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

.pulse {
  animation: pulse 2s infinite;
}

/* Shake for errors */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
}

.shake {
  animation: shake 0.5s;
}
```

### Background Animations
```css
/* Animated gradient background */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animated-gradient {
  background: linear-gradient(
    270deg,
    var(--dn-neural-blue),
    var(--dn-syntax-purple),
    var(--dn-web3-cyan)
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

/* Floating particles (data points) */
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
}

.particle {
  animation: float 3s ease-in-out infinite;
}

/* Stagger particles */
.particle:nth-child(odd) {
  animation-delay: 0.5s;
  animation-duration: 4s;
}

.particle:nth-child(even) {
  animation-delay: 1s;
  animation-duration: 3.5s;
}
```

---

## 🔧 TECHNICAL IMPLEMENTATION

### Tech Stack Requirements

**Frontend Framework:**
- Next.js 14+ (App Router)
- React 18+
- TypeScript

**Styling:**
- Tailwind CSS 3.4+
- CSS Modules for component-specific styles
- Framer Motion for complex animations

**UI Components:**
- shadcn/ui (customized with DataNerds theme)
- Radix UI primitives
- Custom components for unique needs

**State Management:**
- React Context for global state
- Zustand for complex state (optional)
- React Query for server state

**Code Editor:**
- Monaco Editor (VS Code engine)
- OR CodeMirror 6 (lighter weight)

**Forms:**
- React Hook Form
- Zod validation

**Routing:**
- Next.js file-based routing
- Middleware for auth protection

### Performance Targets

**Core Web Vitals:**
- LCP: < 1.5s (First Contentful Paint)
- FID: < 100ms (First Input Delay)
- CLS: < 0.1 (Cumulative Layout Shift)
- TTI: < 3s (Time to Interactive)

**Optimization Strategies:**
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Server-side rendering for landing page
- Incremental Static Regeneration for job listings
- CDN for static assets (Cloudinary)
- Compression (Brotli/Gzip)
- Critical CSS inlining
- Preload key resources
- Service Worker for offline support (PWA)

### Accessibility (WCAG 2.1 AA)

**Requirements:**
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation (tab order)
- Focus indicators
- Color contrast ratios >= 4.5:1
- Text resizing support
- Screen reader compatibility
- Alt text for images
- Captions for videos
- Skip navigation links
- Error identification
- Form labels

**Keyboard Shortcuts:**
- `/` - Focus search
- `Cmd/Ctrl + K` - Quick command palette
- `Esc` - Close modals
- `Tab` - Navigate
- `Enter` - Select/Submit
- `Arrow keys` - Navigate lists

---

## 📂 FILE STRUCTURE

```
datanerds/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── signup/
│   │       └── page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx (includes sidebar)
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── tracks/
│   │   │   ├── page.tsx
│   │   │   └── [trackId]/
│   │   │       └── page.tsx
│   │   ├── resources/
│   │   │   ├── page.tsx
│   │   │   └── [resourceId]/
│   │   │       └── page.tsx
│   │   ├── playground/
│   │   │   └── page.tsx
│   │   ├── jobs/
│   │   │   ├── page.tsx
│   │   │   └── [jobId]/
│   │   │       └── page.tsx
│   │   ├── ai-assistant/
│   │   │   └── page.tsx
│   │   ├── community/
│   │   │   └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   ├── api/
│   │   ├── jobs/
│   │   ├── ai-tutor/
│   │   ├── crypto/
│   │   ├── execute-code/
│   │   └── resources/
│   ├── layout.tsx (root layout)
│   ├── page.tsx (landing page)
│   ├── not-found.tsx (404 page)
│   └── globals.css
├── components/
│   ├── ui/ (shadcn components)
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Footer.tsx
│   │   └── DashboardLayout.tsx
│   ├── landing/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── TracksPreview.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTASection.tsx
│   ├── dashboard/
│   │   ├── StatsCard.tsx
│   │   ├── ProgressCard.tsx
│   │   └── GreetingBanner.tsx
│   ├── jobs/
│   │   ├── JobCard.tsx
│   │   ├── JobFilters.tsx
│   │   └── JobDetail.tsx
│   ├── tracks/
│   │   ├── TrackCard.tsx
│   │   └── TrackCurriculum.tsx
│   ├── ai/
│   │   ├── ChatInterface.tsx
│   │   └── ChatMessage.tsx
│   └── common/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Card.tsx
│       ├── Modal.tsx
│       ├── Toast.tsx
│       └── Loader.tsx
├── lib/
│   ├── api/
│   │   ├── jobs.ts
│   │   ├── ai.ts
│   │   ├── crypto.ts
│   │   └── resources.ts
│   ├── utils/
│   │   ├── cn.ts (classnames utility)
│   │   ├── date.ts
│   │   └── format.ts
│   └── hooks/
│       ├── useAuth.ts
│       ├── useLocalStorage.ts
│       └── useSidebar.ts
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── styles/
│   └── animations.css
├── types/
│   └── index.ts
└── config/
    ├── site.ts
    └── theme.ts
```

---

## 🎯 IMPLEMENTATION PRIORITIES

### Phase 1: Foundation (Week 1-2)
1. ✅ Set up Next.js project with TypeScript
2. ✅ Implement design system (colors, typography, spacing)
3. ✅ Create base layout components (Navbar, Sidebar, Footer)
4. ✅ Build landing page with all sections
5. ✅ Implement authentication pages
6. ✅ Set up routing structure

### Phase 2: Core Features (Week 3-4)
7. ✅ Build dashboard page with widgets
8. ✅ Create tracks browsing and detail pages
9. ✅ Implement resources library
10. ✅ Build job board with filters
11. ✅ Integrate Supabase for data
12. ✅ Add authentication (Clerk)

### Phase 3: Advanced Features (Week 5-6)
13. ✅ Code playground with Monaco Editor
14. ✅ AI assistant chat interface
15. ✅ Web3 track with live data
16. ✅ Community features (leaderboard, projects)
17. ✅ Settings page
18. ✅ 404 page

### Phase 4: Polish (Week 7-8)
19. ✅ Responsive design for all pages
20. ✅ Animation implementation
21. ✅ Accessibility audit and fixes
22. ✅ Performance optimization
23. ✅ SEO optimization
24. ✅ Testing (unit, integration, e2e)
25. ✅ Documentation
26. ✅ Deployment to Vercel

---

## 🖼️ WIREFRAME ASSETS

### Color Swatches
```
Primary Palette:
■ #3B82F6 (Neural Blue)
■ #10B981 (Data Green)
■ #F59E0B (Code Orange)
■ #8B5CF6 (Syntax Purple)
■ #EC4899 (AI Pink)
■ #06B6D4 (Web3 Cyan)
■ #EAB308 (Job Yellow)

Dark Theme:
■ #0A0E27 (BG Primary)
■ #141B3D (BG Secondary)
■ #1E293B (BG Tertiary)
■ #F1F5F9 (Text Primary)
■ #94A3B8 (Text Secondary)

Light Theme:
■ #FFFFFF (BG Primary)
■ #F8FAFC (BG Secondary)
■ #0F172A (Text Primary)
```

### Icon Set Requirements
- Material Design Icons or Lucide React
- Custom SVG icons for unique features
- Consistent 24px size
- Stroke width: 2px
- Round line caps

### Illustration Style
- Modern, minimal line art
- Data/tech themed
- Subtle gradients
- Animated elements (Lottie files)
- Brand colors

---

## ✅ DESIGN CHECKLIST

**Before Implementation:**
- [ ] Review and approve color palette
- [ ] Select and license fonts
- [ ] Create component library in Figma (optional)
- [ ] Set up design tokens
- [ ] Get user-provided background image

**During Development:**
- [ ] Implement design system first
- [ ] Build in mobile-first approach
- [ ] Test each component in isolation
- [ ] Validate accessibility
- [ ] Cross-browser testing

**Before Launch:**
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility audit (aXe, WAVE)
- [ ] Mobile device testing
- [ ] User testing with 5-10 people
- [ ] Copy and content review
- [ ] Legal pages (Privacy, Terms)
- [ ] Analytics setup
- [ ] Error monitoring (Sentry)

---

## 🚀 LAUNCH STRATEGY

### Pre-Launch
1. Beta test with 50 community members
2. Collect feedback and iterate
3. Create launch announcement
4. Prepare social media content
5. Set up monitoring and analytics

### Launch Day
1. Deploy to production
2. Announce to WhatsApp community
3. Post on social media
4. Monitor errors and performance
5. Respond to early feedback

### Post-Launch (Week 1)
1. Daily monitoring and bug fixes
2. User feedback collection
3. Performance optimization
4. Content updates
5. Community engagement

---

## 📞 SUPPORT & RESOURCES

### Developer Resources
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com
- Framer Motion: https://www.framer.com/motion
- React Hook Form: https://react-hook-form.com

### Design Resources
- Figma: For design mockups
- Coolors: For color palette
- Font Squirrel: For fonts
- unDraw: For illustrations
- Hero Icons: For icons

### Testing Tools
- Lighthouse: Performance
- aXe DevTools: Accessibility
- BrowserStack: Cross-browser
- React Testing Library: Unit tests
- Playwright: E2E tests

---

**This comprehensive Frontend PRD provides everything needed to build a production-ready, accessible, and performant DataNerds platform. The design system is intentionally unique, avoiding generic AI aesthetics while maintaining professional quality and usability.**

**Key Differentiators:**
- ✨ Custom "Academic Futurism" aesthetic
- ✨ Data-inspired visual language
- ✨ Terminal/code influences
- ✨ Professional yet approachable
- ✨ Fully accessible and responsive
- ✨ Optimized for performance
- ✨ Community-first design

**Ready to build! 🚀**
