# the devise authenticator that handles the authenticated account
Ember.SimpleAuth.Authenticators.Devise.reopen
  authenticate: (credentials) ->
    session = @container.lookup('session:main')
    store   = @container.lookup('store:main')

    new Ember.RSVP.Promise (resolve, reject) =>
      data = user: {
        login:    credentials.identification
        password: credentials.password
      }

      self = @
      @makeRequest(data).then (response) =>
        Ember.run -> resolve(self._extractResponse(response))
      , (xhr, status, error) ->
        Ember.run -> reject(xhr.responseJSON || xhr.responseText)

  _extractResponse: (response) ->
    Ember.merge(response.user, auth_token: response.user.authentication_token, auth_email: response.user.email)
