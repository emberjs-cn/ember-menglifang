App.TablesRoute = Ember.Route.extend
  beforeModel: -> @transitionTo('basic_table')
