# Halim Portfolio (Next.js 14 + Tailwind)

A modern portfolio pulling projects directly from GitHub and showcasing resume details.

## ✨ Features
- Next.js 14 (app directory) + TailwindCSS
- Framer Motion for subtle animations
- API route proxy to GitHub: `/api/github?username=HalimMahmoud`
- Highlighted projects list (match by repo names)
- Fully editable sections: Experience, Skills, Education, Contact
- Resume download in `/public/Halim-Resume.pdf` (replace with your real PDF)

## 🚀 Getting Started
```bash
pnpm i # or npm i or yarn
pnpm dev # http://localhost:3000
```

> If you deploy to Vercel, set `NEXT_PUBLIC_BASE_URL` to the site URL to ensure server-side fetch uses the absolute URL.

## 🧠 Customize
- Edit **app/page.tsx** to tweak sections and the `pinnedNames` set.
- Replace **public/Halim-Resume.pdf** with your actual resume PDF.
- Update links in **components/Hero.tsx** and **Contact** section.

## 📌 Notes
- The GitHub API is unauthenticated by default (sufficient for public repos). If you hit rate limits, add a server-side PAT.
- If some highlighted repos don’t show up, make sure your GitHub repo names match the `pinnedNames` list (case-insensitive).
