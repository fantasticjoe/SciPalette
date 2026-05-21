import type { Palette } from "../lib/types";
import { BadgeList } from "./BadgeList";
import { CopyButton } from "./CopyButton";
import { CheckCircle2, Code2, Eye } from "lucide-react";
import { generatePythonCode, generateRCode } from "../lib/palette-utils";

interface PaletteCardProps {
  palette: Palette;
}

export default function PaletteCard({ palette }: PaletteCardProps) {
  return (
    <article className="sp-panel group flex h-full flex-col overflow-hidden rounded-lg transition duration-300 hover:-translate-y-0.5 hover:border-[rgb(79_109_95_/_0.32)] hover:shadow-[0_24px_70px_rgb(33_44_51_/_0.08)]">
      <div className="relative p-3 pb-0">
        <div className="flex h-18 overflow-hidden rounded-md border border-[#dadcd6]">
          {palette.colors.map((color, index) => (
            <div
              key={index}
              className="flex-1 transition-transform duration-200 group-hover:scale-y-105"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
        <div className="absolute right-6 top-6 border border-[#dadcd6] bg-[rgb(248_245_236_/_0.92)] px-2.5 py-1 text-xs font-bold text-[#212c33] shadow-sm">
          {palette.colors.length} colors
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div>
          <div className="mb-2 flex items-start justify-between gap-3">
            <h3 className="font-display text-2xl font-bold leading-tight text-[#212c33]">
              {palette.name}
            </h3>
            {palette.colorblindSafe && (
              <span className="sp-chip shrink-0 px-2 py-0.5 text-xs">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Safe
              </span>
            )}
          </div>
          <p className="line-clamp-2 text-[0.95rem] leading-6 text-[rgb(33_44_51_/_0.7)]">{palette.description}</p>
        </div>

        <div className="my-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[rgb(33_44_51_/_0.58)]">
          <span className="capitalize">{palette.category}</span>
          <span className="h-1 w-1 rounded-full bg-[#4f6d5f]" />
          <span>{palette.background} background</span>
        </div>

        {palette.recommendedFor.length > 0 && (
          <BadgeList items={palette.recommendedFor.slice(0, 3)} variant="default" />
        )}

        <div className="mt-auto flex items-center gap-2 pt-5">
          <a
            href={`/SciPalette/palettes/${palette.id}`}
            className="sp-button-primary px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(79_109_95_/_0.34)] focus:ring-offset-2"
          >
            <Eye className="h-4 w-4" />
            View Details
          </a>
          <CopyButton text={palette.colors.join(", ")} className="flex-1" />
        </div>

        <div className="mt-3 flex gap-2 border-t border-[#dadcd6] pt-3">
          <button
            onClick={() => navigator.clipboard.writeText(generatePythonCode(palette.colors))}
            className="sp-button-subtle flex-1 border-transparent bg-[rgb(122_158_141_/_0.12)] px-3 py-1.5 text-xs hover:bg-[rgb(122_158_141_/_0.18)]"
            title="Copy Python code"
          >
            <Code2 className="h-3.5 w-3.5" />
            Python
          </button>
          <button
            onClick={() => navigator.clipboard.writeText(generateRCode(palette.colors))}
            className="sp-button-secondary flex-1 border-transparent bg-[rgb(248_245_236_/_0.9)] px-3 py-1.5 text-xs text-[#6f6246]"
            title="Copy R code"
          >
            <Code2 className="h-3.5 w-3.5" />
            R
          </button>
        </div>
      </div>
    </article>
  );
}
