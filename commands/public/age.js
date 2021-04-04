const Discord = require('discord.js')
const countdown = require('countdown')
module.exports.run = (client, msg, args, config) =>{

    const embed = new Discord.MessageEmbed()
    .setTitle("Server age")
    .addField("Years", countdown( new Date( 1569559890000 ) ).toString())
    .setColor(config.color)
    .setFooter(config.footer)
    msg.channel.send(embed)
}

exports.help = {
    name:"age",
    usage:"age",
    desc: "Shows the time since Hypnos started",
    group: "public",
    adminOnly: false,
    memberOnly: false,
    example: "age"
}