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
import immuneStates15 from "./immune-states-15";
import blueExpression7 from "./blue-expression-7";
import greenModuleScore7 from "./green-module-score-7";
import densityTeal8 from "./density-teal-8";
import pseudotimeAmber8 from "./pseudotime-amber-8";
import moduleRose7 from "./module-rose-7";
import probabilityIndigo7 from "./probability-indigo-7";
import microscopyViolet8 from "./microscopy-violet-8";
import softPlasma8 from "./soft-plasma-8";
import cellViabilityLime7 from "./cell-viability-lime-7";
import uncertaintyGrayBlue7 from "./uncertainty-gray-blue-7";
import histologySienna7 from "./histology-sienna-7";
import flowCytometryBluegreen8 from "./flow-cytometry-bluegreen-8";
import logfcBlueRose9 from "./logfc-blue-rose-9";
import correlationTealBrown9 from "./correlation-teal-brown-9";
import zscorePurpleGold9 from "./zscore-purple-gold-9";
import effectSizeNavyOrange9 from "./effect-size-navy-orange-9";
import residualGreenMagenta9 from "./residual-green-magenta-9";
import terrainDiverging9 from "./terrain-diverging-9";
import pcaAxisIndigoVermillion9 from "./pca-axis-indigo-vermillion-9";
import expressionPurpleGoldHeatmap from "./expression-purple-gold-heatmap";
import methylationTealRoseHeatmap from "./methylation-teal-rose-heatmap";
import pathologyBlueSiennaHeatmap from "./pathology-blue-sienna-heatmap";
import spatialDensityHeatmap from "./spatial-density-heatmap";
import proteinAbundanceHeatmap from "./protein-abundance-heatmap";

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
  ["immune-states-15", immuneStates15],
  ["blue-expression-7", blueExpression7],
  ["green-module-score-7", greenModuleScore7],
  ["density-teal-8", densityTeal8],
  ["pseudotime-amber-8", pseudotimeAmber8],
  ["module-rose-7", moduleRose7],
  ["probability-indigo-7", probabilityIndigo7],
  ["microscopy-violet-8", microscopyViolet8],
  ["soft-plasma-8", softPlasma8],
  ["cell-viability-lime-7", cellViabilityLime7],
  ["uncertainty-gray-blue-7", uncertaintyGrayBlue7],
  ["histology-sienna-7", histologySienna7],
  ["flow-cytometry-bluegreen-8", flowCytometryBluegreen8],
  ["logfc-blue-rose-9", logfcBlueRose9],
  ["correlation-teal-brown-9", correlationTealBrown9],
  ["zscore-purple-gold-9", zscorePurpleGold9],
  ["effect-size-navy-orange-9", effectSizeNavyOrange9],
  ["residual-green-magenta-9", residualGreenMagenta9],
  ["terrain-diverging-9", terrainDiverging9],
  ["pca-axis-indigo-vermillion-9", pcaAxisIndigoVermillion9],
  ["expression-purple-gold-heatmap", expressionPurpleGoldHeatmap],
  ["methylation-teal-rose-heatmap", methylationTealRoseHeatmap],
  ["pathology-blue-sienna-heatmap", pathologyBlueSiennaHeatmap],
  ["spatial-density-heatmap", spatialDensityHeatmap],
  ["protein-abundance-heatmap", proteinAbundanceHeatmap],
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
