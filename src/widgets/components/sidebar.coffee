Menglifang.Widgets.SidebarBrand = Ember.Component.extend
  classNames: ['brand']
  layoutName: 'components/sidebar/brand'

  name: 'Brand'
  imageUrl: null

  logo: (->
    return "<img src='#{@get('imageUrl')}' />".htmlSafe() if @get('imageUrl')

    @get('name')
  ).property('name', 'imageUrl')

  sidebarExpandable: true

Menglifang.Widgets.SidebarNavigator = Ember.Component.extend
  layoutName: 'components/sidebar/navigator'
  classNames: ['navigator']

  menus: []

Menglifang.Widgets.SidebarStarter = Ember.Component.extend
  layoutName: 'components/sidebar/starter'
  classNames: ['starter', 'dropdown']

  items: []

Menglifang.Widgets.Sidebar = Ember.Component.extend
  layoutName: 'components/sidebar/sidebar'
  classNames: ['mlf-sidebar']
  classNameBindings: ['expanded:mlf-sidebar-expanded']

  expanded: true
  expandable: true

  brand: { name: 'Brand', imageUrl: null }
  menus: []
  starterItems: []

  didInsertElement: ->
    @$().find('.menu-triggers li a').first().click()

Ember.Handlebars.helper 'side-bar', Menglifang.Widgets.Sidebar
