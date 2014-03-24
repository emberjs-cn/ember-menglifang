Menglifang.App.AuthenticatedRoute = Ember.Route.extend Ember.SimpleAuth.AuthenticatedRouteMixin,
  beforeModel: ->
    @transitionTo 'login' unless @get('session.isAuthenticated')

    # 触发一个请求来获取当前登录的用户
    @get('session.account').then (account) ->
      account
    , => @transitionTo('login')
