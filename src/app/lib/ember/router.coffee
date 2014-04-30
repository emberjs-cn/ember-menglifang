Ember.Router.reopen
  storeURL: (->
    localStorage.setItem 'menglifang-app:current-url', @get('url')
  ).on('didTransition')
