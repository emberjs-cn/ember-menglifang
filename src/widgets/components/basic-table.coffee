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
  classNameBindings: ['selected:info']

  indexedBinding: 'parentView.indexed'
  columnsBinding: 'parentView.columns'

  index: (->
    @get('contentIndex') + 1
  ).property('contentIndex')

Menglifang.Widgets.BasicTableSelectableRow = Menglifang.Widgets.BasicTableRow.extend
  selectionBinding: 'parentView.selection'

  selected: (->
    @get('selection').contains(@get('content'))
  ).property('selection.length')


Menglifang.Widgets.BasicTableSingleSelectableRow = Menglifang.Widgets.BasicTableSelectableRow.extend
  click: ->
    @get('selection').clear()
    @get('selection').add(@get('content'))
    @triggerAction action: 'selectRow', actionContext: @

Menglifang.Widgets.BasicTableMultipleSelectableRow = Menglifang.Widgets.BasicTableSelectableRow.extend
  layoutName: 'components/mlf-basic-table-multiple-selectable-row'

  multipleBinding: 'parentView.multiple'

  selectedDidChange: (->
    if @get('selected')
      @get('selection').add(@get('content'))
    else
      @get('selection').remove(@get('content'))
  ).observes('selected')

Menglifang.Widgets.BasicTableBody = Ember.CollectionView.extend
  tagName: 'tbody'
  classNames: ['mlf-basic-table-body']
  itemViewClass: (->
    return Menglifang.Widgets.BasicTableRow unless @get('rowSelectable')

    if @get('multiple')
      Menglifang.Widgets.BasicTableMultipleSelectableRow
    else
      Menglifang.Widgets.BasicTableSingleSelectableRow
  ).property('rowSelectable', 'multiple')

  indexed: false
  multiple: false
  rowSelectable: false

  # 保存被选中的行绑定的对象
  selection: null

  columns: []

  single: (->
    !@get('multiple') && @get('rowSelectable')
  ).property('multiple', 'rowSelectable')

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
  init: ->
    @_super()
    @set 'selection', new Ember.Set() if Ember.isNone(@get('selection'))

  tagName: 'table'
  classNames: ['table', 'table-bordered', 'table-hover', 'mlf-basic-table']
  classNameBindings: ['clickable:table-clickable']
  layoutName: 'components/mlf-basic-table'

  # 标记是否可以多选
  multiple: false

  # 缓存所有选中的行绑定的对象
  selection: null

  # 标记是否需要在第一列显示序号
  indexed: false

  # 标记是否可以选择行
  rowSelectable: false

  topActions: []
  hasTopActions: Ember.computed.notEmpty('topActions')

  clickable: (->
    !@get('multiple') && @get('rowSelectable')
  ).property('multiple', 'rowSelectable')

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
    selectRow: (row) ->
      @get('selection').clear()
      @get('selection').add(row.get('content'))
      @triggerAction action: 'select', actionContext: row.get('content')

    selectAll: ->
      @get('selection').addEach(@get('content'))

    deselectAll: ->
      @get('selection').clear()

Ember.Handlebars.helper 'basic-table', Menglifang.Widgets.BasicTable
