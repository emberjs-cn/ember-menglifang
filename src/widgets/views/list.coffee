Menglifang.Widgets.ListItemView = Ember.ReusableListItemView.extend
  classNames: ['ember-list-item-view', 'mlf-list-item']

Menglifang.Widgets.ListView = Ember.ListView.extend
  classNames: ['ember-list-view', 'mlf-list']

  itemViewClass: Menglifang.Widgets.ListItemView

  didInsertElement: ->
    @set('height', Ember.$('.ember-list-view').parent().height())
    @_super()
