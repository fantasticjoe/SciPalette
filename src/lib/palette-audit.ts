import { findPaletteDuplicates, getPaletteColorDistance } from "./palette-deduplication";
import type { Palette } from "./types";

export type PaletteAuditIssueKind =
  | "exact-duplicate"
  | "order-insensitive-duplicate"
  | "near-duplicate"
  | "categorical-capacity-variant";

export interface PaletteAuditIssue {
  kind: PaletteAuditIssueKind;
  severity: "blocking";
  paletteNames: [string, string];
  paletteIds: [string, string];
  distance?: number;
  message: string;
}

export interface PaletteAuditOptions {
  categoricalCapacityDistance?: number;
}

export interface PaletteAuditReport {
  passed: boolean;
  issues: PaletteAuditIssue[];
  summary: string;
}

const DEFAULT_CATEGORICAL_CAPACITY_DISTANCE = 0.065;
const RESEARCH_EXPANSION_SOURCE = "Original SciPalette research expansion";

export function auditPalettes(paletteList: Palette[], options: PaletteAuditOptions = {}): PaletteAuditReport {
  const categoricalCapacityDistance = options.categoricalCapacityDistance ?? DEFAULT_CATEGORICAL_CAPACITY_DISTANCE;
  const duplicateReport = findPaletteDuplicates(paletteList);
  const duplicateDerivativeIds = new Set([
    ...duplicateReport.exact.map((pair) => pair.ids[1]),
    ...duplicateReport.orderInsensitive.map((pair) => pair.ids[1]),
  ]);
  const issues: PaletteAuditIssue[] = [
    ...duplicateReport.exact.map((pair) => createIssue("exact-duplicate", pair.palettes, pair.distance)),
    ...duplicateReport.orderInsensitive.map((pair) => createIssue("order-insensitive-duplicate", pair.palettes, pair.distance)),
    ...findCategoricalCapacityVariants(paletteList, categoricalCapacityDistance, duplicateDerivativeIds),
  ];

  return {
    passed: issues.length === 0,
    issues,
    summary: issues.length === 0 ? "Palette audit passed." : `${issues.length} blocking palette audit issues found.`,
  };
}

function findCategoricalCapacityVariants(paletteList: Palette[], threshold: number, ignoredIds: Set<string>): PaletteAuditIssue[] {
  const categorical = paletteList.filter((palette) => {
    return palette.category === "categorical" && palette.source?.includes(RESEARCH_EXPANSION_SOURCE) && !ignoredIds.has(palette.id);
  });
  const issues: PaletteAuditIssue[] = [];

  for (let firstIndex = 0; firstIndex < categorical.length; firstIndex += 1) {
    for (let secondIndex = firstIndex + 1; secondIndex < categorical.length; secondIndex += 1) {
      const first = categorical[firstIndex];
      const second = categorical[secondIndex];

      if (first.colors.length === second.colors.length) continue;
      if (!sharePlotIntent(first, second)) continue;

      const distance = getPaletteColorDistance(first.colors, second.colors);
      if (distance >= threshold) continue;

      const [larger, smaller] = first.colors.length >= second.colors.length ? [first, second] : [second, first];
      issues.push({
        kind: "categorical-capacity-variant",
        severity: "blocking",
        paletteNames: [larger.name, smaller.name],
        paletteIds: [larger.id, smaller.id],
        distance,
        message: `${larger.name} (${larger.colors.length}) can cover ${smaller.name} (${smaller.colors.length}); avoid publishing count variants of the same categorical system.`,
      });
    }
  }

  return issues;
}

function sharePlotIntent(first: Palette, second: Palette): boolean {
  return first.recommendedFor.some((plotType) => second.recommendedFor.includes(plotType));
}

function createIssue(kind: PaletteAuditIssueKind, palettes: [Palette, Palette], distance?: number): PaletteAuditIssue {
  const [first, second] = palettes;

  return {
    kind,
    severity: "blocking",
    paletteNames: [first.name, second.name],
    paletteIds: [first.id, second.id],
    distance,
    message: `${first.name} and ${second.name} trigger ${kind}.`,
  };
}
