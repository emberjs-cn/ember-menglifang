Menglifang.App.UsersRoute = Ember.Route.extend Menglifang.App.AuthenticatedRouteMixin,
  model: -> @store.find('user')
