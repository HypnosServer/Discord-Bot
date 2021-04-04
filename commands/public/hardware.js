const Discord = require('discord.js')
module.exports.run = (client, msg, args, config) =>{
    let embed = new Discord.MessageEmbed()
        .setTitle('Hypnos Server Hardware')
        .addField("Hypnos Main Server", "⠀")
        .addField("CPU", "Ryzen 5 5600x", true)
        .addField("RAM", "16GB DDR4 3600mhz", true)
        .addField("Drive(s)", "480GB SSD", true)
        .addField("GPU", "epic gpu i found on the floor", true)
        .addField("⠀", "⠀")
        .addField("Hypnos Secondary Server", "⠀")
        .addField("CPU", "Xeon 1245 V3", true)
        .addField("RAM", "16GB DDR3 1333mhz", true)
        .addField("Drive(s)", "2x 500GB HDD", true)
        .addField("GPU", "powerful intel igpu", true)
        .addField("⠀", "⠀")
        .addField("Hypnos Offsite/web Server","⠀")
        .addField("CPU", "Celeron J1900", true)
        .addField("RAM", "4GB DDR3L 1333mhz", true)
        .addField("Drive(s)", "500GB HDD", true)
        .addField("GPU", "crazy fast igpu", true)
        .setFooter(config.footer)
        .setColor(config.color)
    msg.channel.send(embed)
}

exports.help = {
    name:"hardware",
    usage:"hardware",
    desc: "Shows the various server hardwares",
    group: "public",
    adminOnly: false,
    memberOnly: false,
    example: "hardware"
}