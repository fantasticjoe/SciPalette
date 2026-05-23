import type { Palette, PaletteCategory, PaletteSource } from "../types";
import { evaluatePaletteColorblindAccessibility } from "../color-vision";
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

const paletteEntries = [
  ["nature-muted-8", natureMuted8],
  ["cell-atlas-12", cellAtlas12],
  ["immunology-cell-types", immunologyCellTypes],
  ["clinical-trial-4", clinicalTrial4],
  ["colorblind-safe-8", colorblindSafe8],
  ["okabe-ito", okabeIto],
  ["tableau-scientific-10", tableauScientific10],
  ["soft-pastel-6", softPastel6],
  ["high-contrast-6", highContrast6],
  ["volcano-classic-3", volcanoClassic3],
  ["blue-red-diverging", blueRedDiverging],
  ["purple-orange-diverging", purpleOrangeDiverging],
  ["viridis-like", viridisLike],
  ["plasma-like", plasmaLike],
  ["cividis-like", cividisLike],
  ["heatmap-blue-white-red", heatmapBlueWhiteRed],
  ["heatmap-yellow-red", heatmapYellowRed],
  ["single-cell-cluster-20", singleCellCluster20],
  ["t-cell-states", tCellStates],
  ["tumor-microenvironment", tumorMicroenvironment],
] as const satisfies ReadonlyArray<readonly [string, PaletteSource]>;

export const paletteRouteKeys = paletteEntries.map(([key]) => key);

export const paletteSources: PaletteSource[] = paletteEntries.map(([, source]) => source);

function hashRouteKey(routeKey: string): string {
  const signature = `scipalette-palette-route:v1:${routeKey.trim().toLowerCase()}`;
  let first = 0x811c9dc5;
  let second = 0x9e3779b9;

  for (let index = 0; index < signature.length; index += 1) {
    const code = signature.charCodeAt(index);
    first = Math.imul(first ^ code, 0x01000193);
    second = Math.imul(second ^ code, 0x85ebca6b) ^ first;
  }

  const firstPart = (first >>> 0).toString(36).padStart(6, "0").slice(-6);
  const secondPart = (second >>> 0).toString(36).padStart(6, "0").slice(-6);
  return `${firstPart}${secondPart}`;
}

export function createPaletteId(routeKey: string): string {
  return `sp-${hashRouteKey(routeKey)}`;
}

function materializePalette(routeKey: string, source: PaletteSource): Palette {
  const colorblindReport = evaluatePaletteColorblindAccessibility(source.colors);

  return {
    id: createPaletteId(routeKey),
    ...source,
    colorblindSafe: colorblindReport.safe,
    colorblindScore: colorblindReport.score,
    colorblindReport,
  };
}

export const palettes: Palette[] = paletteEntries.map(([routeKey, source]) => materializePalette(routeKey, source));

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
