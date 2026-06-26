# ToolsQuark 谷歌 SEO 优化新方案

更新时间：2026-06-26

本方案基于本地文件 `ToolsQuark_谷歌SEO优化阶段执行清单.txt`、当前站点已完成工作、`seo/core-query-map`、Search Console CTR 闭环，以及 Google Search Central 对有用内容、规范链接、站点地图、结构化数据和数据迭代的要求重新整理。

核心方向不变：

> 先修技术基础，再优化主力页面，再建立指南内容矩阵，最后根据 Search Console 数据持续迭代。

当前不建议继续盲目扩展到大量新工具页。更合理的路径是：先把 10-12 个最有机会获得曝光和点击的页面做成样板，再复制到其他工具页。

## 一、当前站点基础判断

### 已完成内容

- 主域已统一为 `https://toolsquark.com/`，整体方向为无 `www`。
- sitemap、robots、canonical、Vercel redirects 已建立。
- 首页主题已从泛工具站修正为 calculators、self-checks、decision guides。
- 目前已发布 47 个工具页，包括计算器、自测、生活方式工具、情感陪伴/关系类自测。
- 22 个原创自测工具已经统一为 12 题、4 维度、版本化内容结构。
- 已有 8 篇指南页，并与部分工具页建立匹配关系。
- 已建立核心 12 页查询映射：`seo/core-query-map.md` 与 `seo/core-query-map.json`。
- 已建立 Search Console 导出分析流程、CTR 优化规则和测试记录表。
- 已具备 About、Editorial Policy、Privacy、Terms、方法说明、参考来源、更新时间等信任基础。
- 计算器页和自测页右侧已增加方法图示，提升专业感和解释性。

### 当前主要风险

- 页面数量已经不少，但真实查询、曝光、点击、完成率数据仍不足，继续扩张要更克制。
- 部分工具存在搜索意图重叠风险，例如 BMI / Healthy Weight Range、BMR / TDEE / Calorie Goal、Stress / Anxiety、Focus / Procrastination / Follow-Through。
- 情感连接类工具方向有差异化，但还需要更强的主题中心页、结果解释和可分享机制。
- 工具本身可用，但部分页面仍需要加强开头搜索意图说明、结果解释、FAQ、案例、内部链接和指南承接。

## 二、总体 SEO 策略

ToolsQuark 不应正面硬抢所有高竞争大词，例如最泛的 `BMI calculator`、`BMR calculator`、`age calculator`。更适合的定位是：

> 透明方法的计算器、保护隐私的自测、帮助用户理解结果的决策指南。

也就是说，每个页面都要做到：

- 只负责一个明确搜索意图。
- 明确说明方法、输入、结果、限制。
- 工具结果后给用户一个可执行的下一步。
- 与同主题指南和相关工具互相连接。
- 避免诊断化、夸大化和伪专业表达。

## 三、P0：技术基础与索引保护

目标：让 Google 更稳定地抓取、识别、收录网站，避免权重分散和重复页面问题。

优先事项：

1. 继续保持 `https://toolsquark.com/` 为唯一正式域名。
2. 确保 `https://www.toolsquark.com/` 永久跳转到无 `www` 版本。
3. 每个正式页面的 canonical 指向自己的无 `www` 正式 URL，不要统一指向首页。
4. sitemap 只保留正式页面，不放旧页面、重复页面、测试页、空内容页。
5. 每次新增或大幅更新 URL 后，在 Search Console 重新提交 `https://toolsquark.com/sitemap.xml`。
6. 每月检查一次：
   - 重复 title
   - 缺失 description
   - canonical 是否异常
   - sitemap 是否包含废弃 URL
   - redirect 目标是否有效

成功信号：

- 核心页面被收录或有明确未收录原因。
- Search Console 中重复网页、备用规范网页、已发现未抓取问题逐步减少。
- 同一查询不会长期由多个 ToolsQuark 页面互相竞争。

## 四、P1：先优化 10-12 个主力页面

目标：不要继续盲目堆页面，先把最有机会的页面做强。

