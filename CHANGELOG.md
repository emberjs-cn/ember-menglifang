*Ember Menglifang 0.4.2 (Sep 16, 2014)*

* [修正] 忘记修改注册的版本信息了。

*Ember Menglifang 0.4.1 (Sep 15, 2014)*

* [改进] 优化`basic-table`的性能，渲染速度提升接近10倍；
* [更新] 升级ember.js至1.7.0，ember-data至1.0.0-beta.10；
* [修正] `bs-pagination`中brace得语法错误。

*Ember Menglifang 0.3.2 (May 8, 2014)*

* [修正] 更新`list-view`到最新版本，修正`arrangedContent`会不显示的问题；
* [修正] 修正当前登录用户信息；
* [改进] 设定`formatCellContent`函数调用的scope；
* [修正] 注册成功后，提示调整登录页面的链接应默认返回到根页面；
* [改进] 检测当前页面是否已经加载超过20分钟，如果超过则需要重新登录；
* [修正] 如果当前路径不是登录，那么在刷新页面后跳转至记录的当前页面。

*Ember Menglifang 0.3.1 (Apr 30, 2014)*

* [增强] 为`AuthenticatedController`绑定必须属性（来自`ApplicationController`）；
* [修正] 之前记录的当前URL信息不正确；
* [改进] 高亮当前被激活的菜单；
* [改进] 升级ember到1.5.1。

*Ember Menglifang 0.3.0 (Apr 30, 2014)*

* [改进] 升级ember-simple-auth到0.3.1；
* [改进] 重新设计项目站点，通过github pages发布项目文档；
* [改进] 重命名`Menglifang.Widgets.ListView`，并注册为其注册一个助手`{{side-list}}`
* [改进] 修改侧边栏菜单配置参数名、样式；
* [功能] 支持用户注册；
* [功能] 支持锁定或者解锁一个用户；
* [改进] 触发一个菜单时，默认调整到第一个菜单项对应的路由。

*Ember Menglifang 0.2.5 (Mar 25, 2014)*

* [改进] 重新组织Menglifang.App的主视图，使其更好的支持IE8；
* [修正] 侧边栏菜单更好的支持IE8；
* [修正] 使用jQuery 1.11.0，兼容IE8；
* [修正] 当已登录用户的信息失效时，自动跳转到登录页面；
* [改进] 支持指定删除确认窗口的名称，以便可以处理在同一个页面上的多个删除按钮。

*Ember Menglifang 0.2.4 (Mar 16, 2014)*

* [更新] 升级`ember-simple-auth`到0.1.3
* [功能] 增加`{{bs-pagination}}`分页控件；
* [功能] 增加`{{basic-table}}`控件；
  * 支持设定单元格对齐方式；
  * 支持设定顶部工具栏；
  * 支持选择行；
  * 支持显示序号。
* [功能] 增加基于ember-table实现的`{{basic-grid}}`控件
* [改进] 清理了`{{login-form}}`和`{{main-toolbar}}`的实现，使用`layoutName`替代`templateName`；
* [改进] 升级Ember到1.4；
* [修正] `Menglifang.App`假定所有的路由定义采用下划线连接的惯例；
* [修正] 将`Menglifang.Widgets.Select2`和`Menglifang.Widgets.TaggingSelect2`移入`components`目录；
* [功能] 添加`{{datetime-picker}}`控件；
* [功能] 添加`{{tagging-select2}}`控件。

*Ember Menglifang 0.2.3 (Feb 15, 2014)*

* [修正] 修正api代码没有编译的问题；
* [修正] 修正Demo中侧边菜单栏的icons不存在的问题；
* [功能] 添加Demo首页；
* [改进] 将LICENSE改为MIT；
* [修正] 在README.md中更新操作说明；
* [改进] 注册`{{sidebar}}`助手；
* [功能] 增加`{{select2}}`控件；
* [功能] 添加`Menglifang.App.RemoteQueryBindingsMixin`。

*Ember Menglifang 0.2.2 (Feb 13, 2014)*

* [修正] 代码没有同步；
* [改进] 添加一个新的grunt任务用于构建项目。

*Ember Menglifang 0.2.1 (Feb 13, 2014)*

* [修正] 用户初次登录时，由于`session.account`未完成加载，侧边菜单栏处理逻辑错误。

*Ember Menglifang 0.2.0 (Feb 13, 2014)*

* [功能] 支持按登录用户角色来生产对应的侧边菜单栏；
* [改进] 按需定义MainToolbar上的按钮；
* [改进] 重新实现Breadcrumb，不在需要在Controller和Route中进行相关设置；
* [修正] MainToolbar初始化应该在Route中完成；
* [修正] Firefox、IE10下样式不正确的问题（因为通过CSS动态插入的内容没有设定float导致）；
* [改进] 将`main-toolbar`移至`authenticated.hbs`，调整对应视图的结构；
* [改进] 创建`Menglifang.App.MainToolbarMixin`来处理与MainToolbar相关的逻辑。

*Ember Menglifang 0.1.1 (Feb 10, 2014)*

* [功能] 集成bootstrap-for-ember；
* [改进] 删除用户前需要确认删除操作；
* [改进] 将model管理逻辑抽取到Menglifang.App.ModelManagerMixin中。
