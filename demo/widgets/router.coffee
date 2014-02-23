#
# Router
################################################################################

App.Router.map ->
  @route 'loginForm'
  @route 'sidebar'
  @route 'toolbar'
  @route 'form'
  @route 'list'
  @route 'select2'
  @route 'datetimePicker'
  @route 'grid'
  @route 'pagination'

  @resource 'tables', ->
    @route 'basic'
    @route 'indexed'
    @route 'align'
    @route 'topbar'
    @route 'formatCellContent'
    @route 'rowSelection'

  @route 'firstRoute'
  @route 'secondRoute'
