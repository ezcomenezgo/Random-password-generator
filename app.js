// require related modules in the project
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generatePassword = require('./generate_password')
const port = 3000

// setting template engine in express
// 第二個參數為express-handlebars的設定
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting route
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body
  const password = generatePassword(option)
  res.render('index', { password: password, option: option })
})

// start and listening server
app.listen(port, () => {
  console.log(`The password generator is running on http://localhost/:${port}`)
})