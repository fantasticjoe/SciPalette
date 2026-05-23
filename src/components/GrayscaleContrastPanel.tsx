import type { Palette } from "../lib/types";
import { getGrayscaleContrastReport, rgbToGrayscaleLuminance } from "../lib/grayscale-contrast";

interface GrayscaleContrastPanelProps {
  palette: Palette;
}

function formatRatio(value: number): string {
  if (!Number.isFinite(value)) {
    return "n/a";
  }

  return `${value.toFixed(2)}:1`;
}

export function GrayscaleContrastPanel({ palette }: GrayscaleContrastPanelProps) {
  const report = getGrayscaleContrastReport(palette.colors);
  const shownPairs = report.failingPairs.slice(0, 4);

  return (
    <section className="sp-panel sp-lift border-[#dadcd6] bg-[rgb(251_249_242_/_0.78)] p-6 sm:p-8" aria-labelledby="grayscale-contrast-title">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4f6d5f]">Accessibility check</p>
          <h2 id="grayscale-contrast-title" className="font-display mt-2 text-4xl font-bold tracking-[-0.02em] text-[#212c33]">
            Grayscale contrast check
          </h2>
          <p className="mt-3 text-[1rem] leading-7 text-[rgb(33_44_51_/_0.72)]">
            Estimate whether colors remain separable after conversion to grayscale. This helps catch palettes that look distinct in color but collapse in print or low-saturation viewing conditions.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="border border-[#dadcd6] bg-[rgb(248_245_236_/_0.68)] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[rgb(33_44_51_/_0.52)]">Minimum grayscale ratio</p>
              <p className="mt-2 font-display text-3xl font-bold text-[#212c33]">{formatRatio(report.minimumRatio)}</p>
            </div>
            <div className="border border-[#dadcd6] bg-[rgb(248_245_236_/_0.68)] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[rgb(33_44_51_/_0.52)]">Threshold</p>
              <p className="mt-2 font-display text-3xl font-bold text-[#212c33]">{formatRatio(report.threshold)}</p>
            </div>
            <div className="border border-[#dadcd6] bg-[rgb(248_245_236_/_0.68)] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[rgb(33_44_51_/_0.52)]">Status</p>
              <p className={`mt-2 font-display text-3xl font-bold ${report.passes ? "text-[#4f6d5f]" : "text-[#8f3c2f]"}`}>
                {report.passes ? "Pass" : "Review"}
              </p>
            </div>
          </div>

          <div className="grid gap-2">
            {palette.colors.map((color) => {
              const luminance = rgbToGrayscaleLuminance(color);
              return (
                <div key={color} className="grid grid-cols-[5rem_1fr_4.5rem] items-center gap-3 text-sm font-semibold text-[rgb(33_44_51_/_0.68)]">
                  <span className="font-mono text-xs text-[#212c33]">{color}</span>
                  <div className="h-4 border border-[#dadcd6]" style={{ background: `rgb(${luminance} ${luminance} ${luminance})` }} />
                  <span className="text-right font-mono text-xs">{luminance}</span>
                </div>
              );
            })}
          </div>

          {shownPairs.length > 0 && (
            <div className="border-t border-[#dadcd6] pt-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#4f6d5f]">Closest grayscale pairs</p>
              <div className="mt-3 grid gap-2">
                {shownPairs.map((pair) => (
                  <div key={`${pair.first}-${pair.second}`} className="flex flex-wrap items-center justify-between gap-3 text-sm font-semibold text-[rgb(33_44_51_/_0.72)]">
                    <span className="font-mono text-xs text-[#212c33]">{pair.first} / {pair.second}</span>
                    <span>{formatRatio(pair.ratio)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
