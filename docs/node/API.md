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
- 数值: `websocket|http`

覆盖或设置配置的协议属性.

### 方法

- 类型: `string`
- 数值: `get|post`

覆盖或设置配置的方法属性.

### 路径

- 类型: `string`

覆盖或设置配置的路径属性.

### 数据

- 类型: `Object|string`

覆盖或设置配置的 data/params 属性.

### 位置

- 类型: `string`

覆盖或设置配置的结果属性.

### 位置类型

- 类型: `string`
- 数值: `msg|flow|global`

覆盖或设置配置的结果类型属性.

## 输出

值类型:

- `results`: API 请求的结果
- `config`: c配置节点的属性

## 参考

- [http api](https://developers.home-assistant.io/docs/api/rest)
- [websocket api](https://developers.home-assistant.io/docs/api/websocket)
