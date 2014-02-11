Menglifang.App.AccountPasswordController = Ember.ObjectController.extend Menglifang.App.MainToolbarMixin,
  actions:
    save: ->
      @get('model').changePassword(
        @get('oldPassword'),
        @get('newPassword'),
        @get('passwordConfirmation')
      ).then (successMsg) =>
        Notifier.success('修改密码成功')
        @setProperties(oldPassword: null, newPassword: null, passwordConfirmation: null)
      , (errorMsg) ->
        Notifier.error(errorMsg)

    revertChanges: ->
      @setProperties(oldPassword: null, newPassword: null, passwordConfirmation: null)
