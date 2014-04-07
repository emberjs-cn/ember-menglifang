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
        { icon: 'fa fa-puzzle-piece fa-inverse', route: 'select2', text: 'Select2' }
        { icon: 'fa fa-puzzle-piece fa-inverse', route: 'datetime_picker', text: '日期时间选择器' }
      ]
    }, {
      icon: 'fa fa-table fa-inverse', text: '表格控件'
      items: [
        { icon: 'fa fa-puzzle-piece fa-inverse', route: 'basic_table', text: '基本表格' }
      ]
    }]

    starterItems: [
      { icon: 'fa fa-puzzle-piece', route: 'login_form', text: '登录窗口' }
      { icon: 'fa fa-puzzle-piece', route: 'select2', text: 'Select2' }
      { icon: 'fa fa-puzzle-piece', route: 'basic_table', text: '基本表格' }
    ]

  breadcrumbs: []
