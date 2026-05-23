# SciPalette

> 为科研人员打造的 publication-ready 配色方案库。

[English](./README.en.md) | 中文

[![CI](https://github.com/fantasticjoe/SciPalette/actions/workflows/ci.yml/badge.svg)](https://github.com/fantasticjoe/SciPalette/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Deploy](https://github.com/fantasticjoe/SciPalette/actions/workflows/deploy.yml/badge.svg)](https://github.com/fantasticjoe/SciPalette/actions/workflows/deploy.yml)

## 简介

SciPalette 是一个专为科研可视化设计的静态配色方案库。它面向论文图、单细胞分析图、医学统计图、生物信息学图和其他科研图表，提供可筛选、可预览、可复制、可导出的配色方案。

核心用户包括科研人员、生物信息学家、数据科学家和医学统计师。

## 当前功能

- **20+ 精选配色方案**：覆盖 categorical、sequential、diverging、heatmap 四类科研配色。
- **多维筛选**：支持按关键词、类别、图类型、颜色数量、自动计算的色盲友好性筛选。
- **科研图预览**：详情页按推荐场景展示 bar、line、scatter、UMAP、heatmap、volcano 等预览。
- **色盲模拟预览**：详情页可切换 Original、Protanopia、Deuteranopia、Tritanopia，检查色板在常见色觉缺陷场景下的可区分度。
- **灰度对比度检查**：详情页计算色板转为灰度后的最小对比度，帮助判断打印或低饱和环境下是否仍可区分。
- **Art2Pal Palette**：浏览器本地从 PNG、JPEG 或 WebP 图片中提取色彩风格，并重组为 categorical、sequential、diverging、neutral 科研配色。
- **About 与设计哲学**：About 页面说明 SciPalette 的配色原则、Art2Pal 的设计哲学、来自《麦田与柏树》的站点视觉系统，以及统一应用在标签栏、导航栏、About 页面和页脚的 Logo system。
- **一键复制**：可复制 HEX 列表，也可从卡片直接复制 Python 或 R 代码。
- **代码与文件导出**：支持 HEX、Python/matplotlib、R/ggplot2、Scanpy、Seurat、GraphPad Prism，并可下载 Adobe ASE 文件。
- **独立页面职责**：配色库、推荐、对比、Art2Pal、贡献和 About 分开成专注页面，导航和页脚提供直接入口。
- **用户提交配色方案**：Contribute 页面提供 GitHub Issue 投稿入口，并支持粘贴 Art2Pal 导出的 SciPalette contribution JSON。
- **论文图灵感收集**：Contribute 页面提供 DOI、论文链接和 figure reference 的 GitHub Issue 入口，用于记录值得研究的论文图配色来源。
- **本地配色推荐助手**：Recommend 页面提供本地运行的推荐助手，根据图类型、配色类别、颜色数量、背景、自动色盲友好分数和研究意图给出可解释推荐。
- **配色方案对比视图**：Compare 页面可并排比较两个色板的用途重叠、颜色数量、标签、灰度对比和色条。
- **色盲友好分数**：使用色觉缺陷模拟、OKLab 距离和高风险色相组合惩罚自动计算 `colorblindScore`，并按阈值归类为 safe、caution 或 unsafe。
- **静态部署**：基于 Astro 静态生成，可部署到 GitHub Pages 等静态托管平台。
- **响应式界面**：桌面、平板和手机均可浏览和复制配色。

## 技术栈

| 技术 | 版本 | 用途 |
| --- | --- | --- |
| Astro | 5 | 静态站点框架 |
| React | 19 | 交互组件 |
| TypeScript | 5 | 类型定义与类型检查 |
| Tailwind CSS | 4 | 样式系统 |
| Lucide React | 1 | 图标 |

## 快速开始

### 环境要求

- Node.js >= 22.0.0
- npm

### 本地开发

```bash
git clone https://github.com/fantasticjoe/SciPalette.git
cd SciPalette
npm install
npm run dev
```

默认开发服务器地址由 Astro 输出，通常是 http://localhost:4321/。

### 构建与预览

```bash
npm run test
npm run typecheck
npm run build
npm run preview
```

`npm run build` 会生成 `dist/` 静态站点。线上站点从自定义域名根路径提供服务，因此静态资源和页面链接都使用根路径。

## 项目结构

```text
scipalette/
├── src/
│   ├── pages/
│   │   ├── index.astro              # 首页与浏览入口
│   │   ├── about.astro              # About、设计哲学、站点配色与 Logo system
│   │   ├── art2pal/index.astro      # Art2Pal Palette 本地图片取色工具
│   │   ├── palettes/index.astro     # 完整配色浏览页，仅负责搜索、筛选与浏览
│   │   ├── palettes/[id].astro      # 配色详情页，静态生成
│   │   ├── recommend/index.astro    # 本地配色推荐助手
│   │   ├── compare/index.astro      # 配色方案对比页
│   │   └── contribute/index.astro   # 配色投稿与论文图灵感入口
│   ├── layouts/
│   │   └── BaseLayout.astro         # HTML 外壳与 SEO meta
│   ├── components/
│   │   ├── SiteHeader.astro         # 全站导航
│   │   ├── SiteFooter.astro         # 全站页脚
│   │   ├── SiteMark.astro           # 复用同一 favicon.svg 的站点 Logo
│   │   ├── PaletteContributionPanel.astro # 用户提交配色方案入口
│   │   ├── PaperInspirationPanel.astro # DOI 与论文图灵感收集入口
│   │   ├── PaletteBrowser.tsx       # 完整配色浏览页状态组合层
│   │   ├── PaletteRecommendationPanel.tsx # 本地配色推荐面板
│   │   ├── PaletteComparisonPanel.tsx # 配色方案对比面板
│   │   ├── HomeHero.tsx             # 首页首屏
│   │   ├── PaletteLibrarySection.tsx # 可筛选配色库区块
│   │   ├── FeaturedPaletteSections.tsx # 首页推荐区块
│   │   ├── PaletteFilters.tsx       # 搜索与筛选控件
│   │   ├── PaletteDetailHeader.astro # 详情页标题与元数据
│   │   ├── PaletteColorSection.astro # 详情页色块区块
│   │   ├── PalettePreviewSection.astro # 详情页图表预览区块
│   │   ├── PaletteExportSection.astro # 详情页导出区块
│   │   ├── SimilarPalettesSection.astro # 相似配色推荐区块
│   │   ├── PaletteGrid.tsx          # 配色卡片网格
│   │   ├── PaletteCard.tsx          # 配色卡片
│   │   ├── ColorSwatch.tsx          # 单色块展示与复制
│   │   ├── PlotPreview.tsx          # 科研图模拟预览
│   │   ├── ColorVisionPreview.tsx   # 色盲模拟预览
│   │   ├── GrayscaleContrastPanel.tsx # 灰度对比度检查面板
│   │   ├── CodeExport.tsx           # 多格式代码导出
│   │   ├── CopyButton.tsx           # 复制按钮
│   │   └── BadgeList.tsx            # 标签列表
│   ├── lib/
│   │   ├── site.ts                  # 站点常量与导航链接
│   │   ├── homepage.ts              # 首页派生数据与分组逻辑
│   │   ├── filter-options.ts        # 筛选选项配置
│   │   ├── palettes/                # 单个色板文件与聚合入口
│   │   ├── art2pal/                 # Art2Pal 颜色空间、聚类、生成、导出逻辑
│   │   ├── palette-recommendations.ts # 本地推荐打分与 preset
│   │   ├── palette-comparison.ts    # 配色方案对比指标
│   │   ├── palette-utils.ts         # 筛选、导出和相似推荐逻辑
│   │   ├── color-vision.ts          # 色觉缺陷模拟矩阵与色板转换
│   │   ├── grayscale-contrast.ts    # 灰度亮度和对比度检查
│   │   ├── adobe-ase.ts             # Adobe ASE 二进制导出
│   │   ├── types.ts                 # TypeScript 类型定义
│   │   └── utils.ts                 # 通用工具
│   └── styles/
│       └── global.css               # Tailwind 与全局设计变量
├── public/
│   └── images/                      # 静态图片资源，例如《麦田与柏树》WebP
├── .github/workflows/               # CI、部署和发布流程
├── docs/ARCHITECTURE.md             # 协作架构与改动边界
├── astro.config.ts                  # Astro 配置
├── package.json
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

协作开发和改动边界请参阅 [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)。

## 添加新配色方案

现有色板按“一色板一文件”组织，避免未来几百或几千个色板堆在单个文件中。聚合入口只负责导入、注册和查询；新增色板不要把大对象直接写进 `src/lib/palettes/index.ts`。

新增或修改色板时，编辑 `src/lib/palettes/<palette-name>.ts`，并在 `src/lib/palettes/index.ts` 中注册导入。源文件不要手写 `id`；网页详情路由使用短的稳定 ID，这个 ID 由 `src/lib/palettes/index.ts` 中的注册 key 派生，名称、描述或颜色微调不会直接暴露到 URL：

```ts
{
  name: "Your Palette Name",
  description: "描述这个配色方案的用途和特点。",
  category: "categorical",
  colors: ["#4E79A7", "#F28E2B", "#E15759"],
  recommendedFor: ["bar", "scatter"],
  tags: ["publication", "multi-group"],
  background: "white",
  source: "可选的来源说明"
}
```

相关类型定义：

```ts
type PaletteCategory = "categorical" | "sequential" | "diverging" | "heatmap";

type PlotType =
  | "bar"
  | "line"
  | "scatter"
  | "umap"
  | "heatmap"
  | "volcano"
  | "boxplot";

type PaletteSource = {
  name: string;
  description: string;
  category: PaletteCategory;
  colors: string[];
  recommendedFor: PlotType[];
  tags: string[];
  background: "white" | "light" | "dark";
  source?: string;
};
```

注册后生成的 `Palette` 会自动包含：

```ts
colorblindSafe: boolean;
colorblindScore: number;
colorblindReport: ColorblindAccessibilityReport;
```

贡献者不需要、也不应该在源文件或 contribution JSON 中手写 `colorblindSafe`；SciPalette 会在注册时统一计算色盲友好分数和分类。

添加后运行：

```bash
npm run test
npm run typecheck
npm run build
```

详细贡献流程请参阅 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 路线图

- [x] 上传图片提取配色方案
- [x] 色盲模拟预览
- [x] 自动色盲友好评分
- [x] 灰度对比度检查
- [x] 导出 Adobe ASE 文件
- [x] 导出 CSS 变量
- [x] 用户提交配色方案
- [x] DOI / 论文图灵感收集
- [x] 本地配色推荐助手
- [x] 配色方案对比视图

## 许可证

[MIT License](./LICENSE) — 自由使用、修改和分发。

## 致谢

- 色盲友好配色参考 Okabe & Ito (2008) 的研究
- 配色理论参考科研可视化最佳实践
- 感谢所有贡献者和提供反馈的科研人员

---

**SciPalette** — 让科研图更美观、更易读。
