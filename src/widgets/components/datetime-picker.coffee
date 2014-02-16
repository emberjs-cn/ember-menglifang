Menglifang.Widgets.DatetimePicker = Ember.TextField.extend
  resetable: true

  format: 'yyyy-mm-dd hh:ii'
  autoclose: true
  todayBtn: true
  startDate: '1949-10-01'
  minuteStep: 10
  minView: 0
  maxView: 4

  didInsertElement: ->
    options =
      format: @get('format')
      autoclose: @get('autoclose')
      todayBtn: @get('todayBtn')
      startDate: @get('startDate')
      minuteStep: @get('minuteStep')
      minView: @get('minView')
      maxView: @get('maxView')

    @$().datetimepicker(options)

Ember.Handlebars.helper 'datetime-picker', Menglifang.Widgets.DatetimePicker
