Menglifang.App.UsersRoute = Ember.Route.extend
  model: ->
    @store.find('user')
