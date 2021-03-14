const Discord = require("discord.js")

module.exports = {
    name: "skip",
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(new Discord.MessageEmbed().setDescription(`${client.emotes.error} | There is nothing in the queue right now!`).setTimestamp().setColor("RED"))
        try {
            client.distube.skip(message)
            message.channel.send(new Discord.MessageEmbed().setDescription(`${client.emotes.success} | Skipped! Now playing:\n${queue.songs[0].name}`).setTimestamp().setColor("RED"))
        } catch (e) {
            message.channel.send(new Discord.MessageEmbed().setDescription(`${client.emotes.error} | ${e}`).setTimestamp().setColor("RED"))
        }
    }
}