express = require('express')
app = express()

app.configure ->
  app.use(express.static(__dirname + '/public'))

app.get '/hello.txt', (req, res) ->
  res.send('Hello World')

app.listen(3000)
console.log('Listening on port 3000')
