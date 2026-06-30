import type { PaletteSource } from "../types";

const palette = {
  name: "Amber Orange 14",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#000000", "#262A85", "#4C9140", "#519475", "#5B99E6", "#5D2B84", "#6A4C30", "#ACCBE8", "#BE3731", "#C65537", "#DDA43D", "#EDDB31", "#EDF4FA", "#F1EBED"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