本地清单建议优先 10 页：

1. Stress Pattern Self-Check
2. Anxiety Pattern Self-Check
3. Sleep Quality Self-Check
4. Social Anxiety Self-Check
5. Overthinking Self-Check
6. Smartphone Use Self-Check
7. Social Media Use Self-Check
8. TDEE Calculator
9. Calorie Calculator
10. Daily Steps Goal Calculator

结合当前站点已建立的核心查询映射，我建议扩展为核心 12 页：

1. BMI Calculator
2. Body Fat Calculator
3. TDEE Calculator
4. Daily Calorie Goal Calculator
5. Macro Calculator
6. Sleep Schedule Calculator
7. Sleep Pattern Self-Check
8. Stress Pattern Self-Check
9. Anxiety & High-Alert Pattern Self-Check
10. Procrastination Pattern Self-Check
11. Emotional Needs Clarity Self-Check
12. Conflict Repair Self-Check

执行建议：先做本地清单中的 10 页，同时保留核心 12 页作为 Search Console 数据闭环对象。这样既照顾新站更容易突破的自测长尾词，也不放弃站点长期需要沉淀的计算器核心页。

### 每个主力页按 7 项优化

1. 优化 title

标题结构建议：

`核心关键词 + 具体用途 + 场景或结果`

示例：

- `TDEE Calculator: Estimate Maintenance Calories by Activity Level`
- `Sleep Pattern Self-Check: Review Sleep Quality And Daytime Impact`
- `Stress Pattern Self-Check: Review Overload, Tension, And Recovery`

注意：

- 不要堆多个二级关键词。
- 不要使用 `accurate`、`clinical`、`diagnosis`、`scientifically proven` 等无法支撑的词。
- 情绪、自测、心理类页面优先使用 `Self-Check`、`Pattern Review`、`Reflection Tool`。

2. 优化 meta description

description 要告诉用户点击后能得到什么。

计算器模板：

`Estimate [result] from [inputs]. See the formula, assumptions, example, practical limits, and related next steps.`

自测模板：

`Review [pattern] across [dimensions] with a private self-check. Educational only, not a clinical diagnosis.`

3. 增加搜索意图开头段

每个主力页面开头需要有 80-120 英文词，说明：

- 这个工具解决什么问题。
- 需要哪些输入。
- 结果如何解释。
- 适合什么情况。
- 不适合替代什么。

4. 增加 FAQ

每个主力页建议 5-7 个 FAQ。FAQ 要像真实用户会搜的问题，而不是为了凑字数。

TDEE 示例：

- Is TDEE the same as BMR?
- Which activity level should I choose?
- Can I use TDEE for weight loss?
- Why is my TDEE different from my fitness app?

Stress 示例：

- What is the difference between stress and anxiety?
- Why do I feel stressed even when nothing serious happens?
- Can poor sleep increase stress?
- When should I seek professional help?

5. 增加内部链接

每个主力页底部至少连接：

- 2-3 个相关工具
- 1 个匹配指南
- 必要时连接到所属分类页

内链不要乱放，要围绕同一个主题簇。

6. 强化结果解释区

自测类页面结果不能只显示分数。建议结果区包含：

- Your result
- What this may mean
- What to review next
- One small action to try
- When to seek help
- Related tools or guides

计算器类页面结果区建议包含：

- Result
- Formula or assumption
- Example interpretation
- Practical limit
- Related next step

7. 增加可复制、可分享结果摘要

尤其是自测类工具，建议增加：

- Copy result summary
- Share summary
- Save as note

分享文案必须避免诊断化。例如：

`My sleep pattern review suggested that continuity may be a bigger issue than duration. This is not a diagnosis, but it helped me choose one habit to review.`

## 五、P2：建立主题中心，而不是只做工具列表

目标：让 Google 和用户理解 ToolsQuark 的主题结构。

建议建立 5 个主题中心：

1. 身体指标与营养规划
   - BMI、Body Fat、WHtR、WHR、BMR、TDEE、Calorie Goal、Macro、Protein。

