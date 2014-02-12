Menglifang.App.UserRoute = Ember.Route.extend Menglifang.App.AuthenticatedRouteMixin,
  model: (params) -> @store.find('user', params.user_id)

  setupController: (controller, model) ->
    controller.set('formLegend', '编辑用户')

    @_super(controller, model)

  actions:
    willTransition: ->
      @get('controller').send('revertChanges')
