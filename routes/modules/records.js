// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Data model
const Category = require('../../models/category')
const Record = require('../../models/record')

// delete new record router
router.delete('/:_id', (req, res) => {
  const id = req.params.id
  Record.findOneAndDelete({ id })
    .then(record => {
      // req.flash('success_msg', `[${record.name}] already deleted!`)
      res.redirect('/')
    })
    .catch(error => console.error(error))
})

// route to 'new' page
router.get('/new', (req, res) => {
  Category.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(categories => res.render('new', { categories }))
    .catch(error => console.error(error))
})

// route to create new data
router.post('/new', (req, res) => {
  const record = req.body
  Category.findOne({ title: record.category })
    .then(category => {
      record.category = category._id
      Record.create(record)
        .then(
          // req.flash('success_msg', `[${record.name}] created successfully!`)
          res.redirect('/')
        )
        .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
})

module.exports = router
