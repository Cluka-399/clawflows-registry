# Bilibili Manager | B站私信管理者

B站私信管理器，支持完整用户确认流程，提供手动模式、自动模式和心跳定时任务。

B站私信管理器，支持完整用户确认流程，提供手动模式、自动模式和心跳定时任务。

## What It Does | 功能说明

| Feature | Description | 功能 |
|---------|-------------|------|
| 📬 Check DM List | Get conversation list, show unread status | 检查私信列表 |
| 💬 View History | Extract chat history (text/image/video shares) | 查看历史记录 |
| ✍️ Draft Reply | Draft replies based on context | 起草回复 |
| ✅ Confirm to Send | Send only after user confirmation (manual mode) | 确认发送 |
| 🤖 Auto Reply | Auto send without confirmation (auto mode) | 自动回复 |
| 📊 Work Report | Generate report and send via Feishu | 工作报告 |
| ⏰ Heartbeat | Periodic execution with reports | 心跳定时 |
| 📝 Log Save | Auto-save logs to workspace | 日志保存 |

## Requirements | 必要条件

- **browser**: Browser automation capability | 浏览器自动化能力
- **notification**: Notification capability (send work reports) | 通知能力

## Installation | 安装

```bash
# 1. Install the required skill first | 先安装依赖的 skill
clawhub install bilibili-messager

# 2. Install this workflow | 安装本工作流
clawflows install bilibili-manager --local
```

## Usage | 使用方法

```bash
# Basic run (manual mode) | 基础运行（手动模式）
clawflows run bilibili-manager

# Auto mode | 自动模式
clawflows run bilibili-manager --config auto_mode=true

# Heartbeat mode: every 30 minutes | 心跳模式：每30分钟
clawflows run bilibili-manager --config heartbeat_interval=30
```

## Modes | 运行模式

### Manual Mode（手动模式）| 手动模式（默认）

Auto-shows mode guide on first run | 首次执行时自动显示模式说明：
- Review DMs one by one | 逐条查看私信内容
- Each message requires confirmation to send | 每条消息都需要确认才发送
- Can modify reply or skip | 可修改回复内容或跳过

### Auto Mode | 自动模式

Activate by saying "auto mode" or "auto reply" | 激活：说"自动模式"或"自动回复"
- Auto traverse all DMs | 自动遍历所有私信
- Auto draft and send replies | 自动起草并发送回复
- No confirmation needed | 无需确认
- Suitable for: Batch processing known message types | 适合：批量处理已知类型的私信

### Heartbeat Mode | 心跳模式

Activate by saying "heartbeat + minutes" | 激活：说"心跳+分钟数"
- Execute workflow at set intervals | 按设定间隔执行
- Auto send work reports to Feishu | 自动发送工作报告到飞书
- Suitable for: Continuous DM monitoring | 适合：持续监控私信

## User Commands | 用户指令

| Command | Description | 说明 |
|---------|-------------|------|
| 开始 / Start | Enter manual mode | 进入手动模式 |
| 自动模式 / Auto Mode | Enter auto mode | 进入自动模式 |
| 心跳30 / Heartbeat 30 | Heartbeat mode, every 30 min | 心跳模式，每30分钟 |
| [回复内容] | Use content to reply | 使用该内容回复 |
| 跳过 / Skip | Skip current DM | 跳过当前私信 |

## Workflow Flow | 工作流流程

```
1. Show mode guide (first run) | 显示模式说明（首次）
   ↓
2. Parse user intent | 解析用户意图
   ↓
3. Check browser status | 检查浏览器状态
   ↓
4. Open Bilibili DM page | 打开B站私信页面
   ↓
5. Get conversation list | 获取会话列表
   ↓
6. Report to user | 汇报给用户
   ↓
7. Process each conversation | 逐一会话处理
   ↓
8. Generate work report | 生成工作报告
   ↓
9. Send report via Feishu | 发送报告到飞书
```

## Report Template | 工作报告模板

```
【手动模式】B站私信处理完成

📊 处理统计
- 总私信数：20 条
- 已处理：5 条
- 成功发送：5 条

📋 已处理详情
1. 【用户A】→ 你好
2. 【用户B】→ 谢谢你

🕐 完成时间：2026-04-04 11:26:45
```

## Log | 日志管理

Auto-save to workspace | 自动保存到工作区：

```
~/.openclaw/workspace/projects/bilibili-manager/logs/
└── YYYY-MM-DD.md    # By date | 按日期保存
```

**Note: Logs are runtime data, stored in user workspace, not in workflow definition. | 注意：日志是运行时数据，存放在用户工作区，不在工作流定义中。**

## Message Detection | 消息识别规则

Follow bilibili-messager skill specs | 遵循 bilibili-messager skill 规范：

- Class contains `_MsgIsMe_` → **My message** | **我发的消息**
- Otherwise → **Other party's message** | **对方发的消息**
- Do not rely on left/right position | 不依赖左右位置判断

## Supported Types | 支持的消息类型

| Icon | Type | Description | 说明 |
|------|------|-------------|------|
| 💬 | text | Text message | 文本消息 |
| 🖼️ | image | Image | 图片 |
| 📹 | video_share | Forwarded/shared video | 转发/分享视频 |

## Skill Reference | Skill 引用

| Skill | Install Command | Purpose | 用途 |
|-------|----------------|---------|------|
| bilibili-messager | `clawhub install bilibili-messager` | Bilibili DM operations | B站私信具体操作 |

**Specific operations follow the referenced skill; workflow handles flow control only. | 具体操作以引用的 skill 为准，工作流仅负责流程控制。**

## Changelog | 更新日志

### v1.2.0
- New: Auto-show mode guide on first run | 新增：首次执行时自动显示模式说明
- New: User intent parsing | 新增：用户意图解析
- Optimized: Work report template | 优化：工作报告模板

### v1.1.0
- New: Auto mode | 新增：自动模式
- New: Heartbeat timer | 新增：心跳定时任务
- New: Auto-generate and send reports | 新增：工作报告自动生成和发送

### v1.0.0
- Initial version | 初始版本：基础私信管理功能

## Author

Moroiser

---

🐾 Powered by OpenClaw & ClawFlows
