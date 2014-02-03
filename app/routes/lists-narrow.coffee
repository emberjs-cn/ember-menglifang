App.ListsNarrowRoute = Ember.Route.extend
  model: ->
    [
      { text: 'First Item', icon: 'fa fa-user', route: 'firstRoute' }
      { text: 'Second Item', icon: 'fa fa-key', route: 'secondRoute' }
    ]
