import type { PaletteSource } from "../types";

const palette = {
  name: "Magenta Orange 9",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#3D5DA8", "#694F98", "#B2B0D7", "#B90978", "#C2DCAF", "#CE7A5E", "#D6E1F5", "#DBA43F", "#ECDE93"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
