App.Router.map ->
  @resource 'basics', ->
    @route 'login_form_1'
    @route 'login_form_2'
    @route 'sidebar'
    @route 'list'
    @route 'pagination'

  @resource 'forms', ->
    @route 'form'
    @route 'switch'
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
