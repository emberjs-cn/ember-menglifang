App.TablesMultipleSelectionController = App.TablesBasicController.extend
  selection: new Ember.Set()

  selectionDidChange: (->
    alert("共选中了#{@get('selection.length')}行")
  ).observes('selection.length')
