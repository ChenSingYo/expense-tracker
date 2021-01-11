// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Data model
const Category = require('../../models/category')
const Record = require('../../models/record')

// main page route
router.get('/', (req, res) => {
  const sortBy = req.query.sort
  Category.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(Categories => {
      let records = null
      if (sortBy === 'all' || sortBy === undefined) { // 若類別項目為'all'，或是初始畫面（undefined）
        records = Record.find()
          .lean()
          .sort({ _id: 'desc' })
      } else {
        records = Record.find({ category: `${sortBy}` }) // 用特定類別做為條件，去找尋record資料庫中的紀錄
          .lean()
          .sort({ _id: 'desc' })
      }
      records.then(records => {
        let totalAmount = 0
        const formatter = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 })
        records.forEach(record => {
          totalAmount += record.amount
          record.amount = formatter.format(record.amount)
        })
        totalAmount = formatter.format(totalAmount)
        res.render('index', { records, totalAmount, Categories, sortBy })
      })
        .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
})

module.exports = router
