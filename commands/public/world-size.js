const Discord = require('discord.js')
const fs = require('fs')
const path = require('path')
const getSize = require('get-folder-size');
module.exports.run = (client, msg, args, config) =>{
    getSize(path.join(config.ServerPath + "/smp/" + config.WorldName), function(err, size) {
        if (err) { throw err; }

        let embed = new Discord.MessageEmbed()
        .setTitle("Hypnos SMP world size")
        .addField("Bytes", size)
        .addField("MB", (size / 1024 / 1024).toFixed(2) + "MB")
        .addField("GB", (size / 1024 / 1024 / 1000).toFixed(2) + "GB")
        .setFooter(config.footer)
        .setColor(config.color)
        msg.channel.send(embed)
    });
}

exports.help = {
    name:"world-size",
    usage:"world-size",
    desc: "It shows the world size of the Hypnos SMP",
    group: "public",
    adminOnly: false,
    memberOnly: false,
    example: "world-size"
}