Ember.Menglifang.ListItemView = Ember.ReusableListItemView.extend
  classNames: ['ember-list-item-view', 'mlf-list-item']

Ember.Menglifang.ListView = Ember.ListView.extend
  classNames: ['ember-list-view', 'mlf-list']

  itemViewClass: Ember.Menglifang.ListItemView

  didInsertElement: ->
    @set('height', Ember.$('.ember-list-view').parent().height())
    @_super()
