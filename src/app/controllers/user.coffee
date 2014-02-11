Menglifang.App.UserController = Ember.ObjectController.extend Menglifang.App.ModelManagerMixin, Menglifang.App.MainToolbarMixin,
  needs: ['authenticated']

  formLegend: '用户管理'
  availableRoles: Ember.computed.alias('controllers.authenticated.availableRoles')

  modelName: 'user'
  humanModelName: '用户'

  beforeConfirmRemove: ->
    if @get('model.id') == @get('session.account_id')
      Notifier.error('对不起，您不允许删除自己！')
      return false
    else
      return true
