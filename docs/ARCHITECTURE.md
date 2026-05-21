# Architecture Notes

SciPalette is an Astro static site with React islands for interactive browsing, filtering, copying, and plot previews. Keep pull requests small by changing the layer that owns the behavior you need.

## Runtime Shape

- `src/pages/` owns routes and static generation.
- `src/layouts/BaseLayout.astro` owns the document shell, SEO defaults, and shared page chrome.
- `src/components/SiteHeader.astro` owns the global navigation.
- `src/components/PaletteBrowser.tsx` owns home-page state and composes the home sections.
- `src/components/HomeHero.tsx` owns the home hero and random palette copy action surface.
- `src/components/PaletteLibrarySection.tsx` owns the filterable palette library section.
- `src/components/FeaturedPaletteSections.tsx` owns the curated home-page recommendation sections.
- `src/components/PaletteDetailHeader.astro` owns palette metadata, tags, and accessibility labeling on detail pages.
- `src/components/PaletteColorSection.astro` owns the detail-page color swatch grid.
- `src/components/PalettePreviewSection.astro` owns detail-page scientific plot preview panels.
- `src/components/PaletteExportSection.astro` owns the detail-page export panel shell.
- `src/components/SimilarPalettesSection.astro` owns detail-page similar palette recommendations.
- `src/components/*.tsx` owns interactive UI rendered by Astro client directives.
- `src/lib/palettes.ts` is the palette data source.
- `src/lib/homepage.ts` owns home-page grouping helpers and derived counts.
- `src/lib/palette-utils.ts` owns filtering, export snippets, and similarity logic.
- `src/lib/types.ts` owns shared TypeScript contracts.
- `src/lib/site.ts` owns site-wide constants such as the GitHub Pages base path and navigation links.
- `src/styles/global.css` owns global tokens, fonts, and base styles.

## Contribution Boundaries

Use these boundaries when preparing a PR:

- **New or updated palette:** edit `src/lib/palettes.ts`; only touch UI if the data model must change.
- **New palette field:** update `src/lib/types.ts`, `src/lib/palettes.ts`, affected components, and README examples together.
- **Filtering or export behavior:** edit `src/lib/palette-utils.ts` first; keep component changes limited to wiring or labels.
- **Home-page hero or featured sections:** edit the matching home component first; edit `src/components/PaletteBrowser.tsx` only when state wiring changes.
- **Home-page grouping rules:** edit `src/lib/homepage.ts`; keep rendering components focused on presentation.
- **Palette detail page presentation:** edit the matching `PaletteDetail*` or `SimilarPalettesSection` component first; edit `src/pages/palettes/[id].astro` only when route data or section ordering changes.
- **Global navigation or repository links:** edit `src/lib/site.ts` and, if needed, `src/components/SiteHeader.astro`.
- **Shared page chrome:** edit `src/layouts/BaseLayout.astro`; avoid adding page-specific content there.
- **Visual polish:** prefer the smallest component that owns the surface. Keep repeated visual rules in `src/styles/global.css` only when they are true site-wide tokens.
- **Docs-only changes:** update both `README.md` and `README.en.md` when user-facing behavior or commands change.

## Design Principles

- Favor clear scanning over decorative density.
- Keep navigation plain: text links, one border, no pill-heavy treatment.
- Use rounded panels sparingly. Do not add nested cards.
- Preserve the warm paper background, restrained green accents, serif display type, and sans UI type.
- Keep controls stable across desktop and mobile; hide secondary navigation text before it crowds the brand.

## Verification

Before opening a PR, run:

```bash
npm run typecheck
npm run build
```

For UI changes, also preview the site locally and check:

- Home page at `/SciPalette/`
- A palette detail page under `/SciPalette/palettes/<id>/`
- A narrow mobile viewport around 390 px wide
- Anchor links for `#palettes` and `#accessible`
