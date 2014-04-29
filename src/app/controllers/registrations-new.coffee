Menglifang.App.RegistrationsNewController = Ember.ObjectController.extend
  username: null
  realname: null
  email: null
  password: null
  passwordConfirmation: null

  actions:
    save: ->
      $.post('/users.json', user: {
        username: @get('username')
        realname: @get('realname')
        email: @get('email')
        password: @get('password')
        password_confirmation: @get('passwordConfirmation')
        roles: 'user'
      }).then =>
        @transitionToRoute 'registrations.success'
      , -> Notifier.error '用户注册失败'

    cancel: -> @transitionToRoute('login')
