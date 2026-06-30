import type { Palette, PaletteCategory, PaletteSource } from "../types";
import { evaluatePaletteColorblindAccessibility } from "../color-vision";
import natureMuted8 from "./nature-muted-8";
import cellAtlas12 from "./cell-atlas-12";
import immunologyCellTypes from "./immunology-cell-types";
import clinicalTrial4 from "./clinical-trial-4";
import colorblindSafe8 from "./colorblind-safe-8";
import okabeIto from "./okabe-ito";
import tableauScientific10 from "./tableau-scientific-10";
import softPastel6 from "./soft-pastel-6";
import highContrast6 from "./high-contrast-6";
import volcanoClassic3 from "./volcano-classic-3";
import blueRedDiverging from "./blue-red-diverging";
import purpleOrangeDiverging from "./purple-orange-diverging";
import viridisLike from "./viridis-like";
import plasmaLike from "./plasma-like";
import cividisLike from "./cividis-like";
import heatmapBlueWhiteRed from "./heatmap-blue-white-red";
import heatmapYellowRed from "./heatmap-yellow-red";
import singleCellCluster20 from "./single-cell-cluster-20";
import tCellStates from "./t-cell-states";
import tumorMicroenvironment from "./tumor-microenvironment";
import immuneStates15 from "./immune-states-15";
import blueExpression7 from "./blue-expression-7";
import greenModuleScore7 from "./green-module-score-7";
import densityTeal8 from "./density-teal-8";
import pseudotimeAmber8 from "./pseudotime-amber-8";
import moduleRose7 from "./module-rose-7";
import probabilityIndigo7 from "./probability-indigo-7";
import microscopyViolet8 from "./microscopy-violet-8";
import softPlasma8 from "./soft-plasma-8";
import cellViabilityLime7 from "./cell-viability-lime-7";
import uncertaintyGrayBlue7 from "./uncertainty-gray-blue-7";
import histologySienna7 from "./histology-sienna-7";
import flowCytometryBluegreen8 from "./flow-cytometry-bluegreen-8";
import logfcBlueRose9 from "./logfc-blue-rose-9";
import correlationTealBrown9 from "./correlation-teal-brown-9";
import zscorePurpleGold9 from "./zscore-purple-gold-9";
import effectSizeNavyOrange9 from "./effect-size-navy-orange-9";
import residualGreenMagenta9 from "./residual-green-magenta-9";
import terrainDiverging9 from "./terrain-diverging-9";
import pcaAxisIndigoVermillion9 from "./pca-axis-indigo-vermillion-9";
import expressionPurpleGoldHeatmap from "./expression-purple-gold-heatmap";
import methylationTealRoseHeatmap from "./methylation-teal-rose-heatmap";
import pathologyBlueSiennaHeatmap from "./pathology-blue-sienna-heatmap";
import spatialDensityHeatmap from "./spatial-density-heatmap";
import proteinAbundanceHeatmap from "./protein-abundance-heatmap";
import lcpmghAmberRed5 from "./lcpmgh-amber-red-5";
import lcpmghBlueRed5 from "./lcpmgh-blue-red-5";
import lcpmghOrangeRed5 from "./lcpmgh-orange-red-5";
import lcpmghBlueAmber5 from "./lcpmgh-blue-amber-5";
import lcpmghBlueRedOrange5 from "./lcpmgh-blue-red-orange-5";
import lcpmghPinkCyan5 from "./lcpmgh-pink-cyan-5";
import lcpmghBlueAmberRed5 from "./lcpmgh-blue-amber-red-5";
import lcpmghAmberRedLime5 from "./lcpmgh-amber-red-lime-5";
import lcpmghOrangeRedAmber5 from "./lcpmgh-orange-red-amber-5";
import lcpmghRedCyan5 from "./lcpmgh-red-cyan-5";
import lcpmghBlueMagenta5 from "./lcpmgh-blue-magenta-5";
import lcpmghBlueOrange5 from "./lcpmgh-blue-orange-5";
import lcpmghRedOrange5 from "./lcpmgh-red-orange-5";
import lcpmghPinkOrange5 from "./lcpmgh-pink-orange-5";
import lcpmghRedBlue5 from "./lcpmgh-red-blue-5";
import lcpmghAmberPink5 from "./lcpmgh-amber-pink-5";
import lcpmghOrangeBlue5 from "./lcpmgh-orange-blue-5";
import lcpmghOrangeGreen6 from "./lcpmgh-orange-green-6";
import lcpmghRedOrange6 from "./lcpmgh-red-orange-6";
import lcpmghAmberTeal6 from "./lcpmgh-amber-teal-6";
import lcpmghRedOrangeGreen6 from "./lcpmgh-red-orange-green-6";
import lcpmghOrangeAmber6 from "./lcpmgh-orange-amber-6";
import lcpmghOrangeRed6 from "./lcpmgh-orange-red-6";
import lcpmghOrangeRedBlue6 from "./lcpmgh-orange-red-blue-6";
import lcpmghRedPink6 from "./lcpmgh-red-pink-6";
import lcpmghRedOrangeBlue6 from "./lcpmgh-red-orange-blue-6";
import lcpmghAmberBlue6 from "./lcpmgh-amber-blue-6";
import lcpmghOrangeRedCyan6 from "./lcpmgh-orange-red-cyan-6";
import lcpmghVioletBlue6 from "./lcpmgh-violet-blue-6";
import lcpmghRedCyan6 from "./lcpmgh-red-cyan-6";
import lcpmghOrangeRedAmber6 from "./lcpmgh-orange-red-amber-6";
import lcpmghAmberRed6 from "./lcpmgh-amber-red-6";
import lcpmghAmberRedBlue6 from "./lcpmgh-amber-red-blue-6";
import lcpmghAmberOrange6 from "./lcpmgh-amber-orange-6";
import lcpmghAmberRedBlueTeal6 from "./lcpmgh-amber-red-blue-teal-6";
import lcpmghOrangeRedIndigo6 from "./lcpmgh-orange-red-indigo-6";
import lcpmghRedAmber6 from "./lcpmgh-red-amber-6";
import lcpmghOrangeCyan6 from "./lcpmgh-orange-cyan-6";
import lcpmghRedOrangeAmber6 from "./lcpmgh-red-orange-amber-6";
import lcpmghAmberOrangeBlue6 from "./lcpmgh-amber-orange-blue-6";
import lcpmghRedBlue6 from "./lcpmgh-red-blue-6";
import lcpmghPinkOrange6 from "./lcpmgh-pink-orange-6";
import lcpmghRedAmberGreen6 from "./lcpmgh-red-amber-green-6";
import lcpmghBlueRed6 from "./lcpmgh-blue-red-6";
import lcpmghRedBlueSlate6 from "./lcpmgh-red-blue-slate-6";
import lcpmghOrangeBlue6 from "./lcpmgh-orange-blue-6";
import lcpmghRedGreen6 from "./lcpmgh-red-green-6";
import lcpmghRedCyanLime6 from "./lcpmgh-red-cyan-lime-6";
import lcpmghLimeBlue6 from "./lcpmgh-lime-blue-6";
import lcpmghRedTeal6 from "./lcpmgh-red-teal-6";
import lcpmghOrangeBlueSlate6 from "./lcpmgh-orange-blue-slate-6";
import lcpmghBlueCyan6 from "./lcpmgh-blue-cyan-6";
import lcpmghOrangeRedAmberBlue6 from "./lcpmgh-orange-red-amber-blue-6";
import lcpmghAmberRed7 from "./lcpmgh-amber-red-7";
import lcpmghAmberOrange7 from "./lcpmgh-amber-orange-7";
import lcpmghCyanLime7 from "./lcpmgh-cyan-lime-7";
import lcpmghOrangeGreen7 from "./lcpmgh-orange-green-7";
import lcpmghAmberOrangeLime7 from "./lcpmgh-amber-orange-lime-7";
import lcpmghCyanOrange7 from "./lcpmgh-cyan-orange-7";
import lcpmghAmberOrangeGreen7 from "./lcpmgh-amber-orange-green-7";
import lcpmghMagentaRed7 from "./lcpmgh-magenta-red-7";
import lcpmghBlueMagenta7 from "./lcpmgh-blue-magenta-7";
import lcpmghIndigoBlue7 from "./lcpmgh-indigo-blue-7";
import lcpmghOrangePink8 from "./lcpmgh-orange-pink-8";
import lcpmghIndigoRed8 from "./lcpmgh-indigo-red-8";
import lcpmghAmberBlue8 from "./lcpmgh-amber-blue-8";
import lcpmghCyanRed8 from "./lcpmgh-cyan-red-8";
import lcpmghOrangeIndigo8 from "./lcpmgh-orange-indigo-8";
import lcpmghBlueOrange8 from "./lcpmgh-blue-orange-8";
import lcpmghBlueOrangePink8 from "./lcpmgh-blue-orange-pink-8";
import lcpmghGreenOrange8 from "./lcpmgh-green-orange-8";
import lcpmghBlueOrangeGreen8 from "./lcpmgh-blue-orange-green-8";
import lcpmghAmberOrange8 from "./lcpmgh-amber-orange-8";
import lcpmghAmberRed9 from "./lcpmgh-amber-red-9";
import lcpmghRedBlue9 from "./lcpmgh-red-blue-9";
import lcpmghAmberTeal9 from "./lcpmgh-amber-teal-9";
import lcpmghOrangeRed9 from "./lcpmgh-orange-red-9";
import lcpmghRedAmber9 from "./lcpmgh-red-amber-9";
import lcpmghCyanBlue9 from "./lcpmgh-cyan-blue-9";
import lcpmghRedCyan9 from "./lcpmgh-red-cyan-9";
import lcpmghAmberRedOrange9 from "./lcpmgh-amber-red-orange-9";
import lcpmghBlueOrange9 from "./lcpmgh-blue-orange-9";
import lcpmghRedAmberBlue9 from "./lcpmgh-red-amber-blue-9";
import lcpmghOrangeCyan9 from "./lcpmgh-orange-cyan-9";
import lcpmghMagentaOrange9 from "./lcpmgh-magenta-orange-9";
import lcpmghIndigoBlue10 from "./lcpmgh-indigo-blue-10";
import lcpmghOrangeBlue10 from "./lcpmgh-orange-blue-10";
import lcpmghTealBlue10 from "./lcpmgh-teal-blue-10";
import lcpmghIndigoRed11 from "./lcpmgh-indigo-red-11";
import lcpmghOrangeRed11 from "./lcpmgh-orange-red-11";
import lcpmghOrangeBlue11 from "./lcpmgh-orange-blue-11";
import lcpmghOrangeAmber11 from "./lcpmgh-orange-amber-11";
import lcpmghOrangeRed12 from "./lcpmgh-orange-red-12";
import lcpmghBlueAmber12 from "./lcpmgh-blue-amber-12";
import lcpmghOrangeRedCyan12 from "./lcpmgh-orange-red-cyan-12";
import lcpmghOrangeRedAmber12 from "./lcpmgh-orange-red-amber-12";
import lcpmghIndigoRed12 from "./lcpmgh-indigo-red-12";
import lcpmghAmberOrange12 from "./lcpmgh-amber-orange-12";
import lcpmghOrangeRed14 from "./lcpmgh-orange-red-14";
import lcpmghOrangeBlue14 from "./lcpmgh-orange-blue-14";
import lcpmghAmberOrange14 from "./lcpmgh-amber-orange-14";
import lcpmghOrangeRed16 from "./lcpmgh-orange-red-16";
import lcpmghAmberTeal16 from "./lcpmgh-amber-teal-16";
import lcpmghAaasScience from "./lcpmgh-aaas-science";
import lcpmghAtlassian from "./lcpmgh-atlassian";
import lcpmghBmj from "./lcpmgh-bmj";
import lcpmghBootstrap from "./lcpmgh-bootstrap";
import lcpmghCosmic from "./lcpmgh-cosmic";
import lcpmghFlatUi from "./lcpmgh-flat-ui";
import lcpmghFrontiers from "./lcpmgh-frontiers";
import lcpmghFuturama from "./lcpmgh-futurama";
import lcpmghGsea from "./lcpmgh-gsea";
import lcpmghIgv from "./lcpmgh-igv";
import lcpmghIterm from "./lcpmgh-iterm";
import lcpmghJama from "./lcpmgh-jama";
import lcpmghJco from "./lcpmgh-jco";
import lcpmghLancet from "./lcpmgh-lancet";
import lcpmghLocuszoom from "./lcpmgh-locuszoom";
import lcpmghMaterialDesign from "./lcpmgh-material-design";
import lcpmghNejm from "./lcpmgh-nejm";
import lcpmghNpgNature from "./lcpmgh-npg-nature";
import lcpmghObservable10 from "./lcpmgh-observable-10";
import lcpmghGithubPrimer from "./lcpmgh-github-primer";
import lcpmghRickAndMorty from "./lcpmgh-rick-and-morty";
import lcpmghTheSimpsons from "./lcpmgh-the-simpsons";
import lcpmghStarTrek from "./lcpmgh-star-trek";
import lcpmghTronLegacy from "./lcpmgh-tron-legacy";
import lcpmghTailwind from "./lcpmgh-tailwind";
import lcpmghUchicago from "./lcpmgh-uchicago";
import lcpmghUcscGenomeBrowser from "./lcpmgh-ucsc-genome-browser";
import lcpmghR3Classic from "./lcpmgh-r3-classic";
import lcpmghR4Modern from "./lcpmgh-r4-modern";
import lcpmghGgplot2Hue from "./lcpmgh-ggplot2-hue";
import lcpmghAccent from "./lcpmgh-accent";
import lcpmghDark2 from "./lcpmgh-dark2";
import lcpmghPaired from "./lcpmgh-paired";
import lcpmghPastel1 from "./lcpmgh-pastel1";
import lcpmghPastel2 from "./lcpmgh-pastel2";
import lcpmghSet1 from "./lcpmgh-set1";
import lcpmghSet2 from "./lcpmgh-set2";
import lcpmghSet3 from "./lcpmgh-set3";
import lcpmghPolychrome36 from "./lcpmgh-polychrome-36";

