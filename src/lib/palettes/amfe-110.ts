import type { PaletteSource } from "../types";

const palette = {
  name: "Cell",
  description: "Community-curated aesthetic palette “Cell” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#85B373", "#FF9FA0", "#373737", "#367FBD", "#BD324C", "#092DF1", "#FC2704"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "顶刊/会议真实案例", "Cell", "多色", "对比"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
