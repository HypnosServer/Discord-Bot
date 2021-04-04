const Discord = require('discord.js')
module.exports.run = (client, msg, args, config) =>{
    msg.channel.send("https://tenor.com/view/among-us-who-asked-gif-18850795")
}

exports.help = {
    name:"nooneasked",
    usage:"nooneasked",
    desc: "Use this to answer to this noboby asked for",
    group: "public",
    adminOnly: false,
    memberOnly: false,
    example: "nooneasked"
}