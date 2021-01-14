const db = require('../../config/mongoose')
const Category = require('../category')
const categories = require('./seeds.json').category
categories.map(category => ({
  title: category[0],
  icon: category[1]
}))

db.once('open', () => {
  Category.create(categories)
    .then(() => { db.close() })
    .catch(error => console.log(error))
  console.log('getting category seeds.')
})
