# SciPalette

> 为科研人员打造的 publication-ready 配色方案库

[English](./README.en.md) | 中文

[![CI](https://github.com/fantasticjoe/scipalette/actions/workflows/ci.yml/badge.svg)](https://github.com/fantasticjoe/scipalette/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Deploy](https://img.shields.io/badge/deploy-Vercel-black.svg)](https://vercel.com)

---

## 简介

SciPalette 是一个专为科研可视化设计的配色方案收集与导出工具。不同于通用设计配色网站，SciPalette 专注于论文图、单细胞分析图、医学统计图和生物信息学图的配色需求。

**核心用户：** 科研人员、生物信息学家、数据科学家、医学统计师

## 功能特点

- **20+ 精选配色方案** — 覆盖 categorical、sequential、diverging、heatmap 四大类型
- **智能筛选** — 按类别、图类型、颜色数量、色盲友好性筛选
- **科研图预览** — 每个配色方案都有 bar plot、scatter、UMAP、heatmap 等模拟预览
- **一键代码导出** — 支持 Python/matplotlib、R/ggplot2、Scanpy、Seurat、GraphPad Prism
- **色盲友好标注** — 明确标注哪些方案对色觉障碍者友好
- **完全静态** — 无需后端，可部署到任何静态托管平台
- **响应式设计** — 桌面、平板、手机均可使用

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 16 | 框架（App Router + 静态生成） |
| TypeScript | 5 | 类型安全 |
| Tailwind CSS | 4 | 样式 |
| Lucide React | - | 图标 |
| React | 19 | UI 库 |

## 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/fantasticjoe/scipalette.git
cd scipalette

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

浏览器打开 http://localhost:3000

### 构建与部署

```bash
# 生产构建
npm run build

# 本地预览生产版本
npm start

# 代码检查
npm run lint
```

## 项目结构

```
scipalette/
├── app/
│   ├── page.tsx                 # 首页
│   ├── palettes/[id]/page.tsx   # 配色方案详情页
│   ├── layout.tsx               # 根布局
│   └── globals.css              # 全局样式
├── components/
│   ├── PaletteCard.tsx          # 配色卡片
│   ├── PaletteGrid.tsx          # 卡片网格
│   ├── PaletteFilters.tsx       # 筛选控件
│   ├── ColorSwatch.tsx          # 单色块展示
│   ├── PlotPreview.tsx          # 科研图预览
│   ├── CodeExport.tsx           # 代码导出
│   ├── CopyButton.tsx           # 复制按钮
│   └── BadgeList.tsx            # 标签列表
├── lib/
│   ├── types.ts                 # TypeScript 类型定义
│   ├── palettes.ts              # 配色数据
│   ├── palette-utils.ts         # 工具函数
│   └── utils.ts                 # 通用工具
├── .github/
│   ├── workflows/ci.yml         # CI 流程
│   ├── workflows/deploy.yml     # 部署流程
│   ├── ISSUE_TEMPLATE/          # Issue 模板
│   └── PULL_REQUEST_TEMPLATE.md # PR 模板
├── CONTRIBUTING.md              # 贡献指南
├── CONTRIBUTING.en.md           # 贡献指南（英文）
├── LICENSE                      # MIT 许可证
└── README.md                    # 项目文档
```

## 添加新配色方案

编辑 `lib/palettes.ts`，按以下格式添加：

```typescript
{
  id: "your-palette-id",
  name: "Your Palette Name",
  description: "描述这个配色方案的用途和特点",
  category: "categorical",
  colors: ["#HEX1", "#HEX2", "#HEX3"],
  recommendedFor: ["bar", "scatter"],
  tags: ["tag1", "tag2"],
  colorblindSafe: true,
  background: "white",
  source: "可选的来源说明"
}
```

详细贡献流程请参阅 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 数据结构

```typescript
type PaletteCategory = "categorical" | "sequential" | "diverging" | "heatmap";

type PlotType = "bar" | "line" | "scatter" | "umap" | "heatmap" | "volcano" | "boxplot";

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
