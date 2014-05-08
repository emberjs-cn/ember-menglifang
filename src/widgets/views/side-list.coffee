Menglifang.Widgets.SideListItem = Ember.ListItemView.extend
  classNames: ['mlf-side-list-item']

Menglifang.Widgets.ListView = Menglifang.Widgets.SideList = Ember.ListView.extend
  classNames: ['mlf-side-list']

  itemViewClass: Menglifang.Widgets.SideListItem

  didInsertElement: ->
    @set('height', Ember.$('.mlf-side-list').parent().height())
    @_super()

Ember.Handlebars.registerHelper 'side-list', (options) ->
  Ember.Handlebars.helpers.collection.call @, 'Menglifang.Widgets.SideList', options
