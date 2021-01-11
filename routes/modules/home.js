// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Data model
const Category = require('../../models/category')
const Record = require('../../models/record')

// main page route
router.get('/', (req, res) => {
  const sortBy = req.query.sort // 取得表單提交的類別項目
  Category.find() // 搜尋category資料庫
    .lean()
    .sort({ _id: 'asc' }) // 按照id排序
    .then(Categories => { // 預備搜尋到的類別項目
      let records = null
      if (sortBy === 'all' || sortBy === undefined) { // 若類別項目為''
        records = Record.find() // 用特定類別做為條件，去找尋record資料庫中的紀錄
          .lean()
          .sort({ _id: 'desc' }) // 按照id排序
      } else {
        records = Record.find({ category: `${sortBy}` }) // 用特定類別做為條件，去找尋record資料庫中的紀錄
          .lean()
          .sort({ _id: 'desc' }) // 按照id排序
      }
      records.then(records => { // 將每筆record
        let totalAmount = 0 // 設定總金額變數為零
        records.forEach(record => { totalAmount += record.amount }) // 將每筆record中的金額放進總金額變數
        res.render('index', { records, totalAmount, Categories, sortBy }) // 在index頁面中放進四個變數做渲染
      })
        .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
})

module.exports = router
