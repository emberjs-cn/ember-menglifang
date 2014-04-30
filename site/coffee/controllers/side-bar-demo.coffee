App.SideBarDemoController = Ember.Controller.extend
  brand: { name: 'Ember' }

  menus: [{
    icon: 'fa fa-flag-o fa-inverse', text: '基础控件', active: true
    items: [
      { icon: 'fa fa-puzzle-piece fa-inverse', route: 'login_form', text: '登录窗口' }
    ]
  }, {
    icon: 'fa fa-th-list fa-inverse', text: '表单控件',
    items: [
      { icon: 'fa fa-puzzle-piece fa-inverse', route: 'select2', text: 'Select2' }
      { icon: 'fa fa-puzzle-piece fa-inverse', route: 'datetime_picker', text: '时间选择器' }
    ]
  }]

  starterItems: [
    { icon: 'fa fa-puzzle-piece', route: 'login_form', text: '登录窗口' }
    { icon: 'fa fa-puzzle-piece', route: 'select2', text: 'Select2' }
  ]

  actions:
    triggerMenu: (menu) ->
      @transitionToRoute(menu.items.get('firstObject.route'))

