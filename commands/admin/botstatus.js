const Discord = require('discord.js')
const fs = require('fs')
const jsonedit = require("edit-json-file");

module.exports.run = (client, msg, args, config) =>{
    if(!args.length > 0) return msg.channel.send("You have to specify a status you fucking monkey")
    let file = jsonedit(`${config.ServerPath}/config.json`);
    client.user.setPresence({ activity: { name: args.join(" ")}, status: 'online'});
    msg.channel.send("Set the status to " + args.join(" "))
    file.set("status", args.join(" ")).save()
}

exports.help = {
    name:"botstatus",
    usage:"botstatus [status]",
    desc: "set the status of the bot",
    group: "admin",
    adminOnly: true,
    memberOnly: false,
    example: "botstatus bruh moment"
}