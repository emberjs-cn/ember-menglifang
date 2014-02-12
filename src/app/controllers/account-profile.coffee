Menglifang.App.AccountProfileController = Ember.ObjectController.extend
  actions:
    revertChanges: ->
      @get('model').rollback() if @get('model.isDirty')

    save: ->
      @get('model').save().then =>
        Notifier.success('保存用户成功')
      , -> Notifier.error('保存用户失败')
