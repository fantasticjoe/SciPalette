import type { PaletteSource } from "../types";

const palette = {
  name: "都市反差",
  description: "Community-curated aesthetic palette “都市反差” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#2C2C2C", "#5C5C5C", "#989898", "#D6D6D6", "#EAEAEA"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "大胆", "精致", "都市", "专业"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
