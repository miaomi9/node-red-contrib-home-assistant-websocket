# Nodes

## [API](./API.md)

访问 WebSocket 和 HTTP API 的所有点。

## [Button](./button.md)

在 Home Assistant 中创建一个按钮，触发 Node-RED 中的流程

## [Call Service](./call-service.md)

向家庭助理发送任何可用域和服务的请求（light/turn_on、input_select/select_option等）

## [Config Server](./config-server.md)

Home Assistant connection configuration

## [Current State](./current-state.md)

Fetches the last known state for any entity on input

## [Device](./device.md)

Creates device automations and calls device actions

## [Entity](./entity.md)

Creates an entity in Home Assistant which can be manipulated from this node

## [Events: all](./events-all.md)

Listens for all types of events from home assistant with the ability to filter by event type

## [Events: state](events-state.md)

Listens for only `state_changed` events from home assistant

## [Fire Event](./fire-event.md)

Fire an event on the event bus

## [Get Entities](./get-entities.md)

Get entities based on search criteria with 3 different output options

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
