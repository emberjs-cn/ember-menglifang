Ember.Route.reopen
  afterModel: ->
    Ember.run.next @, =>
      @controllerFor('authenticated').send('currentPathDidChange')
