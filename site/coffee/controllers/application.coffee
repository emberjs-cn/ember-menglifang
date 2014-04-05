App.ApplicationController = Menglifang.App.ApplicationController.extend
  brand: { name: 'Em.MLF' }

  sidebar:
    menus: [{
      icon: 'fa fa-flag-o fa-inverse', text: '基础控件'
      items: [
        { icon: 'fa fa-puzzle-piece fa-inverse', route: 'login_form', text: '登录窗口' }
        { icon: 'fa fa-puzzle-piece fa-inverse', route: 'side_bar', text: '侧边菜单栏' }
        { icon: 'fa fa-puzzle-piece fa-inverse', route: 'side_list', text: '侧边列表栏' }
        { icon: 'fa fa-puzzle-piece fa-inverse', route: 'pagination', text: '分页栏' }
      ]
    }, {
      icon: 'fa fa-th-list fa-inverse', text: '表单控件'
      items: [
        { icon: 'fa fa-puzzle-piece fa-inverse', route: 'forms.select2', text: 'Select2' }
        { icon: 'fa fa-puzzle-piece fa-inverse', route: 'forms.datetime_picker', text: '时间选择器' }
      ]
    }, {
      icon: 'fa fa-table fa-inverse', text: '表格控件'
      items: [
        { icon: 'fa fa-puzzle-piece fa-inverse', route: 'tables.basic', text: '基本表格' }
        { icon: 'fa fa-puzzle-piece fa-inverse', route: 'tables.indexed', text: '带序号' }
        { icon: 'fa fa-puzzle-piece fa-inverse', route: 'tables.align', text: '单元格对齐' }
        { icon: 'fa fa-puzzle-piece fa-inverse', route: 'tables.topbar', text: '顶部工具栏' }
        { icon: 'fa fa-puzzle-piece fa-inverse', route: 'tables.format_cell_content', text: '格式化单元格' }
        { icon: 'fa fa-puzzle-piece fa-inverse', route: 'tables.single_selection', text: '单行选择' }
        { icon: 'fa fa-puzzle-piece fa-inverse', route: 'tables.multiple_selection', text: '多行选择' }
      ]
    }]

    starterItems: [
      { icon: 'fa fa-puzzle-piece', route: 'login_form', text: '登录窗口' }
      { icon: 'fa fa-puzzle-piece', route: 'forms.select2', text: 'Select2' }
      { icon: 'fa fa-puzzle-piece', route: 'tables.basic', text: '基本表格' }
    ]

  breadcrumbs: []
