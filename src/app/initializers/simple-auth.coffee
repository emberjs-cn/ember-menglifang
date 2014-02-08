Ember.Application.initializer
  name: 'authentication'
  initialize: (container, application) ->
    # customize the session so that it allows access to the account object
    Ember.SimpleAuth.Session.reopen
      account: (->
        accountId = this.get('account_id')
        if !Ember.isEmpty(accountId)
          container.lookup('store:main').find('user', accountId)
      ).property('accountId')

    Ember.SimpleAuth.setup application,
      authorizer: Menglifang.App.DeviseAuthorizer
      routeAfterAuthentication: 'authenticated'
      routeAfterInvalidation: 'login'
