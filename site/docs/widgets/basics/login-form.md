## 登录窗口

### 描述

登录窗口组件提供了一个标准的基于用户名、密码登录的用户界面。可以通过修改参数实现对标题、版权、支持的浏览器属性进行配置。

```handlebars
{{login-form registerable=false identification=identification password=password title="用户登录" copyright="&copy; 2013-2014 EmberJS.CN" supportedBrowers=supportedBrowers action='authenticate'}}
```

### 参数

* `@param registerable Boolean`，设置是否允许注册新用户，缺省值为`false`。如果启用了用户注册功能，登录窗口中会添加一个注册按钮。用户点击按钮后，会跳转至`registrations.new`，因此确定定义了路由`registrations.new`。
  ```javascript
  this.resource('registrations', function() {
    this.route('new');
  });
  ```
* `@param identification String`，通过设置`identification`绑定来获取用户输入的登录名。`action`设定的登录按钮操作将通过绑定来获取用户输入的登录名。
* `@param password String`，通过设置`password`绑定来获取用户输入的密码。`action`设定的登录按钮操作将通过该绑定来获取密码。
* `@param title String`，设置登录窗口标题项。
* `@param copyright String`，设置版权信息。
* `@param supportedBrowers Array`，设置支持的浏览器，缺省值为：

```javascript
supportedBrowers: [
  { name: 'Chrome', url: 'http://www.google.com/chrome', icon: '/images/chrome.png' },
  { name: 'Firefox', url: 'http://www.mozilla.org/en-US/firefox/new/', icon: '/images/firefox.png' },
  { name: 'Safari', url: 'http://www.apple.com/sg/safari/', icon: '/images/safari.png' },
  { name: 'IE 10+', url: 'http://windows.microsoft.com/en-sg/internet-explorer/ie-10-worldwide-languages', icon: '/images/ie.png' }
]
```

* `@param action String`，设置登录按钮对应的操作，缺省值为`authenticate`。

### 操作（Actions）

* `@action authenticate | {action}`

用户点击登录按钮触发的操作。缺省函数名为`authenticate`，如果指定了`action`，那么函数名为`action`对应的值。

```javascript
App.LoginController = Ember.Controller.extend({
  // ...

  actions: {
    // ...
    
    authenticate: function(identification, password) {
      // 使用identification、password进行用户登录处理。
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
