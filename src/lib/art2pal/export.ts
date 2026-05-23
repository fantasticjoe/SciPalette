export type PaletteExportFormat = "hex" | "json" | "css" | "python" | "r";

export const paletteExportFormats: { value: PaletteExportFormat; label: string }[] = [
  { value: "hex", label: "HEX list" },
  { value: "json", label: "JSON" },
  { value: "css", label: "CSS variables" },
  { value: "python", label: "Python" },
  { value: "r", label: "R ggplot2" },
];

export function formatPaletteExport(colors: string[], format: PaletteExportFormat): string {
  switch (format) {
    case "json":
      return JSON.stringify(colors, null, 2);
    case "css":
      return [":root {", ...colors.map((color, index) => `  --color-${index + 1}: ${color};`), "}"].join("\n");
    case "python":
      return `palette = [${colors.map((color) => `"${color}"`).join(", ")}]`;
    case "r":
      const rVector = `c(${colors.map((color) => `"${color}"`).join(", ")})`;
      return [
        `scale_color_manual(values = ${rVector})`,
        `scale_fill_manual(values = ${rVector})`,
      ].join("\n");
    case "hex":
    default:
      return colors.join(", ");
  }
}
