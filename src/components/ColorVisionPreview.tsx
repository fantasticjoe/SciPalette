import { useMemo, useState } from "react";
import type { Palette } from "../lib/types";
import {
  type ColorVisionMode,
  colorVisionModes,
  simulatePaletteColorVision,
} from "../lib/color-vision";
import { PlotPreview } from "./PlotPreview";

interface ColorVisionPreviewProps {
  palette: Palette;
}

export function ColorVisionPreview({ palette }: ColorVisionPreviewProps) {
  const [mode, setMode] = useState<ColorVisionMode>("normal");
  const simulatedColors = useMemo(() => simulatePaletteColorVision(palette.colors, mode), [palette.colors, mode]);
  const activeMode = colorVisionModes.find((item) => item.id === mode) ?? colorVisionModes[0];
  const previewType = palette.recommendedFor.find((type) => type !== "boxplot") ?? "scatter";

  return (
    <section className="sp-reveal sp-reveal-delay-1 border-y border-[#dadcd6] py-10" aria-labelledby="color-vision-preview-title">
      <div className="mb-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4f6d5f]">Accessibility preview</p>
          <h2 id="color-vision-preview-title" className="font-display mt-2 text-4xl font-bold tracking-[-0.02em] text-[#212c33]">
            Color vision simulation
          </h2>
          <p className="mt-3 max-w-3xl text-[1rem] leading-7 text-[rgb(33_44_51_/_0.72)]">
            Check whether the palette still separates colors under common color vision deficiency simulations. This is a local preview only; it does not change exported palette values.
          </p>
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Color vision simulation mode">
          {colorVisionModes.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setMode(item.id)}
              className={
                item.id === mode
                  ? "sp-button-primary px-3 py-2 text-sm"
                  : "sp-button-secondary px-3 py-2 text-sm"
              }
              aria-pressed={item.id === mode}
              title={item.description}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="sp-panel-muted p-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {simulatedColors.map((color, index) => (
              <div key={`${mode}-${color}-${index}`}>
                <div className="h-20 border border-[#dadcd6]" style={{ backgroundColor: color }} title={color} />
                <p className="mt-2 font-mono text-xs font-bold text-[#212c33]">{color}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sp-panel-muted p-4">
          <div className="mb-3 flex items-center justify-between gap-4">
            <h3 className="text-sm font-bold text-[#212c33]">{activeMode.label} preview</h3>
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[rgb(33_44_51_/_0.5)]">{previewType}</span>
          </div>
          <PlotPreview palette={palette} type={previewType} colors={simulatedColors} />
        </div>
      </div>
    </section>
  );
}
