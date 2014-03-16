App.TablesSingleSelectionController = App.TablesBasicController.extend
  actions:
    select: (obj) ->
      alert("选中了#{obj.toString()}")