2. 睡眠与恢复
   - Sleep Schedule、Sleep Debt、Sleep Pattern、Caffeine Cutoff。

3. 专注力与行为改变
   - Procrastination、Follow-Through、Focus、Habit Consistency、Smartphone、Social Media。

4. 压力与情绪调节
   - Stress、Anxiety、Overthinking、Burnout。

5. 情感连接与关系修复
   - Emotional Needs、Boundaries、Communication、Availability、Felt Understood、Conflict Repair、Safe Disclosure、Support Access。

分类页要从“工具目录”升级为“主题入口”：

- 增加“我该用哪个工具”的选择路径。
- 增加同类工具对比。
- 增加匹配指南入口。
- 保留完整目录，但不要只给用户一堆卡片。

成功信号：

- 分类页开始获得非品牌词曝光。
- 用户从分类页点击工具的比例提升。
- 指南页和工具页之间形成互相导流。

## 六、P3：指南内容矩阵

目标：用指南页承接问题型搜索，再把用户导向工具页。

本地清单建议第一批 10 篇指南：

1. BMR vs TDEE: What Is the Difference?
2. TDEE vs Calorie Calculator: Which One Should You Use?
3. BMI vs Body Fat: Which Is More Useful?
4. Why Your Calorie Calculator Result May Be Wrong
5. How to Choose a Realistic Daily Step Goal
6. Stress vs Anxiety: How to Tell the Difference
7. Burnout vs Stress: What Is the Difference?
8. Overthinking vs Anxiety: How They Differ
9. Sleep Schedule vs Sleep Quality
10. Social Media Addiction vs Normal Use

当前站点已上线部分指南，因此下一步建议补齐到 14-16 篇。新增优先级：

1. BMI、腰围比例、体脂率：应该看哪个指标？
2. TDEE 与 calorie goal：为什么维持热量和目标热量不同？
3. Sleep debt 与 sleep quality：睡够时间为什么仍疲惫？
4. Stress、anxiety、overthinking：如何区分三种模式？
5. Procrastination、focus、follow-through：拖延、注意力和执行力的边界。
6. Emotional boundaries 与 emotional availability 的区别。
7. Felt understood 与 support access 的区别。
8. Conflict repair：争吵后应该复盘什么？

每篇指南建议结构：

- 直接回答问题。
- 解释概念。
- 对比表。
- 常见误区。
- 哪个工具适合你。
- 相关工具链接。
- FAQ。

每篇指南至少链接 2-4 个工具页，每个工具页也要反向链接到对应指南。

## 七、P4：Search Console CTR 数据闭环

目标：有曝光后，提高点击率，不凭感觉改标题。

执行方式：

1. 每 28 天导出 Search Console 数据。
2. 数据列包含：`query,page,clicks,impressions,ctr,position`。
3. 放入 `seo/gsc/input/`。
4. 运行：

```powershell
node scripts/analyze-gsc-export.js seo/gsc/input
```

5. 每轮最多选择 3 个页面做标题或描述测试。
6. 一次只改一个变量：title 或 meta description。
7. 记录到 `seo/ctr-test-log.csv`。
8. 等待完整可比的 28 天窗口再判断保留、继续修改或回滚。

优先处理三类页面：

1. 有曝光但 0 点击
   - 说明 Google 愿意展示，但标题或描述不够吸引。
   - 优先改 title 和 description。

2. 平均排名 8-20 的页面
   - 最值得补内容、补 FAQ、补内链、补指南承接。
   - 不要只改标题。

3. 长期 0 曝光页面
   - 不要急着删除。
   - 先检查索引、内链、搜索意图、标题是否过泛、内容是否太薄。

CTR 判断规则沿用现有 `seo/ctr-playbook.md`：

- 排名 1-3 且 CTR 低于 8%：测试标题。
- 排名 4-5 且 CTR 低于 5%：测试标题或描述。
- 排名 6-10 且 CTR 低于 3%：先检查搜索意图和标题承诺。
- 排名 5-20 且有曝光：优先增强内容和内部链接。

## 八、P5：新工具开发方向

