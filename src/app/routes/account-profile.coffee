Menglifang.App.AccountProfileRoute = Ember.Route.extend Menglifang.App.AuthenticatedRouteMixin,
  model: -> @get('session.account')
