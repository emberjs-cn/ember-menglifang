## 侧边菜单栏

### 描述

侧边菜单栏主要用于构建应用的主菜单选项，侧边菜单栏被渲染至其父元素的左侧。提供包括商标、一级菜单、二级菜单和开始菜单四部分内容。

```handlebars
{{side-bar brand=brand menus=menus starterItems=starterItems}}
```

### 参数

* `@param brand Object`，设置商标信息。例如：

```javascript
brand: {
  // @required 文字商标信息
  name: 'Brand',

  // @optional 图片商标信息，如果设置了则不显示文字商标，而显示图片商标。
  imageUrl: '/path/to/brand.png'
}
```

* `@param menus Array`，设置侧边栏菜单。例如：

```javascript
menus: [{
  icon: 'fa fa-flag-o fa-inverse', text: '基础控件', active: true,
  items: [
    { icon: 'fa fa-puzzle-piece fa-inverse', route: 'basics.login_form', text: '登录窗口' }
  ]
}, {
  icon: 'fa fa-th-list fa-inverse', text: '表单控件',
  items: [
    { icon: 'fa fa-puzzle-piece fa-inverse', route: 'forms.select2', text: 'Select2' },
    { icon: 'fa fa-puzzle-piece fa-inverse', route: 'forms.datetime_picker', text: '时间选择器' }
  ]
}]
```

* `@param starterItems Array`，设置开始菜单项。例如：

```javascript
starterItems: [
  { icon: 'fa fa-puzzle-piece', route: 'basics.login_form', text: '登录窗口' },
  { icon: 'fa fa-puzzle-piece', route: 'forms.form', text: '表单' }
]
```

### 操作（Actions）

* `@action triggerMenu(menu)`
  * `@param menu Object`，被点击的一级菜单。例如：
  ```javascript
  {
    icon: 'fa fa-th-list fa-inverse', text: '表单控件',
    items: [
      { icon: 'fa fa-puzzle-piece fa-inverse', route: 'forms.select2', text: 'Select2' },
      { icon: 'fa fa-puzzle-piece fa-inverse', route: 'forms.datetime_picker', text: '时间选择器' }
    ]
  }
  ```

侧边菜单栏在完成渲染后，会自动触发第一个一级菜单的点击事件。这时触发`triggerMenu(menu)`操作，操作处理函数的参数为第一个一级菜单。

```javascript
App.LoginController = Ember.Controller.extend({
  // ...

  actions: {
    // ...
    
    triggerMenu: function(menu) {
      this.transitionToRoute(menu.items.get('firstObject.route'));
    },

    // ...
  }
  // ...
});
```

```
操作函数的查询路径为：

1. 首先查询对应控制器的`actions`中是否定义；
2. 如果对应控制器没有相关的定义，那么查看对应的路由的`actions`中是否定义；
3. 如果对应路由中没有相关定义，那么查看父路由的`actions`中是否定义，直至到达根路由；
4. 如果依然未找到操作函数，那么抛出一个找不到对应操作函数的异常。
```

*关于操作的详细介绍请查看[操作指南](http://emberjs.cn/guides/templates/actions/)。*
