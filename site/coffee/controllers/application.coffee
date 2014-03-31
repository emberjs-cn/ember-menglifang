App.ApplicationController = Menglifang.App.ApplicationController.extend
  brand: { name: 'Em.MLF' }

  sidebar:
    menus: [{
      icon: '/images/settings.png', url: '#基础控件', text: '基础控件'
      items: [
        { icon: '/images/users.png', route: 'basics.login_form_1', text: '登录窗口' }
        { icon: '/images/users.png', route: 'basics.login_form_2', text: '登录窗口（支持注册）' }
        { icon: '/images/users.png', route: 'basics.sidebar', text: '侧边菜单栏' }
        { icon: '/images/users.png', route: 'basics.list', text: '列表栏' }
        { icon: '/images/users.png', route: 'basics.pagination', text: '分页栏' }
      ]
    }, {
      icon: '/images/settings.png', url: '#表单控件', text: '表单控件'
      items: [
        { icon: '/images/users.png', route: 'forms.form', text: '表单' }
        { icon: '/images/users.png', route: 'forms.switch', text: 'Switch' }
        { icon: '/images/users.png', route: 'forms.select2', text: 'Select2' }
        { icon: '/images/users.png', route: 'forms.datetime_picker', text: '时间选择器' }
      ]
    }, {
      icon: '/images/settings.png', url: '#表格控件', text: '表格控件'
      items: [
        { icon: '/images/users.png', route: 'tables.basic', text: '基本表格' }
        { icon: '/images/users.png', route: 'tables.indexed', text: '带序号' }
        { icon: '/images/users.png', route: 'tables.align', text: '单元格对齐' }
        { icon: '/images/users.png', route: 'tables.topbar', text: '顶部工具栏' }
        { icon: '/images/users.png', route: 'tables.format_cell_content', text: '格式化单元格' }
        { icon: '/images/users.png', route: 'tables.single_selection', text: '单行选择' }
        { icon: '/images/users.png', route: 'tables.multiple_selection', text: '多行选择' }
      ]
    }]

    starterItems: [
      { icon: 'fa fa-sign-out', url: '#/logout', text: '注销' }
    ]

  breadcrumbs: []
