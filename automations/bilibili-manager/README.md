# Bilibili Manager | B站私信管理者

B站私信管理器，支持完整用户确认流程，提供手动模式、自动模式和心跳定时任务。

## What It Does | 功能说明

| Feature | Description |
|---------|-------------|
| 📬 检查私信 | 获取会话列表，展示未读状态 |
| 💬 查看历史 | 提取聊天记录（文字/图片/视频分享） |
| ✍️ 起草回复 | 根据上下文起草回复 |
| ✅ 确认发送 | 用户确认后才执行发送（手动模式） |
| 🤖 自动回复 | 无需确认，直接发送（自动模式） |
| 📊 工作报告 | 执行完成后生成处理报告并发送飞书 |
| ⏰ 心跳定时 | 自动周期性执行并汇报 |
| 📝 日志保存 | 自动保存执行日志到工作区 |

## Requirements | 必要条件

- **browser**: 浏览器自动化能力
- **notification**: 通知能力（发送工作报告）

## Installation | 安装

```bash
# 1. 先安装依赖的 skill
clawhub install bilibili-messager

# 2. 安装本工作流
clawflows install ~/.openclaw/workspace/automations/bilibili-manager/ --local
```

## Usage | 使用方法

```bash
# 基础运行（手动模式）
clawflows run bilibili-manager

# 自动模式
clawflows run bilibili-manager --config auto_mode=true

# 心跳模式：每30分钟执行
clawflows run bilibili-manager --config heartbeat_interval=30
```

## Modes | 运行模式

### 手动模式（默认）

首次执行时自动显示模式说明：
- 逐条查看私信内容
- 每条消息都需要确认才发送
- 可修改回复内容或跳过

### 自动模式

激活方式：用户说"自动模式"或"自动回复"
- 自动遍历所有私信
- 自动起草并发送回复（无需确认）
- 适合：批量处理已知类型的私信

### 心跳模式

激活方式：用户说"心跳+分钟数"
- 定期执行工作流
- 自动发送工作报告到飞书
- 适合：持续监控私信

## User Commands | 用户指令

| Command | Action |
|---------|--------|
| 开始 | 进入手动模式 |
| 自动模式 / 自动回复 | 进入自动模式 |
| 心跳30 | 心跳模式，每30分钟执行 |
| [回复内容] | 使用该内容回复当前私信 |
| 跳过 | 跳过当前私信，进入下一条 |

## Workflow Flow | 工作流流程

```
1. 显示模式说明（首次执行）
   ↓
2. 解析用户意图（手动/自动/心跳）
   ↓
3. 检查浏览器状态
   ↓
4. 打开B站私信页面
   ↓
5. 获取会话列表
   ↓
6. 汇报给用户
   ↓
7. 逐一会话处理
   ↓
8. 生成工作报告
   ↓
9. 发送报告到飞书
```

## Report Template | 工作报告模板

```
【手动模式】B站私信处理完成

📊 处理统计
- 总私信数：20 条
- 已处理：5 条
- 成功发送：5 条
- 已跳过：0 条
- 失败：0 条

📋 已处理详情
1. 【用户A】→ 你好
2. 【用户B】→ 谢谢你

🕐 完成时间：2026-04-04 11:12:29
```

## Log | 日志管理

执行日志自动保存到工作区：

```
~/.openclaw/workspace/projects/bilibili-manager/logs/
└── 2026-04-04.md    # 按日期保存
```

**注意：日志是运行后产生的数据，存放在用户工作区，不在工作流定义文件中。**

## Message Detection | 消息识别规则

遵循 bilibili-messager skill 的规范：

- 容器 class 含 `_MsgIsMe_` → **我发的消息**
- 否则 → **对方发的消息**
- 不依赖左右位置判断

## Supported Types | 支持的消息类型

| Icon | Type | 说明 |
|------|------|------|
| 💬 | text | 文本消息 |
| 🖼️ | image | 图片 |
| 📹 | video_share | 转发/分享视频 |

## Skill Reference | Skill 引用

| Skill | 安装命令 | 用途 |
|-------|----------|------|
| `bilibili-messager` | `clawhub install bilibili-messager` | B站私信具体操作 |

**具体操作以引用的 skill 为准，工作流仅负责流程控制。**

## File Structure | 文件结构

```
~/.openclaw/workspace/automations/bilibili-manager/
├── automation.yaml      # 工作流定义
├── metadata.json       # 元数据
└── README.md          # 文档

~/.openclaw/workspace/projects/bilibili-manager/logs/   # 日志目录（运行后自动创建）
└── YYYY-MM-DD.md     # 按日期保存的日志
```

## Changelog | 更新日志

### v1.2.0
- 新增：首次执行时自动显示模式说明
- 新增：用户意图解析（自动识别用户想要的模式）
- 优化：工作报告模板更清晰
- 移除：日志逻辑（日志由执行环境管理，不在工作流定义中）

### v1.1.0
- 新增：自动模式（auto_mode）
- 新增：心跳定时任务（heartbeat_interval）
- 新增：工作报告自动生成和发送

### v1.0.0
- 初始版本：基础私信管理功能

## Author

Morois

---

🐾 Powered by OpenClaw & ClawFlows
