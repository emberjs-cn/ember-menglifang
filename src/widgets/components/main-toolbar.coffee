Menglifang.Widgets.MainToolbar = Ember.Component.extend
  layoutName: 'components/mlf-main-toolbar'
  classNames: ['mlf-main-toolbar']

  parentItems: (->
    @get('items').slice(0, @get('items.length') - 1) unless Ember.isEmpty(@get('items'))
  ).property('items.@each')

  activeItem: (->
    @get('items.lastObject')
  ).property('items.@each')

Ember.Handlebars.helper 'main-toolbar', Menglifang.Widgets.MainToolbar
