# the devise authenticator that handles the authenticated account
Menglifang.App.DeviseAuthenticator = Ember.SimpleAuth.Authenticators.OAuth2.extend
  authenticate: (credentials) ->
    return new Ember.RSVP.Promise (resolve, reject) ->
      # make the request to authenticate the user at endoint /users/sign_in
      Ember.$.ajax
        url:  '/users/sign_in'
        type: 'POST'
        data:
          grant_type: 'password'
          user: { login: credentials.identification, password: credentials.password }
      .then (response) ->
        Ember.run ->
          # resolve (including the account id) as the AJAX request was successful; all properties this promise resolves
          # with will be available through the session
          resolve({ user_email: response.user.email, user_token: response.user.authentication_token, account_id: response.user.id })
      , (xhr, status, error) ->
        Ember.run -> reject(xhr.responseText)
