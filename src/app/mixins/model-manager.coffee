Menglifang.App.ModelManagerMixin = Ember.Mixin.create
  modelName: ''
  humanModelName: ''

  afterSaveRoute: (-> @get('modelName').underscore()).property('modelName')
  afterCancelRoute: (-> @get('modelName').underscore().pluralize()).property('modelName')
  afterDestroyRoute: (-> @get('modelName').underscore().pluralize()).property('modelName')

  removeConfirmationName: ''
  removeConfirmationTitle: '确认删除'
  removeConfirmationMessage: (->
    "您确认需要删除该#{@get('humanModelName')}吗？"
  ).property('humanModelName')
  removeConfirmationButtons: [
    Ember.Object.create title: '确认', clicked: "confirmRemove"
    Ember.Object.create title: '取消', dismiss: 'modal'
  ]

  beforeSave: Ember.K
  afterSave: Ember.K

  # TODO 删除该方法
  beforeConfirmRemove: Ember.K

  beforeRemove: Ember.K
  afterRemove: Ember.K

  actions:
    revertChanges: ->
      @get('model').rollback() if @get('model.isDirty')

    save: ->
      return unless @beforeSave()
      @get('model').save().then =>
        Notifier.success("保存#{@get('humanModelName')}成功")
        @afterSave()
        @transitionToRoute(@get('afterSaveRoute'), @get('model'))
      , => Notifier.error("保存#{@get('humanModelName')}失败")

    cancel: ->
      @get('model').rollback()
      @transitionToRoute(@get('afterCancelRoute'))

    remove: ->
      Bootstrap.ModalManager.show @get('removeConfirmationName')

    confirmRemove: ->
      Bootstrap.ModalManager.hide @get('removeConfirmationName')

      # TODO Remove `@beforeConfirmRemove()`
      return false unless @beforeConfirmRemove() && @beforeRemove()

      @get('model').deleteRecord()
      @get('model').save().then =>
        Notifier.success("删除#{@get('humanModelName')}成功")
        @afterRemove()
        @transitionToRoute(@get('afterDestroyRoute'))
      , => Notifier.error("删除#{@get('humanModelName')}失败")
