const Discord = require('discord.js')
module.exports.run = (client, msg, args, config) =>{
    let embed = new Discord.MessageEmbed()
    .setTitle("Website and sub pages")
    .setDescription("[Main site](http://hypnos.ws)\n[About page](http://hypnos.ws/about)\n[Map](http://hypnos.ws/map)")
    .setFooter(config.footer)
    .setColor(config.color)
    msg.channel.send(embed)
}

exports.help = {
    name:"website",
    usage:"website",
    desc: "Gives links for the website",
    group: "public",
    adminOnly: false,
    memberOnly: false,
    example: "website"
}