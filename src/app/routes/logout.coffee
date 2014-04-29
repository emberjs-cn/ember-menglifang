Menglifang.App.LogoutRoute = Ember.Route.extend
  beforeModel: ->
    @store.unloadAll(v.type) for _, v of @store.typeMaps
    @send('invalidateSession')
