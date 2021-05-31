// const mongoose = require('mongoose')

const User = require('../models/user')
// const Stamp = require('./models/Stamp')

module.exports = {
  name: '*give',
  description: 'Give a stamp to the tagged user.',
  execute (msg, args) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first()
      const stampSymbol = args[1]

      User.findOne({ discordID: taggedUser.id }, function (err, user) {
        if (err) {
          console.log(err)
          msg.reply('Whoops! Something went wrong!')
        } else {
          if (user) {
            msg.reply('I found you! Args: ' + args)

            // Give stamp
          } else {
            User.create({ discordID: taggedUser.id }, function (err, storedUser) {
              if (err) {
                console.log(err)
                msg.reply('Whoops! Something went wrong!')
              } else {
                // Give stamp
              }
            })

            msg.reply('I didn\'t find you... Args:' + args)
          }
        }
      })
    } else {
      msg.reply('User not found.')
    }
  }
}
