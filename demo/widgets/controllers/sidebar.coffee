App.SidebarController = Ember.Controller.extend
  brand: { name: 'Brand' }

  title: 'Logo'

  menus: [{
    icon: '/images/users.png', url: '#菜单一', text: '菜单一',
    items: [
      { icon: '/images/users.png', route: 'firstRoute', text: '条目一' }
      { icon: '/images/users.png', route: 'secondRoute', text: '条目二' }
    ]
  }, {
    icon: '/images/users.png', url: '#菜单二', text: '菜单二',
    items: [
      { icon: '/images/users.png', route: 'firstRoute', text: '条目一' }
    ]
  }]

  starterItems: [{
    icon: 'fa fa-sign-out', url: '#', text: '注销'
  }]
