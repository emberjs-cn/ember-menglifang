*Ember Menglifang 0.2.3 (Feb X 2014)*

* [修正] 修正api代码没有编译的问题；
* [修正] 修正Demo中侧边菜单栏的icons不存在的问题；
* [功能] 添加Demo首页；
* [改进] 将LICENSE改为MIT；
* [修正] 在README.md中更新操作说明；
* [改进] 注册`{{sidebar}}`助手；
* [功能] 增加`{{select2}}`控件；
* [功能] 添加`Menglifang.App.RemoteQueryBindingsMixin`。

*Ember Menglifang 0.2.2 (Feb 13 2014)*

* [修正] 代码没有同步；
* [改进] 添加一个新的grunt任务用于构建项目。

*Ember Menglifang 0.2.1 (Feb 13 2014)*

* [修正] 用户初次登录时，由于`session.account`未完成加载，侧边菜单栏处理逻辑错误。

*Ember Menglifang 0.2.0 (Feb 13 2014)*

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
