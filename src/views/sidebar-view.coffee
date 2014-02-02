Ember.Menglifang.SidebarView = Ember.View.extend
  templateName: 'sidebar-view'

  classNames: ['sidebar']
  classNameBindings: ['expanded:sidebar-expanded']

  expanded: true

  title: 'A Title'

  menus: Ember.A()
  starterItems: Ember.A()

  didInsertElement: ->
    this.$().find('*[data-toggle="tooltip"]').tooltip()
    this.$().find('.menu-triggers li a').first().click()
