Ember.Menglifang.MainToolbarComponent = Ember.Component.extend
  templateName: 'components/main-toolbar'
  classNames: ['main-toolbar']

  parentItems: (->
    @get('items').slice(0, @get('items.length') - 1)
  ).property('items.@each')

  activeItem: (->
    @get('items.lastObject')
  ).property('items.@each')
