Menglifang.App.AccountPasswordRoute = Ember.Route.extend Menglifang.App.AuthenticatedRouteMixin,
  model: -> @get('session.currentUser')
