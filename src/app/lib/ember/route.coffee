Ember.Route.reopen
  afterModel: ->
    Ember.run.next @, =>
      @controllerFor('application').send('currentPathDidChange')

  parentRoute: ->
    handlerInfos = @router.router.state.handlerInfos

    return unless handlerInfos

    parent = null
    current = null

    handlerInfos.forEach (h) =>
      current = h.handler
      return false if current == @
      parent = current

    parent
