Menglifang.App.PageRoute = Ember.Route.extend
  model: (params) ->
    Ember.Object.create params

  setupController: (controller, model) ->
    page = if model && model.get('page') then parseInt(model.get('page')) else 1
    controller = @currentController()
    controller.set('currentPage', page)

  renderTemplate: ->
    parentRouteName = @parentRoute().get('routeName')
    template = parentRouteName

    @render template, controller: @currentController()

  # @private
  currentController: ->
    @controllerFor(@parentRoute().get('routeName').camelize())
