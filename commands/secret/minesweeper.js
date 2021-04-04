const Discord = require('discord.js')
module.exports.run = (client, msg, args, config) =>{
    const Minesweeper1 = require('discord.js-minesweeper');
     
    const minesweeper = new Minesweeper1();
    msg.channel.send(minesweeper.start())
}

exports.help = {
    name:"minesweeper",
    usage:"minesweeper",
    desc: "minesweeper is very pog",
    group: "secret",
    adminOnly: false,
    memberOnly: false,
    example: "minesweeper"
}