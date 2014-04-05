App.FormsRoute = Ember.Route.extend
  beforeModel: -> @transitionTo('select2')
