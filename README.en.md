# SciPalette

> A curated, publication-ready color palette library for researchers.

English | [简体中文](./README.md)

[![CI](https://github.com/fantasticjoe/SciPalette/actions/workflows/ci.yml/badge.svg)](https://github.com/fantasticjoe/SciPalette/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Deploy](https://github.com/fantasticjoe/SciPalette/actions/workflows/deploy.yml/badge.svg)](https://github.com/fantasticjoe/SciPalette/actions/workflows/deploy.yml)

## Overview

SciPalette is a static palette library built for scientific visualization. It focuses on research papers, single-cell atlases, medical statistics, bioinformatics figures, and other publication figures where color needs to be readable, accessible, and easy to reuse.

Primary users include researchers, bioinformaticians, data scientists, and medical statisticians.

## Features

- **20+ curated palettes** across categorical, sequential, diverging, and heatmap families.
- **Multi-dimensional filtering** by search query, category, plot type, color count, and colorblind-safe status.
- **Scientific plot previews** for recommended use cases such as bar, line, scatter, UMAP, heatmap, and volcano plots.
- **Color vision simulation** on palette detail pages with Original, Protanopia, Deuteranopia, and Tritanopia previews.
- **Grayscale contrast checks** on palette detail pages to estimate whether colors remain separable in print or low-saturation viewing conditions.
- **Art2Pal Palette** extracts color style from PNG, JPEG, or WebP images locally in the browser and rebuilds it into categorical, sequential, diverging, and neutral scientific palettes.
- **About and design philosophy** explaining SciPalette's color principles, Art2Pal's design philosophy, the site palette inspired by *Wheat Field with Cypresses*, and the Logo system shared by the browser tab, navigation, About page, and footer.
- **One-click copying** for HEX values, plus quick Python and R copy actions on palette cards.
- **Code and file export** for HEX, Python/matplotlib, R/ggplot2, Scanpy, Seurat, GraphPad Prism, and downloadable Adobe ASE files.
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
git clone https://github.com/fantasticjoe/SciPalette.git
cd SciPalette
npm install
npm run dev
```

Astro prints the development URL in the terminal, usually http://localhost:4321/.

### Build and Preview

```bash
npm run test
npm run typecheck
npm run build
npm run preview
```

`npm run build` writes the static site to `dist/`. The live site is served from the custom-domain root, so asset and page links use root-relative paths.

## Project Structure

```text
scipalette/
├── src/
│   ├── pages/
│   │   ├── index.astro              # Home page and browser entry
│   │   ├── about.astro              # About page, design philosophy, site palette, and Logo system
│   │   ├── art2pal/index.astro      # Art2Pal Palette local image-to-palette tool
│   │   ├── palettes/index.astro     # Full palette browser page
│   │   └── palettes/[id].astro      # Static palette detail pages
│   ├── layouts/
│   │   └── BaseLayout.astro         # HTML shell and SEO meta
│   ├── components/
│   │   ├── SiteHeader.astro         # Global navigation
│   │   ├── SiteFooter.astro         # Shared site footer
│   │   ├── SiteMark.astro           # Shared site logo sourced from favicon.svg
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
│   │   ├── ColorVisionPreview.tsx   # Color vision deficiency simulation preview
│   │   ├── GrayscaleContrastPanel.tsx # Grayscale contrast check panel
│   │   ├── CodeExport.tsx           # Multi-format code export
│   │   ├── CopyButton.tsx           # Copy button
│   │   └── BadgeList.tsx            # Badge list
│   ├── lib/
│   │   ├── site.ts                  # Site constants and navigation links
│   │   ├── homepage.ts              # Home-page derived data and grouping logic
│   │   ├── filter-options.ts        # Filter option configuration
│   │   ├── palettes/                # Individual palette files and aggregate entry
│   │   ├── art2pal/                 # Art2Pal color-space, clustering, generation, and export logic
│   │   ├── palette-utils.ts         # Filtering, export, and similarity helpers
│   │   ├── color-vision.ts          # Color vision simulation matrices and palette conversion
│   │   ├── grayscale-contrast.ts    # Grayscale luminance and contrast checks
│   │   ├── adobe-ase.ts             # Adobe ASE binary export
│   │   ├── types.ts                 # TypeScript types
│   │   └── utils.ts                 # Shared utilities
│   └── styles/
│       └── global.css               # Tailwind and global design variables
├── public/
│   └── images/                      # Static image assets, including the Wheat Field WebP
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

Curated palettes are split one file per palette so the library can scale to hundreds or thousands of palettes without one oversized data file.

To add or update a palette, edit `src/lib/palettes/<palette-name>.ts` and register the import in `src/lib/palettes/index.ts`. Do not hand-write an `id` in the source file; detail-page routes use short stable IDs derived from the registration key in `src/lib/palettes/index.ts`, so routine name, description, or color edits are not exposed directly in the URL:

```ts
{
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

type PaletteSource = {
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
npm run test
npm run typecheck
npm run build
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the contribution workflow.

## Roadmap

- [x] Extract palettes from uploaded images
- [x] Color vision deficiency simulation
- [x] Grayscale contrast checks
- [x] Adobe ASE export
- [x] CSS variable export
- [ ] User-submitted palettes
- [ ] DOI / paper figure inspiration collection
- [ ] AI-assisted palette recommendations
- [ ] Palette comparison view

## Contributing

Contributions of new palettes, bug fixes, and documentation improvements are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## License

MIT, see [LICENSE](./LICENSE).
