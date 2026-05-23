import type { PaletteSource } from "../types";

const palette = {
  name: "T Cell States",
  description: "Specialized palette for T cell differentiation states. Colors progress from naive to effector to memory.",
  category: "categorical",
  colors: ["#9ECAE1", "#4292C6", "#08519C", "#54278F", "#6A51A3", "#807DBA"],
  recommendedFor: ["bar", "umap", "scatter"],
  tags: ["immunology", "T-cells", "differentiation"],
  background: "white"
} satisfies PaletteSource;

export default palette;
