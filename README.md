# Mastra GitHub 代码审查工具

这是一个基于 Mastra 框架开发的GitHub代码审查工具，可以自动对PR进行代码审查并提供反馈。

## 功能

- 自动分析GitHub Pull Request中的代码变更
- 检测潜在问题，如代码风格、最佳实践和可能的错误
- 对每个文件的特定行添加评论
- 提供整体代码质量评估
- 根据代码质量自动决定是否批准、评论或请求修改

src/mastra/tools/AutoCodeReviewTool.ts - 代码审查工具实现
src/mastra/agents/CodeReviewerAgent.ts - 代码审查代理配置和提