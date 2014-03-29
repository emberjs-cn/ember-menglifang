require 'build/src/widgets/views/list'

Ember.View.reopen
  init: ->
    @_super()

    # bind attributes beginning with 'data-'
    Ember.keys(this).forEach (key) =>
      @get('attributeBindings').pushObject(key) if key.substr(0, 5) == 'data-'
