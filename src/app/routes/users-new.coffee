Menglifang.App.UsersNewRoute = Ember.Route.extend Menglifang.App.AuthenticatedRouteMixin,
  controllerName: 'user'

  model: -> @store.createRecord('user')

  setupController: (controller, model) ->
    controller.set('formLegend', '添加用户')

    @_super(controller, model)

  actions:
    willTransition: ->
      @get('controller').send('revertChanges')
