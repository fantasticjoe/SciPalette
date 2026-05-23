import type { PaletteSource } from "../types";

const palette = {
  name: "Paper Qualitative 7",
  description: "Small categorical palette for compact paper figures where each series needs strong identity.",
  category: "categorical",
  colors: ["#245f92", "#c85a42", "#4f8a58", "#755aa0", "#c29a32", "#2f8f86", "#b84f70"],
  recommendedFor: ["line", "bar", "scatter"],
  tags: ["categorical", "paper", "qualitative", "publication"],
  background: "white",
  source: "Original SciPalette research expansion informed by qualitative palette design guidance."
} satisfies PaletteSource;

export default palette;
