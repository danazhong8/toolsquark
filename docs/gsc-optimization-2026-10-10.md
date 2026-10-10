# Search Console 数据驱动优化记录：2026-10-10

## 基线与目标

本次只读 API 的完整数据截至 2026-10-06。近 28 天（9/9–10/6）全站 47,993 展示、78 点击、CTR 0.163%；近 7 天展示继续增长，但点击 27 → 24。优先改善已有展示页面的意图匹配及使用体验，不新增工具、不删除下滑页面、不改首页结构。

| 页面 | 近 28 天展示 | 点击 | 平均排名 | 本次处理 |
| --- | ---: | ---: | ---: | --- |
| Water Intake | 852 | 0 | 7.82 | 摘要、首屏、单位换算、计算分项、结果摘要 |
| Due Date | 3,173 | 0 | 19.19 | 摘要、H1、孕周摘要、方法对比、日期边界 |
| Walking Time To Steps | 23,089 | 45 | 7.17 | 实测步频、手机端控件、首屏精简 |

查询层面：饮水页的 `how much water to drink a day calculator` 为 337 展示、0 点击、排名 7.35；预产期页的 `pregnancy due date calculator` 为 749 展示、0 点击、排名 8.40。页面平均排名与这些具体查询的排名不同。

## 已实现

- 三页 title 均保留；Body Fat、Daily Step Goal、Walking Pace 的既有标题和正文未更改。
- 饮水页：明确是一般成人的流体规划启发式，不是喝纯水的处方；增加 L、US cups、US fl oz 及基线/运动分项；去掉无临床依据的彩色结果等级；单位切换保留体重、profile、运动分钟。
- 预产期页：明确 28 天周期假设；日期、孕周、孕期、剩余时间和计算日期分开显示；过了估计日期不再伪装成“剩余 0 周”；修正第二孕期从 14 周、第三孕期从 28 周开始；保留临床确认与方法限制。
- 两页复制摘要沿用现有复制逻辑；摘要含估计限制和页面链接。只在用户点击复制时写入剪贴板，不把输入加入 URL、遥测或持久化存储。
- 步行页：保持 45 分钟标题实验，新增实测 cadence；90/110/125 预设不变。去掉重复的 45 分钟提示块，移动端不显示重复 highlights，以便计算按钮进入首屏。
- 修改输入后隐藏旧结果；无效输入不显示旧结果或新成功摘要。
- 三个改动页的 sitemap lastmod 更新为 2026-10-10；BMR/TDEE/Body Fat 恢复为真实的上次内容更新日 2026-09-28。同步 sitemap 生成器，避免下次生成退回 7 月的统一日期。
- CTR 日志记录 11/7 的饮水及预产期复盘点；保留 10/26 的旧实验复盘点。当前同时有内容和 UX 改动，不应解释为独立标题 A/B 实验。

## 索引诊断：修改前读取

| 页面 | Google 索引结果 | Google 规范网址 | 最近抓取时间（UTC） |
| --- | --- | --- | --- |
| BMR | Submitted and indexed / PASS | apex `.html`，与用户指定一致 | 2026-09-19 06:05:55 |
| TDEE | Submitted and indexed / PASS | apex `.html`，与用户指定一致 | 2026-09-12 00:59:17 |
| Body Fat | Submitted and indexed / PASS | apex `.html`，与用户指定一致 | 2026-09-10 15:17:31 |

三页的 robots 允许抓取、索引允许、最近记录抓取成功。六个重点页面的实时 HTTP 均为 200、canonical 正确，HTML 和 HTTP header 未发现 noindex。

这些是 Google 已知索引状态，不是实时抓取结果，也不是“没有任何 SEO 问题”的保证。最近抓取记录仍早于 9/28 改动，不能假设 Google 已重新处理新版本。sitemap 的真实修改日期可提供更新信号，但不能保证重新抓取或收录时点。

## 验证方式

运行 `node scripts/validate-generated-pages.js`、indexing hygiene、core query map、guide pages、acquisition paths 审计。另增加 `scripts/test-gsc-priority-tools.js` 的本地 Playwright 回归：

- 饮水量公式与单位换算、metric/imperial 切换、空值/负值/过大运动分钟与非有限输入。
- 预产期 280 天、闰年、夏令时、13w6d/14w0d/27w6d/28w0d 边界、未来日期和输入范围。
- 步行默认/各预设/实测步频、空值及范围校验。
- 有效结果摘要、剪贴板失败状态、开始/完成事件仅含 tool/type，不发送体重或日期。
- 320/390/768/1440px，共 12 个页面-宽度组合；首屏计算按钮可见、页面无横向溢出、结果文字位于结果区内、现有图片正常加载；输入及结果截图共 24 张。

测试使用隔离的无头浏览器和本地临时 HTTP 服务，屏蔽外部请求。剪贴板采用测试替身，既不改变用户系统剪贴板，也不意味着验证了所有浏览器的原生权限策略。浏览器关闭、临时服务结束后测试进程退出。

可用已安装的 Playwright 运行；若不在项目模块路径，设置 `PLAYWRIGHT_MODULE_PATH` 为其模块路径。可选 `TOOL_BROWSER_CHANNEL=msedge`，可选 `TOOL_SCREENSHOT_DIR` 保存截图。

## 后续评估

1. 以完整数据比较等长窗口，按页面/查询/设备/国家拆分。暂定日期和匿名查询不当作零访问或机器人证据。
2. 10/26 复盘 9/28 标题实验；步行页 10/10 新增交互是同期因素，不能仅凭 CTR 变化归因标题。
3. 11/7 复盘饮水和预产期。发布后另查实际抓取日期，避免把整段未抓取时间误当作新版本效果。
4. 验证现有 tool_start/tool_complete/result_share_copy 事件是否进入分析平台。代码回归证明调用路径，不代表后台已经有真实用户完成率；未获得平台数据前不虚报结果。
5. 先提高已有曝光的点击质量，不承诺排名、CTR 或日均点击增长。

## 方法资料

- [CDC：Water and Healthier Drinks](https://www.cdc.gov/healthy-weight-growth/water-healthy-drinks/index.html)
- [ACOG：How Your Fetus Grows During Pregnancy](https://www.acog.org/womens-health/faqs/how-your-fetus-grows-during-pregnancy)
- [NHS：Pregnancy Due Date Calculator](https://www.nhs.uk/pregnancy/finding-out/due-date-calculator/)
- [Google：Search Analytics API](https://developers.google.com/webmaster-tools/v1/searchanalytics/query)
- [Google：Titles](https://developers.google.com/search/docs/appearance/title-link) / [Snippets](https://developers.google.com/search/docs/appearance/snippet)

参考资料解释通用方法或建议，不代表这些机构为本站、体重公式系数或具体结果背书。
