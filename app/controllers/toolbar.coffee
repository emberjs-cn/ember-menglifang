App.ToolbarController = Ember.ObjectController.extend
  breadcrumbItems: [
    { text: 'First Item', route: 'firstRoute' }
    { text: 'Second Item', route: 'secondRoute' }
    { text: 'Last Item' }
  ]

  links: [
    { text: 'Add', route: 'firstRoute', icon: 'fa fa-plus' }
    { text: 'Back', route: 'secondRoute', icon: 'fa fa-arrow-circle-o-left' }
  ]
