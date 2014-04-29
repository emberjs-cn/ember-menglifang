## Ember Menglifang

Ember Menglifang是基于Ember开发的基础控件库。支持的浏览器：Google Chrome、Firefox、Safari、IE8+。

### 使用说明

在页面`head`中添加`css`文件：

```html
<head>
  <!-- ... -->
  <link rel="stylesheet" href="http://cdn.staticfile.org/twitter-bootstrap/3.1.1/css/bootstrap.css" />
  <link rel="stylesheet" href="http://cdn.staticfile.org/font-awesome/4.0.3/css/font-awesome.css" />
  <link rel="stylesheet" href="http://www.malot.fr/bootstrap-datetimepicker/bootstrap-datetimepicker/css/bootstrap-datetimepicker.css" />
  <link rel="stylesheet" href="http://cdn.staticfile.org/select2/3.4.6/select2.css" />
  <link rel="stylesheet" href="http://cdn.staticfile.org/select2/3.4.6/select2-bootstrap.css" />
  <link rel="stylesheet" href="http://ember-menglifang.emberjs.cn/dist/menglifang-widgets.css" />
  <!-- ... -->
</head>
```

在`body`末尾添加`js`文件：

```html
  <!-- ... -->
    <script type="text/javascript" src="http://cdn.staticfile.org/jquery/1.11.0/jquery.js"></script> 
    <script type="text/javascript" src="http://cdn.staticfile.org/jquery-browser/0.0.6/jquery.browser.js"></script> 
    <script type="text/javascript" src="https://raw.githubusercontent.com/jamesarosen/CLDR.js/master/plurals.js"></script> 
    <script type="text/javascript" src="http://cdn.staticfile.org/handlebars.js/1.3.0/handlebars.js"></script> 
    <script type="text/javascript" src="http://cdn.staticfile.org/ember.js/1.4.0/ember.js"></script> 
    <script type="text/javascript" src="https://raw.githubusercontent.com/jamesarosen/ember-i18n/master/lib/i18n.js"></script> 
    <script type="text/javascript" src="http://cdn.staticfile.org/twitter-bootstrap/3.1.1/js/bootstrap.js"></script> 
    <script type="text/javascript" src="http://emberjs.com/list-view/javascripts/libs/list-view.js"></script> 
    <script type="text/javascript" src="http://ember-addons.github.io/bootstrap-for-ember/dist/js/bs-core.min.js"></script> 
    <script type="text/javascript" src="http://ember-addons.github.io/bootstrap-for-ember/dist/js/bs-button.min.js"></script> 
    <script type="text/javascript" src="http://ember-addons.github.io/bootstrap-for-ember/dist/js/bs-modal.min.js"></script> 
    <script type="text/javascript" src="http://cdn.staticfile.org/select2/3.4.6/select2.js"></script> 
    <script type="text/javascript" src="http://cdn.staticfile.org/select2/3.4.6/select2_locale_zh-CN.js"></script> 
    <script type="text/javascript" src="http://www.malot.fr/bootstrap-datetimepicker/bootstrap-datetimepicker/js/bootstrap-datetimepicker.js"></script> 
    <script type="text/javascript" src="http://www.malot.fr/bootstrap-datetimepicker/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN.js"></script> 
    <script type="text/javascript" src="http://ember-menglifang.emberjs.cn/dist/menglifang-widgets.js"></script> 
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
