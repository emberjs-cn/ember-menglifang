## 侧边列表栏

### 描述

侧边列表栏被渲染到在其父元素的左侧，主要用来以列表的方式显示一个集合数据类型的信息。其主要效果有鼠标悬浮高亮，当前选中条目高亮，另外还支持延迟渲染功能，即不论集合中存在多少数量的记录（成千上万条），只渲染可视高度能容纳的条数。延迟渲染功能基于[list-view](http://emberjs.com/list-view)实现。

```handlebars
{{#side-list content=model height=100 width=200 rowHeight=45}}
  {{#link-to route}}
    <i {{bind-attr class=icon}}></i>
    {{text}}
  {{/link-to}}
{{/side-list}}
```

### 参数

* `@param content Array`，用来渲染条目的集合数据，例如：

```javascript
model: [
  { icon: 'fa fa-user', text: '个人信息', route: 'account.profile' },
  { icon: 'fa fa-key', text: '修改密码', route: 'account.password' }
]
```

* `@param height Integer`，设置列表的高度，其值表示列表高度为多少像素。`side-list`渲染时会根据其父元素的高度值重设`height`值。因此在此随意设定一个整数即可。

    *说明：在`list-view`定义中，根据`height`的高度来判断该渲染多少条目，因此`height`为必须参数。*

* `@param width Integer`，设置列表的宽度，其值表示列表的宽度为多少像素。
* `@param rowHeight Integer`，设置列表条目的高度，其值表示列表单条目的高度。另外还用来计算当前应该渲染多少条目（height/rowHeight）。

### 块

`side-list`支持块语法，块中上下文为遍历的某一条目。通过块，可以自定义列表每一条目需要显示的内容、样式等。例如：

```handlebars
{{#side-list content=model height=100 width=200 rowHeight=45}}
  {{#link-to 'user' id}}
    <div class="name">
      {{username}} ({{realname}})
    </div>
    <div class="email">
      {{email}}
      {{#if accessLocked}}
        <i class="fa fa-lock text-danger pull-right"></i>
      {{/if}}
    </div>
  {{/link-to}}
{{/side-list}}
```

`side-list`渲染的DOM被包裹在一个样式名为`mlf-side-list`的div元素中，如果需要自定义块中内容的样式，那么可以将元素选择器定义至`mlf-side-list`，例如：

```css
.mlf-side-list a {
  // 自定义的样式
}
```
