'use strict'

const Discord = require('discord.js')

class Bot {
  constructor() {
    return this._startServer()
  }

  _startServer() {
    return new Promise((resolve, reject) => {
      let bot = new Discord.Client({
        disabledEvents: ['TYPING_START'],
        messageCacheMaxSize: 150,
        messageCacheLifetime: 3600
      })

      this._eventHandler(bot, reject)

      return resolve(bot)
    })
  }

  _eventHandler(bot, reject) {
    let start = new Date().getTime()
    bot.on('ready', () => {
      bot.user.setActivity(`${bot.guilds} servers`, { type: "WATCHING"});
      console.log(`Ready to serve on ${bot.guilds.size} servers, for ${bot.users.size} users.`);
    })

    bot.on('error', err => {
      return reject(err)
    })
  }
}

module.exports = Bot