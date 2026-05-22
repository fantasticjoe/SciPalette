import type { Palette, PaletteCategory } from "../types";
import natureMuted8 from "./nature-muted-8";
import cellAtlas12 from "./cell-atlas-12";
import immunologyCellTypes from "./immunology-cell-types";
import clinicalTrial4 from "./clinical-trial-4";
import colorblindSafe8 from "./colorblind-safe-8";
import okabeIto from "./okabe-ito";
import tableauScientific10 from "./tableau-scientific-10";
import softPastel6 from "./soft-pastel-6";
import highContrast6 from "./high-contrast-6";
import volcanoClassic3 from "./volcano-classic-3";
import blueRedDiverging from "./blue-red-diverging";
import purpleOrangeDiverging from "./purple-orange-diverging";
import viridisLike from "./viridis-like";
import plasmaLike from "./plasma-like";
import cividisLike from "./cividis-like";
import heatmapBlueWhiteRed from "./heatmap-blue-white-red";
import heatmapYellowRed from "./heatmap-yellow-red";
import singleCellCluster20 from "./single-cell-cluster-20";
import tCellStates from "./t-cell-states";
import tumorMicroenvironment from "./tumor-microenvironment";

export const palettes: Palette[] = [
  natureMuted8,
  cellAtlas12,
  immunologyCellTypes,
  clinicalTrial4,
  colorblindSafe8,
  okabeIto,
  tableauScientific10,
  softPastel6,
  highContrast6,
  volcanoClassic3,
  blueRedDiverging,
  purpleOrangeDiverging,
  viridisLike,
  plasmaLike,
  cividisLike,
  heatmapBlueWhiteRed,
  heatmapYellowRed,
  singleCellCluster20,
  tCellStates,
  tumorMicroenvironment,
];

export function getPaletteById(id: string): Palette | undefined {
  return palettes.find((palette) => palette.id === id);
}

export function getPalettesByCategory(category: PaletteCategory): Palette[] {
  return palettes.filter((palette) => palette.category === category);
}

export function getPalettesByTag(tag: string): Palette[] {
  return palettes.filter((palette) => palette.tags.includes(tag));
}

export function getColorblindSafePalettes(): Palette[] {
  return palettes.filter((palette) => palette.colorblindSafe);
}
