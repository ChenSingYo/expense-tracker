// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Data model
const Category = require('../../models/category')
const Record = require('../../models/record')

// main page route
router.get('/', (req, res) => {
  Category.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(Categories => {
      Record.find()
        .populate('category')
        .lean()
        .sort({ _id: 'asc' })
        .then(records => {
          let totalAmount = 0
          records.forEach(record => { totalAmount += record.amount })
          res.render('index', { records, totalAmount, Categories })
        })
        .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
})

module.exports = router