const paletteEntries = [
  ["nature-muted-8", natureMuted8],
  ["cell-atlas-12", cellAtlas12],
  ["immunology-cell-types", immunologyCellTypes],
  ["clinical-trial-4", clinicalTrial4],
  ["colorblind-safe-8", colorblindSafe8],
  ["okabe-ito", okabeIto],
  ["tableau-scientific-10", tableauScientific10],
  ["soft-pastel-6", softPastel6],
  ["high-contrast-6", highContrast6],
  ["volcano-classic-3", volcanoClassic3],
  ["blue-red-diverging", blueRedDiverging],
  ["purple-orange-diverging", purpleOrangeDiverging],
  ["viridis-like", viridisLike],
  ["plasma-like", plasmaLike],
  ["cividis-like", cividisLike],
  ["heatmap-blue-white-red", heatmapBlueWhiteRed],
  ["heatmap-yellow-red", heatmapYellowRed],
  ["single-cell-cluster-20", singleCellCluster20],
  ["t-cell-states", tCellStates],
  ["tumor-microenvironment", tumorMicroenvironment],
  ["immune-states-15", immuneStates15],
  ["blue-expression-7", blueExpression7],
  ["green-module-score-7", greenModuleScore7],
  ["density-teal-8", densityTeal8],
  ["pseudotime-amber-8", pseudotimeAmber8],
  ["module-rose-7", moduleRose7],
  ["probability-indigo-7", probabilityIndigo7],
  ["microscopy-violet-8", microscopyViolet8],
  ["soft-plasma-8", softPlasma8],
  ["cell-viability-lime-7", cellViabilityLime7],
  ["uncertainty-gray-blue-7", uncertaintyGrayBlue7],
  ["histology-sienna-7", histologySienna7],
  ["flow-cytometry-bluegreen-8", flowCytometryBluegreen8],
  ["logfc-blue-rose-9", logfcBlueRose9],
  ["correlation-teal-brown-9", correlationTealBrown9],
  ["zscore-purple-gold-9", zscorePurpleGold9],
  ["effect-size-navy-orange-9", effectSizeNavyOrange9],
  ["residual-green-magenta-9", residualGreenMagenta9],
  ["terrain-diverging-9", terrainDiverging9],
  ["pca-axis-indigo-vermillion-9", pcaAxisIndigoVermillion9],
  ["expression-purple-gold-heatmap", expressionPurpleGoldHeatmap],
  ["methylation-teal-rose-heatmap", methylationTealRoseHeatmap],
  ["pathology-blue-sienna-heatmap", pathologyBlueSiennaHeatmap],
  ["spatial-density-heatmap", spatialDensityHeatmap],
  ["protein-abundance-heatmap", proteinAbundanceHeatmap],
  ["lcpmgh-amber-red-5", lcpmghAmberRed5],
  ["lcpmgh-blue-red-5", lcpmghBlueRed5],
  ["lcpmgh-orange-red-5", lcpmghOrangeRed5],
  ["lcpmgh-blue-amber-5", lcpmghBlueAmber5],
  ["lcpmgh-blue-red-orange-5", lcpmghBlueRedOrange5],
  ["lcpmgh-pink-cyan-5", lcpmghPinkCyan5],
  ["lcpmgh-blue-amber-red-5", lcpmghBlueAmberRed5],
  ["lcpmgh-amber-red-lime-5", lcpmghAmberRedLime5],
  ["lcpmgh-orange-red-amber-5", lcpmghOrangeRedAmber5],
  ["lcpmgh-red-cyan-5", lcpmghRedCyan5],
  ["lcpmgh-blue-magenta-5", lcpmghBlueMagenta5],
  ["lcpmgh-blue-orange-5", lcpmghBlueOrange5],
  ["lcpmgh-red-orange-5", lcpmghRedOrange5],
  ["lcpmgh-pink-orange-5", lcpmghPinkOrange5],
  ["lcpmgh-red-blue-5", lcpmghRedBlue5],
  ["lcpmgh-amber-pink-5", lcpmghAmberPink5],
  ["lcpmgh-orange-blue-5", lcpmghOrangeBlue5],
  ["lcpmgh-orange-green-6", lcpmghOrangeGreen6],
  ["lcpmgh-red-orange-6", lcpmghRedOrange6],
  ["lcpmgh-amber-teal-6", lcpmghAmberTeal6],
  ["lcpmgh-red-orange-green-6", lcpmghRedOrangeGreen6],
  ["lcpmgh-orange-amber-6", lcpmghOrangeAmber6],
  ["lcpmgh-orange-red-6", lcpmghOrangeRed6],
  ["lcpmgh-orange-red-blue-6", lcpmghOrangeRedBlue6],
  ["lcpmgh-red-pink-6", lcpmghRedPink6],
  ["lcpmgh-red-orange-blue-6", lcpmghRedOrangeBlue6],
  ["lcpmgh-amber-blue-6", lcpmghAmberBlue6],
  ["lcpmgh-orange-red-cyan-6", lcpmghOrangeRedCyan6],
  ["lcpmgh-violet-blue-6", lcpmghVioletBlue6],
  ["lcpmgh-red-cyan-6", lcpmghRedCyan6],
  ["lcpmgh-orange-red-amber-6", lcpmghOrangeRedAmber6],
  ["lcpmgh-amber-red-6", lcpmghAmberRed6],
  ["lcpmgh-amber-red-blue-6", lcpmghAmberRedBlue6],
  ["lcpmgh-amber-orange-6", lcpmghAmberOrange6],
  ["lcpmgh-amber-red-blue-teal-6", lcpmghAmberRedBlueTeal6],
  ["lcpmgh-orange-red-indigo-6", lcpmghOrangeRedIndigo6],
  ["lcpmgh-red-amber-6", lcpmghRedAmber6],
  ["lcpmgh-orange-cyan-6", lcpmghOrangeCyan6],
  ["lcpmgh-red-orange-amber-6", lcpmghRedOrangeAmber6],
  ["lcpmgh-amber-orange-blue-6", lcpmghAmberOrangeBlue6],
  ["lcpmgh-red-blue-6", lcpmghRedBlue6],
  ["lcpmgh-pink-orange-6", lcpmghPinkOrange6],
  ["lcpmgh-red-amber-green-6", lcpmghRedAmberGreen6],
  ["lcpmgh-blue-red-6", lcpmghBlueRed6],
  ["lcpmgh-red-blue-slate-6", lcpmghRedBlueSlate6],
  ["lcpmgh-orange-blue-6", lcpmghOrangeBlue6],
  ["lcpmgh-red-green-6", lcpmghRedGreen6],
  ["lcpmgh-red-cyan-lime-6", lcpmghRedCyanLime6],
  ["lcpmgh-lime-blue-6", lcpmghLimeBlue6],
  ["lcpmgh-red-teal-6", lcpmghRedTeal6],
  ["lcpmgh-orange-blue-slate-6", lcpmghOrangeBlueSlate6],
  ["lcpmgh-blue-cyan-6", lcpmghBlueCyan6],
  ["lcpmgh-orange-red-amber-blue-6", lcpmghOrangeRedAmberBlue6],
  ["lcpmgh-amber-red-7", lcpmghAmberRed7],
  ["lcpmgh-amber-orange-7", lcpmghAmberOrange7],
  ["lcpmgh-cyan-lime-7", lcpmghCyanLime7],
  ["lcpmgh-orange-green-7", lcpmghOrangeGreen7],
  ["lcpmgh-amber-orange-lime-7", lcpmghAmberOrangeLime7],
  ["lcpmgh-cyan-orange-7", lcpmghCyanOrange7],
  ["lcpmgh-amber-orange-green-7", lcpmghAmberOrangeGreen7],
  ["lcpmgh-magenta-red-7", lcpmghMagentaRed7],
  ["lcpmgh-blue-magenta-7", lcpmghBlueMagenta7],
  ["lcpmgh-indigo-blue-7", lcpmghIndigoBlue7],
  ["lcpmgh-orange-pink-8", lcpmghOrangePink8],
  ["lcpmgh-indigo-red-8", lcpmghIndigoRed8],
  ["lcpmgh-amber-blue-8", lcpmghAmberBlue8],
  ["lcpmgh-cyan-red-8", lcpmghCyanRed8],
  ["lcpmgh-orange-indigo-8", lcpmghOrangeIndigo8],
  ["lcpmgh-blue-orange-8", lcpmghBlueOrange8],
  ["lcpmgh-blue-orange-pink-8", lcpmghBlueOrangePink8],
  ["lcpmgh-green-orange-8", lcpmghGreenOrange8],
  ["lcpmgh-blue-orange-green-8", lcpmghBlueOrangeGreen8],
  ["lcpmgh-amber-orange-8", lcpmghAmberOrange8],
  ["lcpmgh-amber-red-9", lcpmghAmberRed9],
  ["lcpmgh-red-blue-9", lcpmghRedBlue9],
  ["lcpmgh-amber-teal-9", lcpmghAmberTeal9],
  ["lcpmgh-orange-red-9", lcpmghOrangeRed9],
  ["lcpmgh-red-amber-9", lcpmghRedAmber9],
  ["lcpmgh-cyan-blue-9", lcpmghCyanBlue9],
  ["lcpmgh-red-cyan-9", lcpmghRedCyan9],
  ["lcpmgh-amber-red-orange-9", lcpmghAmberRedOrange9],
  ["lcpmgh-blue-orange-9", lcpmghBlueOrange9],
  ["lcpmgh-red-amber-blue-9", lcpmghRedAmberBlue9],
  ["lcpmgh-orange-cyan-9", lcpmghOrangeCyan9],
  ["lcpmgh-magenta-orange-9", lcpmghMagentaOrange9],
  ["lcpmgh-indigo-blue-10", lcpmghIndigoBlue10],
  ["lcpmgh-orange-blue-10", lcpmghOrangeBlue10],
  ["lcpmgh-teal-blue-10", lcpmghTealBlue10],
  ["lcpmgh-indigo-red-11", lcpmghIndigoRed11],
  ["lcpmgh-orange-red-11", lcpmghOrangeRed11],
  ["lcpmgh-orange-blue-11", lcpmghOrangeBlue11],
  ["lcpmgh-orange-amber-11", lcpmghOrangeAmber11],
  ["lcpmgh-orange-red-12", lcpmghOrangeRed12],
  ["lcpmgh-blue-amber-12", lcpmghBlueAmber12],
  ["lcpmgh-orange-red-cyan-12", lcpmghOrangeRedCyan12],
  ["lcpmgh-orange-red-amber-12", lcpmghOrangeRedAmber12],
  ["lcpmgh-indigo-red-12", lcpmghIndigoRed12],
  ["lcpmgh-amber-orange-12", lcpmghAmberOrange12],
  ["lcpmgh-orange-red-14", lcpmghOrangeRed14],
  ["lcpmgh-orange-blue-14", lcpmghOrangeBlue14],
  ["lcpmgh-amber-orange-14", lcpmghAmberOrange14],
  ["lcpmgh-orange-red-16", lcpmghOrangeRed16],
  ["lcpmgh-amber-teal-16", lcpmghAmberTeal16],
  ["lcpmgh-aaas-science", lcpmghAaasScience],
  ["lcpmgh-atlassian", lcpmghAtlassian],
  ["lcpmgh-bmj", lcpmghBmj],
  ["lcpmgh-bootstrap", lcpmghBootstrap],
  ["lcpmgh-cosmic", lcpmghCosmic],
  ["lcpmgh-flat-ui", lcpmghFlatUi],
  ["lcpmgh-frontiers", lcpmghFrontiers],
  ["lcpmgh-futurama", lcpmghFuturama],
  ["lcpmgh-gsea", lcpmghGsea],
  ["lcpmgh-igv", lcpmghIgv],
  ["lcpmgh-iterm", lcpmghIterm],
  ["lcpmgh-jama", lcpmghJama],
  ["lcpmgh-jco", lcpmghJco],
  ["lcpmgh-lancet", lcpmghLancet],
  ["lcpmgh-locuszoom", lcpmghLocuszoom],
  ["lcpmgh-material-design", lcpmghMaterialDesign],
  ["lcpmgh-nejm", lcpmghNejm],
  ["lcpmgh-npg-nature", lcpmghNpgNature],
  ["lcpmgh-observable-10", lcpmghObservable10],
  ["lcpmgh-github-primer", lcpmghGithubPrimer],
  ["lcpmgh-rick-and-morty", lcpmghRickAndMorty],
  ["lcpmgh-the-simpsons", lcpmghTheSimpsons],
  ["lcpmgh-star-trek", lcpmghStarTrek],
  ["lcpmgh-tron-legacy", lcpmghTronLegacy],
  ["lcpmgh-tailwind", lcpmghTailwind],
  ["lcpmgh-uchicago", lcpmghUchicago],
  ["lcpmgh-ucsc-genome-browser", lcpmghUcscGenomeBrowser],
  ["lcpmgh-r3-classic", lcpmghR3Classic],
  ["lcpmgh-r4-modern", lcpmghR4Modern],
  ["lcpmgh-ggplot2-hue", lcpmghGgplot2Hue],
  ["lcpmgh-accent", lcpmghAccent],
  ["lcpmgh-dark2", lcpmghDark2],
  ["lcpmgh-paired", lcpmghPaired],
  ["lcpmgh-pastel1", lcpmghPastel1],
  ["lcpmgh-pastel2", lcpmghPastel2],
  ["lcpmgh-set1", lcpmghSet1],
  ["lcpmgh-set2", lcpmghSet2],
  ["lcpmgh-set3", lcpmghSet3],
  ["lcpmgh-polychrome-36", lcpmghPolychrome36],
] as const satisfies ReadonlyArray<readonly [string, PaletteSource]>;

