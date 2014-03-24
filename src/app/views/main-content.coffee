Menglifang.App.MainContentView = Ember.View.extend
  classNames: ['mlf-main-content']

  didInsertElement: ->
    @$().height($(window).height() - 60) if $.browser.msie && $.browser.version == '8.0'
