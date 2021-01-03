const db = require('../../config/mongoose')
const Category = require('../category')
const categories = [
  ['家居物業', 'fa-home'],
  ['交通出行', 'fa-shuttle-van'],
  ['休閒娛樂', 'fa-grin-beam'],
  ['餐飲食品', 'fa-utensils'],
  ['其他', 'fa-pen']
].map(category => ({
  title: category[0],
  icon: `<i class="fas ${category[1]}"></i>`
}))

db.once('open', () => {
  Category.create(categories)
    .then(() => {
      db.close()
    })
  console.log('getting categorySeeder!')
})
