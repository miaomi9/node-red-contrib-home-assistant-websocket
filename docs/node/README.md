# Nodes

## [API](./API.md)

访问 WebSocket 和 HTTP API 的所有点。

## [Button](./button.md)

在 Home Assistant 中创建一个按钮，触发 Node-RED 中的流程

## [Call Service](./call-service.md)

向家庭助理发送任何可用域和服务的请求（light/turn_on、input_select/select_option等）

## [Config Server](./config-server.md)

家庭助理连接配置

## [Current State](./current-state.md)

获取输入上任何实体的最后一个已知状态

## [Device](./device.md)

创建设备自动化并调用设备操作

## [Entity](./entity.md)

在 Home Assistant 中创建一个实体，可以从此节点进行操作

## [Events: all](./events-all.md)

监听来自家庭助理的所有类型的事件，并能够按事件类型进行过滤

## [Events: state](events-state.md)

仅监听state_changed来自家庭助理的事件

## [Fire Event](./fire-event.md)

在事件总线上触发事件

## [Get Entities](./get-entities.md)

使用 3 个不同的输出选项根据搜索条件获取实体

## [Get History](./get-history.md)

在输入时获取 HomeAssistant 历史记录

## [Poll State](./poll-state.md)

定期输出实体的状态，如果需要，也可以在启动时和每次实体更改时输出

## [Render Template](./render-template.md)

允许在输入时渲染模板

## [Tag](./tag.md)

当 Home Assistant 接收到已配置标签 ID 的标签扫描事件时输出

## [Time](./time.md)

可以安排在未来日期和时间从家庭助理实体触发的节点

## [Trigger: state](./trigger-state.md)

然而，很像State Changed Node，围绕常见的自动化用例提供了一些高级功能

## [Wait Until](./wait-until.md)

When an input is received the node will wait until the condition is met or the timeout occurs then will pass on the last received message

## [Webhook](./webhook.md)

当接收到输入时，节点将等待直到满足条件或发生超时，然后将传递最后收到的消息

## [Zone](./zone.md)

输出从 Home Assistant 中创建的 webhook 接收到的数据
