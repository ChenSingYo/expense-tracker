const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    min: [1, 'minimum value is 1'],
    required: true
  },
  icon: {
    type: String
  }
})

module.exports = mongoose.model('Record', recordSchema)
