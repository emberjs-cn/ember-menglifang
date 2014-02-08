findById = (id, callback, withSecret) ->
  global.db.get "SELECT rowid AS id, email, username, password, realname, roles, authentication_token FROM users WHERE rowid=?", id, (err, row) ->
    unless withSecret
      delete row['password']
      delete row['authentication_token']

    callback(row)

findByIdWithSecret = (id, callback) ->
  findById(id, callback, true)

updatePassword = (user, oldPwd, pwd, pwdConfirmation) ->
  if oldPwd == user.password && pwd == pwdConfirmation
    global.db.run "UPDATE users SET password=? WHERE rowid=?", pwd, user.id

module.exports.findById = findById
module.exports.findByIdWithSecret = findByIdWithSecret
module.exports.updatePassword = updatePassword
