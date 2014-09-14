App.BasicTableDemoController = Ember.Controller.extend
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
      cellContentPath: 'open'
      textAlign: 'right'
      formatCellContent: (value) -> formatPrice(value)
    highColumn = Menglifang.Widgets.BasicTableColumn.create
      title: '最高价'
      width: 100
      cellContentPath: 'high'
      textAlign: 'center'
      formatCellContent: (value) -> formatPrice(value)
    lowColumn = Menglifang.Widgets.BasicTableColumn.create
      title: '最低价'
      width: 100
      cellContentPath: 'low'
      textAlign: 'left'
      formatCellContent: (value) -> formatPrice(value)
    closeColumn = Menglifang.Widgets.BasicTableColumn.create
      title: '收盘价'
      width: 100
      cellContentPath: 'close'
      formatCellContent: (value) -> formatPrice(value)
    [dateColumn, openColumn, highColumn, lowColumn, closeColumn]

  content: Ember.computed ->
    [0..25].map (index) ->
      date = new Date()
      date.setDate(date.getDate() + index)
      Ember.Object.create
        date:  date
        open:  Math.round(Math.random() * 100 - 50)
        high:  Math.round(Math.random() * 100 - 50)
        low:   Math.round(Math.random() * 100 - 50)
        close: Math.round(Math.random() * 100 - 50)
        volume: Math.round(Math.random() * 1000000)
  .property()

  topActions: [
    { name: 'removeSelected', text: '移除选定', icon: 'fa fa-minus', position: 'left' }
    { name: 'removeAll', text: '清空', icon: 'fa fa-tint', position: 'left' }
    { name: 'add', text: '添加', icon: 'fa fa-plus', position: 'right' }
  ]

  singleSelection: new Ember.Set()

  multipleSelection: new Ember.Set()

  selectionDidChange: (->
    alert("共选中了#{@get('multipleSelection.length')}行")
    console.log @get('multipleSelection')
  ).observes('multipleSelection.length')

  actions:
    select: (obj) ->
      alert("选中了#{obj.toString()}")

    removeSelected: -> alert('`移除选中`按钮被点击！')
    removeAll: -> alert('`清空`按钮被点击！')
    add: -> alert('`添加`按钮被点击！')
