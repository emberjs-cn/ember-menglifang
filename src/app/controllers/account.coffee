Menglifang.App.AccountController = Ember.ObjectController.extend
  needs: 'authenticated'

  availableRoles: Ember.computed.alias('controllers.authenticated.availableRoles')

  listItems: [
    { text: '个人信息', icon: 'fa fa-user', route: 'account.profile' }
    { text: '修改密码', icon: 'fa fa-key', route: 'account.password' }
  ]
