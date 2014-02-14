Menglifang.Widgets.SelectOptionComponent = Ember.Component.extend
  tagName: 'option'
  attributeBindings: ['value', 'selected', 'disabled']

  templateName: 'components/mlf-select-option'

  label: Ember.computed.alias('content.label')
  value: Ember.computed.alias('content.value')
  selected: Ember.computed.alias('content.selected')
  disabled: Ember.computed.alias('content.disabled')