目标：以后新增页面不能乱做，要围绕主题和搜索机会。

新工具必须满足至少 3 条：

- 有明确任务型或自我反思型搜索意图。
- 结果可以用透明方法生成。
- 能自然连接到现有主题中心或指南。
- 不重复已有工具。
- 不涉及高风险诊断、治疗、法律、金融结论。

推荐方向：

1. Caffeine Sensitivity Self-Check
2. Sleep Chronotype Routine Planner
3. Workout Recovery Readiness Self-Check
4. Decision Fatigue Self-Check
5. Personal Values Clarity Self-Check
6. Emotional Validation Style Self-Check
7. Relationship Apology Readiness Self-Check
8. Meeting Fatigue Calculator / Self-Check

暂缓方向：

- broad depression test
- clinical diagnosis 类测试
- 大站高度垄断的泛计算器
- 无方法说明的娱乐人格测试
- 与现有工具搜索意图高度重叠的新页面

## 九、30 天执行计划

### 第 1 周：技术基础与主力页标题描述

任务：

- 复查无 `www`、canonical、sitemap、robots。
- 确认 Search Console sitemap 状态。
- 选定 10 个主力页。
- 优化 10 个主力页 title、description、H1、intro。
- 运行生成页验证脚本。

### 第 2 周：主力页内容增强

任务：

- 每个主力页补搜索意图段落。
- 每个主力页补 5-7 个 FAQ。
- 每个主力页补 3-5 个相关内链。
- 强化结果解释区。
- 检查移动端显示。

### 第 3 周：指南矩阵

任务：

- 新增或重写 3-5 篇指南。
- 每篇指南加入对比表、FAQ、相关工具入口。
- 工具页和指南页双向链接。
- 优先处理：
  - Stress vs Anxiety
  - Sleep Schedule vs Sleep Quality
  - BMR vs TDEE
  - BMI vs Body Fat
  - Procrastination vs Follow-Through

### 第 4 周：Search Console 与 CTR

任务：

- 导出 Search Console 28 天数据。
- 运行 GSC 分析脚本。
- 找出有曝光低点击页面。
- 找出排名 8-20 页面。
- 最多启动 3 个 title / description 测试。
- 记录到 `seo/ctr-test-log.csv`。

## 十、90 天目标

- 28 天曝光达到 28,000+。
- 28 天点击达到 2,800+。
- 核心 12 页都有可测量完成事件。
- 指南页达到 14-16 篇。
- 至少 5 个分类页具备主题中心能力，而不仅是目录。
- 低质、重复、低效工具有明确处理规则。
- Search Console 每 28 天形成一次闭环。

## 十一、现在最不应该做什么

不要：

- 一天生成几十个低质量页面。
- 继续堆泛 BMI、Age、BMR 类大词工具。
- 频繁大改网站结构。
- 看到 0 点击就立刻删除页面。
- 只看收录数量，不看曝光、点击、完成率。
- 把自测包装成诊断、临床测试或权威结论。

当前核心判断：

> ToolsQuark 不是没有价值，而是需要让 Google 更清楚地理解：每个页面解决什么具体问题，为什么比普通工具页更值得展示，以及用户完成工具后能得到什么下一步。

## 十二、下一步建议

最推荐立刻执行：

1. 以本地清单的 10 个主力页面为第一批，做 title、description、intro、FAQ、内链、结果解释强化。
2. 把分类页升级成主题中心，尤其是 Mental Health、Lifestyle、Emotional Connection。
3. 补齐 3-5 篇最能带动工具页的指南。
4. 等 Search Console 有足够数据后，严格按 28 天周期做 CTR 测试。

如果只选一个 P0 后的最优先动作：

> 先把 Stress、Anxiety、Sleep Pattern、Overthinking、TDEE、Daily Calorie Goal 这 6 个页面做成样板，再复制优化模式到其他页面。

## 官方参考

- Google Search Central：有用、可靠、以人为本的内容  
  https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google SEO Starter Guide  
  https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google 结构化数据说明  
  https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Google Sitemap 说明  
  https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
