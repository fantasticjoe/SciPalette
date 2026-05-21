# 贡献指南 / Contributing Guide

[简体中文](#简体中文) | [English](#english)

---

## 简体中文

感谢你愿意为 SciPalette 做出贡献。本项目欢迎新的配色方案、问题修复、文档改进和可访问性改进。

### 开发环境

- Node.js >= 22.0.0
- npm

```bash
npm install
npm run dev
```

Astro 会在终端输出本地开发地址，通常是 http://localhost:4321/SciPalette/。

### 提交前自检

在提交 Pull Request 前，请确保以下命令通过：

```bash
npm run typecheck
npm run build
```

当前项目没有配置单独的 `lint` 脚本；CI 会运行类型检查和生产构建。

### Pull Request 流程

1. 从 `main` 创建聚焦分支，例如 `feat/new-palette`、`fix/filter-reset` 或 `docs/readme-update`。
2. 按 [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) 的改动边界修改最小必要文件。
3. 对界面改动，请检查桌面宽度和约 390px 的移动端宽度；保持导航简洁、控件稳定、圆角克制。
4. 运行 `npm run typecheck` 和 `npm run build`。
5. 打开 PR，并填写 `.github/PULL_REQUEST_TEMPLATE.md` 中的自检清单。

CI 会在 PR 和 `main` 推送时运行。`main` 推送还会触发 GitHub Pages 部署。

### 贡献一个配色方案

这是最常见的贡献方式。

1. 在 `src/lib/palettes.ts` 的 `palettes` 数组中追加一项。
2. 字段要求：
   - `id`：全局唯一，使用 kebab-case。
   - `name`：配色方案名称。
   - `description`：一句话说明适用场景和特点。
   - `category`：必须是 `categorical`、`sequential`、`diverging` 或 `heatmap` 之一。
   - `colors`：合法 HEX 颜色数组，建议至少 3 个颜色。
   - `recommendedFor`：推荐图类型，可选 `bar`、`line`、`scatter`、`umap`、`heatmap`、`volcano`、`boxplot`。
   - `tags`：用于搜索和相似推荐的标签。
   - `colorblindSafe`：是否色盲友好。请勿凭感觉填写，建议使用 Coblis 等工具验证后再标注 `true`。
   - `background`：推荐背景，可选 `white`、`light`、`dark`。
   - `source`：可选，说明灵感来源、论文、工具或理论依据。
3. 运行自检命令，确认本地构建通过。

示例：

```ts
{
  id: "viridis-lite",
  name: "Viridis Lite",
  description: "Perceptually uniform sequential palette for heatmaps and density plots.",
  category: "sequential",
  colors: ["#440154", "#3B528B", "#21908C", "#5DC863", "#FDE725"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "perceptually-uniform", "continuous"],
  colorblindSafe: true,
  background: "white",
  source: "Inspired by matplotlib viridis"
}
```

### 修改界面或功能

- 页面入口在 `src/pages/`。
- 共享页面外壳在 `src/layouts/BaseLayout.astro`。
- 全站导航和站点链接分别在 `src/components/SiteHeader.astro` 与 `src/lib/site.ts`。
- React 交互组件在 `src/components/`。
- 配色数据和导出逻辑在 `src/lib/`。
- 全局样式和设计变量在 `src/styles/global.css`。
- 项目使用 Astro 静态输出，并在 `astro.config.ts` 配置了 `base: "/SciPalette"`；新增站内链接时要保留这个部署路径。
- 更详细的改动边界请参阅 [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)。

### 提交规范

- 分支命名：`feat/xxx`、`fix/xxx`、`docs/xxx`
- 提交信息建议遵循 [Conventional Commits](https://www.conventionalcommits.org/)
- 一个 PR 聚焦一件事
- 文档改动请尽量同步更新中英文 README 中的对应内容

### 报告问题

通过 [GitHub Issues](https://github.com/fantasticjoe/SciPalette/issues) 提交。

---

## English

Thanks for your interest in contributing to SciPalette. New palettes, bug fixes, documentation improvements, and accessibility improvements are welcome.

### Development Environment

- Node.js >= 22.0.0
- npm

```bash
npm install
npm run dev
```

Astro prints the local development URL in the terminal, usually http://localhost:4321/SciPalette/.

### Pre-submission Checks

Before opening a Pull Request, make sure the following commands pass:

```bash
npm run typecheck
npm run build
```

The project does not currently define a separate `lint` script; CI runs type checking and the production build.

### Pull Request Flow

1. Create a focused branch from `main`, such as `feat/new-palette`, `fix/filter-reset`, or `docs/readme-update`.
2. Keep edits scoped to the ownership boundaries in [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md).
3. For UI changes, check desktop and a mobile width around 390px; keep navigation simple, controls stable, and corner radius restrained.
4. Run `npm run typecheck` and `npm run build`.
5. Open a PR and complete the checklist in `.github/PULL_REQUEST_TEMPLATE.md`.

CI runs on pull requests and pushes to `main`. Pushes to `main` also trigger GitHub Pages deployment.

### Contributing a Palette

This is the most common contribution type.

1. Append an entry to the `palettes` array in `src/lib/palettes.ts`.
2. Field requirements:
   - `id`: globally unique, kebab-case.
   - `name`: palette name.
   - `description`: one-line note on where the palette works best.
   - `category`: one of `categorical`, `sequential`, `diverging`, or `heatmap`.
   - `colors`: valid HEX color array, with at least 3 colors recommended.
   - `recommendedFor`: suggested plot types, chosen from `bar`, `line`, `scatter`, `umap`, `heatmap`, `volcano`, and `boxplot`.
   - `tags`: search and similarity tags.
   - `colorblindSafe`: verify with a tool such as Coblis before setting `true`.
   - `background`: recommended background, one of `white`, `light`, or `dark`.
   - `source`: optional note about inspiration, papers, tools, or theory.
3. Run the checks above to confirm the build passes.

Example:

```ts
{
  id: "viridis-lite",
  name: "Viridis Lite",
  description: "Perceptually uniform sequential palette for heatmaps and density plots.",
  category: "sequential",
  colors: ["#440154", "#3B528B", "#21908C", "#5DC863", "#FDE725"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "perceptually-uniform", "continuous"],
  colorblindSafe: true,
  background: "white",
  source: "Inspired by matplotlib viridis"
}
```

### Updating UI or Functionality

- Page entry points live in `src/pages/`.
- Shared page chrome lives in `src/layouts/BaseLayout.astro`.
- Global navigation and site links live in `src/components/SiteHeader.astro` and `src/lib/site.ts`.
- Interactive React components live in `src/components/`.
- Palette data and export helpers live in `src/lib/`.
- Global styles and design variables live in `src/styles/global.css`.
- The project uses Astro static output with `base: "/SciPalette"` in `astro.config.ts`; preserve that deployment path when adding internal links.
- For more detailed contribution boundaries, see [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md).

### Commit Conventions

- Branch names: `feat/xxx`, `fix/xxx`, `docs/xxx`
- Commit messages should follow [Conventional Commits](https://www.conventionalcommits.org/)
- Keep each PR focused on a single change
- For documentation changes, keep the Chinese and English README files aligned when relevant

### Reporting Issues

Open an issue via [GitHub Issues](https://github.com/fantasticjoe/SciPalette/issues).
