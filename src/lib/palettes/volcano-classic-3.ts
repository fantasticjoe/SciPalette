import type { PaletteSource } from "../types";

const palette = {
  name: "Volcano Classic 3",
  description: "Traditional three-color scheme for volcano plots. Gray for non-significant, red for upregulated, blue for downregulated.",
  category: "categorical",
  colors: ["#999999", "#E64B35", "#4DBBD5"],
  recommendedFor: ["volcano", "scatter"],
  tags: ["volcano-plot", "differential-expression", "genomics"],
  colorblindSafe: true,
  background: "white"
} satisfies PaletteSource;

export default palette;
