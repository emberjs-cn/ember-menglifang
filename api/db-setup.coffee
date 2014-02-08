sqlite3 = require('sqlite3').verbose()
db = new sqlite3.Database('db.sqlite3')
jssha = require("jssha")

db.serialize ->
  db.run("DROP TABLE IF EXISTS users")

  db.run("CREATE TABLE users (email TEXT, username TEXT, realname TEXT, password TEXT, authentication_token TEXT, roles TEXT)")

  db.run("INSERT INTO users VALUES ('admin@example.com', 'admin', 'Admin', '12345678', ?, 'admin')", new jssha('Admin', 'TEXT').getHash('SHA-1', 'HEX'))
  for i in [2..30]
    db.run("INSERT INTO users VALUES ('user-#{i}@example.com', 'user-#{i}', 'User #{i}', '12345678', ?, 'user')", new jssha("User #{i}", 'TEXT').getHash('SHA-1', 'HEX'))

db.close()
