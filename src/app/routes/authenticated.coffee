Menglifang.App.AuthenticatedRoute = Ember.Route.extend Ember.SimpleAuth.AuthenticatedRouteMixin,
  beforeModel: (transition) ->
    @_super(transition)

    if @get('session.isAuthenticated')
      url = localStorage.getItem('menglifang-app:current-url')
      @transitionTo url || Menglifang.App.routeAfterAuthentication
