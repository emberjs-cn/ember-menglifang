Menglifang.App.DeviseAuthorizer = Ember.SimpleAuth.Authorizers.Base.extend
  authorize: (jqXHR, requestOptions) ->
    if !Ember.isEmpty(@get('session.user_email')) && !Ember.isEmpty(@get('session.user_token'))
      jqXHR.setRequestHeader('X-User-Email', @get('session.user_email'))
      jqXHR.setRequestHeader('X-User-Token', @get('session.user_token'))
