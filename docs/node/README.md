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

Fetches HomeAssistant history on input

## [Poll State](./poll-state.md)

Outputs the state of an entity at regular intervals, optionally also at startup
and every time the entity changes if desired

## [Render Template](./render-template.md)

Allows rendering of templates on input

## [Tag](./tag.md)

Outputs when Home Assistant receives a tag scanned event for a configured tag id

## [Time](./time.md)

A node that can be scheduled to trigger at a future date and time from a Home Assistant entity

## [Trigger: state](./trigger-state.md)

Much like the `State Changed Node` however, provides some advanced functionality around common automation use cases

## [Wait Until](./wait-until.md)

When an input is received the node will wait until the condition is met or the timeout occurs then will pass on the last received message

## [Webhook](./webhook.md)

Outputs the data received from the created webhook in Home Assistant

## [Zone](./zone.md)

Outputs when one of the configured entities enter or leaves one of the defined zones
