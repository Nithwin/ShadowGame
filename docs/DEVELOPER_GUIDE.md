# Developer Documentation | ShadowGame Systems

## 🏗️ Architecture Overview

ShadowGame is a high-performance, gamified learning platform built on the modern React ecosystem. 

### ⚡ Tech Stack
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: 
  - `framer-motion` (UI transitions)
  - `gsap` (Complex sequences)
- **3D Graphics**: `react-three-fiber` / `drei` (Hero elements, if applicable)
- **Editor**: `@monaco-editor/react` (In-browser IDE)
- **State Management**: `zustand`

---

## 📂 Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout (Theme provider, Font injection)
│   ├── page.tsx          # Landing page
│   └── globals.css       # Global styles & Theme variables
├── components/           # React Components
│   ├── landing/          # specific landing page sections (Hero, FAQ, etc.)
│   └── ui/               # Reusable UI atoms (Buttons, Inputs)
├── public/               # Static assets
└── docs/                 # Documentation
```

---

## 🎨 Theme System

We use a dual-theme system managed by `next-themes` and CSS variables in `app/globals.css`.

### 1. Dark Theme (default)
- **Concept**: "Deep Space Cyber-Luxe"
- **Primary**: Electric Purple / Neon Cyan
- **Background**: Deep Void Black (`#020005`)

### 2. Light Theme
- **Concept**: "Clean Tech / Corporate"
- **Primary**: Deep Violet / Sky Blue
- **Background**: Cool Gray (`#F5F7FA`)

**Rule**: All components MUST start with `bg-background text-foreground` (or semantic equivalents) to support both modes automatically. Avoid hardcoding colors like `bg-black`.

---

## 🚀 Getting Started

1. **Clone & Install**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Copy `.env.example` to `.env`.
   ```bash
   DATABASE_URL="postgresql://..."
   NEXTAUTH_SECRET="secret..."
   ```

3. **Run Dev Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

---

## 🧩 Key Components

### `TextReveal`
Used for headlines. Supports "mask-up" animation.
```tsx
<TextReveal text="Hello World" />
```

### `ScrollAnimation`
Wrapper for section entrances.
```tsx
<ScrollAnimation preset="rotate-up">
  <YourComponent />
</ScrollAnimation>
```

### `MagneticButton`
Framer motion wrapper that attracts the cursor.

---

## 🔒 Security & Deployment
This project is configured for Vercel. 
**Note**: Deployment rights are reserved. Do not deploy public mirrors of this repository.
