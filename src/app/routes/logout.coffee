Menglifang.App.LogoutRoute = Ember.Route.extend
  beforeModel: -> @send('invalidateSession')
