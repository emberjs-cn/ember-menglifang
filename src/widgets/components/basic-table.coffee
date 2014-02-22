Menglifang.Widgets.BasicTableColumn = Ember.Object.extend
  title: null
  width: 100
  cellContentPath: null

Menglifang.Widgets.BasicTableCell = Ember.Component.extend
  tagName: 'td'
  classNames: ['mlf-basic-table-cell']

  defaultTemplate: (context, options) ->
    options =  data: options.data, hash: {}
    Ember.Handlebars.helpers.bind.call(context, "view.value", options)

  init: ->
    @valuePathDidChange()

    @_super()

  valuePathDidChange: (->
    valuePath = @get('valuePath')

    return unless valuePath

    Ember.defineProperty(@, 'value', Ember.computed(->
      @get('row').get(valuePath)
    ).property(valuePath))
  ).observes('valuePath')

Menglifang.Widgets.BasicTableRow = Ember.Component.extend
  tagName: 'tr'
  templateName: 'components/mlf-basic-table-row'
  classNames: ['mlf-basic-table-row']

  columnsBinding: 'parentView.columns'

Menglifang.Widgets.BasicTableBody = Ember.CollectionView.extend
  tagName: 'tbody'
  classNames: ['mlf-basic-table-body']
  itemViewClass: Menglifang.Widgets.BasicTableRow

  columns: []

Menglifang.Widgets.BasicTableHeadCell = Ember.Component.extend Menglifang.Widgets.StyleBindingsMixin,
  tagName: 'td'
  classNames: ['mlf-basic-table-head-cell']
  styleBindings: ['minWidth:min-width']

  minWidthBinding: 'content.width'

  defaultTemplate: (context, options) ->
    options =  data: options.data, hash: {}
    Ember.Handlebars.helpers.bind.call(context, "view.content.title", options)

Menglifang.Widgets.BasicTableHeadRow = Ember.CollectionView.extend
  tagName: 'tr'
  classNames: ['mlf-basic-table-head-row']
  itemViewClass: Menglifang.Widgets.BasicTableHeadCell

Menglifang.Widgets.BasicTableHead = Ember.CollectionView.extend
  tagName: 'thead'
  classNames: ['mlf-basic-table-head']
  itemViewClass: Menglifang.Widgets.BasicTableHeadRow

Menglifang.Widgets.BasicTable= Ember.Component.extend
  tagName: 'table'
  classNames: ['table', 'table-bordered', 'table-hover', 'mlf-basic-table']
  templateName: 'components/mlf-basic-table'

  headContent: (->
    headContent = Ember.A()
    content = @get('columns') || []
    headContent.pushObject(content)

    headContent
  ).property('columns.@each')

Ember.Handlebars.helper 'basic-table', Menglifang.Widgets.BasicTable