export const paletteRouteKeys = paletteEntries.map(([key]) => key);

export const paletteSources: PaletteSource[] = paletteEntries.map(([, source]) => source);

function hashRouteKey(routeKey: string): string {
  const signature = `scipalette-palette-route:v1:${routeKey.trim().toLowerCase()}`;
  let first = 0x811c9dc5;
  let second = 0x9e3779b9;

  for (let index = 0; index < signature.length; index += 1) {
    const code = signature.charCodeAt(index);
    first = Math.imul(first ^ code, 0x01000193);
    second = Math.imul(second ^ code, 0x85ebca6b) ^ first;
  }

  const firstPart = (first >>> 0).toString(36).padStart(6, "0").slice(-6);
  const secondPart = (second >>> 0).toString(36).padStart(6, "0").slice(-6);
  return `${firstPart}${secondPart}`;
}

export function createPaletteId(routeKey: string): string {
  return `sp-${hashRouteKey(routeKey)}`;
}

function materializePalette(routeKey: string, source: PaletteSource): Palette {
  const colorblindReport = evaluatePaletteColorblindAccessibility(source.colors);

  return {
    id: createPaletteId(routeKey),
    ...source,
    colorblindSafe: colorblindReport.safe,
    colorblindScore: colorblindReport.score,
    colorblindReport,
  };
}

export const palettes: Palette[] = paletteEntries.map(([routeKey, source]) => materializePalette(routeKey, source));

export function getPaletteById(id: string): Palette | undefined {
  return palettes.find((palette) => palette.id === id);
}

export function getPalettesByCategory(category: PaletteCategory): Palette[] {
  return palettes.filter((palette) => palette.category === category);
}

export function getPalettesByTag(tag: string): Palette[] {
  return palettes.filter((palette) => palette.tags.includes(tag));
}

export function getColorblindSafePalettes(): Palette[] {
  return palettes.filter((palette) => palette.colorblindSafe);
}
