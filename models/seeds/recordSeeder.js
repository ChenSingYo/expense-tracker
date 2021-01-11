const Record = require('../record')
const db = require('../../config/mongoose')

db.once('open', () => {
  const promises = []
  promises.push(
    Record.create(
      {
        name: 'buy lunch',
        category: '餐飲食品',
        date: '2020-11-08',
        amount: 100,
        icon: '<i class="fas fa-utensils"></i>'
      },
      {
        name: 'go to gym',
        category: '休閒娛樂',
        date: '2020-11-06',
        amount: 200,
        icon: '<i class="fas fa-grin-beam"></i>'
      },
      {
        name: 'take bus',
        category: '交通出行',
        date: '2020-11-05',
        amount: 15,
        icon: '<i class="fas fa-shuttle-van"></i>'
      },
      {
        name: 'paying rental fee',
        category: '家居物業',
        date: '2020-11-05',
        amount: 28000,
        icon: '<i class="fas fa-home"></i>'
      },
      {
        name: 'taking lession',
        category: '其他',
        date: '2020-11-03',
        amount: 1990,
        icon: '<i class="fas fa-pen"></i>'
      }
    )
  )
  Promise.all(promises).then(() => {
    console.log('getting record seeds.')
    db.close()
  })
})
