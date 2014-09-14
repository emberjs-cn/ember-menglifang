Menglifang.Widgets.BsPaginationButton = Ember.Component.extend
  tagName: 'li'
  layoutName: 'components/mlf-bs-pagination-button'

  classNameBindings: ['disabled:disabled', 'active:active']

  currentBinding: 'parentView.current'

  disabled: (->
    page = @get('content.page')
    page != @get('content.text') && page == @get('current')
  ).property('current', 'content.{page,text}')

  active: (->
    page = @get('content.page')
    page == @get('content.text') && page == @get('current')
  ).property('current', 'content.{page,text}')

  actions:
    page: (page) ->
      @triggerAction action: 'page', actionContext: page

Menglifang.Widgets.BsPagination = Ember.CollectionView.extend
  tagName: 'ul'

  classNames: ['pagination']
  classNameBindings: ['sizingClassName']

  itemViewClass: Menglifang.Widgets.BsPaginationButton

  start: 1
  current: 1
  size: 9
  total: 1
  url: ''

  sizingClassName: (->
    return 'pagination-lg' if @get('sizing') == 'large'
    return 'pagination-sm' if @get('sizing') == 'small'

    ''
  ).property('sizing')

  prev: (->
    if @get('current') > 1 then @get('current') - 1 else 1
  ).property('current')

  next: (->
    if @get('current') < @get('total') then @get('current') + 1 else @get('total')
  ).property('current', 'total')

  end: (->
    if @get('start') + @get('size') - 1 >= @get('total') then @get('total') else @get('start') + @get('size') - 1
  ).property('start', 'total')

  content: (->
    content = Ember.A()
    content.pushObject Ember.Object.create page: 1, text: '&laquo;'.htmlSafe()
    content.pushObject Ember.Object.create page: @get('prev'), text: '&lsaquo;'.htmlSafe()

    [@get('start')..@get('end')].map (i) =>
      content.pushObject Ember.Object.create page: i, text: i

    content.pushObject Ember.Object.create page: @get('next'), text: '&rsaquo;'.htmlSafe()
    content.pushObject Ember.Object.create page: @get('total'), text: '&raquo;'.htmlSafe()

    content
  ).property('start', 'end', 'current')

Ember.Handlebars.helper 'bs-pagination', Menglifang.Widgets.BsPagination
