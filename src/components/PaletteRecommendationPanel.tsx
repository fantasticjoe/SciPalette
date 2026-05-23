import { useMemo, useState } from "react";
import { CheckCircle2, ListChecks, Sparkles } from "lucide-react";
import { categoryOptions, colorCountOptions, plotTypeOptions } from "../lib/filter-options";
import {
  getPaletteRecommendations,
  recommendationPresets,
  type PaletteRecommendationInput,
  type RecommendationColorCount,
} from "../lib/palette-recommendations";
import type { Palette, PaletteCategory, PlotType } from "../lib/types";

const presetOptions = [
  { id: "singleCellClusters", label: "Single-cell clusters" },
  { id: "expressionHeatmap", label: "Expression heatmap" },
  { id: "clinicalGroups", label: "Clinical groups" },
] as const;

const backgroundOptions: Array<{ value: Palette["background"] | "any"; label: string }> = [
  { value: "any", label: "Any background" },
  { value: "white", label: "White" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

export function PaletteRecommendationPanel() {
  const [input, setInput] = useState<PaletteRecommendationInput>(recommendationPresets.singleCellClusters);

  const recommendations = useMemo(() => getPaletteRecommendations(input, 3), [input]);

  const updateInput = <K extends keyof PaletteRecommendationInput>(key: K, value: PaletteRecommendationInput[K]) => {
    setInput((current) => ({ ...current, [key]: value }));
  };

  const applyPreset = (preset: keyof typeof recommendationPresets) => {
    setInput(recommendationPresets[preset]);
  };

  return (
    <section className="sp-panel-muted p-5 sm:p-6" aria-labelledby="palette-recommendation-title">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#4f6d5f]">
            <ListChecks className="h-3.5 w-3.5" aria-hidden="true" />
            Local palette recommendation
          </p>
          <h2 id="palette-recommendation-title" className="font-display mt-2 text-4xl font-bold leading-tight tracking-[-0.02em] text-[#212c33]">
            Describe the figure and get local recommendations.
          </h2>
          <p className="mt-3 text-[1rem] leading-7 text-[rgb(33_44_51_/_0.7)]">
            Runs locally with transparent scientific heuristics. No prompt, figure, or selection leaves the browser.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {presetOptions.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset.id)}
                className="sp-button-subtle px-3 py-2 text-xs"
              >
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                {preset.label}
              </button>
            ))}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Control label="Plot type">
              <select
                value={input.plotType}
                onChange={(event) => updateInput("plotType", event.target.value as PlotType | "all")}
                className="sp-control px-3 py-2.5 text-sm font-semibold"
              >
                {plotTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </Control>

            <Control label="Palette family">
              <select
                value={input.category}
                onChange={(event) => updateInput("category", event.target.value as PaletteCategory | "all")}
                className="sp-control px-3 py-2.5 text-sm font-semibold"
              >
                {categoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </Control>

            <Control label="Color count">
              <select
                value={input.colorCount}
                onChange={(event) => updateInput("colorCount", event.target.value as RecommendationColorCount)}
                className="sp-control px-3 py-2.5 text-sm font-semibold"
              >
                {colorCountOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </Control>

            <Control label="Background">
              <select
                value={input.background}
                onChange={(event) => updateInput("background", event.target.value as Palette["background"] | "any")}
                className="sp-control px-3 py-2.5 text-sm font-semibold"
              >
                {backgroundOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </Control>
          </div>

          <label className="mt-3 sp-control flex cursor-pointer items-center gap-3 px-3 py-2.5 text-sm font-semibold transition hover:bg-[rgb(122_158_141_/_0.1)]">
            <input
              type="checkbox"
              checked={input.colorblindOnly}
              onChange={(event) => updateInput("colorblindOnly", event.target.checked)}
              className="h-4 w-4 rounded border-[#dadcd6] accent-[#4f6d5f] focus:ring-2 focus:ring-[rgb(79_109_95_/_0.28)]"
            />
            <span>Require colorblind-safe palettes</span>
          </label>

          <Control label="Research intent" className="mt-3">
            <textarea
              value={input.intent}
              onChange={(event) => updateInput("intent", event.target.value)}
              rows={3}
              className="sp-control min-h-24 resize-y px-3 py-2.5 text-sm font-semibold leading-6 placeholder:text-[rgb(33_44_51_/_0.46)]"
              placeholder="Example: UMAP clusters for single-cell immune annotation"
            />
          </Control>
        </div>

        <div className="grid gap-3">
          {recommendations.map(({ palette, score, reasons }, index) => (
            <article key={palette.id} className="border border-[#dadcd6] bg-[rgb(248_245_236_/_0.74)] p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#4f6d5f]">Recommendation {index + 1}</p>
                  <h3 className="font-display mt-1 text-2xl font-bold leading-tight text-[#212c33]">{palette.name}</h3>
                </div>
                <span className="sp-chip w-fit px-2.5 py-1 text-xs">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  {Math.round(score)} fit
                </span>
              </div>

              <div className="mt-4 flex h-12 overflow-hidden border border-[#dadcd6]">
                {palette.colors.map((color) => (
                  <div key={color} className="flex-1" style={{ backgroundColor: color }} title={color} />
                ))}
              </div>

              <ul className="mt-4 grid gap-2 text-sm leading-6 text-[rgb(33_44_51_/_0.7)]">
                {reasons.map((reason) => (
                  <li key={reason} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#4f6d5f]" aria-hidden="true" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>

              <a href={`/palettes/${palette.id}`} className="mt-4 inline-flex text-sm font-bold text-[#4f6d5f] hover:text-[#212c33]">
                View palette details
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Control({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[rgb(33_44_51_/_0.66)]">{label}</span>
      {children}
    </label>
  );
}
