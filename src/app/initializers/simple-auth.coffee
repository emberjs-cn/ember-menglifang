Ember.Application.initializer
  name: 'authentication'
  initialize: (container, application) ->
    # Clear session data
    currentURL = localStorage.getItem('menglifang-app:current-url')
    localStorage.clear() if window.location.href.indexOf(currentURL) < 0

    Ember.SimpleAuth.setup container, application,
      authorizerFactory: 'authorizer:devise'
      routeAfterAuthentication: 'authenticated'
