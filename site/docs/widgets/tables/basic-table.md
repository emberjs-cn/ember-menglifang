## 基本表格

### 描述

`{{basic-table}}`是一个简单易用的基本表格组件，可以方便的用来显示行列分布的数据集合。基本表格组件提供的基本功能包括：

* 支持为表格的每行记录添加序号；
* 支持指定表格每列的排序方式：左对齐、右对齐和居中对齐；
* 支持格式化表格列单元格的内容；
* 支持单选表格行；
* 支持多选表格行；
* 支持自定义表格顶部工具栏。

```handlebars
{{basic-table columns=columns content=content indexed=true topActions=topActions rowSelectable=true multiple=true selection=multipleSelection}}
```

### 参数

* `@param columns Array`，设置表格列定义，`columns`是一个由`Menglifang.Widgets.BasicTableColumn`类型数据构成的数组，用来定义表格列的内容、样式等。 

  ```javascript
  columns = [
    Menglifang.Widgets.BasicTableColumn.create({
      // @required
      // 设置表格列名。
      title: '名称',

      // @optional
      // 设置表格列宽，缺省值为：100。
      width: 100,

      // @optional
      // 设置表格列对齐方式，可选值为：'left'，'right'和'center'。缺省值为'left'。
      textAlign: 'left',

      // @required
      // 设置表格列对应行记录的属性名。
      cellContentPath: 'name',

      // @optional
      // 设置表格列单元格内容格式化函数，通过定义该函数可以实现对表格列单元格的格式化。`value`是单元格对应值。
      formatCellContent: function(value) {
        return ("<strong>" + value + "</strong>").htmlSafe();
      }
    }),

    // ...
  ]
  ```

* `@param content Array`，设置表格要显示的数据集合，本属性是`Ember.Object`或其子类构成的对象数组。

    ```javascript
    content = [0..25].map(function(index) {
      date = new Date();
      date.setDate(date.getDate() + index);
      Ember.Object.create({
        date:  date,
        open:  Math.round(Math.random() * 100 - 50),
        high:  Math.round(Math.random() * 100 - 50),
        low:   Math.round(Math.random() * 100 - 50),
        close: Math.round(Math.random() * 100 - 50),
        volume: Math.round(Math.random() * 1000000)
      });
    });
    ```

* `@param indexed Boolean`，设置是否为表格行添加序号，缺省值为`false`。
* `@param topActions Array`，设置表格顶部工具栏。

  ```javascript
  topActions = [
    {
      // @required
      // 设置操作对应处理函数名称。
      name: 'removeSelected',

      // @required
      // 设置操作按钮名称。
      text: '移除选定',

      // @optional
      // 设置操作按钮图标。
      icon: 'fa fa-minus',

      // @optional
      // 设置操作按钮位置，可选值为：'left'和'right'。缺省值为'left'，即表格的左侧。
      position: 'left'
    },

    // ...
  ];

  App.TableController = Ember.Controller.extend({
    // ...

    actions: {
      // ...
      removeSelected: function() {
        // ...
      },
      // ...
    }
  });
  ```

* `@param rowSelectable Boolean`，设置表格行是否可选，缺省值为`false`。
* `@param multiple Boolean`，设置表格行是否可多选，缺省值为`false`。该参数在`rowSelectable`值被设置为`true`的时候有效。
* `@param selection Ember.Set`，存放被选中的表格行对应的对象。该参数在`rowSelectable`值被设置为`true`的时候有效。

### 操作

* `@action select(row)`
  * `@param row Ember.Object`，被选中的表格行对应的对象。

  当`rowSelectable`被设置为`true`，而`multiple`设置为`false`时，即表格被设置为单选行时，`select(row)`操作有效。当用户选中表格一行时，自动触发该操作，并将选中行对应的对象作为参数传给操作处理函数`select(row)`。

  ```javascript
  App.TableController = Ember.Controller.extend({
    // ...

    actions: {
      // ...
      select: function(row) {
        // ...
      },
      // ...
    }
  });
  ```
