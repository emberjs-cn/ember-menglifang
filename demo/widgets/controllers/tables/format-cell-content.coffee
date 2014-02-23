App.TablesFormatCellContentController = App.TablesBasicController.extend
  columns: Ember.computed ->
    formatPrice = (price) ->
      color = 'red'
      price = price.toFixed(2)
      color = 'green' if price < 0
      "<span style='color: #{color};'>#{price}</span>".htmlSafe()
        
    dateColumn = Menglifang.Widgets.BasicTableColumn.create
      title: '日期'
      width: 100
      cellContentPath: 'date'
      formatCellContent: (value) -> moment(value).format('YYYY.MM.DD')
    openColumn = Menglifang.Widgets.BasicTableColumn.create
      title: '开盘价'
      width: 100
      textAlign: 'right'
      cellContentPath: 'open'
      formatCellContent: (value) -> formatPrice(value)
    highColumn = Menglifang.Widgets.BasicTableColumn.create
      title: '最高价'
      width: 100
      textAlign: 'right'
      cellContentPath: 'high'
      formatCellContent: (value) -> formatPrice(value)
    lowColumn = Menglifang.Widgets.BasicTableColumn.create
      title: '最低价'
      width: 100
      textAlign: 'right'
      cellContentPath: 'low'
      formatCellContent: (value) -> formatPrice(value)
    closeColumn = Menglifang.Widgets.BasicTableColumn.create
      title: '收盘价'
      width: 100
      textAlign: 'right'
      cellContentPath: 'close'
      formatCellContent: (value) -> formatPrice(value)
    [dateColumn, openColumn, highColumn, lowColumn, closeColumn]

