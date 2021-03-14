const Discord = require("discord.js")

module.exports = {
    name: "help",
    aliases: ["h", "cmd", "command"],
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setTitle("Merq Help Command")
            .setDescription(`**New generation advanced music bot**

            » Prefix: **-**
            » Dil: :flag_us: 
            
            **» Music Commands**
            
            **-play**
            \`Search & Play a Youtube video. Or play music from Youtube video/playlist URL.\`
            **-pause**
            \`Pause/resume the current song.\`
            **-resume**
            \`Just a pause alias.\`
            **-skip**
            \`Skip a number of songs.\`
            **-stop**
            \`Stop a number of songs.\`
            **-volume**
            \`Change volume.\`
            **-queue**
            \`Show the server's queue.\`
            **-repeat**
            \`Change repeat mode to the entire queue or only the playing song.\`
            **-filter**
            \`List all available audio filters.\`

            **» Filters Commands (6)**
            \`3d\`
            \`bassboost\`
            \`echo\`
            \`karaoke\`
            \`nightcore\`
            \`vaporwave\`
                `)
            .setTimestamp()
        message.channel.send(embed)
    }
}