# Faruk Laçin — Portfolio

Personal portfolio website built with Vite + React. Deployed on GitHub Pages.

## Stack

- **Vite** — build tool
- **React 18** — UI framework  
- **CSS Modules** — component-scoped styles (no dependencies, no Tailwind)
- **Google Fonts** — Syne (display) + DM Mono + DM Sans
- **GitHub Actions** — CI/CD to GitHub Pages

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── hooks/
│   │   └── useInView.js
│   ├── styles/
│   │   └── global.css
│   ├── data.js          ← all resume content lives here
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow at `.github/workflows/deploy.yml` handles the rest

> **Note:** If your repo is not at the root (e.g. `username.github.io/portfolio`), update `base` in `vite.config.js`:
> ```js
> base: '/portfolio/'
> ```

## Customization

All content (jobs, projects, skills, contact links) is in **`src/data.js`**. Edit that file — no other changes needed.

To add your real resume PDF: place `resume.pdf` in the `public/` folder. The "Resume ↓" navbar button will link to it automatically.
