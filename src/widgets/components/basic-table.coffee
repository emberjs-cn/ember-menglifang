Menglifang.Widgets.BasicTableColumn = Ember.Object.extend
  title: undefined
  width: 100
  textAlign: 'left'

  cellContentPath: undefined
  formatCellContent: undefined

Menglifang.Widgets.BasicTableCell = Ember.Component.extend Menglifang.Widgets.StyleBindingsMixin,
  tagName: 'td'
  classNames: ['mlf-basic-table-cell']
  styleBindings: ['textAlign:text-align']

  textAlignBinding: 'column.textAlign'

  layoutName: 'components/mlf-basic-table-cell'

  init: ->
    @valuePathDidChange()

    @_super()

  valuePathDidChange: (->
    formatValue = @get('column.formatCellContent')
    valuePath = 'content.' + @get('column.cellContentPath')

    return unless valuePath

    Ember.defineProperty(@, 'value', Ember.computed(->
      if formatValue then formatValue.call(@, @get(valuePath)) else @get(valuePath)
    ).property(valuePath))
  ).observes('content', 'column.cellContentPath')

Menglifang.Widgets.BasicTableRow = Ember.CollectionView.extend
  tagName: 'tr'
  classNames: ['mlf-basic-table-row']
  classNameBindings: ['selected:info']

  itemViewClass: Menglifang.Widgets.BasicTableCell

  createChildView: (viewClass, attrs) ->
    @_super(viewClass, content: @get('record'), contentIndex: attrs.contentIndex, column: attrs.content)

  indexedBinding: 'parentView.indexed'

  index: (->
    @get('contentIndex') + 1
  ).property('contentIndex')

  didInsertElement: ->
    @_createIndexCell() if @get('indexed')

  _createIndexCell: ->
    @unshiftObject Ember.Component.create(
      tagName: 'td'
      classNames: ['index']
      layoutName: 'components/mlf-basic-table-cell'
      value: @get('index')
    )

Menglifang.Widgets.BasicTableSelectableRow = Menglifang.Widgets.BasicTableRow.extend
  selectionBinding: 'parentView.selection'

  selected: ((key, value) ->
    if value?
      if value
        @get('selection').add(@get('record'))
      else
        @get('selection').remove(@get('record'))

      value
    else
      @get('selection').contains(@get('record'))
  ).property('selection.length')


Menglifang.Widgets.BasicTableSingleSelectableRow = Menglifang.Widgets.BasicTableSelectableRow.extend
  click: ->
    @get('selection').clear()
    @get('selection').add(@get('record'))

    # Get the BasicTable
    @get('parentView.parentView').triggerAction action: 'select', actionContext: @get('record')

Menglifang.Widgets.BasicTableMultipleSelectableRow = Menglifang.Widgets.BasicTableSelectableRow.extend
  didInsertElement: ->
    @_super()
    @_createSelectCell()

  _createSelectCell: ->
    @unshiftObject Menglifang.Widgets.BasicTableSelectCell.create(selectedBinding: 'parentView.selected')

Menglifang.Widgets.BasicTableSelectCell = Menglifang.Widgets.BasicTableCell.extend
  classNames: ['selection-cell']
  layoutName: 'components/mlf-basic-table-select-cell'

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

  createChildView: (viewClass, attrs) ->
    @_super(viewClass, content: @get('columns'), record: attrs.content, contentIndex: attrs.contentIndex)

  indexed: false
  multiple: false
  rowSelectable: false

  selectionBinding: 'parentView.selection'

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

  layoutName: 'components/mlf-basic-table-head-cell'

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

  layoutName: 'components/mlf-basic-table-top-bar'

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
    selectAll: ->
      @get('selection').addEach(@get('content'))

    deselectAll: ->
      @get('selection').clear()

Ember.Handlebars.helper 'basic-table', Menglifang.Widgets.BasicTable
