App.Router.map ->
  @resource 'authenticated', path: '/', ->
    @resource 'users', ->
      @route 'new'
      @resource 'user'
