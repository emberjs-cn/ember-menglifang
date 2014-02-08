Menglifang.App.UserController = Ember.ObjectController.extend
  needs: ['authenticated', 'users']

  formLegend: '用户管理'
  availableRoles: Ember.computed.alias('controllers.authenticated.availableRoles')

  breadcrumbItems: Ember.computed.alias('controllers.users.breadcrumbItems')

  actions:
    revertChanges: ->
      @get('model').rollback() if @get('model.isDirty')

    save: ->
      @get('model').save().then =>
        Notifier.success('保存用户成功')
        @transitionToRoute('user', @get('model'))
      , -> Notifier.error('保存用户失败')

    remove: ->
      if @get('model.id') == @get('session.account.id')
        return Notifier.error('对不起，您不允许删除自己！')

      @get('model').deleteRecord()
      @get('model').save().then =>
        Notifier.success('删除用户成功')
        @transitionToRoute('users')
      , -> Notifier.error('删除用户失败')

    cancel: ->
      @get('model').rollback()
      @transitionToRoute('users')
