App.ApplicationController = Menglifang.App.ApplicationController.extend
  brand: { name: 'Em.MLF' }

  sidebar:
    menus: [{
      icon: '/images/settings.png', url: '#基础控件', text: '基础控件'
      items: [
        { icon: '/images/users.png', route: 'basic.login_form_1', text: '登录窗口' }
        { icon: '/images/users.png', route: 'basic.login_form_2', text: '登录窗口（支持注册）' }
      ]
    }]

    starterItems: [
      { icon: 'fa fa-sign-out', url: '#/logout', text: '注销' }
    ]

  breadcrumbs: []
