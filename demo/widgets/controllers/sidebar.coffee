App.SidebarController = Ember.Controller.extend
  title: 'Logo'

  sidebar:
    menus: [{
      icon: 'images/icon.png', url: '#菜单一', text: '菜单一',
      items: [
        { icon: 'images/icon.png', route: 'firstRoute', text: '条目一' }
        { icon: 'images/icon.png', route: 'secondRoute', text: '条目二' }
      ]
    }, {
      icon: 'images/icon.png', url: '#菜单二', text: '菜单二',
      items: [
        { icon: 'images/icon.png', route: 'firstRoute', text: '条目一' }
      ]
    }]

    starterItems: [{
      icon: 'fa fa-sign-out', url: '#', text: '注销'
    }]
