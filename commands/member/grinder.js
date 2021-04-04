const Discord = require('discord.js')
module.exports.run = (client, msg, args, config) =>{
    if(msg.member.roles.cache.has(config.grinderRole)){
        msg.member.roles.remove(config.grinderRole)
        msg.channel.send("Gave you the grinder role!")
    } else {
        msg.member.roles.add(config.grinderRole)
        msg.channel.send("Removed the grinder role for you!")
    }
}

exports.help = {
    name:"grinder",
    usage:"grinder",
    desc: "Gives/removes the grinder role",
    group: "member",
    adminOnly: false,
    memberOnly: true,
    example: "grinder"
}