const Discord = require('discord.js')
const fs = require('fs')

module.exports.run = (client, msg, args, config) =>{
    let backups = []
    fs.readdirSync("/hypnos/backups").forEach(i => {
        // epic formatting code!
        backups.push((((i.substring(15,i.length-3)).replace("-", " ")).replace("_", " ").replace(".", ":")) + " EST")
    })
    msg.channel.send(backups)
}

exports.help = {
    name:"backup-list",
    usage:"backup-list",
    desc: "list backups",
    group: "member",
    adminOnly: false,
    memberOnly: false,
    example: "backup-list"
}