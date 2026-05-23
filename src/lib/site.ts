export const siteConfig = {
  basePath: "",
  repositoryUrl: "https://github.com/fantasticjoe/SciPalette",
  navigation: [
    { id: "palettes", label: "Palettes", href: "/palettes/" },
    { id: "recommend", label: "Recommend", href: "/recommend/" },
    { id: "compare", label: "Compare", href: "/compare/" },
    { id: "art2pal", label: "Art2Pal", href: "/art2pal/" },
    { id: "contribute", label: "Contribute", href: "/contribute/" },
    { id: "about", label: "About", href: "/about/" },
  ],
} as const;
