Ember.SimpleAuth.Authorizers.Devise.reopen
  authorize: (jqXHR, requestOptions) ->
    authToken = @get('session.authentication_token')
    authEmail = @get('session.email')

    if @get('session.isAuthenticated') && !Ember.isEmpty(authToken) && !Ember.isEmpty(authEmail)
      if !Ember.SimpleAuth.Utils.isSecureUrl(requestOptions.url)
        Ember.Logger.warn('Credentials are transmitted via an insecure connection - use HTTPS to keep them secure.')

      jqXHR.setRequestHeader('X-User-Email', authEmail)
      jqXHR.setRequestHeader('X-User-Token', authToken)
