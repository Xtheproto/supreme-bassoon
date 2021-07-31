const Eris = require("eris")
const low = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")
const fs = require('fs')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Initialises the bot variable
var bot = new Eris.CommandClient("INSERT_BOT_TOKEN", {}, {
    description: "Default Discord Bot",
    owner: "Default Bot",
    prefix: "!"
})

// Exports the consts for command use
module.exports = {
    bot: bot,
    db: db
}

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
})

// Gets only .js files from ./commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
// Loops through each of the command files and creates constants
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
}

// Connects the bot to the server
bot.connect();