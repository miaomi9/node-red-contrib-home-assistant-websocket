---
sidebarDepth: 1
---

# Call Service

向家庭助理发送任何可用域和服务的请求 (`light/turn_on`, `input_select/select_option`, 等)

::: 提示有用的示例
[呼叫服务提示和技巧](/guide/call-service.html)
:::

## 配置

### 范围 <Badge text="required"/>

- 类型: `string`
- 接受 [Mustache Templates](/guide/mustache-templates.md)

要调用的服务域

可以通过#在域末尾添加 a 来使用自定义域

### 服务<Badge text="required"/>

- 类型: `string`
- Accepts [Mustache Templates](/guide/mustache-templates.md)

服务调用

可以通过#在服务末尾添加一个来使用自定义服务

### 范围

- 类型: `an array of area ids`
- 接受 [Mustache Templates](/guide/mustache-templates.md) for ids

将用作服务调用目标的区域 ID 列表

#可以通过在 id 末尾添加 a 来将自定义 id 插入到列表中

### 设备

- 类型: `an array of device ids`
- 接受 [Mustache Templates](/guide/mustache-templates.md) for ids

将用作服务调用目标的设备 ID 列表

#可以通过在 id 末尾添加 a 来将自定义 id 插入到列表中

### 实体

- 类型: `an array of entity ids`
- 接受 [Mustache Templates](/guide/mustache-templates.md) for ids

将用作服务调用目标的实体 ID 列表

### 数据

- 类型: `JSONata | JSON`
- 当数据类型为 JSON 时接受Mustache 模板

要传递的 JSON 对象.

### 合并上下文

- 类型: `string`

如果已定义，将尝试将全局和流上下文变量合并到配置中

### 替代模板标签

- 类型: `boolean`

将用于 mustache 模板的标签更改为<%和%>

### 队列

- 类型: `none | first | all | last`

将存储与 Home Assistant 断开连接时收到的第一条、最后一条或所有消息，并在再次连接时发送它们

## 输入

所有属性都需要在msg.payload.

样本输入

```JSON
{
    "domain": "homeassistant",
    "service": "turn_on",
    "target": {
        "area_id": ["kitchen"],
        "device_id": ["8932894082930482903"],
        "entity_id": ["light.kitchen", "switch.garage_light"]
    }
    "data": {
        "brightness_pct": 50
    }
}
```

#### 合并

如果传入消息具有带有 的payload属性domain，service则设置它将覆盖任何配置值（如果已设置）.

如果传入消息具有一个payload.data对象或可解析为对象，则这些属性将与任何配置值集合并.

如果节点在其配置中具有属性值，Merge Context则将检查flow和global上下文的该属性，该属性应该是也将合并到数据有效负载中的对象.

#### 合并解决方案

如上所述，“数据”属性在数据合并的过程中发生了很多事情，最终，所有这些都是可选的，如果一个属性存在于多个对象中，那么最右边的属性将胜出

Config Data, Global Data, Flow Data, Payload Data ( 如果提供有效负载数据属性，则始终获胜

### 区域

- 类型: `string`

要调用的服务区域

### 服务

- 类型: `string`

服务调用

### 数据
- 类型: `JSON Object`

与服务调用一起发送的服务数据

### 目标

- 类型: `JSON Object with area_id, device_id, and entity_id as array properties`

服务调用的目标

## 输出

值类型:

- `sent data`: 发送到家庭助理的数据
- `config`: 配置节点的属性

## 参考

<info-panel-only>

[外部文档](/node/call-service.md)

</info-panel-only>
