#
# Router
################################################################################

App.Router.map ->
  @route 'loginForm'
  @route 'sidebar'
  @route 'toolbar'

  @resource 'lists', ->
    @route 'narrow'

  @route 'firstRoute'
  @route 'secondRoute'
