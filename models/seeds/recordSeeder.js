const Record = require('../record')
const Category = require('../category')
const db = require('../../config/mongoose')

function createRecords () {
  Category.find()
    .then(categories => {
      const categoriesId = []
      categories.forEach(category => {
        categoriesId.push(category._id)
      })
      return categoriesId
    })
    .then(categoriesId => {
      for (let i = 0; i < 5; i++) {
        Record.create({
          name: `record-${i}`,
          category: categoriesId[i],
          date: `2021-01-0${i + 1}`,
          amount: (i + 1) * 1000
        })
          .then(record => {
            Category.findById(categoriesId[i])
              .then(category => {
                category.records.push(record._id)
                category.save()
              })
          })
      }
    })
    .catch(error => console.error(error))
}

db.once('open', () => {
  createRecords()
  console.log('getting recordSeeder!')
})
