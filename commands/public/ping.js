const Discord = require('discord.js')
module.exports.run = (client, msg, args, config) =>{
    let embed = new Discord.MessageEmbed()
    .setTitle("Ping")
    .addField("Client latency", `${msg.createdTimestamp - Date.now()} ms`)
    .addField("API Latency", `${Math.round(client.ws.ping)} ms`)
    .setFooter(config.footer)
    .setColor(config.color)
    msg.channel.send(embed)
}

exports.help = {
    name:"ping",
    usage:"ping",
    desc: "Shows the ping of the bot.",
    group: "public",
    adminOnly: false,
    memberOnly: false,
    example: "ping"
}