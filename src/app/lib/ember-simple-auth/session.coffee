Ember.SimpleAuth.Session.reopen
  currentUser: (->
    @get('container').lookup('store:main').push('user', @get('content'))
  ).property('content.id')
