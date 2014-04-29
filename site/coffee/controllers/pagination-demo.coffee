App.PaginationDemoController = Ember.Controller.extend
  actions:
    page: (page) ->
      alert("Page #{page} is clicked.")
