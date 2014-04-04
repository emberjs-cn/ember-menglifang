App.Router.map ->
  @route 'index', path: '/'

  @resource 'basics', ->
    @resource 'login_form', ->
      @route 'index', path: '/'
      @route 'demo'

    @resource 'side_bar', ->
      @route 'index', path: '/'
      @route 'demo'

    @route 'side_list'
    @route 'pagination'

  @resource 'forms', ->
    @route 'select2'
    @route 'datetime_picker'

  @resource 'tables', ->
    @route 'basic'
    @route 'indexed'
    @route 'align'
    @route 'topbar'
    @route 'format_cell_content'
    @route 'single_selection'
    @route 'multiple_selection'
