App.PaginationController = Ember.Controller.extend
  actions:
    page: (page) -> alert("跳转到第#{page}页")
