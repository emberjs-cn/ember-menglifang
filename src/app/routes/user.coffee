Menglifang.App.UserRoute = Ember.Route.extend
  beforeModel: ->
    @controllerFor('users').set('breadcrumbItems', [
      { text: '用户管理', route: 'users' }
      { text: '编辑用户' }
    ])

  model: (params) -> @store.find('user', params.user_id)

  setupController: (controller, model) ->
    controller.set('formLegend', '编辑用户')

    @_super(controller, model)

  actions:
    willTransition: ->
      controller = @get('controller')

      controller.send('revertChanges')
      controller.set('breadcrumbItems', controller.get('breadcrumbItems').slice(0, -1))
