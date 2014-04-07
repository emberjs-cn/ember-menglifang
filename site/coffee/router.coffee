App.Router.map ->
  @route 'index', path: '/'

  @resource 'basics', ->
    @resource 'login_form', ->
      @route 'index', path: '/'
      @route 'demo'

    @resource 'side_bar', ->
      @route 'index', path: '/'
      @route 'demo'

    @resource 'side_list', ->
      @route 'index', path: '/'
      @route 'demo'

    @resource 'pagination', ->
      @route 'index', path: '/'
      @route 'demo'

  @resource 'forms', ->
    @resource 'select2', ->
      @route 'index', path: '/'
      @route 'demo'

    @resource 'datetime_picker', ->
      @route 'index', path: '/'
      @route 'demo'

  @resource 'tables', ->
    @resource 'basic_table', ->
      @route 'index', path: '/'
      @route 'demo'
