# LIJIA2027

记录时序预测方法、实验与风电、负荷、光伏和电池方向的应用。

## 本地开发

- 安装依赖 `pnpm install --frozen-lockfile`
- 启动 `pnpm dev`
- 打包 `pnpm build`

首页在 `docs/index.md`，目录总览在 `docs/forecasting/index.md`。将新文章加入总览和 `docs/.vitepress/configs/sidebar.ts` 对应栏目。顶部下拉链接到总览里的同名章节。

搜索默认索引站内内容。准备好自己的 Algolia DocSearch 后，可在构建时设置 `ALGOLIA_APP_ID`、`ALGOLIA_INDEX_NAME` 和 `ALGOLIA_SEARCH_API_KEY`。部署到仓库子路径时设置 `APP_BASE_PATH` 为仓库名，`SITE_URL` 为含子路径的站点完整地址，用于生成站点地图。
