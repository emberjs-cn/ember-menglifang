express = require('express')
app = express()

sqlite3 = require('sqlite3').verbose()
global.db = db = new sqlite3.Database('db.sqlite3')

jssha = require('jssha')

userHandler = require('./func/user')

app.configure ->
  app.use(express.static(__dirname + '/public'))
  app.use(express.cookieParser('shhhh, very secret'))
  app.use(express.session())
  app.use(express.logger())
  app.use(express.bodyParser())

# Sign In/Out
app.post '/users/sign_in', (req, res) ->
  params = req.body.user
  db.get "SELECT rowid AS id, email, username, realname, roles, authentication_token FROM users WHERE (username=? OR email=?) AND password=?", params.login, params.login, params.password, (err, row) ->
    if row
      req.session.user = row
      res.status(200).json(user: row)
    else
      res.status(401).json(null)

app.delete '/users/sign_out', (req, res) ->
  req.session = null
  res.status(200).json(null)
# End of Sign In/Out

# Account Management
app.put '/v1/password', (req, res) ->
  params = req.body.password

  userHandler.findByIdWithSecret req.session.user.id, (user) ->
    if userHandler.updatePassword(user, params.current_password, params.password, params.password_confirmation)
      res.status(200).json(null)
    else
      res.status(422).json(null)
# End of Account Management

# User Management
app.get '/v1/users', (req, res) ->
  db.all "SELECT rowid AS id, email, username, realname, roles FROM users", (err, rows) ->
    res.json(users: rows)

app.get '/v1/users/:id', (req, res) ->
  userHandler.findById req.params.id, (user) ->
    res.json(user: user)

app.post '/v1/users', (req, res) ->
  user_params = req.body.user
  db.run "INSERT INTO users VALUES (?, ?, ?, ?, ?, ?)", user_params.email, user_params.username, user_params.realname, user_params.password, new jssha(user_params.username, 'TEXT').getHash('SHA-1', 'HEX'), user_params.roles, ->
    userHandler.findById @lastID, (user) ->
      res.status(201).json(user: user)

app.put '/v1/users/:id', (req, res) ->
  user_params = req.body.user

  if user_params.password
    sql = "UPDATE users SET email=?, realname=?, password=?, roles=? WHERE rowid=?"
    db.run sql, user_params.email, user_params.realname, user_params.password, user_params.roles, req.params.id, (err, row) ->
      userHandler.findById req.params.id, (user) ->
        res.status(200).json(user: row)
  else
    sql = "UPDATE users SET email=?, realname=?, roles=? WHERE rowid=?"
    db.run sql, user_params.email, user_params.realname, user_params.roles, req.params.id, (err, row) ->
      userHandler.findById req.params.id, (user) ->
        res.status(200).json(user: row)

app.delete '/v1/users/:id', (req, res) ->
  db.get "DELETE FROM users WHERE rowid=?", req.params.id, (err, row) ->
    res.status(204).json(null)
# End of User Management

app.listen(8000)
console.log('Listening on port 8000')
