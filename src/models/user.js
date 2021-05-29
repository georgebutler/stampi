const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  discordID: {
    type: String,
    required: true
  },
  stamps: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Stamp'
    }
  ]
})

module.exports = mongoose.model('User', UserSchema)
