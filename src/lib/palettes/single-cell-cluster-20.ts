import type { Palette } from "../types";

const palette = {
  id: "single-cell-cluster-20",
  name: "Single-cell Cluster 20",
  description: "Extended palette for large-scale single-cell datasets with many clusters. Maximum distinguishability.",
  category: "categorical",
  colors: ["#E41A1C", "#377EB8", "#4DAF4A", "#984EA3", "#FF7F00", "#FFFF33", "#A65628", "#F781BF", "#999999", "#66C2A5", "#FC8D62", "#8DA0CB", "#E78AC3", "#A6D854", "#FFD92F", "#E5C494", "#B3B3B3", "#8DD3C7", "#BEBADA", "#FB8072"],
  recommendedFor: ["umap", "scatter"],
  tags: ["single-cell", "many-clusters", "scRNA-seq"],
  colorblindSafe: false,
  background: "white"
} satisfies Palette;

export default palette;
