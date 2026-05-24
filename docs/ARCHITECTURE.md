# Architecture Notes

SciPalette is an Astro static site with React islands for interactive browsing, filtering, copying, and plot previews. Keep pull requests small by changing the layer that owns the behavior you need.

## Runtime Shape

- `src/pages/` owns routes and static generation.
- `src/layouts/BaseLayout.astro` owns the document shell, SEO defaults, and shared page chrome.
- `src/components/SiteHeader.astro` owns the global navigation.
- `src/components/SiteFooter.astro` owns the shared closing band and footer navigation.
- `src/components/SiteMark.astro` owns the shared SVG logo mark used by the favicon, navigation, About page, and footer.
- `src/components/PaletteContributionPanel.astro` owns the user-submitted palette entry point rendered from the contribution route. It links to the GitHub issue template and documents the SciPalette contribution JSON shape without adding backend storage.
- `src/components/PaperInspirationPanel.astro` owns the DOI and paper figure inspiration entry point rendered from the contribution route. It links to a GitHub issue template for references, citation notes, and rights boundaries without storing paper figures.
- `src/pages/about.astro` owns the About narrative, design philosophy, site-palette presentation, and large Logo system explanation.
- `src/pages/art2pal/index.astro` owns the Art2Pal Palette route and hydrates the browser-only React tool.
- `src/pages/palettes/index.astro` owns the searchable full palette browser route and hydrates `PaletteBrowser`; keep recommendation, comparison, and contribution workflows out of this route.
- `src/pages/recommend/index.astro` owns the local palette recommendation assistant route and hydrates `PaletteRecommendationPanel`.
- `src/pages/compare/index.astro` owns the palette comparison route and hydrates `PaletteComparisonPanel`.
- `src/pages/contribute/index.astro` owns the contribution route and renders `PaletteContributionPanel` plus `PaperInspirationPanel`.
- `src/components/PaletteShowcase.tsx` owns the home-page showcase composition.
- `src/components/PaletteBrowser.tsx` owns full-library filter state and copy actions.
- `src/components/PaletteRecommendationPanel.tsx` owns the browser-local recommendation controls and explanation UI.
- `src/components/PaletteComparisonPanel.tsx` owns the browser-local palette comparison controls and summary UI.
- `src/components/HomeHero.tsx` owns the home hero.
- `src/components/PaletteLibrarySection.tsx` owns the filterable full palette library section.
- `src/components/FeaturedPaletteSections.tsx` owns the curated home-page recommendation sections.
- `src/components/PaletteDetailHeader.astro` owns palette metadata, tags, and accessibility labeling on detail pages.
- `src/components/PaletteColorSection.astro` owns the detail-page color swatch grid.
- `src/components/PalettePreviewSection.astro` owns detail-page scientific plot preview panels.
- `src/components/ColorVisionPreview.tsx` owns detail-page color vision deficiency simulation controls, simulated swatches, and simulated scientific plot previews.
- `src/components/GrayscaleContrastPanel.tsx` owns detail-page grayscale luminance strips, minimum ratio summaries, and close-pair warnings.
- `src/components/PaletteExportSection.astro` owns the detail-page export panel shell.
- `src/components/SimilarPalettesSection.astro` owns detail-page similar palette recommendations.
- `src/components/*.tsx` owns interactive UI rendered by Astro client directives.
- `src/lib/palettes/` is the palette data source. Each file owns one id-free `PaletteSource`, and `src/lib/palettes/index.ts` owns stable route-key registration, short id generation, automatic colorblind accessibility score derivation, aggregated exports, and lookup helpers.
- `src/pages/palettes/catalog.json.ts` owns the lightweight palette catalog for external tools and Codex skills. It must expose only the fields needed for recommendation and plotting, and it must be generated from the registered palettes without filesystem scanning or cloning assumptions.
- `src/lib/art2pal/` owns browser-local image processing, color-space conversion, OKLab K-means clustering, scientific palette generation, mock preview data, and export formatting for the Art2Pal Palette tool.
- `src/lib/homepage.ts` owns home-page grouping helpers and derived counts.
- `src/lib/filter-options.ts` owns filter dropdown labels and values.
- `src/lib/palette-recommendations.ts` owns local recommendation scoring, intent presets, and explanation reasons. It must stay browser-local unless a backend is explicitly introduced later.
- `src/lib/palette-comparison.ts` owns pairwise palette comparison metrics, shared use cases, color uniqueness, and grayscale comparison summaries.
- `src/lib/palette-utils.ts` owns filtering, export snippets, and similarity logic.
- `src/lib/color-vision.ts` owns color vision deficiency simulation modes, transformation matrices, HEX palette conversion, and the automatic colorblind accessibility score/classification heuristic used to derive `colorblindSafe`.
- `src/lib/grayscale-contrast.ts` owns grayscale luminance conversion, pairwise grayscale contrast ratios, and report construction.
- `src/lib/adobe-ase.ts` owns Adobe ASE binary construction and palette filename generation.
- `src/lib/types.ts` owns shared TypeScript contracts.
- `src/lib/site.ts` owns site-wide constants such as the deployment root path and navigation links.
- `src/styles/global.css` owns global tokens, fonts, and base styles.
- `public/images/` owns static raster assets used by pages, including the WebP artwork reference for the About page.

