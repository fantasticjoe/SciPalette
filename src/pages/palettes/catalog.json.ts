import type { APIRoute } from "astro";
import { palettes } from "../../lib/palettes";

export const GET: APIRoute = () => {
  const generatedAt = new Date("2026-05-24T00:00:00.000Z").toISOString();
  const catalog = {
    schemaVersion: 1,
    generatedAt,
    count: palettes.length,
    palettes: palettes.map((palette) => ({
      id: palette.id,
      name: palette.name,
      description: palette.description,
      category: palette.category,
      colors: palette.colors,
      recommendedFor: palette.recommendedFor,
      tags: palette.tags,
      colorblindSafe: palette.colorblindSafe,
      colorblindScore: palette.colorblindScore,
      background: palette.background,
      source: palette.source ?? null,
      url: `/palettes/${palette.id}/`,
    })),
  };

  return new Response(JSON.stringify(catalog, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
