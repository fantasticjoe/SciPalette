import type { PaletteSource } from "../types";

const palette = {
  name: "SmokyMtns",
  description: "Qualitative palette “SmokyMtns” from the NatParksPalettes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#42511A", "#889D35", "#D3D175", "#B50200", "#DA6C41", "#7C6E66", "#BCAFA6"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "natparkspalettes"],
  background: "white",
  source: "NatParksPalettes (via paletteer)"
} satisfies PaletteSource;

export default palette;
