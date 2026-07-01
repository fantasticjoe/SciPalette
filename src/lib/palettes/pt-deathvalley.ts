import type { PaletteSource } from "../types";

const palette = {
  name: "DeathValley",
  description: "Qualitative palette “DeathValley” from the nationalparkcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#B23539", "#FAB57C", "#F7E790", "#73652D", "#E79498", "#514289"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "nationalparkcolors"],
  background: "white",
  source: "nationalparkcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
