#
# Router
################################################################################

App.Router.map ->
  @route 'loginForm'
  @route 'sidebar'

  @resource 'lists', ->
    @route 'narrow'

  @route 'firstRoute'
  @route 'secondRoute'
