App.TablesBasicController = Ember.Controller.extend
  columns: Ember.computed ->
    dateColumn = Menglifang.Widgets.BasicTableColumn.create
      title: '日期'
      width: 100
      cellContentPath: 'date'
    openColumn = Menglifang.Widgets.BasicTableColumn.create
      title: '开盘价'
      width: 100
      cellContentPath: 'open'
    highColumn = Menglifang.Widgets.BasicTableColumn.create
      title: '最高价'
      width: 100
      cellContentPath: 'high'
    lowColumn = Menglifang.Widgets.BasicTableColumn.create
      title: '最低价'
      width: 100
      cellContentPath: 'low'
    closeColumn = Menglifang.Widgets.BasicTableColumn.create
      title: '收盘价'
      width: 100
      cellContentPath: 'close'
    [dateColumn, openColumn, highColumn, lowColumn, closeColumn]

  content: Ember.computed ->
    [0..25].map (index) ->
      date = new Date()
      date.setDate(date.getDate() + index)
      Ember.Object.create
        date:  moment(date).format('YYYY-MM-DD')
        open:  Math.round(Math.random() * 100 - 50)
        high:  Math.round(Math.random() * 100 - 50)
        low:   Math.round(Math.random() * 100 - 50)
        close: Math.round(Math.random() * 100 - 50)
        volume: Math.round(Math.random() * 1000000)
  .property()
