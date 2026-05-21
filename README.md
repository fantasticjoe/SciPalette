# SciPalette

> 为科研人员打造的 publication-ready 配色方案库。

[English](./README.en.md) | 中文

[![CI](https://github.com/fantasticjoe/scipalette/actions/workflows/ci.yml/badge.svg)](https://github.com/fantasticjoe/scipalette/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Deploy](https://img.shields.io/badge/deploy-GitHub%20Pages-222.svg)](https://pages.github.com/)

## 简介

SciPalette 是一个专为科研可视化设计的静态配色方案库。它面向论文图、单细胞分析图、医学统计图、生物信息学图和其他科研图表，提供可筛选、可预览、可复制、可导出的配色方案。

核心用户包括科研人员、生物信息学家、数据科学家和医学统计师。

## 当前功能

- **20+ 精选配色方案**：覆盖 categorical、sequential、diverging、heatmap 四类科研配色。
- **多维筛选**：支持按关键词、类别、图类型、颜色数量、色盲友好性筛选。
- **科研图预览**：详情页按推荐场景展示 bar、line、scatter、UMAP、heatmap、volcano 等预览。
- **一键复制**：可复制 HEX 列表，也可从卡片直接复制 Python 或 R 代码。
- **代码导出**：支持 HEX、Python/matplotlib、R/ggplot2、Scanpy、Seurat、GraphPad Prism。
- **色盲友好标注**：在卡片、详情页和筛选器中标注可访问性信息。
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
git clone https://github.com/fantasticjoe/scipalette.git
cd scipalette
npm install
npm run dev
```

默认开发服务器地址由 Astro 输出，通常是 http://localhost:4321/SciPalette/。

### 构建与预览

```bash
npm run typecheck
npm run build
npm run preview
```

`npm run build` 会生成 `dist/` 静态站点。项目在 `astro.config.ts` 中配置了 `base: "/SciPalette"`，用于匹配 GitHub Pages 仓库路径。

## 项目结构

```text
scipalette/
├── src/
│   ├── pages/
│   │   ├── index.astro              # 首页与浏览入口
│   │   └── palettes/[id].astro      # 配色详情页，静态生成
│   ├── layouts/
│   │   └── BaseLayout.astro         # HTML 外壳与 SEO meta
│   ├── components/
│   │   ├── SiteHeader.astro         # 全站导航
│   │   ├── PaletteBrowser.tsx       # 首页状态组合层
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
│   │   ├── CodeExport.tsx           # 多格式代码导出
│   │   ├── CopyButton.tsx           # 复制按钮
│   │   └── BadgeList.tsx            # 标签列表
│   ├── lib/
│   │   ├── site.ts                  # 站点常量与导航链接
│   │   ├── homepage.ts              # 首页派生数据与分组逻辑
│   │   ├── filter-options.ts        # 筛选选项配置
│   │   ├── palettes.ts              # 配色数据源
│   │   ├── palette-utils.ts         # 筛选、导出和相似推荐逻辑
│   │   ├── types.ts                 # TypeScript 类型定义
│   │   └── utils.ts                 # 通用工具
│   └── styles/
│       └── global.css               # Tailwind 与全局设计变量
├── public/                          # 静态资源
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

编辑 `src/lib/palettes.ts`，向 `palettes` 数组追加一项：

```ts
{
  id: "your-palette-id",
  name: "Your Palette Name",
  description: "描述这个配色方案的用途和特点。",
  category: "categorical",
  colors: ["#4E79A7", "#F28E2B", "#E15759"],
  recommendedFor: ["bar", "scatter"],
  tags: ["publication", "multi-group"],
  colorblindSafe: true,
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

type Palette = {
  id: string;
  name: string;
  description: string;
  category: PaletteCategory;
  colors: string[];
  recommendedFor: PlotType[];
  tags: string[];
  colorblindSafe: boolean;
  background: "white" | "light" | "dark";
  source?: string;
};
```

添加后运行：

```bash
npm run typecheck
npm run build
```

详细贡献流程请参阅 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 路线图

- [ ] 上传图片提取配色方案
- [ ] 色盲模拟预览
- [ ] 灰度对比度检查
- [ ] 导出 Adobe ASE 文件
- [ ] 导出 CSS 变量
- [ ] 用户提交配色方案
- [ ] 基于 GitHub 的贡献工作流
- [ ] DOI / 论文图灵感收集
- [ ] AI 辅助配色推荐
- [ ] 配色方案对比视图

## 许可证

[MIT License](./LICENSE) — 自由使用、修改和分发。

## 致谢

- 色盲友好配色参考 Okabe & Ito (2008) 的研究
- 配色理论参考科研可视化最佳实践
- 感谢所有贡献者和提供反馈的科研人员

---

**SciPalette** — 让科研图更美观、更易读。
