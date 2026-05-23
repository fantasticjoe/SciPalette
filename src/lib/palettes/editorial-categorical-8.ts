import type { PaletteSource } from "../types";

const palette = {
  name: "Editorial Categorical 8",
  description: "Restrained categorical palette for polished multipanel figures and explanatory graphics.",
  category: "categorical",
  colors: ["#385f6d", "#a96f3f", "#6f7f56", "#665a7f", "#b08f52", "#4f7672", "#9a5f6d", "#7f6f4f"],
  recommendedFor: ["bar", "line", "scatter"],
  tags: ["categorical", "editorial", "muted", "publication"],
  background: "white",
  source: "Original SciPalette research expansion informed by qualitative palette design guidance."
} satisfies PaletteSource;

export default palette;
