Menglifang.Widgets.SidebarView = Ember.View.extend
  templateName: 'mlf-sidebar-view'

  classNames: ['mlf-sidebar']
  classNameBindings: ['expanded:mlf-sidebar-expanded']

  expanded: true

  title: 'A Title'

  menus: Ember.A()
  starterItems: Ember.A()

  didInsertElement: ->
    this.$().find('*[data-toggle="tooltip"]').tooltip()
    this.$().find('.menu-triggers li a').first().click()
