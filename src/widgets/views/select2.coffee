Menglifang.Widgets.Select2 = Ember.Select.extend
  classNames: ['mlf-select2']

  placeholder: '请选择...'
  allowClear: true
  minimumInputLength: 0
  maximumSelectionSize: 3

  didInsertElement: ->
    @$().select2
      placeholder: @get('placeholder')
      allowClear: @get('allowClear')
      minimumInputLength: @get('minimumInputLength')
      maximumSelectionSize: @get('maximumSelectionSize')

  willDestroyElement: ->
    @$().select2('destroy')

Ember.Handlebars.helper 'select2', Menglifang.Widgets.Select2
