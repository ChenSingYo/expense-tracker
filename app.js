const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
require('./config/mongoose')

// setting view engine use it in main.hbs
app.engine('hbs', exphbs({ defaultLaybout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// use express-req-parser
app.use(express.urlencoded({ extended: true }))

// routes setting
app.get('/', (req, res) => {
  res.render('index')
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
