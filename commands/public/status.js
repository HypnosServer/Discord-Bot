const Discord = require('discord.js')
const util = require('minecraft-server-util')
module.exports.run = (client, msg, args, config) =>{
    util.status(args[0]).then((response) => {
        let players = []
        for (user in response.samplePlayers){
            players.push(response.samplePlayers[user].name)
        }
        const embed = new Discord.MessageEmbed()
        .addField("Online players",response.onlinePlayers)
        .addField("Players", players.join("\n"))
        .setTitle("Online players on: " + args[0])
        .setDescription(response.description.descriptionText + " ")
        .setFooter(config.footer)
        .setColor(config.color)
        msg.channel.send(embed)

    }).catch((error) => {
        msg.channel.send("offline")
        console.log(error)
    });
}

exports.help = {
    name:"status",
    usage:"status [ip]",
    desc: "Get the online players of any sever",
    group: "public",
    adminOnly: false,
    memberOnly: false,
    example: "status mc.hypixel.net"
}