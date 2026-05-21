# 贡献指南 / Contributing Guide

[简体中文](#简体中文) | [English](#english)

---

## 简体中文

感谢你愿意为 SciPalette 做出贡献！本项目欢迎新的配色方案、问题修复、文档改进等各类贡献。

### 开发环境

- Node.js >= 20.9

```bash
npm install
npm run dev
```

### 提交前自检

在提交 Pull Request 前，请确保以下命令全部通过：

```bash
npm run lint        # 代码风格检查
npm run typecheck   # 类型检查
npm run build       # 生产构建
```

### 贡献一个配色方案

这是最常见、也最受欢迎的贡献方式。

1. 在 `lib/palettes.ts` 的 `palettes` 数组中追加一项。
2. 字段要求：
   - `id`：全局唯一，使用 kebab-case。
   - `name` / `nameEn`：中、英文名称。
   - `category`：必须是 `sequential`、`diverging` 或 `qualitative` 之一。
   - `colorblindSafe`：是否色盲友好。**请勿凭感觉填写**，建议使用 [Coblis](https://www.color-blindness.com/coblis-color-blindness-simulator/) 等工具验证后再标注 `true`。
   - `colors`：合法的 HEX 颜色数组，建议 3–8 个颜色。
   - `description`：一句话说明适用场景。
3. 运行上述自检命令，确认本地构建通过。

示例：

```ts
{
  id: "viridis-lite",
  name: "翠绿轻量",
  nameEn: "Viridis Lite",
  category: "sequential",
  colorblindSafe: true,
  colors: ["#440154", "#3B528B", "#21908C", "#5DC863", "#FDE725"],
  description: "感知均匀的连续配色，适合热力图与密度图。",
}
```

### 提交规范

- 分支命名：`feat/xxx`、`fix/xxx`、`docs/xxx`
- 提交信息遵循 [Conventional Commits](https://www.conventionalcommits.org/)
- 一个 PR 聚焦一件事

### 报告问题

通过 [GitHub Issues](https://github.com/zhouyuezhu/scipalette/issues) 提交。

---

## English

Thanks for your interest in contributing to SciPalette! New palettes, bug fixes, and documentation improvements are all welcome.

### Development Environment

- Node.js >= 20.9

```bash
npm install
npm run dev
```

### Pre-submission Checks

Before opening a Pull Request, make sure all of the following pass:

```bash
npm run lint        # Lint
npm run typecheck   # Type check
npm run build       # Production build
```

### Contributing a Palette

1. Append an entry to the `palettes` array in `lib/palettes.ts`.
2. Field requirements:
   - `id`: globally unique, kebab-case.
   - `name` / `nameEn`: Chinese and English names.
   - `category`: one of `sequential`, `diverging`, or `qualitative`.
   - `colorblindSafe`: verify with a tool like [Coblis](https://www.color-blindness.com/coblis-color-blindness-simulator/) before setting `true`.
   - `colors`: valid HEX colors, 3–8 recommended.
   - `description`: one-line note on when to use it.
3. Run the checks above to confirm the build passes.

### Commit Conventions

- Branch names: `feat/xxx`, `fix/xxx`, `docs/xxx`
- Follow [Conventional Commits](https://www.conventionalcommits.org/)
- Keep each PR focused on a single change

### Reporting Issues

Open an issue via [GitHub Issues](https://github.com/zhouyuezhu/scipalette/issues).
