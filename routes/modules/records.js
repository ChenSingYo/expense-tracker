// import Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// import Data model
const Categories = require('../../models/category')
const Record = require('../../models/record')

// route to create new data
router.post('/new', (req, res) => {
  const newRecord = req.body
  Categories.find({ title: `${newRecord.category}` })
    .lean()
    .then(category => {
      newRecord.icon = `<i class='fas ${category[0].icon}'></i>`
      return Record.create(newRecord)
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// Set route to edit record
router.get('/:_id/edit', (req, res) => {
  const { _id } = req.params
  Record.findOne({ _id })
    .lean()
    .then(record => {
      Categories.find({ title: { $ne: record.category } }) // filter out previously selected option
        .lean()
        .sort({ _id: 'asc' })
        .then(categories => res.render('edit', { record, categories }))
        .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
})

// Set route to put edited record
router.put('/:_id', (req, res) => {
  const { _id } = req.params
  const update = req.body
  Categories.findOne({ title: update.category })
    .lean()
    .then(category => {
      update.icon = `<i class='fas ${category.icon}'></i>`
      Record.findOneAndUpdate({ _id }, update, { new: true })
        .then(() => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
})

// delete record router
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})

module.exports = router
