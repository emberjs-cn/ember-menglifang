Menglifang.Widgets.Select2 = Ember.Select.extend
  classNames: ['mlf-select2']

  placeholder: '请选择...'
  allowClear: true
  closeOnSelect: true
  minimumInputLength: 0
  maximumSelectionSize: 0

  selectedDidChange: (->
    @$().select2('val', @$().val())
  ).observes('selection.@each')

  didInsertElement: ->
    Ember.run.scheduleOnce('afterRender', @, 'processChildElements')

  processChildElements: ->
    options = {}

    options.placeholder = @get('prompt') || @get('placeholder')
    options.allowClear  = @get('allowClear')
    options.closeOnSelect = @get('closeOnSelect')
    options.minimumInputLength = @get('minimumInputLength')
    options.maximumSelectionSize = @get('maximumSelectionSize')

    @$().select2(options)

  willDestroyElement: ->
    @$().select2('destroy')

Ember.Handlebars.helper 'select2', Menglifang.Widgets.Select2
