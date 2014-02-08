Menglifang.App.UsersNewRoute = Ember.Route.extend
  controllerName: 'user'

  beforeModel: ->
    @controllerFor('users').set('breadcrumbItems', [
      { text: '用户管理', route: 'users' }
      { text: '添加用户' }
    ])

  model: -> @store.createRecord('user')

  setupController: (controller, model) ->
    controller.set('formLegend', '添加用户')

    @_super(controller, model)

  actions:
    willTransition: ->
      controller = @get('controller')

      controller.send('revertChanges')
      controller.set('breadcrumbItems', controller.get('breadcrumbItems').slice(0, -1))
