Menglifang.App.AuthenticatedController = Ember.ObjectController.extend
  needs: 'application'

  brand: Ember.computed.alias('controllers.application.brand')
  breadcrumbs: Ember.computed.alias('controllers.application.breadcrumbs')
  availableSidebar: Ember.computed.alias('controllers.application.availableSidebar')
  availableRoles: Ember.computed.alias('controllers.application.availableRoles')

  actions:
    triggerMenu: (menu) ->
      @transitionToRoute menu.items.get('firstObject.route')
