const mongoose = require('mongoose')

const StampSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('Stamp', StampSchema)
