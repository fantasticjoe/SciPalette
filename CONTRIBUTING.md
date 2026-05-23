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

Astro 会在终端输出本地开发地址，通常是 http://localhost:4321/。

### 提交前自检

在提交 Pull Request 前，请确保以下命令通过：

```bash
npm run test
npm run typecheck
npm run build
```

当前项目没有配置单独的 `lint` 脚本；CI 会运行测试、类型检查和生产构建。

### Pull Request 流程

1. 从 `main` 创建聚焦分支，例如 `feat/new-palette`、`fix/filter-reset` 或 `docs/readme-update`。
2. 按 [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) 的改动边界修改最小必要文件。
3. 对界面改动，请检查桌面宽度和约 390px 的移动端宽度；保持导航简洁、控件稳定、圆角克制。
4. 运行 `npm run test`、`npm run typecheck` 和 `npm run build`。
5. 打开 PR，并填写 `.github/PULL_REQUEST_TEMPLATE.md` 中的自检清单。

CI 会在 PR 和 `main` 推送时运行。`main` 推送还会触发 GitHub Pages 部署。

### 贡献一个配色方案

这是最常见的贡献方式。

如果你不想直接开 Pull Request，可以先从配色库页面点击 **Open palette request**，通过 GitHub Issue 提交建议；如果你使用 Art2Pal 生成了配色，可以直接粘贴 **SciPalette contribution JSON**。维护者会把通过审核的建议整理成正式的 `src/lib/palettes/<palette-name>.ts` 文件。

如果你直接提交代码：

1. 新增或修改 `src/lib/palettes/<palette-name>.ts`，并在 `src/lib/palettes/index.ts` 中注册导入和稳定 route key；不要在源文件或贡献 JSON 中手写 `id`。
2. 字段要求：
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

不要在源文件中手写 `id`。站点会根据 `src/lib/palettes/index.ts` 中的稳定 route key 自动生成短路由 id。

### 修改界面或功能

- 页面入口在 `src/pages/`。
- 共享页面外壳在 `src/layouts/BaseLayout.astro`。
- 全站导航和站点链接分别在 `src/components/SiteHeader.astro` 与 `src/lib/site.ts`。
- React 交互组件在 `src/components/`。
- 配色数据和导出逻辑在 `src/lib/`。
- 全局样式和设计变量在 `src/styles/global.css`。
- 项目使用 Astro 静态输出；线上站点从自定义域名根路径提供服务，新增站内链接应使用根路径。
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

Astro prints the local development URL in the terminal, usually http://localhost:4321/.

### Pre-submission Checks

Before opening a Pull Request, make sure the following commands pass:

```bash
npm run test
npm run typecheck
npm run build
```

The project does not currently define a separate `lint` script; CI runs tests, type checking, and the production build.

### Pull Request Flow

1. Create a focused branch from `main`, such as `feat/new-palette`, `fix/filter-reset`, or `docs/readme-update`.
2. Keep edits scoped to the ownership boundaries in [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md).
3. For UI changes, check desktop and a mobile width around 390px; keep navigation simple, controls stable, and corner radius restrained.
4. Run `npm run test`, `npm run typecheck`, and `npm run build`.
5. Open a PR and complete the checklist in `.github/PULL_REQUEST_TEMPLATE.md`.

CI runs on pull requests and pushes to `main`. Pushes to `main` also trigger GitHub Pages deployment.

### Contributing a Palette

This is the most common contribution type.

If you do not want to open a Pull Request directly, use **Open palette request** on the palette library page to submit a GitHub Issue. If you generated a palette with Art2Pal, paste the **SciPalette contribution JSON** into the issue form. Maintainers can turn accepted suggestions into formal `src/lib/palettes/<palette-name>.ts` files.

If you are submitting code directly:

1. Add or update `src/lib/palettes/<palette-name>.ts`, then register its import and stable route key in `src/lib/palettes/index.ts`; do not hand-write an `id` in source files or contribution JSON.
2. Field requirements:
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

Do not hand-write an `id` in source files. The site generates a short route id from the stable route key in `src/lib/palettes/index.ts`.

### Updating UI or Functionality

- Page entry points live in `src/pages/`.
- Shared page chrome lives in `src/layouts/BaseLayout.astro`.
- Global navigation and site links live in `src/components/SiteHeader.astro` and `src/lib/site.ts`.
- Interactive React components live in `src/components/`.
- Palette data and export helpers live in `src/lib/`.
- Global styles and design variables live in `src/styles/global.css`.
- The project uses Astro static output. The live site is served from the custom-domain root, so new internal links should use root-relative paths.
- For more detailed contribution boundaries, see [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md).

### Commit Conventions

- Branch names: `feat/xxx`, `fix/xxx`, `docs/xxx`
- Commit messages should follow [Conventional Commits](https://www.conventionalcommits.org/)
- Keep each PR focused on a single change
- For documentation changes, keep the Chinese and English README files aligned when relevant

### Reporting Issues

Open an issue via [GitHub Issues](https://github.com/fantasticjoe/SciPalette/issues).
