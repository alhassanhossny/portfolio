# Alhassan Hossny — Portfolio

A modern, professional portfolio website built with vanilla HTML, CSS, and JavaScript. Fully compatible with GitHub Pages.

## ✨ Features

- **🌍 Multilingual** — English (LTR) & Arabic (RTL) with dynamic switching
- **🌙 Dark/Light Theme** — Persisted via localStorage
- **📱 Responsive** — Mobile-first design with hamburger menu
- **⚡ Fast** — No frameworks, zero dependencies, instant load
- **🎨 Premium Design** — Glassmorphism navbar, gradient accents, smooth animations
- **♿ Accessible** — Semantic HTML, ARIA labels, keyboard navigable

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── alhassanhossny.pdf       # CV for download
├── assets/
│   ├── css/
│   │   └── style.css        # Design system & all styles
│   ├── js/
│   │   ├── i18n.js          # Translations (EN/AR)
│   │   └── app.js           # Rendering, theme, nav, animations
│   └── img/                 # Images and logos
└── README.md
```

## 🚀 GitHub Pages Deployment

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select `main` branch and `/ (root)`
4. Click **Save**
5. Your site will be live at `https://<username>.github.io/portfolio/`

## 🛠️ Local Development

```bash
# Simply open index.html in a browser, or use a local server:
npx serve .
# or
python3 -m http.server 8000
```

## 🎨 Customization

- **Content**: Edit `assets/js/i18n.js` — all text content is centralized there
- **Colors**: Edit CSS variables in `assets/css/style.css` under `:root`
- **Theme**: Dark theme variables under `[data-theme="dark"]`

## 📄 License

© 2025 Alhassan Hossny. All rights reserved.
