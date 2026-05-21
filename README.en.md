# SciPalette

> A curated, publication-ready color palette library for researchers.

English | [简体中文](./README.md)

[![CI](https://github.com/zhouyuezhu/scipalette/actions/workflows/ci.yml/badge.svg)](https://github.com/zhouyuezhu/scipalette/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

SciPalette collects carefully curated color palettes ready for academic publication. It covers the three main types — **sequential**, **diverging**, and **qualitative** — and flags colorblind-safe palettes, helping researchers make figure colors that are both beautiful and rigorous.

## Features

- Browse a curated set of scientific color palettes
- One-click copy of color values (HEX)
- Colorblind-safe palettes clearly labeled
- Organized by purpose: sequential / diverging / qualitative

## Getting Started

Requirements: **Node.js >= 20.9**.

```bash
npm install
npm run dev        # starts at http://localhost:3000
npm run build      # production build
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Run the built production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## Project Structure

```
app/                Next.js App Router pages
components/         Reusable React components
lib/                Palette data source
```

## Adding a Palette

All palettes live in `lib/palettes.ts`. Append an entry to the `palettes` array:

```ts
{
  id: "my-palette",
  name: "我的配色",
  nameEn: "My Palette",
  category: "sequential",    // sequential | diverging | qualitative
  colorblindSafe: true,
  colors: ["#08306B", "#2171B5", "#6BAED6"],
  description: "One-line description of its use.",
}
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## Tech Stack

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Contributing

Contributions of new palettes, bug fixes, and documentation improvements are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## License

MIT — see [LICENSE](./LICENSE).
