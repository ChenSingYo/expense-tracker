const Record = require('../record')
const db = require('../../config/mongoose')

db.once('open', () => {
  const records = require('./seeds.json').record
  const promises = []
  promises.push(
    Record.create(records)
  )
  Promise.all(promises).then(() => {
    console.log('getting record seeds.')
    db.close()
  })
})
