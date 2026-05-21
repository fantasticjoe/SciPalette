import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  base: "/SciPalette",
  output: "static",
  integrations: [react()],
});
