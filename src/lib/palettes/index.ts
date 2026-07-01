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

import ptAPalette from "./pt-a-palette";
import ptAcadia from "./pt-acadia";
import ptAgSunset from "./pt-ag-sunset";
import ptAgriculture from "./pt-agriculture";
import ptAlkalay1 from "./pt-alkalay1";
import ptAlkalay2 from "./pt-alkalay2";
import ptAlthoff from "./pt-althoff";
import ptAndri from "./pt-andri";
import ptAndywarhol1 from "./pt-andywarhol-1";
import ptAndywarhol2 from "./pt-andywarhol-2";
import ptAnemone from "./pt-anemone";
import ptAppletv from "./pt-appletv";
import ptApricot from "./pt-apricot";
import ptArashiyama from "./pt-arashiyama";
import ptArbutus from "./pt-arbutus";
import ptArchambault from "./pt-archambault";
import ptArches from "./pt-arches";
import ptArches2 from "./pt-arches2";
import ptArcticgates from "./pt-arcticgates";
import ptArmyrose from "./pt-armyrose";
import ptAsteroidcity3 from "./pt-asteroidcity3";
import ptAtomicClock from "./pt-atomic-clock";
import ptAussieFlatui from "./pt-aussie-flatui";
import ptAustria from "./pt-austria";
import ptAvedon from "./pt-avedon";
import ptBadlands from "./pt-badlands";
import ptBasel from "./pt-basel";
import ptBay from "./pt-bay";
import ptBeach from "./pt-beach";
import ptBenagil from "./pt-benagil";
import ptBerry from "./pt-berry";
import ptBigsur2 from "./pt-bigsur2";
import ptBillyapple from "./pt-billyapple";
import ptBlue2darkorange12steps from "./pt-blue2darkorange12steps";
import ptBlue2darkred12steps from "./pt-blue2darkred12steps";
import ptBlue2gray8steps from "./pt-blue2gray8steps";
import ptBlue2green14steps from "./pt-blue2green14steps";
import ptBlue2orange10steps from "./pt-blue2orange10steps";
import ptBlueprint from "./pt-blueprint";
import ptBlueprint2 from "./pt-blueprint2";
import ptBlueridgepkwy from "./pt-blueridgepkwy";
import ptBlues9 from "./pt-blues9";
import ptBluyl from "./pt-bluyl";
import ptBold from "./pt-bold";
import ptBottlerocket2 from "./pt-bottlerocket2";
import ptBright from "./pt-bright";
import ptBright2 from "./pt-bright-2";
import ptBrown2blue10steps from "./pt-brown2blue10steps";
import ptBrwnyl from "./pt-brwnyl";
import ptBryce from "./pt-bryce";
import ptBudnitz from "./pt-budnitz";
import ptBuow from "./pt-buow";
import ptBurg from "./pt-burg";
import ptCMCoolidge from "./pt-c-m-coolidge";
import ptCalc from "./pt-calc";
import ptCancri from "./pt-cancri";
import ptCandyBright from "./pt-candy-bright";
import ptCandySoft from "./pt-candy-soft";
import ptCapitolreef from "./pt-capitolreef";
import ptCaqu from "./pt-caqu";
import ptCars from "./pt-cars";
import ptCavalcanti1 from "./pt-cavalcanti1";
import ptCeriselimon from "./pt-ceriselimon";
import ptChaparral3 from "./pt-chaparral3";
import ptCharmonix from "./pt-charmonix";
import ptChevalier1 from "./pt-chevalier1";
import ptChinaTraditional1 from "./pt-china-traditional-1";
import ptChinaTraditional10 from "./pt-china-traditional-10";
import ptChinaTraditional11 from "./pt-china-traditional-11";
import ptChinaTraditional12 from "./pt-china-traditional-12";
import ptChinaTraditional13 from "./pt-china-traditional-13";
import ptChinaTraditional14 from "./pt-china-traditional-14";
import ptChinaTraditional15 from "./pt-china-traditional-15";
import ptChinaTraditional16 from "./pt-china-traditional-16";
import ptChinaTraditional17 from "./pt-china-traditional-17";
import ptChinaTraditional18 from "./pt-china-traditional-18";
import ptChinaTraditional19 from "./pt-china-traditional-19";
import ptChinaTraditional2 from "./pt-china-traditional-2";
import ptChinaTraditional20 from "./pt-china-traditional-20";
import ptChinaTraditional3 from "./pt-china-traditional-3";
import ptChinaTraditional4 from "./pt-china-traditional-4";
import ptChinaTraditional5 from "./pt-china-traditional-5";
import ptChinaTraditional6 from "./pt-china-traditional-6";
import ptChinaTraditional7 from "./pt-china-traditional-7";
import ptChinaTraditional8 from "./pt-china-traditional-8";
import ptChinaTraditional9 from "./pt-china-traditional-9";
import ptClaesoldenburg from "./pt-claesoldenburg";
import ptClassicBlueRed6 from "./pt-classic-blue-red-6";
import ptClassicGreenOrange6 from "./pt-classic-green-orange-6";
import ptClassicPurpleGray6 from "./pt-classic-purple-gray-6";
import ptCoastaldune2 from "./pt-coastaldune2";
import ptCoconut from "./pt-coconut";
import ptColorblindSafe from "./pt-colorblind-safe";
import ptConnors from "./pt-connors";
import ptCuyahoga from "./pt-cuyahoga";
import ptDarjeeling1 from "./pt-darjeeling1";
import ptDarjeeling2 from "./pt-darjeeling2";
import ptDark from "./pt-dark";
import ptDark2 from "./pt-dark-2";
import ptDavinci from "./pt-davinci";
import ptDeathvalley from "./pt-deathvalley";
import ptDeepOrangeMaterial from "./pt-deep-orange-material";
import ptDefault from "./pt-default";
import ptDegas from "./pt-degas";
import ptDegas2 from "./pt-degas-2";
import ptDenali from "./pt-denali";
import ptDerain from "./pt-derain";
import ptDesert from "./pt-desert";
import ptDiazo from "./pt-diazo";
import ptDoughton from "./pt-doughton";
import ptDpbipugn from "./pt-dpbipugn";
import ptDpbipuor from "./pt-dpbipuor";
import ptDpbirdgy from "./pt-dpbirdgy";
import ptDpbiylbu from "./pt-dpbiylbu";
import ptEarth from "./pt-earth";
import ptEarth2 from "./pt-earth-2";
import ptEdvardmunch1 from "./pt-edvardmunch-1";
import ptEgypt from "./pt-egypt";
import ptEmrld from "./pt-emrld";
import ptEnceladus from "./pt-enceladus";
import ptErnst from "./pt-ernst";
import ptEschscholzia from "./pt-eschscholzia";
import ptEspresso from "./pt-espresso";
import ptEuropa from "./pt-europa";
import ptEverglades from "./pt-everglades";
import ptExcelAtlas from "./pt-excel-atlas";
import ptExcelBerlin from "./pt-excel-berlin";
import ptExcelCelestial from "./pt-excel-celestial";
import ptExcelDepth from "./pt-excel-depth";
import ptExcelFacet from "./pt-excel-facet";
import ptExcelIon from "./pt-excel-ion";
import ptExcelOfficeTheme from "./pt-excel-office-theme";
import ptExcelOrganic from "./pt-excel-organic";
import ptExcelParallax from "./pt-excel-parallax";
import ptExcelSlice from "./pt-excel-slice";
import ptExcelSlipstream from "./pt-excel-slipstream";
import ptExcelVaporTrail from "./pt-excel-vapor-trail";
import ptExter from "./pt-exter";
import ptFall from "./pt-fall";
import ptFantasticfox1 from "./pt-fantasticfox1";
import ptFewDark from "./pt-few-dark";
import ptFewMedium from "./pt-few-medium";
import ptFir from "./pt-fir";
import ptFire from "./pt-fire";
import ptFivethirtyeight from "./pt-fivethirtyeight";
import ptFlash from "./pt-flash";
import ptFloral2 from "./pt-floral2";
import ptFridakahlo from "./pt-fridakahlo";
import ptFritsch from "./pt-fritsch";
import ptFun from "./pt-fun";
import ptGalah from "./pt-galah";
import ptGenedavis from "./pt-genedavis";
import ptGeorgiaokeeffe from "./pt-georgiaokeeffe";
import ptGiorgiodechirico1 from "./pt-giorgiodechirico-1";
import ptGlacier from "./pt-glacier";
import ptGoogle from "./pt-google";
import ptGrandTour from "./pt-grand-tour";
import ptGrandbudapest1 from "./pt-grandbudapest1";
import ptGrassdry from "./pt-grassdry";
import ptGrasswet from "./pt-grasswet";
import ptGreek from "./pt-greek";
import ptGreenMaterial from "./pt-green-material";
import ptGreen2magenta16steps from "./pt-green2magenta16steps";
import ptGreyMaterial from "./pt-grey-material";
import ptGustavklimt from "./pt-gustavklimt";
import ptHalfdome from "./pt-halfdome";
import ptHawaii from "./pt-hawaii";
import ptHealthyReef from "./pt-healthy-reef";
import ptHelenfrankenthaler from "./pt-helenfrankenthaler";
import ptHilmaafklint from "./pt-hilmaafklint";
import ptHokusai from "./pt-hokusai";
import ptHokusai3 from "./pt-hokusai3";
import ptHomer1 from "./pt-homer1";
import ptHomer2 from "./pt-homer2";
import ptHopper from "./pt-hopper";
import ptIguazufalls from "./pt-iguazufalls";
import ptIndigoMaterial from "./pt-indigo-material";
import ptIngres from "./pt-ingres";
import ptIsfahan1 from "./pt-isfahan1";
import ptIsfahan2 from "./pt-isfahan2";
import ptIsleofdogs1 from "./pt-isleofdogs1";
import ptJacksonpollock from "./pt-jacksonpollock";
import ptJava from "./pt-java";
import ptJeanMichelbasquiat from "./pt-jean-michelbasquiat";
import ptJeanMichelbasquiat1 from "./pt-jean-michelbasquiat-1";
import ptJohannesvermeer from "./pt-johannesvermeer";
import ptJohnsingersargent from "./pt-johnsingersargent";
import ptJohnson from "./pt-johnson";
import ptJoyful from "./pt-joyful";
import ptJuarez from "./pt-juarez";
import ptJupiter from "./pt-jupiter";
import ptKandinsky from "./pt-kandinsky";
import ptKazimirmalevich from "./pt-kazimirmalevich";
import ptKelp1 from "./pt-kelp1";
import ptKepler16b from "./pt-kepler16b";
import ptKepler186 from "./pt-kepler186";
import ptKeylime from "./pt-keylime";
import ptKikimedium from "./pt-kikimedium";
import ptKingscanyon from "./pt-kingscanyon";
import ptKippenberger from "./pt-kippenberger";
import ptKiwisandia from "./pt-kiwisandia";
import ptKlein from "./pt-klein";
import ptKlimt from "./pt-klimt";
import ptKoons from "./pt-koons";
import ptLake from "./pt-lake";
import ptLake2 from "./pt-lake-2";
import ptLakelouise from "./pt-lakelouise";
import ptLakenakuru from "./pt-lakenakuru";
import ptLakota from "./pt-lakota";
import ptLaputamedium from "./pt-laputamedium";
import ptLeekrasner from "./pt-leekrasner";
import ptLemon from "./pt-lemon";
import ptLight from "./pt-light";
import ptLightblue2darkblue10steps from "./pt-lightblue2darkblue10steps";
import ptLightblue2darkblue7steps from "./pt-lightblue2darkblue7steps";
import ptLime from "./pt-lime";
import ptLimeMaterial from "./pt-lime-material";
import ptLively from "./pt-lively";
import ptLorikeet from "./pt-lorikeet";
import ptLupi from "./pt-lupi";
import ptLupinus from "./pt-lupinus";
import ptMango from "./pt-mango";
import ptMarcchagall from "./pt-marcchagall";
import ptMars from "./pt-mars";
import ptMediumcontrast from "./pt-mediumcontrast";
import ptMelonpomelo from "./pt-melonpomelo";
import ptMiltonavery1 from "./pt-miltonavery-1";
import ptMonet from "./pt-monet";
import ptMononokemedium from "./pt-mononokemedium";
import ptMoonrise1 from "./pt-moonrise1";
import ptMoonrise2 from "./pt-moonrise2";
import ptMoreau from "./pt-moreau";
import ptMoth from "./pt-moth";
import ptMpalette from "./pt-mpalette";
import ptMtmckinley from "./pt-mtmckinley";
import ptMtrainier from "./pt-mtrainier";
import ptMunch from "./pt-munch";
import ptMurepepino from "./pt-murepepino";
import ptMushroom from "./pt-mushroom";
import ptNavajo from "./pt-navajo";
import ptNemo from "./pt-nemo";
import ptNeon from "./pt-neon";
import ptNeon2 from "./pt-neon-2";
import ptNizami from "./pt-nizami";
import ptNolanNed from "./pt-nolan-ned";
import ptOhbrother from "./pt-ohbrother";
import ptOhchi from "./pt-ohchi";
import ptOkabeito from "./pt-okabeito";
import ptOkavango from "./pt-okavango";
import ptOkeeffe from "./pt-okeeffe";
import ptOlsenQual from "./pt-olsen-qual";
import ptOrangeMaterial from "./pt-orange-material";
import ptOskarschlemmer from "./pt-oskarschlemmer";
import ptPaintjet from "./pt-paintjet";
import ptPairedcolor12steps from "./pt-pairedcolor12steps";
import ptPal10 from "./pt-pal10";
import ptPal11 from "./pt-pal11";
import ptPal12 from "./pt-pal12";
import ptPal2 from "./pt-pal2";
import ptPal3 from "./pt-pal3";
import ptPal4 from "./pt-pal4";
import ptPal5 from "./pt-pal5";
import ptPal6 from "./pt-pal6";
import ptPal7 from "./pt-pal7";
import ptPal8 from "./pt-pal8";
import ptPal9 from "./pt-pal9";
import ptPalermo from "./pt-palermo";
import ptPan from "./pt-pan";
import ptPassionfruit from "./pt-passionfruit";
import ptPaulklee1 from "./pt-paulklee-1";
import ptPaveltchelitchew from "./pt-paveltchelitchew";
import ptPeachpear from "./pt-peachpear";
import ptPearl from "./pt-pearl";
import ptPearl2 from "./pt-pearl2";
import ptPeru1 from "./pt-peru1";
import ptPicabia from "./pt-picabia";
import ptPicasso from "./pt-picasso";
import ptPietmondrian from "./pt-pietmondrian";
import ptPinafraise from "./pt-pinafraise";
import ptPinkMaterial from "./pt-pink-material";
import ptPinkgreens from "./pt-pinkgreens";
import ptPinkyl from "./pt-pinkyl";
import ptPommebaya from "./pt-pommebaya";
import ptPony from "./pt-pony";
import ptPpalette from "./pt-ppalette";
import ptPrismDark from "./pt-prism-dark";
import ptPso from "./pt-pso";
import ptPurp from "./pt-purp";
import ptPurpleMaterial from "./pt-purple-material";
import ptPurplegreens from "./pt-purplegreens";
import ptPurplepinks from "./pt-purplepinks";
import ptPurpletangerines from "./pt-purpletangerines";
import ptPurpleyellows from "./pt-purpleyellows";
import ptPurpor from "./pt-purpor";
import ptQmso12 from "./pt-qmso12";
import ptQmsopap from "./pt-qmsopap";
import ptQmsordpu from "./pt-qmsordpu";
import ptQmsostd from "./pt-qmsostd";
import ptQmsoyl from "./pt-qmsoyl";
import ptQpbi from "./pt-qpbi";
import ptRaphael from "./pt-raphael";
import ptRattner from "./pt-rattner";
import ptRedblues from "./pt-redblues";
import ptRedor from "./pt-redor";
import ptRedwoods from "./pt-redwoods";
import ptRelax from "./pt-relax";
import ptRembrandt from "./pt-rembrandt";
import ptRembrandt2 from "./pt-rembrandt-2";
import ptRenemagritte from "./pt-renemagritte";
import ptRenoir from "./pt-renoir";
import ptRockymountains from "./pt-rockymountains";
import ptRoyal1 from "./pt-royal1";
import ptRoylichtenstein from "./pt-roylichtenstein";
import ptRoylichtenstein1 from "./pt-roylichtenstein-1";
import ptRushmore from "./pt-rushmore";
import ptSafe from "./pt-safe";
import ptSage from "./pt-sage";
import ptSaguaro from "./pt-saguaro";
import ptSandrobotticelli1 from "./pt-sandrobotticelli-1";
import ptSbchannel from "./pt-sbchannel";
import ptShadesOfGray from "./pt-shades-of-gray";
import ptShuksan2 from "./pt-shuksan2";
import ptSidhu from "./pt-sidhu";
import ptSierra1 from "./pt-sierra1";
import ptSignatureSubstitutionsCosmic from "./pt-signature-substitutions-cosmic";
import ptSmallWorld from "./pt-small-world";
import ptSmith from "./pt-smith";
import ptSmokymountains from "./pt-smokymountains";
import ptSmokymtns from "./pt-smokymtns";
import ptSollewitt from "./pt-sollewitt";
import ptSouthpark from "./pt-southpark";
import ptSpalette from "./pt-spalette";
import ptSpbior from "./pt-spbior";
import ptSpbirdpu from "./pt-spbirdpu";
import ptSpbiyl from "./pt-spbiyl";
import ptSpbiylgn from "./pt-spbiylgn";
import ptSpiritedmedium from "./pt-spiritedmedium";
import ptSpring2 from "./pt-spring2";
import ptStaalmeesters from "./pt-staalmeesters";
import ptStainedGlass from "./pt-stained-glass";
import ptStarfish from "./pt-starfish";
import ptStarry from "./pt-starry";
import ptStarry2 from "./pt-starry2";
import ptSunnyGarden from "./pt-sunny-garden";
import ptSunset from "./pt-sunset";
import ptSunset2 from "./pt-sunset-2";
import ptSunset2V2 from "./pt-sunset2";
import ptSuperbloom1 from "./pt-superbloom1";
import ptSuperbloom2 from "./pt-superbloom2";
import ptSuperbloom3 from "./pt-superbloom3";
import ptTab20 from "./pt-tab20";
import ptTangerineblues from "./pt-tangerineblues";
import ptTara from "./pt-tara";
import ptTeal from "./pt-teal";
import ptTealMaterial from "./pt-teal-material";
import ptTealgreens from "./pt-tealgreens";
import ptTealrose from "./pt-tealrose";
import ptTheovandoesburg from "./pt-theovandoesburg";
import ptThomas from "./pt-thomas";
import ptTidepool from "./pt-tidepool";
import ptTitan from "./pt-titan";
import ptTriglav from "./pt-triglav";
import ptTropic from "./pt-tropic";
import ptTsimshian from "./pt-tsimshian";
import ptUp from "./pt-up";
import ptUstwo from "./pt-ustwo";
import ptVangogh from "./pt-vangogh";
import ptVangogh2 from "./pt-vangogh-2";
import ptVangogh2V2 from "./pt-vangogh2";
import ptVatnajokull from "./pt-vatnajokull";
import ptVenus from "./pt-venus";
import ptVermeer from "./pt-vermeer";
import ptVermillion from "./pt-vermillion";
import ptVeronese from "./pt-veronese";
import ptVibrant from "./pt-vibrant";
import ptVolcanoes from "./pt-volcanoes";
import ptVonheyl from "./pt-vonheyl";
import ptWarmAndSunny from "./pt-warm-and-sunny";
import ptWassilykandinsky2 from "./pt-wassilykandinsky-2";
import ptWaves2 from "./pt-waves2";
import ptWetland from "./pt-wetland";
import ptWhenIWasYourAge from "./pt-when-i-was-your-age";
import ptWindcave from "./pt-windcave";
import ptWinterBright from "./pt-winter-bright";
import ptWissing from "./pt-wissing";
import ptWsjBlackGreen from "./pt-wsj-black-green";
import ptWsjColors6 from "./pt-wsj-colors6";
import ptWsjRgby from "./pt-wsj-rgby";
import ptXmen from "./pt-xmen";
import ptYellowstone from "./pt-yellowstone";
import ptYesterdaymedium from "./pt-yesterdaymedium";
import ptZion from "./pt-zion";
import ptZissou1 from "./pt-zissou1";
import amfe1 from "./amfe-1";
import amfe3 from "./amfe-3";
import amfe4 from "./amfe-4";
import amfe5 from "./amfe-5";
import amfe6 from "./amfe-6";
import amfe7 from "./amfe-7";
import amfe8 from "./amfe-8";
import amfe9 from "./amfe-9";
import amfe10 from "./amfe-10";
import amfe11 from "./amfe-11";
import amfe12 from "./amfe-12";
import amfe13 from "./amfe-13";
import amfe14 from "./amfe-14";
import amfe15 from "./amfe-15";
import amfe16 from "./amfe-16";
import amfe17 from "./amfe-17";
import amfe18 from "./amfe-18";
import amfe19 from "./amfe-19";
import amfe20 from "./amfe-20";
import amfe21 from "./amfe-21";
import amfe22 from "./amfe-22";
import amfe23 from "./amfe-23";
import amfe24 from "./amfe-24";
import amfe25 from "./amfe-25";
import amfe27 from "./amfe-27";
import amfe28 from "./amfe-28";
import amfe29 from "./amfe-29";
import amfe30 from "./amfe-30";
import amfe31 from "./amfe-31";
import amfe32 from "./amfe-32";
import amfe33 from "./amfe-33";
import amfe34 from "./amfe-34";
import amfe36 from "./amfe-36";
import amfe37 from "./amfe-37";
import amfe38 from "./amfe-38";
import amfe101 from "./amfe-101";
import amfe102 from "./amfe-102";
import amfe103 from "./amfe-103";
import amfe106 from "./amfe-106";
import amfe107 from "./amfe-107";
import amfe108 from "./amfe-108";
import amfe109 from "./amfe-109";
import amfe110 from "./amfe-110";
import amfe111 from "./amfe-111";
import amfe112 from "./amfe-112";
import amfe113 from "./amfe-113";
import amfe114 from "./amfe-114";
import amfe115 from "./amfe-115";
import amfe116 from "./amfe-116";
import peptide1 from "./peptide-1";
import peptide2 from "./peptide-2";
import peptide3 from "./peptide-3";
import peptide4 from "./peptide-4";
import peptide5 from "./peptide-5";
import peptide6 from "./peptide-6";
import peptide7 from "./peptide-7";
import peptide8 from "./peptide-8";
import peptide9 from "./peptide-9";
import peptide10 from "./peptide-10";
import peptide11 from "./peptide-11";
import peptide12 from "./peptide-12";
import peptide13 from "./peptide-13";
import peptide14 from "./peptide-14";
import peptide15 from "./peptide-15";
import peptide16 from "./peptide-16";
import peptide17 from "./peptide-17";
import peptide18 from "./peptide-18";
import peptide19 from "./peptide-19";
import peptide20 from "./peptide-20";
import peptide21 from "./peptide-21";
import peptide22 from "./peptide-22";
import peptide23 from "./peptide-23";
import peptide24 from "./peptide-24";
import peptide25 from "./peptide-25";
import peptide26 from "./peptide-26";
import peptide27 from "./peptide-27";
import peptide28 from "./peptide-28";
import peptide29 from "./peptide-29";
import peptide30 from "./peptide-30";
import peptide31 from "./peptide-31";
import peptide32 from "./peptide-32";
import peptide33 from "./peptide-33";
import peptide34 from "./peptide-34";
import peptide35 from "./peptide-35";
import peptide36 from "./peptide-36";
import peptide37 from "./peptide-37";
import peptide38 from "./peptide-38";
import peptide39 from "./peptide-39";
import peptide40 from "./peptide-40";
import peptide41 from "./peptide-41";
import peptide42 from "./peptide-42";
import peptide43 from "./peptide-43";
import peptide44 from "./peptide-44";
import peptide45 from "./peptide-45";
import peptide46 from "./peptide-46";
import peptide47 from "./peptide-47";
import peptide48 from "./peptide-48";
import peptide49 from "./peptide-49";
import peptide50 from "./peptide-50";
import peptide51 from "./peptide-51";
import peptide52 from "./peptide-52";
import peptide53 from "./peptide-53";
import peptide54 from "./peptide-54";
import peptide55 from "./peptide-55";
import peptide56 from "./peptide-56";
import peptide57 from "./peptide-57";
import peptide58 from "./peptide-58";
import peptide59 from "./peptide-59";
import peptide60 from "./peptide-60";
import peptide61 from "./peptide-61";
import peptide62 from "./peptide-62";
import peptide63 from "./peptide-63";
import peptide64 from "./peptide-64";
import peptide65 from "./peptide-65";
import peptide66 from "./peptide-66";
import peptide67 from "./peptide-67";
import peptide68 from "./peptide-68";
import peptide69 from "./peptide-69";
import peptide70 from "./peptide-70";
import peptide71 from "./peptide-71";
import peptide72 from "./peptide-72";
import peptide73 from "./peptide-73";
import peptide74 from "./peptide-74";
import peptide75 from "./peptide-75";
import peptide76 from "./peptide-76";
import peptide77 from "./peptide-77";
import peptide78 from "./peptide-78";
import peptide79 from "./peptide-79";
import peptide80 from "./peptide-80";
import peptide81 from "./peptide-81";
import peptide82 from "./peptide-82";
import peptide83 from "./peptide-83";
import peptide84 from "./peptide-84";
import peptide85 from "./peptide-85";
import peptide86 from "./peptide-86";
import peptide87 from "./peptide-87";
import peptide88 from "./peptide-88";
import peptide89 from "./peptide-89";
import peptide90 from "./peptide-90";
import peptide91 from "./peptide-91";
import peptide92 from "./peptide-92";
import peptide93 from "./peptide-93";
import peptide94 from "./peptide-94";
import peptide95 from "./peptide-95";
import peptide96 from "./peptide-96";
import peptide97 from "./peptide-97";
import peptide98 from "./peptide-98";
import peptide99 from "./peptide-99";
import peptide100 from "./peptide-100";
import peptide101 from "./peptide-101";
import peptide102 from "./peptide-102";
import peptide103 from "./peptide-103";
import peptide104 from "./peptide-104";
import peptide105 from "./peptide-105";
import peptide106 from "./peptide-106";
import peptide107 from "./peptide-107";
import peptide108 from "./peptide-108";
import peptide109 from "./peptide-109";
import peptide110 from "./peptide-110";
import peptide111 from "./peptide-111";
import peptide112 from "./peptide-112";
import peptide113 from "./peptide-113";
import peptide114 from "./peptide-114";
import peptide115 from "./peptide-115";
import peptide116 from "./peptide-116";
import peptide117 from "./peptide-117";
import peptide118 from "./peptide-118";
import peptide119 from "./peptide-119";
import peptide120 from "./peptide-120";
import peptide121 from "./peptide-121";
import peptide122 from "./peptide-122";
import peptide123 from "./peptide-123";
import peptide124 from "./peptide-124";
import peptide125 from "./peptide-125";
import peptide126 from "./peptide-126";
import peptide127 from "./peptide-127";
import peptide128 from "./peptide-128";
import peptide129 from "./peptide-129";
import peptide130 from "./peptide-130";
import peptide131 from "./peptide-131";
import peptide132 from "./peptide-132";
import peptide133 from "./peptide-133";
import peptide134 from "./peptide-134";
import peptide135 from "./peptide-135";
import peptide136 from "./peptide-136";
import peptide137 from "./peptide-137";
import peptide138 from "./peptide-138";
import peptide139 from "./peptide-139";
import peptide140 from "./peptide-140";
import peptide141 from "./peptide-141";
import peptide142 from "./peptide-142";
import peptide143 from "./peptide-143";
import peptide144 from "./peptide-144";
import peptide145 from "./peptide-145";
import peptide146 from "./peptide-146";
import peptide147 from "./peptide-147";
import peptide148 from "./peptide-148";
import peptide149 from "./peptide-149";
import peptide150 from "./peptide-150";
import peptide151 from "./peptide-151";
import peptide152 from "./peptide-152";
import peptide153 from "./peptide-153";
import peptide154 from "./peptide-154";
import peptide155 from "./peptide-155";
import peptide156 from "./peptide-156";
import peptide157 from "./peptide-157";
import peptide158 from "./peptide-158";
import peptide159 from "./peptide-159";
import peptide160 from "./peptide-160";
import peptide161 from "./peptide-161";
import peptide162 from "./peptide-162";
import peptide163 from "./peptide-163";
import peptide164 from "./peptide-164";
import peptide165 from "./peptide-165";
import peptide166 from "./peptide-166";
import peptide167 from "./peptide-167";
import peptide168 from "./peptide-168";
import peptide169 from "./peptide-169";
import peptide170 from "./peptide-170";
import peptide171 from "./peptide-171";
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
  ["pt-a-palette", ptAPalette],
  ["pt-acadia", ptAcadia],
  ["pt-ag-sunset", ptAgSunset],
  ["pt-agriculture", ptAgriculture],
  ["pt-alkalay1", ptAlkalay1],
  ["pt-alkalay2", ptAlkalay2],
  ["pt-althoff", ptAlthoff],
  ["pt-andri", ptAndri],
  ["pt-andywarhol-1", ptAndywarhol1],
  ["pt-andywarhol-2", ptAndywarhol2],
  ["pt-anemone", ptAnemone],
  ["pt-appletv", ptAppletv],
  ["pt-apricot", ptApricot],
  ["pt-arashiyama", ptArashiyama],
  ["pt-arbutus", ptArbutus],
  ["pt-archambault", ptArchambault],
  ["pt-arches", ptArches],
  ["pt-arches2", ptArches2],
  ["pt-arcticgates", ptArcticgates],
  ["pt-armyrose", ptArmyrose],
  ["pt-asteroidcity3", ptAsteroidcity3],
  ["pt-atomic-clock", ptAtomicClock],
  ["pt-aussie-flatui", ptAussieFlatui],
  ["pt-austria", ptAustria],
  ["pt-avedon", ptAvedon],
  ["pt-badlands", ptBadlands],
  ["pt-basel", ptBasel],
  ["pt-bay", ptBay],
  ["pt-beach", ptBeach],
  ["pt-benagil", ptBenagil],
  ["pt-berry", ptBerry],
  ["pt-bigsur2", ptBigsur2],
  ["pt-billyapple", ptBillyapple],
  ["pt-blue2darkorange12steps", ptBlue2darkorange12steps],
  ["pt-blue2darkred12steps", ptBlue2darkred12steps],
  ["pt-blue2gray8steps", ptBlue2gray8steps],
  ["pt-blue2green14steps", ptBlue2green14steps],
  ["pt-blue2orange10steps", ptBlue2orange10steps],
  ["pt-blueprint", ptBlueprint],
  ["pt-blueprint2", ptBlueprint2],
  ["pt-blueridgepkwy", ptBlueridgepkwy],
  ["pt-blues9", ptBlues9],
  ["pt-bluyl", ptBluyl],
  ["pt-bold", ptBold],
  ["pt-bottlerocket2", ptBottlerocket2],
  ["pt-bright", ptBright],
  ["pt-bright-2", ptBright2],
  ["pt-brown2blue10steps", ptBrown2blue10steps],
  ["pt-brwnyl", ptBrwnyl],
  ["pt-bryce", ptBryce],
  ["pt-budnitz", ptBudnitz],
  ["pt-buow", ptBuow],
  ["pt-burg", ptBurg],
  ["pt-c-m-coolidge", ptCMCoolidge],
  ["pt-calc", ptCalc],
  ["pt-cancri", ptCancri],
  ["pt-candy-bright", ptCandyBright],
  ["pt-candy-soft", ptCandySoft],
  ["pt-capitolreef", ptCapitolreef],
  ["pt-caqu", ptCaqu],
  ["pt-cars", ptCars],
  ["pt-cavalcanti1", ptCavalcanti1],
  ["pt-ceriselimon", ptCeriselimon],
  ["pt-chaparral3", ptChaparral3],
  ["pt-charmonix", ptCharmonix],
  ["pt-chevalier1", ptChevalier1],
  ["pt-china-traditional-1", ptChinaTraditional1],
  ["pt-china-traditional-10", ptChinaTraditional10],
  ["pt-china-traditional-11", ptChinaTraditional11],
  ["pt-china-traditional-12", ptChinaTraditional12],
  ["pt-china-traditional-13", ptChinaTraditional13],
  ["pt-china-traditional-14", ptChinaTraditional14],
  ["pt-china-traditional-15", ptChinaTraditional15],
  ["pt-china-traditional-16", ptChinaTraditional16],
  ["pt-china-traditional-17", ptChinaTraditional17],
  ["pt-china-traditional-18", ptChinaTraditional18],
  ["pt-china-traditional-19", ptChinaTraditional19],
  ["pt-china-traditional-2", ptChinaTraditional2],
  ["pt-china-traditional-20", ptChinaTraditional20],
  ["pt-china-traditional-3", ptChinaTraditional3],
  ["pt-china-traditional-4", ptChinaTraditional4],
  ["pt-china-traditional-5", ptChinaTraditional5],
  ["pt-china-traditional-6", ptChinaTraditional6],
  ["pt-china-traditional-7", ptChinaTraditional7],
  ["pt-china-traditional-8", ptChinaTraditional8],
  ["pt-china-traditional-9", ptChinaTraditional9],
  ["pt-claesoldenburg", ptClaesoldenburg],
  ["pt-classic-blue-red-6", ptClassicBlueRed6],
  ["pt-classic-green-orange-6", ptClassicGreenOrange6],
  ["pt-classic-purple-gray-6", ptClassicPurpleGray6],
  ["pt-coastaldune2", ptCoastaldune2],
  ["pt-coconut", ptCoconut],
  ["pt-colorblind-safe", ptColorblindSafe],
  ["pt-connors", ptConnors],
  ["pt-cuyahoga", ptCuyahoga],
  ["pt-darjeeling1", ptDarjeeling1],
  ["pt-darjeeling2", ptDarjeeling2],
  ["pt-dark", ptDark],
  ["pt-dark-2", ptDark2],
  ["pt-davinci", ptDavinci],
  ["pt-deathvalley", ptDeathvalley],
  ["pt-deep-orange-material", ptDeepOrangeMaterial],
  ["pt-default", ptDefault],
  ["pt-degas", ptDegas],
  ["pt-degas-2", ptDegas2],
  ["pt-denali", ptDenali],
  ["pt-derain", ptDerain],
  ["pt-desert", ptDesert],
  ["pt-diazo", ptDiazo],
  ["pt-doughton", ptDoughton],
  ["pt-dpbipugn", ptDpbipugn],
  ["pt-dpbipuor", ptDpbipuor],
  ["pt-dpbirdgy", ptDpbirdgy],
  ["pt-dpbiylbu", ptDpbiylbu],
  ["pt-earth", ptEarth],
  ["pt-earth-2", ptEarth2],
  ["pt-edvardmunch-1", ptEdvardmunch1],
  ["pt-egypt", ptEgypt],
  ["pt-emrld", ptEmrld],
  ["pt-enceladus", ptEnceladus],
  ["pt-ernst", ptErnst],
  ["pt-eschscholzia", ptEschscholzia],
  ["pt-espresso", ptEspresso],
  ["pt-europa", ptEuropa],
  ["pt-everglades", ptEverglades],
  ["pt-excel-atlas", ptExcelAtlas],
  ["pt-excel-berlin", ptExcelBerlin],
  ["pt-excel-celestial", ptExcelCelestial],
  ["pt-excel-depth", ptExcelDepth],
  ["pt-excel-facet", ptExcelFacet],
  ["pt-excel-ion", ptExcelIon],
  ["pt-excel-office-theme", ptExcelOfficeTheme],
  ["pt-excel-organic", ptExcelOrganic],
  ["pt-excel-parallax", ptExcelParallax],
  ["pt-excel-slice", ptExcelSlice],
  ["pt-excel-slipstream", ptExcelSlipstream],
  ["pt-excel-vapor-trail", ptExcelVaporTrail],
  ["pt-exter", ptExter],
  ["pt-fall", ptFall],
  ["pt-fantasticfox1", ptFantasticfox1],
  ["pt-few-dark", ptFewDark],
  ["pt-few-medium", ptFewMedium],
  ["pt-fir", ptFir],
  ["pt-fire", ptFire],
  ["pt-fivethirtyeight", ptFivethirtyeight],
  ["pt-flash", ptFlash],
  ["pt-floral2", ptFloral2],
  ["pt-fridakahlo", ptFridakahlo],
  ["pt-fritsch", ptFritsch],
  ["pt-fun", ptFun],
  ["pt-galah", ptGalah],
  ["pt-genedavis", ptGenedavis],
  ["pt-georgiaokeeffe", ptGeorgiaokeeffe],
  ["pt-giorgiodechirico-1", ptGiorgiodechirico1],
  ["pt-glacier", ptGlacier],
  ["pt-google", ptGoogle],
  ["pt-grand-tour", ptGrandTour],
  ["pt-grandbudapest1", ptGrandbudapest1],
  ["pt-grassdry", ptGrassdry],
  ["pt-grasswet", ptGrasswet],
  ["pt-greek", ptGreek],
  ["pt-green-material", ptGreenMaterial],
  ["pt-green2magenta16steps", ptGreen2magenta16steps],
  ["pt-grey-material", ptGreyMaterial],
  ["pt-gustavklimt", ptGustavklimt],
  ["pt-halfdome", ptHalfdome],
  ["pt-hawaii", ptHawaii],
  ["pt-healthy-reef", ptHealthyReef],
  ["pt-helenfrankenthaler", ptHelenfrankenthaler],
  ["pt-hilmaafklint", ptHilmaafklint],
  ["pt-hokusai", ptHokusai],
  ["pt-hokusai3", ptHokusai3],
  ["pt-homer1", ptHomer1],
  ["pt-homer2", ptHomer2],
  ["pt-hopper", ptHopper],
  ["pt-iguazufalls", ptIguazufalls],
  ["pt-indigo-material", ptIndigoMaterial],
  ["pt-ingres", ptIngres],
  ["pt-isfahan1", ptIsfahan1],
  ["pt-isfahan2", ptIsfahan2],
  ["pt-isleofdogs1", ptIsleofdogs1],
  ["pt-jacksonpollock", ptJacksonpollock],
  ["pt-java", ptJava],
  ["pt-jean-michelbasquiat", ptJeanMichelbasquiat],
  ["pt-jean-michelbasquiat-1", ptJeanMichelbasquiat1],
  ["pt-johannesvermeer", ptJohannesvermeer],
  ["pt-johnsingersargent", ptJohnsingersargent],
  ["pt-johnson", ptJohnson],
  ["pt-joyful", ptJoyful],
  ["pt-juarez", ptJuarez],
  ["pt-jupiter", ptJupiter],
  ["pt-kandinsky", ptKandinsky],
  ["pt-kazimirmalevich", ptKazimirmalevich],
  ["pt-kelp1", ptKelp1],
  ["pt-kepler16b", ptKepler16b],
  ["pt-kepler186", ptKepler186],
  ["pt-keylime", ptKeylime],
  ["pt-kikimedium", ptKikimedium],
  ["pt-kingscanyon", ptKingscanyon],
  ["pt-kippenberger", ptKippenberger],
  ["pt-kiwisandia", ptKiwisandia],
  ["pt-klein", ptKlein],
  ["pt-klimt", ptKlimt],
  ["pt-koons", ptKoons],
  ["pt-lake", ptLake],
  ["pt-lake-2", ptLake2],
  ["pt-lakelouise", ptLakelouise],
  ["pt-lakenakuru", ptLakenakuru],
  ["pt-lakota", ptLakota],
  ["pt-laputamedium", ptLaputamedium],
  ["pt-leekrasner", ptLeekrasner],
  ["pt-lemon", ptLemon],
  ["pt-light", ptLight],
  ["pt-lightblue2darkblue10steps", ptLightblue2darkblue10steps],
  ["pt-lightblue2darkblue7steps", ptLightblue2darkblue7steps],
  ["pt-lime", ptLime],
  ["pt-lime-material", ptLimeMaterial],
  ["pt-lively", ptLively],
  ["pt-lorikeet", ptLorikeet],
  ["pt-lupi", ptLupi],
  ["pt-lupinus", ptLupinus],
  ["pt-mango", ptMango],
  ["pt-marcchagall", ptMarcchagall],
  ["pt-mars", ptMars],
  ["pt-mediumcontrast", ptMediumcontrast],
  ["pt-melonpomelo", ptMelonpomelo],
  ["pt-miltonavery-1", ptMiltonavery1],
  ["pt-monet", ptMonet],
  ["pt-mononokemedium", ptMononokemedium],
  ["pt-moonrise1", ptMoonrise1],
  ["pt-moonrise2", ptMoonrise2],
  ["pt-moreau", ptMoreau],
  ["pt-moth", ptMoth],
  ["pt-mpalette", ptMpalette],
  ["pt-mtmckinley", ptMtmckinley],
  ["pt-mtrainier", ptMtrainier],
  ["pt-munch", ptMunch],
  ["pt-murepepino", ptMurepepino],
  ["pt-mushroom", ptMushroom],
  ["pt-navajo", ptNavajo],
  ["pt-nemo", ptNemo],
  ["pt-neon", ptNeon],
  ["pt-neon-2", ptNeon2],
  ["pt-nizami", ptNizami],
  ["pt-nolan-ned", ptNolanNed],
  ["pt-ohbrother", ptOhbrother],
  ["pt-ohchi", ptOhchi],
  ["pt-okabeito", ptOkabeito],
  ["pt-okavango", ptOkavango],
  ["pt-okeeffe", ptOkeeffe],
  ["pt-olsen-qual", ptOlsenQual],
  ["pt-orange-material", ptOrangeMaterial],
  ["pt-oskarschlemmer", ptOskarschlemmer],
  ["pt-paintjet", ptPaintjet],
  ["pt-pairedcolor12steps", ptPairedcolor12steps],
  ["pt-pal10", ptPal10],
  ["pt-pal11", ptPal11],
  ["pt-pal12", ptPal12],
  ["pt-pal2", ptPal2],
  ["pt-pal3", ptPal3],
  ["pt-pal4", ptPal4],
  ["pt-pal5", ptPal5],
  ["pt-pal6", ptPal6],
  ["pt-pal7", ptPal7],
  ["pt-pal8", ptPal8],
  ["pt-pal9", ptPal9],
  ["pt-palermo", ptPalermo],
  ["pt-pan", ptPan],
  ["pt-passionfruit", ptPassionfruit],
  ["pt-paulklee-1", ptPaulklee1],
  ["pt-paveltchelitchew", ptPaveltchelitchew],
  ["pt-peachpear", ptPeachpear],
  ["pt-pearl", ptPearl],
  ["pt-pearl2", ptPearl2],
  ["pt-peru1", ptPeru1],
  ["pt-picabia", ptPicabia],
  ["pt-picasso", ptPicasso],
  ["pt-pietmondrian", ptPietmondrian],
  ["pt-pinafraise", ptPinafraise],
  ["pt-pink-material", ptPinkMaterial],
  ["pt-pinkgreens", ptPinkgreens],
  ["pt-pinkyl", ptPinkyl],
  ["pt-pommebaya", ptPommebaya],
  ["pt-pony", ptPony],
  ["pt-ppalette", ptPpalette],
  ["pt-prism-dark", ptPrismDark],
  ["pt-pso", ptPso],
  ["pt-purp", ptPurp],
  ["pt-purple-material", ptPurpleMaterial],
  ["pt-purplegreens", ptPurplegreens],
  ["pt-purplepinks", ptPurplepinks],
  ["pt-purpletangerines", ptPurpletangerines],
  ["pt-purpleyellows", ptPurpleyellows],
  ["pt-purpor", ptPurpor],
  ["pt-qmso12", ptQmso12],
  ["pt-qmsopap", ptQmsopap],
  ["pt-qmsordpu", ptQmsordpu],
  ["pt-qmsostd", ptQmsostd],
  ["pt-qmsoyl", ptQmsoyl],
  ["pt-qpbi", ptQpbi],
  ["pt-raphael", ptRaphael],
  ["pt-rattner", ptRattner],
  ["pt-redblues", ptRedblues],
  ["pt-redor", ptRedor],
  ["pt-redwoods", ptRedwoods],
  ["pt-relax", ptRelax],
  ["pt-rembrandt", ptRembrandt],
  ["pt-rembrandt-2", ptRembrandt2],
  ["pt-renemagritte", ptRenemagritte],
  ["pt-renoir", ptRenoir],
  ["pt-rockymountains", ptRockymountains],
  ["pt-royal1", ptRoyal1],
  ["pt-roylichtenstein", ptRoylichtenstein],
  ["pt-roylichtenstein-1", ptRoylichtenstein1],
  ["pt-rushmore", ptRushmore],
  ["pt-safe", ptSafe],
  ["pt-sage", ptSage],
  ["pt-saguaro", ptSaguaro],
  ["pt-sandrobotticelli-1", ptSandrobotticelli1],
  ["pt-sbchannel", ptSbchannel],
  ["pt-shades-of-gray", ptShadesOfGray],
  ["pt-shuksan2", ptShuksan2],
  ["pt-sidhu", ptSidhu],
  ["pt-sierra1", ptSierra1],
  ["pt-signature-substitutions-cosmic", ptSignatureSubstitutionsCosmic],
  ["pt-small-world", ptSmallWorld],
  ["pt-smith", ptSmith],
  ["pt-smokymountains", ptSmokymountains],
  ["pt-smokymtns", ptSmokymtns],
  ["pt-sollewitt", ptSollewitt],
  ["pt-southpark", ptSouthpark],
  ["pt-spalette", ptSpalette],
  ["pt-spbior", ptSpbior],
  ["pt-spbirdpu", ptSpbirdpu],
  ["pt-spbiyl", ptSpbiyl],
  ["pt-spbiylgn", ptSpbiylgn],
  ["pt-spiritedmedium", ptSpiritedmedium],
  ["pt-spring2", ptSpring2],
  ["pt-staalmeesters", ptStaalmeesters],
  ["pt-stained-glass", ptStainedGlass],
  ["pt-starfish", ptStarfish],
  ["pt-starry", ptStarry],
  ["pt-starry2", ptStarry2],
  ["pt-sunny-garden", ptSunnyGarden],
  ["pt-sunset", ptSunset],
  ["pt-sunset-2", ptSunset2],
  ["pt-sunset2", ptSunset2V2],
  ["pt-superbloom1", ptSuperbloom1],
  ["pt-superbloom2", ptSuperbloom2],
  ["pt-superbloom3", ptSuperbloom3],
  ["pt-tab20", ptTab20],
  ["pt-tangerineblues", ptTangerineblues],
  ["pt-tara", ptTara],
  ["pt-teal", ptTeal],
  ["pt-teal-material", ptTealMaterial],
  ["pt-tealgreens", ptTealgreens],
  ["pt-tealrose", ptTealrose],
  ["pt-theovandoesburg", ptTheovandoesburg],
  ["pt-thomas", ptThomas],
  ["pt-tidepool", ptTidepool],
  ["pt-titan", ptTitan],
  ["pt-triglav", ptTriglav],
  ["pt-tropic", ptTropic],
  ["pt-tsimshian", ptTsimshian],
  ["pt-up", ptUp],
  ["pt-ustwo", ptUstwo],
  ["pt-vangogh", ptVangogh],
  ["pt-vangogh-2", ptVangogh2],
  ["pt-vangogh2", ptVangogh2V2],
  ["pt-vatnajokull", ptVatnajokull],
  ["pt-venus", ptVenus],
  ["pt-vermeer", ptVermeer],
  ["pt-vermillion", ptVermillion],
  ["pt-veronese", ptVeronese],
  ["pt-vibrant", ptVibrant],
  ["pt-volcanoes", ptVolcanoes],
  ["pt-vonheyl", ptVonheyl],
  ["pt-warm-and-sunny", ptWarmAndSunny],
  ["pt-wassilykandinsky-2", ptWassilykandinsky2],
  ["pt-waves2", ptWaves2],
  ["pt-wetland", ptWetland],
  ["pt-when-i-was-your-age", ptWhenIWasYourAge],
  ["pt-windcave", ptWindcave],
  ["pt-winter-bright", ptWinterBright],
  ["pt-wissing", ptWissing],
  ["pt-wsj-black-green", ptWsjBlackGreen],
  ["pt-wsj-colors6", ptWsjColors6],
  ["pt-wsj-rgby", ptWsjRgby],
  ["pt-xmen", ptXmen],
  ["pt-yellowstone", ptYellowstone],
  ["pt-yesterdaymedium", ptYesterdaymedium],
  ["pt-zion", ptZion],
  ["pt-zissou1", ptZissou1],
  ["amfe-1", amfe1],
  ["amfe-3", amfe3],
  ["amfe-4", amfe4],
  ["amfe-5", amfe5],
  ["amfe-6", amfe6],
  ["amfe-7", amfe7],
  ["amfe-8", amfe8],
  ["amfe-9", amfe9],
  ["amfe-10", amfe10],
  ["amfe-11", amfe11],
  ["amfe-12", amfe12],
  ["amfe-13", amfe13],
  ["amfe-14", amfe14],
  ["amfe-15", amfe15],
  ["amfe-16", amfe16],
  ["amfe-17", amfe17],
  ["amfe-18", amfe18],
  ["amfe-19", amfe19],
  ["amfe-20", amfe20],
  ["amfe-21", amfe21],
  ["amfe-22", amfe22],
  ["amfe-23", amfe23],
  ["amfe-24", amfe24],
  ["amfe-25", amfe25],
  ["amfe-27", amfe27],
  ["amfe-28", amfe28],
  ["amfe-29", amfe29],
  ["amfe-30", amfe30],
  ["amfe-31", amfe31],
  ["amfe-32", amfe32],
  ["amfe-33", amfe33],
  ["amfe-34", amfe34],
  ["amfe-36", amfe36],
  ["amfe-37", amfe37],
  ["amfe-38", amfe38],
  ["amfe-101", amfe101],
  ["amfe-102", amfe102],
  ["amfe-103", amfe103],
  ["amfe-106", amfe106],
  ["amfe-107", amfe107],
  ["amfe-108", amfe108],
  ["amfe-109", amfe109],
  ["amfe-110", amfe110],
  ["amfe-111", amfe111],
  ["amfe-112", amfe112],
  ["amfe-113", amfe113],
  ["amfe-114", amfe114],
  ["amfe-115", amfe115],
  ["amfe-116", amfe116],
  ["peptide-1", peptide1],
  ["peptide-2", peptide2],
  ["peptide-3", peptide3],
  ["peptide-4", peptide4],
  ["peptide-5", peptide5],
  ["peptide-6", peptide6],
  ["peptide-7", peptide7],
  ["peptide-8", peptide8],
  ["peptide-9", peptide9],
  ["peptide-10", peptide10],
  ["peptide-11", peptide11],
  ["peptide-12", peptide12],
  ["peptide-13", peptide13],
  ["peptide-14", peptide14],
  ["peptide-15", peptide15],
  ["peptide-16", peptide16],
  ["peptide-17", peptide17],
  ["peptide-18", peptide18],
  ["peptide-19", peptide19],
  ["peptide-20", peptide20],
  ["peptide-21", peptide21],
  ["peptide-22", peptide22],
  ["peptide-23", peptide23],
  ["peptide-24", peptide24],
  ["peptide-25", peptide25],
  ["peptide-26", peptide26],
  ["peptide-27", peptide27],
  ["peptide-28", peptide28],
  ["peptide-29", peptide29],
  ["peptide-30", peptide30],
  ["peptide-31", peptide31],
  ["peptide-32", peptide32],
  ["peptide-33", peptide33],
  ["peptide-34", peptide34],
  ["peptide-35", peptide35],
  ["peptide-36", peptide36],
  ["peptide-37", peptide37],
  ["peptide-38", peptide38],
  ["peptide-39", peptide39],
  ["peptide-40", peptide40],
  ["peptide-41", peptide41],
  ["peptide-42", peptide42],
  ["peptide-43", peptide43],
  ["peptide-44", peptide44],
  ["peptide-45", peptide45],
  ["peptide-46", peptide46],
  ["peptide-47", peptide47],
  ["peptide-48", peptide48],
  ["peptide-49", peptide49],
  ["peptide-50", peptide50],
  ["peptide-51", peptide51],
  ["peptide-52", peptide52],
  ["peptide-53", peptide53],
  ["peptide-54", peptide54],
  ["peptide-55", peptide55],
  ["peptide-56", peptide56],
  ["peptide-57", peptide57],
  ["peptide-58", peptide58],
  ["peptide-59", peptide59],
  ["peptide-60", peptide60],
  ["peptide-61", peptide61],
  ["peptide-62", peptide62],
  ["peptide-63", peptide63],
  ["peptide-64", peptide64],
  ["peptide-65", peptide65],
  ["peptide-66", peptide66],
  ["peptide-67", peptide67],
  ["peptide-68", peptide68],
  ["peptide-69", peptide69],
  ["peptide-70", peptide70],
  ["peptide-71", peptide71],
  ["peptide-72", peptide72],
  ["peptide-73", peptide73],
  ["peptide-74", peptide74],
  ["peptide-75", peptide75],
  ["peptide-76", peptide76],
  ["peptide-77", peptide77],
  ["peptide-78", peptide78],
  ["peptide-79", peptide79],
  ["peptide-80", peptide80],
  ["peptide-81", peptide81],
  ["peptide-82", peptide82],
  ["peptide-83", peptide83],
  ["peptide-84", peptide84],
  ["peptide-85", peptide85],
  ["peptide-86", peptide86],
  ["peptide-87", peptide87],
  ["peptide-88", peptide88],
  ["peptide-89", peptide89],
  ["peptide-90", peptide90],
  ["peptide-91", peptide91],
  ["peptide-92", peptide92],
  ["peptide-93", peptide93],
  ["peptide-94", peptide94],
  ["peptide-95", peptide95],
  ["peptide-96", peptide96],
  ["peptide-97", peptide97],
  ["peptide-98", peptide98],
  ["peptide-99", peptide99],
  ["peptide-100", peptide100],
  ["peptide-101", peptide101],
  ["peptide-102", peptide102],
  ["peptide-103", peptide103],
  ["peptide-104", peptide104],
  ["peptide-105", peptide105],
  ["peptide-106", peptide106],
  ["peptide-107", peptide107],
  ["peptide-108", peptide108],
  ["peptide-109", peptide109],
  ["peptide-110", peptide110],
  ["peptide-111", peptide111],
  ["peptide-112", peptide112],
  ["peptide-113", peptide113],
  ["peptide-114", peptide114],
  ["peptide-115", peptide115],
  ["peptide-116", peptide116],
  ["peptide-117", peptide117],
  ["peptide-118", peptide118],
  ["peptide-119", peptide119],
  ["peptide-120", peptide120],
  ["peptide-121", peptide121],
  ["peptide-122", peptide122],
  ["peptide-123", peptide123],
  ["peptide-124", peptide124],
  ["peptide-125", peptide125],
  ["peptide-126", peptide126],
  ["peptide-127", peptide127],
  ["peptide-128", peptide128],
  ["peptide-129", peptide129],
  ["peptide-130", peptide130],
  ["peptide-131", peptide131],
  ["peptide-132", peptide132],
  ["peptide-133", peptide133],
  ["peptide-134", peptide134],
  ["peptide-135", peptide135],
  ["peptide-136", peptide136],
  ["peptide-137", peptide137],
  ["peptide-138", peptide138],
  ["peptide-139", peptide139],
  ["peptide-140", peptide140],
  ["peptide-141", peptide141],
  ["peptide-142", peptide142],
  ["peptide-143", peptide143],
  ["peptide-144", peptide144],
  ["peptide-145", peptide145],
  ["peptide-146", peptide146],
  ["peptide-147", peptide147],
  ["peptide-148", peptide148],
  ["peptide-149", peptide149],
  ["peptide-150", peptide150],
  ["peptide-151", peptide151],
  ["peptide-152", peptide152],
  ["peptide-153", peptide153],
  ["peptide-154", peptide154],
  ["peptide-155", peptide155],
  ["peptide-156", peptide156],
  ["peptide-157", peptide157],
  ["peptide-158", peptide158],
  ["peptide-159", peptide159],
  ["peptide-160", peptide160],
  ["peptide-161", peptide161],
  ["peptide-162", peptide162],
  ["peptide-163", peptide163],
  ["peptide-164", peptide164],
  ["peptide-165", peptide165],
  ["peptide-166", peptide166],
  ["peptide-167", peptide167],
  ["peptide-168", peptide168],
  ["peptide-169", peptide169],
  ["peptide-170", peptide170],
  ["peptide-171", peptide171],
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
