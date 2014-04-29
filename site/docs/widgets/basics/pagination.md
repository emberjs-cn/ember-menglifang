## 分页栏

### 描述

分页栏是一个用来对集合类数据进行分页浏览的通用组件。组件与数据集合完全解耦，其通过设定一系列关于集合的统计和计数属性来初始化分页栏。为了方便在一个页面中同时使用多个分页栏，采用了基于操作的分页行为控制策略。当用户点击跳转到一个指定分页时，将触发预先设定的分页操作。

```handlebars
{{bs-pagination sizing='large' current=3 start=1 total=10 size=7}}
```

### 参数

* `@param sizing String`，设置分页栏尺寸，本属性为可选属性，有效值为`large`，`small`。
* `@param current Integer`，设置当前页码，缺省值为`1`。
* `@param start String`，设置起始页码，缺省值为`1`。
* `@param total String`，设置总页数，缺省值为`1`。
* `@param size String`，设置分页栏窗口长度，缺省值为`9`。

### 操作

* `@action page`
  * `@param page Integer`，将要跳转至的页码。

用户点击分页栏上的按钮，会触发`page`操作，并将按钮对应要跳转至的页面作为参数传个`page`操作处理函数。

```javascript
App.UsersController = Ember.ArrayController.extend({
  // ...

  actions: {
    // ...
    page: function(page) {
      // 处理分页逻辑
    },
    // ...
  }
});
```
