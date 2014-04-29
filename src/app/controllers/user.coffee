Menglifang.App.UserController = Ember.ObjectController.extend Menglifang.App.ModelManagerMixin,
  needs: ['authenticated']

  formLegend: '用户管理'
  availableRoles: Ember.computed.alias('controllers.authenticated.availableRoles')

  modelName: 'user'
  humanModelName: '用户'

  removeConfirmationName: 'removeUserConfirmation'

  lockable: (->
    !@get('model.isNew') && @get('model.lockable') && @get('model.id') != @get('session.account.id')
  ).property('model.{id,lockable,isNew}', 'session.account.id')

  beforeRemove: ->
    if @get('model.id') == @get('session.account_id')
      Notifier.error('对不起，您不允许删除自己！')
      return false
    else
      return true

  actions:
    lock:   ->
      @get('model').lock().then =>
        @get('model').reload()
        Notifier.success('用户锁定成功')
      , -> Notifier.error('用户锁定失败')

    unlock: ->
      @get('model').unlock().then =>
        @get('model').reload()
        Notifier.success('用户解锁成功')
      , -> Notifier.error('用户解锁失败')
