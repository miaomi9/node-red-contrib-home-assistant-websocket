---
sidebarDepth: 1
---

# API

## 配置

### 协议 <Badge text="required"/>

- 类型: `string`
- 数值: `websocket|http`
- 默认: `websocket`

用于访问 Home Assistant API 的协议.

### 方法

- 类型: `string`
- 数值: `get|post`

用于访问 HTTP 端点的方法类型.

### 路径

- 类型: `string`
- 接受 [Mustache Templates](/guide/mustache-templates.md)

API 端点的 URL.

### 参数

- 类型: `Object`
- 接受 [Mustache Templates](/guide/mustache-templates.md)

具有将转换为 URL 参数的键/值对的 JSON 对象.

### 数据

- 类型: `Object`
- Accepts [Mustache Templates](/guide/mustache-templates.md) when the data type
  is JSON

为 WebSocket 请求和 HTTP 帖子发送的 JSON 对象.

### 结果

- 类型: `string`

  保存 API 结果的位置.

## 输入

所有属性都需要在msg.payload.

### 协议

- 类型: `string`
- 接受: `websocket|http`

覆盖或设置配置的协议属性.

### method

- Type: `string`
- Values: `get|post`

Overrides or sets the method property of the config.

### path

- Type: `string`

Overrides or sets the path property of the config.

### data

- Type: `Object|string`

Overrides or sets the data/params property of the config.

### location

- Type: `string`

Overrides or sets the results property of the config.

### locationType

- Type: `string`
- Values: `msg|flow|global`

Overrides or sets the results type property of the config.

## Output

Value types:

- `results`: results of the API request
- `config`: config properties of the node

## References

- [http api](https://developers.home-assistant.io/docs/api/rest)
- [websocket api](https://developers.home-assistant.io/docs/api/websocket)
