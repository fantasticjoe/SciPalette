export const siteConfig = {
  basePath: "/SciPalette",
  repositoryUrl: "https://github.com/fantasticjoe/SciPalette",
  navigation: [
    { id: "palettes", label: "Palettes", href: "/SciPalette/#palettes" },
    { id: "art2pal", label: "Art2Pal", href: "/SciPalette/art2pal/" },
    { id: "accessible", label: "Accessible", href: "/SciPalette/#accessible", hideOnMobile: true },
    { id: "github", label: "GitHub", href: "https://github.com/fantasticjoe/SciPalette", hideOnMobile: true },
  ],
} as const;
