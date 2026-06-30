import type { PaletteSource } from "../types";

const palette = {
  name: "Amber Teal 16",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#00A664", "#3FA0C0", "#4C6C43", "#5086C4", "#7C7CBA", "#B55489", "#C7B8BD", "#D5D9E5", "#D5D9E5", "#D6E0C8", "#D6E0C8", "#DCE125", "#F0A19A", "#F9ED1D", "#FEDEC5", "#FFF0BC"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
