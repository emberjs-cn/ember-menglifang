#
# Router
################################################################################

App.Router.map ->
  @route 'loginForm'
  @route 'sidebar'
  @route 'toolbar'
  @route 'form'

  @resource 'lists', ->
    @route 'narrow'

  @route 'firstRoute'
  @route 'secondRoute'
