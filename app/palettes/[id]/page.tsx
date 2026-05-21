import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { getPaletteById, palettes } from "@/lib/palettes";
import { getSimilarPalettes } from "@/lib/palette-utils";
import { ColorSwatch } from "@/components/ColorSwatch";
import { BadgeList } from "@/components/BadgeList";
import { PlotPreview } from "@/components/PlotPreview";
import { CodeExport } from "@/components/CodeExport";
import { PaletteGrid } from "@/components/PaletteGrid";

export function generateStaticParams() {
  return palettes.map((palette) => ({
    id: palette.id,
  }));
}

export default function PalettePage({ params }: { params: { id: string } }) {
  const palette = getPaletteById(params.id);

  if (!palette) {
    notFound();
  }

  const similarPalettes = getSimilarPalettes(palette);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all palettes
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Palette Header */}
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{palette.name}</h1>
                <p className="text-lg text-gray-600">{palette.description}</p>
              </div>
              {palette.colorblindSafe && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-green-100 text-green-700 shrink-0">
                  <Check className="w-4 h-4" />
                  Colorblind Safe
                </span>
              )}
            </div>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <span className="capitalize font-medium">{palette.category}</span>
              <span>•</span>
              <span>{palette.colors.length} colors</span>
              <span>•</span>
              <span className="capitalize">Best on {palette.background} background</span>
              {palette.source && (
                <>
                  <span>•</span>
                  <span className="text-gray-500">{palette.source}</span>
                </>
              )}
            </div>

            {/* Tags */}
            {palette.recommendedFor.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Recommended for:</h3>
                <BadgeList items={palette.recommendedFor} />
              </div>
            )}

            {palette.tags.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Tags:</h3>
                <BadgeList items={palette.tags} variant="default" />
              </div>
            )}
          </div>

          {/* Color Strip */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Colors</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {palette.colors.map((color, index) => (
                <ColorSwatch key={index} color={color} showDetails />
              ))}
            </div>
          </div>

          {/* Plot Previews */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Preview in Scientific Plots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {palette.recommendedFor.includes("bar") && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Bar Plot</h3>
                  <PlotPreview palette={palette} type="bar" />
                </div>
              )}

              {palette.recommendedFor.includes("line") && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Line Plot</h3>
                  <PlotPreview palette={palette} type="line" />
                </div>
              )}

              {palette.recommendedFor.includes("scatter") && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Scatter Plot</h3>
                  <PlotPreview palette={palette} type="scatter" />
                </div>
              )}

              {palette.recommendedFor.includes("umap") && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">UMAP</h3>
                  <PlotPreview palette={palette} type="umap" />
                </div>
              )}

              {palette.recommendedFor.includes("heatmap") && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Heatmap</h3>
                  <PlotPreview palette={palette} type="heatmap" />
                </div>
              )}

              {palette.recommendedFor.includes("volcano") && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Volcano Plot</h3>
                  <PlotPreview palette={palette} type="volcano" />
                </div>
              )}
            </div>
          </div>

          {/* Code Export */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <CodeExport palette={palette} />
          </div>

          {/* Similar Palettes */}
          {similarPalettes.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Palettes</h2>
              <PaletteGrid palettes={similarPalettes} />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-gray-500">
            SciPalette · A curated collection of scientific color palettes
          </p>
        </div>
      </footer>
    </div>
  );
}
