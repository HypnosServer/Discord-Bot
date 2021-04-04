const Discord = require('discord.js')
const countdown = require('countdown')
module.exports.run = (client, msg, args, config) =>{
    let embed = new Discord.MessageEmbed()
        .setTitle("Hypnos Info")
        .addField("Imgur", "https://imgur.com/a/9sHzeGY")
        .addField("website", "http://hypnos.ws")
        .addField("logos", "coming soontm")
        .addField("Invite", "https://discord.gg/BKadJsM")
        .setFooter(config.footer)
        .setColor(config.color)
    msg.author.send(embed)
}

exports.help = {
    name:"info",
    usage:"info",
    desc: "dms information about the server",
    group: "member",
    adminOnly: false,
    memberOnly: true,
    example: "info"
}