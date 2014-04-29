App.BasicsRoute = Ember.Route.extend
  beforeModel: -> @transitionTo('login_form')
