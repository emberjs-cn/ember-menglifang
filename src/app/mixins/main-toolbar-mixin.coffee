Menglifang.App.MainToolbarMixin = Ember.Mixin.create
  needs: ['authenticated']

  breadcrumbItems: Ember.computed.alias('controllers.authenticated.breadcrumbItems')
  toolbarLinks: Ember.computed.alias('controllers.authenticated.toolbarLinks')

  setupToolbar: (items, links) ->
    @setBreadcrumbItems(items)
    @setToolbarLinks(links)

  setBreadcrumbItems: (items) -> @set('breadcrumbItems', items)
  setToolbarLinks: (links) -> @set('toolbarLinks', links)
