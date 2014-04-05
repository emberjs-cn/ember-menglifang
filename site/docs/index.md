## Ember Menglifang

Ember Menglifang是基于Ember开发的基础控件库。支持的浏览器：Google Chrome、Firefox、Safari、IE8+。本项目包含两个子项目：

* menglifang-widgets - 旨在为大家提供丰富的，可以方便的集成到项目中直接使用的Ember控件。
* menglifang-app - 以menglifang-widgets为基础，提供一个应用框架，以便大家可以快速的开发出优秀、稳定的Ember应用。

### 使用说明

#### menglifang-widgets

在页面`head`中添加`css`文件：

```html
<head>
  <!-- ... -->
  <!--
  bootstrap
  font-awesome
  -->
  <link rel="stylesheet" href="http://ember-menglifang.emberjs.cn/dist/menglifang-widgets.css" />
  <!-- ... -->
</head>
```

在`body`末尾添加`js`文件：

```html
  <!-- ... -->
    <!--
    jquery
    jquery.browser
    plurals
    ember
    i18n
    bootstrap
    list-view
    bs-core
    bs-button
    bs-modal
    -->
    <script type="text/javascript" src="http://ember-menglifang.emberjs.cn/dist/menglifang-widgets.js"></script> 
  </body>
</html>
```

#### menglifang-app

在页面`head`中添加`css`文件：

```html
<head>
  <!-- ... -->
  <!--
  bootstrap
  font-awesome
  -->
  <link rel="stylesheet" href="http://ember-menglifang.emberjs.cn/dist/menglifang-app.css" />
  <!-- ... -->
</head>
```

在`body`末尾添加`js`文件：

```html
  <!-- ... -->
    <!--
    jquery
    jquery.browser
    plurals
    ember
    i18n
    ember-data
    ember-simple-auth
    bootstrap
    list-view
    notifier
    bs-core
    bs-button
    bs-modal
    -->
    <script type="text/javascript" src="http://ember-menglifang.emberjs.cn/dist/menglifang-app.js"></script> 
  </body>
</html>
```

### 开发指南

#### 使用grunt进行编译

```
$ npm install -g grunt-cli
$ npm install -g bower
$ npm install
$ bower install
$ grunt build
```

#### 查看示例

```bash
$ cd gh-pages
$ python -m SimpleHTTPServer

# 通过浏览器访问：http://localhost:8000
```

### 声明

本项目目前仍处于“社会主义初级阶段”，如果您非常感兴趣，可以尝试在小型的项目中使用。另外，因“初级阶段”需要大量的人力物力来进行支撑，所以热烈欢迎志同道合的同志们可以加入本项目，为实现我们心中的“共产国际”出一份力！本人在此万分感谢！

期待您的加入！
