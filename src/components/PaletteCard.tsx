import type { Palette } from "../lib/types";
import { BadgeList } from "./BadgeList";
import { CopyButton } from "./CopyButton";
import { Eye, Code2 } from "lucide-react";
import { generatePythonCode, generateRCode } from "../lib/palette-utils";

interface PaletteCardProps {
  palette: Palette;
}

export default function PaletteCard({ palette }: PaletteCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all hover:shadow-lg hover:border-gray-300">
      {/* Color strip */}
      <div className="flex h-16">
        {palette.colors.map((color, index) => (
          <div
            key={index}
            className="flex-1 transition-transform group-hover:scale-105"
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
              {palette.name}
            </h3>
            {palette.colorblindSafe && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 shrink-0">
                Colorblind Safe
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">{palette.description}</p>
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="capitalize">{palette.category}</span>
          <span>•</span>
          <span>{palette.colors.length} colors</span>
        </div>

        {palette.recommendedFor.length > 0 && (
          <BadgeList items={palette.recommendedFor.slice(0, 3)} variant="default" />
        )}

        <div className="flex items-center gap-2 pt-2">
          <a
            href={`/SciPalette/palettes/${palette.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            <Eye className="w-4 h-4" />
            View Details
          </a>
          <CopyButton text={palette.colors.join(", ")} className="flex-1" />
        </div>

        <div className="flex gap-2 pt-2 border-t border-gray-100">
          <button
            onClick={() => navigator.clipboard.writeText(generatePythonCode(palette.colors))}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
            title="Copy Python code"
          >
            <Code2 className="w-3.5 h-3.5" />
            Python
          </button>
          <button
            onClick={() => navigator.clipboard.writeText(generateRCode(palette.colors))}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
            title="Copy R code"
          >
            <Code2 className="w-3.5 h-3.5" />
            R
          </button>
        </div>
      </div>
    </div>
  );
}
