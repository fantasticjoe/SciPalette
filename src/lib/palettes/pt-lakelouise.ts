import type { PaletteSource } from "../types";

const palette = {
  name: "lakelouise",
  description: "Qualitative palette “lakelouise” from the werpals collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F6FCFC", "#81C7E0", "#00B8DE", "#007C94", "#617CA9", "#003478", "#00C0C3", "#017E5C", "#71C100", "#F3D100"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "werpals"],
  background: "white",
  source: "werpals (via paletteer)"
} satisfies PaletteSource;

export default palette;
