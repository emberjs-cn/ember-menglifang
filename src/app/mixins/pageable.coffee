get = Ember.get

Menglifang.App.Pageable = Ember.Mixin.create
  isPageable: true
  total: 0
  pageSize: 20
  currentPage: 0
  windowSize: 9

  startPage: (->
    currentPage = get(@, 'currentPage')
    totalPages = get(@, 'totalPages')

    return 1 if totalPages <= @windowSize

    startPage = if currentPage - Math.floor((@windowSize / 2)) > 1 then currentPage - Math.floor((@windowSize / 2)) else 1
    startPage = totalPages - @windowSize + 1 if startPage + (@windowSize - 1) >= totalPages

    startPage
  ).property('currentPage')

  totalPages: (->
    Math.ceil(get(@, 'total') / get(@, 'pageSize')) || 0
  ).property('total', 'pageSize')
