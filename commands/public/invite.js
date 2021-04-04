const Discord = require('discord.js')
module.exports.run = (client, msg, args, config) =>{
    const embed = new Discord.MessageEmbed()
    .setTitle('Invite for the hypnos Discord server')
    .setDescription('[Link](https://discord.gg/BKadJsM) \nCode: BKadJsM \nFull url: https://discord.gg/BKadJsM')
    .setFooter(config.footer)
    .setColor(config.color)
    msg.channel.send(embed)
}

exports.help = {
    name:"invite",
    usage:"invite",
    desc: "Sends invite for the discord",
    group: "public",
    adminOnly: false,
    memberOnly: false,
    example: "invite"
}