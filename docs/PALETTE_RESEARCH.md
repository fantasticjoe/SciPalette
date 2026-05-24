# Palette Research Notes

SciPalette's research expansion palettes are original palettes built from public scientific visualization guidance rather than copied HEX lists.

The expansion follows these design rules:

- Categorical palettes use separated hues with moderated saturation and comparable visual weight for white-background figures.
- Sequential palettes use monotone lightness ramps, restrained chroma, and a readable low-value endpoint.
- Diverging palettes use balanced endpoints and a neutral center for signed values.
- Heatmap palettes avoid rainbow ordering and preserve midrange readability.
- New palettes are checked for exact duplicates, order-insensitive duplicates, and near-duplicates in OKLab space.
- The research expansion is curated for distinct palette systems, not a target count. If a candidate repeats an existing hue scaffold, it should be revised or removed instead of kept as filler.
- Categorical palettes are treated as minimum-capacity systems: a 15-color categorical palette can serve 8, 10, or 12 groups by selecting a subset, so SciPalette should not publish smaller count variants of the same visual system.
- `npm run audit:palettes` is the CI-facing quality gate for this policy. It reports blocking issue kinds and palette names so repeated systems are removed or redesigned before merge.

Reference families used as design guidance:

- Matplotlib colormap guidance for perceptually uniform sequential maps and diverging maps.
- ColorBrewer guidance for categorical, sequential, diverging, and colorblind-aware map design.
- Paul Tol's notes on scientific colour schemes and publication-oriented palette constraints.
- CARTOColors and Seaborn qualitative palette guidance for categorical separability.
- Scientific colour map guidance from Fabio Crameri and Colorcet for perceptual uniformity and color-vision robustness.

The source labels in palette files intentionally say `Original SciPalette research expansion` to distinguish these palettes from direct ports of external libraries.

External recommendation tools should use the published `/palettes/catalog.json` manifest or a bundled snapshot of that manifest. They should not clone or scan the full SciPalette repository just to choose a palette; a future catalog can contain hundreds or thousands of source files while the skill runtime still reads one compact JSON document.
