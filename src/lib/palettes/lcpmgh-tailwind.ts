import type { PaletteSource } from "../types";

const palette = {
  name: "Tailwind",
  description: "Tailwind discrete qualitative palette from ggsci.",
  category: "categorical",
  colors: ["#F8F9FC", "#EFF3F8", "#DEE5ED", "#BBC6D5", "#7C8CA3", "#516075", "#39475B", "#222E40", "#10182B", "#010617"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "qualitative"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
