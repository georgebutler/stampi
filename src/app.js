require('dotenv').config()

const mongoose = require('mongoose')
const discord = require('discord.js')
const client = new discord.Client()
client.commands = new discord.Collection()
const commands = require('./commands')

// const User = require('./models/User')
// const Stamp = require('./models/Stamp')

mongoose.connect('mongodb://localhost:27017/stampi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

Object.keys(commands).map(key => {
  return client.commands.set(commands[key].name, commands[key])
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', (msg) => {
  const args = msg.content.split(/ +/)
  const command = args.shift().toLowerCase()

  if (client.commands.has(command)) {
    try {
      client.commands.get(command).execute(msg, args)
    } catch (error) {
      console.error(error)
      msg.reply('Whoops! Something went wrong!')
    }
  }
})

client.login(`${process.env.TOKEN}`)