## Contribution Boundaries

Use these boundaries when preparing a PR:

- **New or updated palette:** edit an id-free `src/lib/palettes/<palette-name>.ts` source file and register its import plus stable route key in `src/lib/palettes/index.ts`; do not add manual `colorblindSafe`, because registration derives the score and classification.
- **Palette quality gate:** run `npm run audit:palettes` before submitting palette changes. The audit blocks exact duplicates, order-insensitive duplicates, and research-expansion categorical count variants where a larger palette can serve the smaller group count.
- **External palette recommendation skill:** consume `/palettes/catalog.json` or the bundled skill snapshot. Do not require cloning, sparse-checking, importing, or scanning the full repository; the repository can grow to thousands of palette files while the skill reads only the compact published catalog.
- **User-submitted palette workflow:** edit `.github/ISSUE_TEMPLATE/palette_request.yml`, `src/pages/contribute/index.astro`, `src/components/PaletteContributionPanel.astro`, and contribution docs. Keep submissions on GitHub Issues or PRs unless a backend is explicitly introduced later.
- **Paper figure inspiration workflow:** edit `.github/ISSUE_TEMPLATE/paper_inspiration.yml`, `src/pages/contribute/index.astro`, `src/components/PaperInspirationPanel.astro`, and contribution docs. Keep DOI and figure references as links and citation notes unless rights are explicit.
- **New palette field:** update `src/lib/types.ts`, the affected registration/materialization code in `src/lib/palettes/index.ts`, affected components, and README examples together. Only update individual palette source files when the source metadata itself changes.
- **Filtering or export behavior:** edit `src/lib/palette-utils.ts` first; keep component changes limited to wiring or labels.
- **Adobe ASE export:** edit `src/lib/adobe-ase.ts` for binary file construction and `src/components/CodeExport.tsx` for the download action.
- **Filter labels or available filter values:** edit `src/lib/filter-options.ts`; edit `src/components/PaletteFilters.tsx` only for layout or interaction changes.
- **Local palette recommendations:** edit `src/lib/palette-recommendations.ts` for scoring and presets, `src/pages/recommend/index.astro` for route-level framing, and `src/components/PaletteRecommendationPanel.tsx` for the browser UI. Keep recommendations local and explainable.
- **Palette comparison view:** edit `src/lib/palette-comparison.ts` for pairwise metrics, `src/pages/compare/index.astro` for route-level framing, and `src/components/PaletteComparisonPanel.tsx` for the browser UI.
- **Home-page hero or featured sections:** edit `src/components/PaletteShowcase.tsx`, `HomeHero`, or `FeaturedPaletteSections`; keep full-library filtering in `src/components/PaletteBrowser.tsx`.
- **Home-page grouping rules:** edit `src/lib/homepage.ts`; keep rendering components focused on presentation.
- **Palette detail page presentation:** edit the matching `PaletteDetail*` or `SimilarPalettesSection` component first; edit `src/pages/palettes/[id].astro` only when route data or section ordering changes.
- **Color vision simulation and scoring:** edit `src/lib/color-vision.ts` for simulation math, labels, score thresholds, high-risk pair penalties, and automatic classification; edit `src/components/ColorVisionPreview.tsx` for interaction, and `src/components/PlotPreview.tsx` only when simulated colors need to flow into chart previews.
- **Grayscale contrast checks:** edit `src/lib/grayscale-contrast.ts` for grayscale math and thresholds, and `src/components/GrayscaleContrastPanel.tsx` for the detail-page report UI.
- **Global navigation or repository links:** edit `src/lib/site.ts` and, if needed, `src/components/SiteHeader.astro`.
- **About page copy or site palette presentation:** edit `src/pages/about.astro`; keep shared footer changes in `src/components/SiteFooter.astro`.
- **Site logo identity:** edit `public/favicon.svg` for the source mark and `src/components/SiteMark.astro` for reusable page placement. Keep navigation, footer, and About page usage pointed at the same SVG so the identity does not drift.
- **Art2Pal Palette tool:** keep route wiring in `src/pages/art2pal/index.astro`, UI in `src/components/art2pal/`, and algorithm/export logic in `src/lib/art2pal/`. Do not add a backend, account system, database, or server upload path for user images.
- **Shared page chrome:** edit `src/layouts/BaseLayout.astro`, `src/components/SiteHeader.astro`, or `src/components/SiteFooter.astro`; avoid adding page-specific content to the layout shell.
- **Visual polish:** prefer the smallest component that owns the surface. Use the shared `sp-panel`, `sp-panel-muted`, `sp-button-*`, `sp-chip`, and `sp-control` classes from `src/styles/global.css` before adding new repeated border, radius, or control styles.
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
npm run test
npm run audit:palettes
npm run typecheck
npm run build
```

For UI changes, also preview the site locally and check:

- Home page at `/`
- Full palette browser at `/palettes/`
- Recommendation assistant at `/recommend/`
- Palette comparison at `/compare/`
- Contribution workflow at `/contribute/`
- A palette detail page under `/palettes/<short-stable-id>/`
- About page at `/about/`
- A narrow mobile viewport around 390 px wide
- Header navigation, including the mobile menu
