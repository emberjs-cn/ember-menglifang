Menglifang.App.User = DS.Model.extend
  username: DS.attr()
  realname: DS.attr()
  email: DS.attr()
  password: DS.attr()
  roles: DS.attr()
  accessLocked: DS.attr('boolean')

  name: Ember.computed.any('realname', 'username')

  changePassword: (oldPwd, newPwd, pwdConfirmation) ->
    new Ember.RSVP.Promise (resolve, reject) =>
      return reject('您两次输入的新密码不匹配') if newPwd != pwdConfirmation

      $.ajax(
        url: "/#{Menglifang.App.namespace}/password"
        type: "PUT"
        data:
          password:
            current_password: oldPwd
            password: newPwd
            password_confirmation: pwdConfirmation
        dataType: 'json'
      ).then ->
        resolve()
      , (jqXHR, textStatus, errorThrown) ->
        reject(jqXHR.responseJSON.errors.password)
