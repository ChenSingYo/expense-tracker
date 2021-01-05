// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Data model
// const Category = require('../../models/category')
const Record = require('../../models/record')

// delete new record router
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
