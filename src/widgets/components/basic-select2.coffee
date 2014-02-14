Menglifang.Widgets.BasicSelect2Component = Ember.Component.extend
  tagName: 'select'
  templateName: 'components/mlf-basic-select2'
  classNames: ['mlf-basic-select2']

  didInsertElement: -> @$().select2()
