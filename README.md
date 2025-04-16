# 🚀 www.kevincole.dev

## 🎨 Tech Stack

- [**Astro**](https://astro.build/) - Static Site Generator
- [**React**](https://reactjs.org/) - Component-Based UI
- [**Tailwind CSS**](https://tailwindcss.com/) - Utility-First Styling
- [**Shadcn react components**](https://ui.shadcn.com/docs/) - React components
- [**Lucide React**](https://lucide.dev/) - SVG Icons
- [**TypeScript**](https://www.typescriptlang.org/) - Type Safety & Enhanced DX

## 🗂️ Project Structure

```
├── src/
│   ├── layouts/           # Base layouts such as the **MainLayout** and **SEO meta configurations**.
│   ├── content/           # All content-y things
│   │── hooks              # Any hooks needed
│   ├── libs/
│   ├── pages/             # Astro pages (each file maps to a route)
│   │── ui/                # UI things
│   │   ├── blocks/
│   │   ├── components/
│   │   ├── layouts/
│   ├── static/            # All static assets - images, icons, fonts, etc.
├── public/                # Public assets (served as-is)
├── astro.config.mjs       # Astro configuration
├── components.json
├── postcss.config.js
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
```

## 🧞 Commands

#### All commands are run from the root of the project, from a terminal:

| Command                   | npm Command               | yarn Command           | Action                                           |
| :------------------------ | :------------------------ | :--------------------- | :----------------------------------------------- |
| `npm install`             | `npm install`             | `yarn install`         | Installs dependencies                            |
| `npm run dev`             | `npm run dev`             | `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | `npm run build`           | `yarn build`           | Build your production site to `./dist/`          |
| `npm run preview`         | `npm run preview`         | `yarn preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | `npm run astro ...`       | `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | `npm run astro -- --help` | `yarn astro -- --help` | Get help using the Astro CLI                     |
