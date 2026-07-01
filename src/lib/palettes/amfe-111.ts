import type { PaletteSource } from "../types";

const palette = {
  name: "Cell 2",
  description: "Community-curated aesthetic palette “Cell” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D3B3D9", "#B7CFE7", "#300A8B", "#D2625F", "#3132F0", "#F8191A"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "顶刊/会议真实案例", "Cell", "多色", "对比"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
