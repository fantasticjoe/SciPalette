import type { PaletteSource } from "../types";

const palette = {
  name: "Rick and Morty",
  description: "Rick and Morty discrete qualitative palette from ggsci.",
  category: "categorical",
  colors: ["#FAFD7C", "#82491E", "#24325F", "#B7E4F9", "#FB6467", "#526E2D", "#E762D7", "#E89242", "#FAE48B", "#A6EEE6", "#917C5D", "#69C8EC"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "qualitative"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
