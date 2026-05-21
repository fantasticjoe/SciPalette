# SciPalette

> A curated, publication-ready color palette library for researchers.

English | [简体中文](./README.md)

[![CI](https://github.com/fantasticjoe/scipalette/actions/workflows/ci.yml/badge.svg)](https://github.com/fantasticjoe/scipalette/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Deploy](https://img.shields.io/badge/deploy-GitHub%20Pages-222.svg)](https://pages.github.com/)

## Overview

SciPalette is a static palette library built for scientific visualization. It focuses on research papers, single-cell atlases, medical statistics, bioinformatics figures, and other publication figures where color needs to be readable, accessible, and easy to reuse.

Primary users include researchers, bioinformaticians, data scientists, and medical statisticians.

## Features

- **20+ curated palettes** across categorical, sequential, diverging, and heatmap families.
- **Multi-dimensional filtering** by search query, category, plot type, color count, and colorblind-safe status.
- **Scientific plot previews** for recommended use cases such as bar, line, scatter, UMAP, heatmap, and volcano plots.
- **One-click copying** for HEX values, plus quick Python and R copy actions on palette cards.
- **Code export** for HEX, Python/matplotlib, R/ggplot2, Scanpy, Seurat, and GraphPad Prism.
- **Accessibility labeling** for colorblind-safe palettes.
- **Static deployment** through Astro, suitable for GitHub Pages and other static hosts.
- **Responsive UI** for desktop, tablet, and mobile browsing.

## Tech Stack

| Technology | Version | Purpose |
| --- | --- | --- |
| Astro | 5 | Static site framework |
| React | 19 | Interactive components |
| TypeScript | 5 | Types and type checking |
| Tailwind CSS | 4 | Styling |
| Lucide React | 1 | Icons |

## Getting Started

### Requirements

- Node.js >= 22.0.0
- npm

### Local Development

```bash
git clone https://github.com/fantasticjoe/scipalette.git
cd scipalette
npm install
npm run dev
```

Astro prints the development URL in the terminal, usually http://localhost:4321/SciPalette/.

### Build and Preview

```bash
npm run typecheck
npm run build
npm run preview
```

`npm run build` writes the static site to `dist/`. The project uses `base: "/SciPalette"` in `astro.config.ts` so generated links work under the GitHub Pages repository path.

## Project Structure

```text
scipalette/
├── src/
│   ├── pages/
│   │   ├── index.astro              # Home page and browser entry
│   │   └── palettes/[id].astro      # Static palette detail pages
│   ├── layouts/
│   │   └── BaseLayout.astro         # HTML shell and SEO meta
│   ├── components/
│   │   ├── SiteHeader.astro         # Global navigation
│   │   ├── PaletteBrowser.tsx       # Home-page state composition
│   │   ├── HomeHero.tsx             # Home hero
│   │   ├── PaletteLibrarySection.tsx # Filterable palette library section
│   │   ├── FeaturedPaletteSections.tsx # Featured home sections
│   │   ├── PaletteFilters.tsx       # Search and filter controls
│   │   ├── PaletteDetailHeader.astro # Detail title and metadata
│   │   ├── PaletteColorSection.astro # Detail color section
│   │   ├── PalettePreviewSection.astro # Detail plot preview section
│   │   ├── PaletteExportSection.astro # Detail export section
│   │   ├── SimilarPalettesSection.astro # Similar palette section
│   │   ├── PaletteGrid.tsx          # Palette card grid
│   │   ├── PaletteCard.tsx          # Palette card
│   │   ├── ColorSwatch.tsx          # Color swatch display and copy
│   │   ├── PlotPreview.tsx          # Scientific plot previews
│   │   ├── CodeExport.tsx           # Multi-format code export
│   │   ├── CopyButton.tsx           # Copy button
│   │   └── BadgeList.tsx            # Badge list
│   ├── lib/
│   │   ├── site.ts                  # Site constants and navigation links
│   │   ├── homepage.ts              # Home-page derived data and grouping logic
│   │   ├── filter-options.ts        # Filter option configuration
│   │   ├── palettes.ts              # Palette data source
│   │   ├── palette-utils.ts         # Filtering, export, and similarity helpers
│   │   ├── types.ts                 # TypeScript types
│   │   └── utils.ts                 # Shared utilities
│   └── styles/
│       └── global.css               # Tailwind and global design variables
├── public/                          # Static assets
├── .github/workflows/               # CI, deploy, and release workflows
├── docs/ARCHITECTURE.md             # Architecture and contribution boundaries
├── astro.config.ts                  # Astro config
├── package.json
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

For contribution boundaries and architecture notes, see [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md).

## Adding a Palette

Edit `src/lib/palettes.ts` and append an entry to the `palettes` array:

```ts
{
  id: "your-palette-id",
  name: "Your Palette Name",
  description: "Describe where this palette works best.",
  category: "categorical",
  colors: ["#4E79A7", "#F28E2B", "#E15759"],
  recommendedFor: ["bar", "scatter"],
  tags: ["publication", "multi-group"],
  colorblindSafe: true,
  background: "white",
  source: "Optional source note"
}
```

Relevant types:

```ts
type PaletteCategory = "categorical" | "sequential" | "diverging" | "heatmap";

type PlotType =
  | "bar"
  | "line"
  | "scatter"
  | "umap"
  | "heatmap"
  | "volcano"
  | "boxplot";

type Palette = {
  id: string;
  name: string;
  description: string;
  category: PaletteCategory;
  colors: string[];
  recommendedFor: PlotType[];
  tags: string[];
  colorblindSafe: boolean;
  background: "white" | "light" | "dark";
  source?: string;
};
```

After adding a palette, run:

```bash
npm run typecheck
npm run build
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the contribution workflow.

## Roadmap

- [ ] Extract palettes from uploaded images
- [ ] Color vision deficiency simulation
- [ ] Grayscale contrast checks
- [ ] Adobe ASE export
- [ ] CSS variable export
- [ ] User-submitted palettes
- [ ] GitHub-based contribution workflow
- [ ] DOI / paper figure inspiration collection
- [ ] AI-assisted palette recommendations
- [ ] Palette comparison view

## Contributing

Contributions of new palettes, bug fixes, and documentation improvements are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## License

MIT, see [LICENSE](./LICENSE).
