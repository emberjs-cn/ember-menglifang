Ember.Application.initializer
  name: 'authentication'
  initialize: (container, application) ->
    # Clear session data
    #localStorage.clear() if window.location.href != localStorage.getItem('menglifang-app:url')

    Ember.SimpleAuth.setup container, application,
      authorizerFactory: 'authorizer:devise'
      routeAfterAuthentication: 'authenticated'
