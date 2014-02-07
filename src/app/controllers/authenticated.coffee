Menglifang.App.AuthenticatedController = Ember.ObjectController.extend
  title: 'UM'

  sidebar:
    menus: [{
      icon: '/assets/settings.png', url: '#系统管理', text: '系统管理',
      items: [
        { icon: '/assets/users.png', route: 'users', text: '用户管理' }
      ]
    }]

    starterItems: [
      { icon: 'fa fa-user', url: '#/account/profile', text: '个人信息' }
      { icon: 'fa fa-key', url: '#/account/password', text: '修改密码' }
      { icon: 'fa fa-sign-out', url: '#/logout', text: '注销' }
    ]

  availableRoles: [
    { label: '管理员', value: 'admin' }
  ]
