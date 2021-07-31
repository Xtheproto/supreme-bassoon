const index = require('../index')

var command = index.bot.registerCommand("ping", "Pong!", { // Make a ping command
    // Responds with "Pong!" when someone says "!ping"
        description: "Pong!",
        fullDescription: "This command could be used to check if the bot is up. Or entertainment when you're bored."
})

module.exports = {
    command: command
}