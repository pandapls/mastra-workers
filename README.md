# Mastra GitHub 代码审查工具

这是一个基于 Mastra 框架开发的GitHub代码审查工具，可以自动对PR进行代码审查并提供反馈。

## 功能

- 自动分析GitHub Pull Request中的代码变更
- 检测潜在问题，如代码风格、最佳实践和可能的错误
- 对每个文件的特定行添加评论
- 提供整体代码质量评估
- 根据代码质量自动决定是否批准、评论或请求修改

## 安装

```bash
# 克隆仓库
git clone https://github.com/yourusername/mastra-workers.git
cd mastra-workers

# 安装依赖
npm install
```

## 配置

在使用之前，需要设置GitHub Personal Access Token（个人访问令牌）。该令牌需要具有以下权限：

- `repo` - 完整的仓库访问权限
- `pull_requests` - 拉取请求读写权限

## 使用方法

### 开发环境运行

```bash
npm run dev
```

### 生产环境构建

```bash
npm run build
```

### 通过API调用代码审查

您可以通过HTTP请求使用代码审查功能：

```bash
curl -X POST http://your-api-host/api/v1/codeReview \
  -H "Content-Type: application/json" \
  -d '{
    "owner": "仓库所有者",
    "repo": "仓库名称",
    "pullNumber": 123,
    "githubToken": "你的GitHub令牌"
  }'
```

### 与Webhook集成

您可以将此工具设置为GitHub Webhook，以便在创建新的PR或更新现有PR时自动触发代码审查：

1. 在GitHub仓库设置中添加webhook
2. 设置Webhook的Payload URL为您的API端点
3. 选择"Pull request"事件
4. 设置Secret（可选，但建议）
5. 启用Webhook

## 自定义

您可以通过修改以下文件来自定义代码审查逻辑：

- `src/mastra/tools/AutoCodeReviewTool.ts` - 代码审查工具实现
- `src/mastra/agents/CodeReviewerAgent.ts` - 代码审查代理配置和提示

## 贡献指南

欢迎对本项目做出贡献！请参考以下步骤：

1. Fork本仓库
2. 创建您的功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个Pull Request

## 许可证

此项目使用 ISC 许可证 - 详细信息请参见 LICENSE 文件。 