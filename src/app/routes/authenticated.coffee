Menglifang.App.AuthenticatedRoute = Ember.Route.extend Ember.SimpleAuth.AuthenticatedRouteMixin,
  beforeModel: ->
    @transitionTo 'login' unless @get('session.isAuthenticated')
