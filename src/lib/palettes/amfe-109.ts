import type { PaletteSource } from "../types";

const palette = {
  name: "IEEE Transactions on Pattern Analysis and Machine Intelligence 2",
  description: "Community-curated aesthetic palette “IEEE Transactions on Pattern Analysis and Machine Intelligence” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F0FAFB", "#FEF0F0", "#EEF3F7", "#7189B1", "#E36281", "#A39F9E"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "顶刊/会议真实案例", "IEEE TPAMI", "浅色", "多彩"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
