const Discord = require('discord.js')
const countdown = require('countdown')
module.exports.run = (client, msg, args, config) =>{
    let embed = new Discord.MessageEmbed()
        .setTitle("Hypnos Servers")
        .setDescription('[Check Status](http://hypnos.ws/status)\n')
        .addField("SMP", "lmao")
        .addField("CMP", "lmao")
        .addField("CMP2", "lmao")
        .addField("SMPCopy", "lmao")
        .addField("1.16.5", "lmao")
        .addField("Snapshots", "lmao")
        .addField("SkyBlock", "lmao")
        .addField("amogus", "lmao")
        .setFooter(config.footer)
        .setColor(config.color)
    msg.author.send(embed)
}

exports.help = {
    name:"ip",
    usage:"ip",
    desc: "List ips of various Hypnos servers",
    group: "member",
    adminOnly: false,
    memberOnly: true,
    example: "age"
}