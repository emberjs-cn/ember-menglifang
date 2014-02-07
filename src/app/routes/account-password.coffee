Menglifang.App.AccountPasswordRoute = Ember.Route.extend
  beforeModel: ->
    @controllerFor('account').set('breadcrumbItems', [
      { text: '个人设置', route: 'account' }
      { text: '修改密码' }
    ])

  model: -> @get('session.account')

  actions:
    willTransition: (transition) ->
      controller = @get('controller')
      controller.set('breadcrumbItems', controller.get('breadcrumbItems').slice(0, -1))
