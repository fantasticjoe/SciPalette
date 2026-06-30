import type { PaletteSource } from "../types";

const palette = {
  name: "Tron Legacy",
  description: "Tron Legacy discrete qualitative palette from ggsci.",
  category: "categorical",
  colors: ["#FF410D", "#6EE2FF", "#F7C530", "#95CC5E", "#D0DFE6", "#F79D1E", "#748AA6"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "qualitative"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
