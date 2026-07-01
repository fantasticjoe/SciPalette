import type { PaletteSource } from "../types";

const palette = {
  name: "when i was your age",
  description: "Qualitative palette “when i was your age” from the werpals collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#3B4274", "#D2130A", "#C8A88A", "#857D7B", "#592E2A", "#E39587"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "werpals"],
  background: "white",
  source: "werpals (via paletteer)"
} satisfies PaletteSource;

export default palette;
