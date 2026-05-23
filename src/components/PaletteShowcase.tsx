import { palettes } from "../lib/palettes";
import { getFeaturedPaletteGroups, getPaletteCategoryCount } from "../lib/homepage";
import { FeaturedPaletteSections } from "./FeaturedPaletteSections";
import { HomeHero } from "./HomeHero";

export default function PaletteShowcase() {
  const featuredGroups = getFeaturedPaletteGroups(palettes);
  const categoryCount = getPaletteCategoryCount(palettes);

  return (
    <>
      <HomeHero
        className="sp-reveal"
        specimenPalette={palettes[1]}
        paletteCount={palettes.length}
        categoryCount={categoryCount}
        accessibleCount={featuredGroups.colorblindSafePalettes.length}
      />

      <FeaturedPaletteSections className="sp-reveal sp-reveal-delay-1" groups={featuredGroups} />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="border-y border-[#dadcd6] py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4f6d5f]">Complete library</p>
              <h2 className="font-display mt-1 text-4xl font-bold tracking-[-0.02em] text-[#212c33]">
                Browse every palette on a dedicated page.
              </h2>
            </div>
            <a href="/palettes/" className="sp-button-primary w-fit px-5 py-3 text-sm">
              Open palette library
            </a>
          </div>
        </div>
      </section>

      <footer className="sp-fade-border mt-4 border-t border-[#dadcd6] bg-[rgb(251_249_242_/_0.62)]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-[rgb(33_44_51_/_0.62)]">
            SciPalette, a curated collection of scientific color palettes.
          </p>
        </div>
      </footer>
    </>
  );
}
