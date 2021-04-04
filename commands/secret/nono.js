const Discord = require('discord.js')
module.exports.run = (client, msg, args, config) =>{
    msg.channel.send("shh")
}

exports.help = {
    name:"nono",
    usage:"nono",
    desc: "nothing.. shhh",
    group: "secret",
    adminOnly: false,
    memberOnly: false,
    example: "nono"
}