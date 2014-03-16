App.TablesTopbarController = App.TablesBasicController.extend
  topActions: [
    { name: 'removeSelected', text: '移除选定', icon: 'fa fa-minus', position: 'left' }
    { name: 'removeAll', text: '清空', icon: 'fa fa-tint', position: 'left' }
    { name: 'add', text: '添加', icon: 'fa fa-plus', position: 'right' }
  ]

  actions:
    removeSelected: -> alert('`移除选中`按钮被点击！')
    removeAll: -> alert('`清空`按钮被点击！')
    add: -> alert('`添加`按钮被点击！')
