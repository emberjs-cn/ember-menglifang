Ember.Application.initializer
  name: 'authentication'
  initialize: (container, application) ->
    # Clear session data
    localStorage.clear() if window.location.href != localStorage.getItem('menglifang-app:url')

    # customize the session so that it allows access to the account object
    Ember.SimpleAuth.Session.reopen
      account: (->
        accountId = this.get('account_id')
        if !Ember.isEmpty(accountId)
          container.lookup('store:main').find('user', accountId)
      ).property('accountId')

    container.register('app:authenticators:devise', Menglifang.App.DeviseAuthenticator)

    Ember.SimpleAuth.setup container, application,
      authorizer: Menglifang.App.DeviseAuthorizer
      routeAfterAuthentication: 'authenticated'
      routeAfterInvalidation: 'login'
