Menglifang.Widgets.BsSwitch = Ember.Checkbox.extend
  didInsertElement: -> @$().bootstrapSwitch()

Ember.Handlebars.helper 'bs-switch', Menglifang.Widgets.BsSwitch
