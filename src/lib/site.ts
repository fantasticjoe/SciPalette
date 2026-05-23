export const siteConfig = {
  basePath: "",
  repositoryUrl: "https://github.com/fantasticjoe/SciPalette",
  navigation: [
    { id: "palettes", label: "Palettes", href: "/#palettes" },
    { id: "art2pal", label: "Art2Pal", href: "/art2pal/" },
    { id: "accessible", label: "Accessible", href: "/#accessible", hideOnMobile: true },
    { id: "github", label: "GitHub", href: "https://github.com/fantasticjoe/SciPalette", hideOnMobile: true },
  ],
} as const;
