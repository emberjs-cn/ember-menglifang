Ember.Router.reopen
  storeURL: (->
    currentURL = @get('url')
    localStorage.setItem 'menglifang-app:current-url', currentURL if currentURL != '/login'
  ).on('didTransition')
