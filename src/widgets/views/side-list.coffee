Menglifang.Widgets.SideListItem = Ember.ReusableListItemView.extend
  classNames: ['mlf-side-list-item']

Menglifang.Widgets.SideList = Ember.ListView.extend
  classNames: ['mlf-side-list']

  itemViewClass: Menglifang.Widgets.SideListItem

  didInsertElement: ->
    @set('height', Ember.$('.mlf-side-list').parent().height())
    @_super()

Ember.Handlebars.registerHelper 'side-list', (options) ->
  hash = options.hash
  types = options.hashTypes

  hash.content = hash.items
  delete hash.items

  types.content = types.items
  delete types.items

  unless hash.content
    hash.content = "this"
    types.content = "ID"

  for k, v of hash
    if /-/.test(k)
      camelized = Ember.String.camelize(k)
      hash[camelized] = hash[k]
      types[camelized] = types[k]
      delete hash[k]
      delete types[k]

  Ember.Handlebars.helpers.collection.call @, 'Menglifang.Widgets.SideList', options
