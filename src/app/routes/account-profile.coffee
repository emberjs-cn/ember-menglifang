Menglifang.App.AccountProfileRoute = Ember.Route.extend
  beforeModel: ->
    @controllerFor('account').set('breadcrumbItems', [
      { text: '个人设置', route: 'account' }
      { text: '个人信息' }
    ])

  model: -> @get('session.account')

  actions:
    willTransition: (transition) ->
      controller = @get('controller')
      controller.set('breadcrumbItems', controller.get('breadcrumbItems').slice(0, -1))
