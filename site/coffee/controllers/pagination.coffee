App.PaginationController = Ember.Controller.extend
  toolbarLinks: [
    { icon: 'fa fa-file-text-o', text: '说明文档', route: 'pagination.index' }
    { icon: 'fa fa-eye', text: '在线演示', route: 'pagination.demo' }
  ]
