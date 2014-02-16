Menglifang.Widgets.TaggingSelect2 = Ember.TextField.extend
  classNames: ['mlf-tagging-select2']

  placeholder: '请选择...'
  allowClear: true
  closeOnSelect: true
  minimumInputLength: 0
  maximumSelectionSize: 0
  tokenSeparators: [",", " ", ";", "，", "；"]

  didInsertElement: ->
    Ember.run.scheduleOnce('afterRender', this, 'processChildElements')

  processChildElements: ->
    options =
      placeholder:   @get('placeholder')
      allowClear:    @get('allowClear')
      closeOnSelect: @get('closeOnSelect')
      tags:          @get('tags') || []
      tokenSeparators:      @get('tokenSeparators')
      minimumInputLength:   @get('minimumInputLength')
      maximumSelectionSize: @get('maximumSelectionSize')

    @$().select2(options)

  willDestroyElement: ->
    @$().select2("destroy")

Ember.Handlebars.helper 'tagging-select2', Menglifang.Widgets.TaggingSelect2
