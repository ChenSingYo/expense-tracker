const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const app = express()
const port = 3000

mongoose.connect('mongodb://localhost/expense', {
  useNewUrlParser: true,
  useUnifiedTopology: true
  // useFindAndModify: false
})
const db = mongoose.connection
db.on('error', () => { console.log('mongodb error!') })
db.once('open', () => { console.log('mongodb connected!') })

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
