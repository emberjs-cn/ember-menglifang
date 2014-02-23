Menglifang.Widgets.BasicTableColumn = Ember.Object.extend
  title: null
  width: 100
  cellContentPath: null

Menglifang.Widgets.BasicTableCell = Ember.Component.extend Menglifang.Widgets.StyleBindingsMixin,
  tagName: 'td'
  classNames: ['mlf-basic-table-cell']
  styleBindings: ['textAlign:text-align']

  textAlignBinding: 'column.textAlign'

  defaultTemplate: (context, options) ->
    options =  data: options.data, hash: {}
    Ember.Handlebars.helpers.bind.call(context, "view.value", options)

  init: ->
    @valuePathDidChange()

    @_super()

  valuePathDidChange: (->
    formatValue = @get('column.formatCellContent')
    valuePath = 'row.' + @get('column.cellContentPath')

    return unless valuePath

    Ember.defineProperty(@, 'value', Ember.computed(->
      if formatValue then formatValue(@get(valuePath)) else @get(valuePath)
    ).property(valuePath))
  ).observes('row', 'column.cellContentPath')

Menglifang.Widgets.BasicTableRow = Ember.Component.extend
  tagName: 'tr'
  layoutName: 'components/mlf-basic-table-row'
  classNames: ['mlf-basic-table-row']

  indexedBinding: 'parentView.indexed'
  selectableBinding: 'parentView.rowSelectable'
  selectionBinding: 'parentView.selection'
  allRowsSelectedBinding: 'parentView.allRowsSelected'

  selected: false

  allRowsSelectedDidChange: (->
    @set('selected', true) if @get('allRowsSelected')
  ).observes('allRowsSelected')

  selectionDidChange: (->
    @set('selected', false) if @get('selection.length') == 0
  ).observes('selection.length')

  selectedDidChange: (->
    if @get('selected')
      @get('selection').add(@get('content'))
    else
      @get('selection').remove(@get('content'))
  ).observes('selected')

  columns: Ember.computed.filter('parentView.columns', (c) -> c.get('cellContentPath'))

  index: (->
    @get('contentIndex') + 1
  ).property('contentIndex')

Menglifang.Widgets.BasicTableBody = Ember.CollectionView.extend
  tagName: 'tbody'
  classNames: ['mlf-basic-table-body']
  itemViewClass: Menglifang.Widgets.BasicTableRow

  indexed: false
  rowSelectable: false

  # 保存被选中的行绑定的对象
  selection: null

  columns: []

  allRowsSelected: (->
    @get('selection.length') == @get('content.length')
  ).property('selection.length', 'content.length')

Menglifang.Widgets.BasicTableHeadCell = Ember.Component.extend Menglifang.Widgets.StyleBindingsMixin,
  tagName: 'td'
  classNames: ['mlf-basic-table-head-cell']
  styleBindings: ['minWidth:min-width', 'textAlign:text-align']

  minWidthBinding: 'content.width'
  textAlignBinding: 'content.textAlign'

  defaultTemplate: (context, options) ->
    options =  data: options.data, hash: {}
    Ember.Handlebars.helpers.bind.call(context, "view.content.title", options)

Menglifang.Widgets.BasicTableSelectAllCell = Menglifang.Widgets.BasicTableHeadCell.extend
  content: Ember.Object.create(width: 30, textAlign: 'center')
  layoutName: 'components/mlf-basic-table-select-all-cell'

  checkedDidChange: (->
    action = if @get('checked') then 'selectAll' else 'deselectAll'
    @triggerAction action: action
  ).observes('checked')

Menglifang.Widgets.BasicTableHeadRow = Ember.CollectionView.extend
  tagName: 'tr'
  classNames: ['mlf-basic-table-head-row']
  itemViewClass: Menglifang.Widgets.BasicTableHeadCell

  hasIndexCellBinding: 'parentView.hasIndexCell'
  hasSelectAllCellBinding: 'parentView.hasSelectAllCell'

  didInsertElement: ->
    @_createIndexCell() if @get('hasIndexCell')
    @_createSelectAllCell() if @get('hasSelectAllCell')

  _createIndexCell: ->
    @.unshiftObject Menglifang.Widgets.BasicTableHeadCell.create
      content: Ember.Object.create(width: 30, textAlign: 'center', title: '#')

  _createSelectAllCell: ->
    @.unshiftObject Menglifang.Widgets.BasicTableSelectAllCell.create()

Menglifang.Widgets.BasicTableHead = Ember.CollectionView.extend
  tagName: 'thead'
  classNames: ['mlf-basic-table-head']
  itemViewClass: Menglifang.Widgets.BasicTableHeadRow

  hasIndexCell: false
  hasSelectAllCell: false

Menglifang.Widgets.BasicTableAction = Ember.Component.extend
  tagName: 'a'
  layoutName: 'components/mlf-basic-table-action'

Menglifang.Widgets.BasicTableActionGroup = Ember.CollectionView.extend
  classNames: ['mlf-basic-table-action-group']
  itemViewClass: Menglifang.Widgets.BasicTableAction

Menglifang.Widgets.BasicTableTopBar = Ember.Component.extend
  tagName: 'caption'
  classNames: ['mlf-basic-table-top-bar']

  barActions: []
  leftActions: Ember.computed.filterBy('barActions', 'position', 'left')
  rightActions: Ember.computed.filterBy('barActions', 'position', 'right')

Menglifang.Widgets.BasicTable= Ember.Component.extend
  tagName: 'table'
  classNames: ['table', 'table-bordered', 'table-hover', 'mlf-basic-table']
  layoutName: 'components/mlf-basic-table'

  # 缓存所有选中的行绑定的对象
  selection: new Ember.Set()

  # 标记是否需要在第一列显示序号
  indexed: false

  # 标记是否可以选择行
  rowSelectable: false

  topActions: []
  hasTopActions: Ember.computed.notEmpty('topActions')

  headContent: (->
    headContent = Ember.A()
    headContent.pushObject(@get('columns') || [])
    headContent
  ).property('columns.@each', 'indexed')

  click: (evt) ->
    view = Ember.View.views[evt.target.id]
    return @triggerAction action: view.get('content.name') if @_clickFromAction(view)

  _clickFromAction: (target) ->
    target && target.constructor == Menglifang.Widgets.BasicTableAction

  actions:
    selectAll: ->
      @get('selection').addEach(@get('content'))

    deselectAll: ->
      @get('selection').clear()

Ember.Handlebars.helper 'basic-table', Menglifang.Widgets.BasicTable
