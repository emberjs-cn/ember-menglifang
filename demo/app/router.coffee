App.Router.map ->
  @route('login')
  @route('logout')

  @resource 'registrations', ->
    @route 'new'
    @route 'success'

  @resource 'authenticated', path: '/', ->
    @resource 'account', ->
      @route 'profile'
      @route 'password'

    @resource 'users', ->
      @route 'new'
      @resource 'user', path: '/:user_id'
