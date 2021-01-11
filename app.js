const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const methodOverride = require('method-override')
const routes = require('./routes')
const PORT = process.env.PORT || 3000
require('./config/mongoose')

// import handlebars 'is' helper
const helpers = require('handlebars-helpers')()
const helperIs = helpers.is()

// setting view engine use it in main.hbs
app.engine('hbs', exphbs({ helpers: helperIs, defaultLaybout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// use express-req-parser
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

// start and listen on the Express server
app.listen(PORT, () => {
  console.log(`Express is listening on http://localhost:${PORT}`)
})
