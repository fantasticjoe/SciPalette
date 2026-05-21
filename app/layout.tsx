import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SciPalette - Scientific Color Palettes for Publication Figures",
  description: "Curated color palettes for publication-ready scientific figures. Perfect for research papers, single-cell analysis, medical statistics, and scientific visualization.",
  keywords: ["scientific color palettes", "publication figures", "research visualization", "single-cell analysis", "colorblind-safe palettes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
