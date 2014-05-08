Ember.Application.initializer
  name: 'authentication'
  initialize: (container, application) ->
    # Clear session data
    currentURL = localStorage.getItem('menglifang-app:current-url')
    lastPageLoadedAt = new Date(localStorage.getItem('menglifang-app:last-page-loaded-at'))

    now = new Date()
    if window.location.href.indexOf(currentURL) < 0 || now - lastPageLoadedAt > 20 * 60 * 1000
      localStorage.clear()

    localStorage.setItem('menglifang-app:last-page-loaded-at', now)

    Ember.SimpleAuth.setup container, application,
      authorizerFactory: 'authorizer:devise'
      routeAfterAuthentication: 'authenticated'
