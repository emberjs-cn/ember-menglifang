Menglifang.App.AccountController = Ember.ObjectController.extend Menglifang.App.MainToolbarMixin,
  needs: 'authenticated'

  availableRoles: Ember.computed.alias('controllers.authenticated.availableRoles')

  init: ->
    @setupToolbar [{ text: '个人设置' }]

    @_super()

  listItems: [
    { text: '个人信息', icon: 'fa fa-user', route: 'account.profile' }
    { text: '修改密码', icon: 'fa fa-key', route: 'account.password' }
  ]
