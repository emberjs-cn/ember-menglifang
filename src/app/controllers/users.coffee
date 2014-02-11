Menglifang.App.UsersController = Ember.ArrayController.extend Menglifang.App.MainToolbarMixin,
  init: ->
    @setupToolbar([{ text: '用户管理' }], [{ text: '添加用户', route: 'users.new', icon: 'fa fa-plus' }])

    @_super()
