import { getGrayscaleContrastReport, type GrayscaleContrastReport } from "./grayscale-contrast";
import type { Palette, PlotType } from "./types";

export interface PaletteComparison {
  left: Palette;
  right: Palette;
  sharedPlotTypes: PlotType[];
  leftOnlyPlotTypes: PlotType[];
  rightOnlyPlotTypes: PlotType[];
  sharedTags: string[];
  leftOnlyColors: string[];
  rightOnlyColors: string[];
  colorCountDelta: number;
  grayscale: {
    left: GrayscaleContrastReport;
    right: GrayscaleContrastReport;
  };
  summary: string[];
}

export function comparePalettes(left: Palette, right: Palette): PaletteComparison {
  const sharedPlotTypes = left.recommendedFor.filter((plotType) => right.recommendedFor.includes(plotType));
  const leftOnlyPlotTypes = left.recommendedFor.filter((plotType) => !right.recommendedFor.includes(plotType));
  const rightOnlyPlotTypes = right.recommendedFor.filter((plotType) => !left.recommendedFor.includes(plotType));
  const sharedTags = left.tags.filter((tag) => right.tags.includes(tag));
  const rightColorSet = new Set(right.colors.map(normalizeHex));
  const leftColorSet = new Set(left.colors.map(normalizeHex));
  const leftOnlyColors = left.colors.filter((color) => !rightColorSet.has(normalizeHex(color)));
  const rightOnlyColors = right.colors.filter((color) => !leftColorSet.has(normalizeHex(color)));
  const grayscale = {
    left: getGrayscaleContrastReport(left.colors),
    right: getGrayscaleContrastReport(right.colors),
  };

  return {
    left,
    right,
    sharedPlotTypes,
    leftOnlyPlotTypes,
    rightOnlyPlotTypes,
    sharedTags,
    leftOnlyColors,
    rightOnlyColors,
    colorCountDelta: Math.abs(left.colors.length - right.colors.length),
    grayscale,
    summary: buildSummary(left, right, sharedPlotTypes, grayscale),
  };
}

function buildSummary(
  left: Palette,
  right: Palette,
  sharedPlotTypes: PlotType[],
  grayscale: PaletteComparison["grayscale"]
): string[] {
  const summary: string[] = [];

  if (left.category === right.category) {
    summary.push(`Both palettes are ${left.category} systems.`);
  } else {
    summary.push(`${left.name} is ${left.category}; ${right.name} is ${right.category}.`);
  }

  if (sharedPlotTypes.length > 0) {
    summary.push(`Shared use cases: ${sharedPlotTypes.join(", ")}.`);
  } else {
    summary.push("The recommended figure types do not overlap.");
  }

  const stronger = grayscale.left.minimumRatio >= grayscale.right.minimumRatio ? left.name : right.name;
  summary.push(`${stronger} has the stronger minimum grayscale contrast.`);

  return summary;
}

function normalizeHex(color: string): string {
  return color.trim().toLowerCase();
}
