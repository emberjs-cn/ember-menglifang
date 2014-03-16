Ember.AddeparMixins = Ember.AddeparMixins or Ember.Namespace.create()
Menglifang.Widgets.StyleBindingsMixin = Ember.AddeparMixins.StyleBindingsMixin = Ember.Mixin.create
  concatenatedProperties: ["styleBindings"]
  attributeBindings: ["style"]
  unitType: "px"
  createStyleString: (styleName, property) ->
    value = @get(property)
    return  if value is undefined
    value = value + @get("unitType")  if Ember.typeOf(value) is "number"
    "" + styleName + ":" + value + ";"

  applyStyleBindings: ->
    _this = @
    styleBindings = @styleBindings
    return  unless styleBindings
    lookup = {}
    styleBindings.forEach (binding) ->
      tmp = binding.split(":")
      property = tmp[0]
      style = tmp[1]
      lookup[style or property] = property

    styles = Ember.keys(lookup)
    properties = styles.map((style) ->
      lookup[style]
    )
    styleComputed = Ember.computed(->
      styleTokens = styles.map((style) ->
        _this.createStyleString style, lookup[style]
      )
      styleString = styleTokens.join("")
      styleString  if styleString.length isnt 0
    )
    styleComputed.property.apply styleComputed, properties
    Ember.defineProperty @, "style", styleComputed

  init: ->
    @applyStyleBindings()
    @_super()
