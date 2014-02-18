Menglifang.Widgets.Grid = Ember.Table.EmberTableComponent.extend
  sortAction: 'orderBy'

  # FIXME
  #
  # 如果Ember.Table.EmberTableComponent中actions的定义有改变，
  # 这里的定义会导致出问题
  actions:
    # Ember.Table.EmberTableComponent中定义的函数
    addColumn: Ember.K

    sortByColumn: (column) ->
      sortAscending = !column.get('sortAscending')

      column.set('sortAscending', sortAscending)
      @sendAction('sortAction', column.get('contentPath'), sortAscending)

Ember.Handlebars.helper 'basic-grid', Menglifang.Widgets.Grid
