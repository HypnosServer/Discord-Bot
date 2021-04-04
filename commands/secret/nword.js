const Discord = require('discord.js')
module.exports.run = (client, msg, args, config) =>{
    msg.channel.send("Ni||ce ca||r")
}

exports.help = {
    name:"nword",
    usage:"nword",
    desc: "nword",
    group: "secret",
    adminOnly: false,
    memberOnly: false,
    example: "nword"
}