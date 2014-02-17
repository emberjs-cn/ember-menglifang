Menglifang.App.ModelManagerMixin = Ember.Mixin.create
  modelName: ''
  humanModelName: ''

  afterSaveRoute: (-> @get('modelName').underscore()).property('modelName')
  afterCancelRoute: (-> @get('modelName').underscore().pluralize()).property('modelName')
  afterDestroyRoute: (-> @get('modelName').underscore().pluralize()).property('modelName')

  removeConfirmationTitle: '确认删除'
  removeConfirmationMessage: (->
    "您确认需要删除该#{@get('humanModelName')}吗？"
  ).property('humanModelName')
  removeConfirmationButtons: [
    Ember.Object.create title: '确认', clicked: "confirmRemove"
    Ember.Object.create title: '取消', dismiss: 'modal'
  ]

  beforeConfirmRemove: Ember.K

  actions:
    revertChanges: ->
      @get('model').rollback() if @get('model.isDirty')

    save: ->
      @get('model').save().then =>
        Notifier.success("保存#{@get('humanModelName')}成功")
        @transitionToRoute(@get('afterSaveRoute'), @get('model'))
      , => Notifier.error("保存#{@get('humanModelName')}失败")

    remove: ->
      Bootstrap.ModalManager.show('removeConfirmation')

    cancel: ->
      @get('model').rollback()
      @transitionToRoute(@get('afterCancelRoute'))

    confirmRemove: ->
      Bootstrap.ModalManager.hide('removeConfirmation')

      return false unless @beforeConfirmRemove()

      @get('model').deleteRecord()
      @get('model').save().then =>
        Notifier.success("删除#{@get('humanModelName')}成功")
        @transitionToRoute(@get('afterDestroyRoute'))
      , => Notifier.error("删除#{@get('humanModelName')}失败")
