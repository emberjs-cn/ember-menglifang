App.RemotePageComponent = Ember.Component.extend
  url: null

  didInsertElement: ->
    @$().load(@get('url')) if @get('url')
