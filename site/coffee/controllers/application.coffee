App.ApplicationController = Menglifang.App.ApplicationController.extend
  brand: { name: 'Em.MLF' }

  sidebar:
    menus: [{
      iconClass: 'fa fa-flag-o fa-inverse', url: '#基础控件', text: '基础控件'
      items: [
        { iconClass: 'fa fa-puzzle-piece fa-inverse', route: 'basics.login_form_1', text: '登录窗口' }
        { iconClass: 'fa fa-puzzle-piece fa-inverse', route: 'basics.login_form_2', text: '登录窗口（支持注册）' }
        { iconClass: 'fa fa-puzzle-piece fa-inverse', route: 'basics.sidebar', text: '侧边菜单栏' }
        { iconClass: 'fa fa-puzzle-piece fa-inverse', route: 'basics.list', text: '列表栏' }
        { iconClass: 'fa fa-puzzle-piece fa-inverse', route: 'basics.pagination', text: '分页栏' }
      ]
    }, {
      iconClass: 'fa fa-th-list fa-inverse', url: '#表单控件', text: '表单控件'
      items: [
        { iconClass: 'fa fa-puzzle-piece fa-inverse', route: 'forms.form', text: '表单' }
        { iconClass: 'fa fa-puzzle-piece fa-inverse', route: 'forms.switch', text: 'Switch' }
        { iconClass: 'fa fa-puzzle-piece fa-inverse', route: 'forms.select2', text: 'Select2' }
        { iconClass: 'fa fa-puzzle-piece fa-inverse', route: 'forms.datetime_picker', text: '时间选择器' }
      ]
    }, {
      iconClass: 'fa fa-table fa-inverse', url: '#表格控件', text: '表格控件'
      items: [
        { iconClass: 'fa fa-puzzle-piece fa-inverse', route: 'tables.basic', text: '基本表格' }
        { iconClass: 'fa fa-puzzle-piece fa-inverse', route: 'tables.indexed', text: '带序号' }
        { iconClass: 'fa fa-puzzle-piece fa-inverse', route: 'tables.align', text: '单元格对齐' }
        { iconClass: 'fa fa-puzzle-piece fa-inverse', route: 'tables.topbar', text: '顶部工具栏' }
        { iconClass: 'fa fa-puzzle-piece fa-inverse', route: 'tables.format_cell_content', text: '格式化单元格' }
        { iconClass: 'fa fa-puzzle-piece fa-inverse', route: 'tables.single_selection', text: '单行选择' }
        { iconClass: 'fa fa-puzzle-piece fa-inverse', route: 'tables.multiple_selection', text: '多行选择' }
      ]
    }]

    starterItems: [
      { iconClass: 'fa fa-puzzle-piece', route: 'basics.login_form_1', text: '登录窗口' }
      { iconClass: 'fa fa-puzzle-piece', route: 'forms.form', text: '表单' }
      { iconClass: 'fa fa-puzzle-piece', route: 'tables.basic', text: '基本表格' }
    ]

  breadcrumbs: []
