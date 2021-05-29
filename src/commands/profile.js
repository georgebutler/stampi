module.exports = {
  name: '*profile',
  description: 'Displays the profile of the mentioned user.',
  execute (msg, args) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first()

      msg.channel.send(`${taggedUser.username}`)
    } else {
      msg.reply('User not found.')
    }
  }
}
