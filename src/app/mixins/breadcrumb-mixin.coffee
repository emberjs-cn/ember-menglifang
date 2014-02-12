Menglifang.App.BreadcrumbMixin = Ember.Mixin.create
  breadcrumbs: []

  actions:
    currentPathDidChange: ->
      @get('breadcrumbs').clear()

      routes = @container.lookup('router:main').get('router.currentHandlerInfos')
      return if Ember.isEmpty(routes)

      breadcrumbs = []
      routes.forEach (route, i, arr) ->
        name = route.name
        return if name.indexOf('.index') != -1 || name == 'application' || name == 'authenticated'

        handler = route.handler
        breadcrumb = Ember.Object.create
          route: handler.routeName
          name: Ember.I18n.t("routes.#{handler.routeName}")
          model: null

        if route.isDynamic
          context = handler.context
          breadcrumb.setProperties
            model: context
            name: context.get('name') || context.get('id')

        breadcrumbs.pushObject(breadcrumb)

      @set('breadcrumbs', breadcrumbs) unless Ember.isEmpty(breadcrumbs)
