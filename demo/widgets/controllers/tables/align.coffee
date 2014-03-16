App.TablesAlignController = App.TablesBasicController.extend
  columns: Ember.computed ->
    dateColumn = Menglifang.Widgets.BasicTableColumn.create
      title: '日期'
      width: 100
      cellContentPath: 'date'
    openColumn = Menglifang.Widgets.BasicTableColumn.create
      title: '开盘价'
      width: 100
      cellContentPath: 'open'
      textAlign: 'right'
    highColumn = Menglifang.Widgets.BasicTableColumn.create
      title: '最高价'
      width: 100
      cellContentPath: 'high'
      textAlign: 'center'
    lowColumn = Menglifang.Widgets.BasicTableColumn.create
      title: '最低价'
      width: 100
      cellContentPath: 'low'
      textAlign: 'left'
    closeColumn = Menglifang.Widgets.BasicTableColumn.create
      title: '收盘价'
      width: 100
      cellContentPath: 'close'
    [dateColumn, openColumn, highColumn, lowColumn, closeColumn]
