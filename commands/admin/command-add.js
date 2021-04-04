const request = require("request")
const Discord = require('discord.js')
const fs = require('fs')
module.exports.run = async(client, msg, args, config) =>{
    let attachment = msg.attachments.array()
    if(!attachment.length > 0) return msg.channel.send("You have to send it with a file you dum dum. You less than 2 braincell man.")
    let filepath = config.ServerPath + "/temp/" + Object.values(attachment[0])[1]
    await request.get(Object.values(attachment[0])[0])
    .on('error', console.error)
    .pipe(fs.createWriteStream(config.ServerPath + "/temp/" + Object.values(attachment[0])[1]));
    
    setTimeout(async() => {
        await client.commands.set(Object.values(attachment[0])[1].slice(0,-3), require(filepath))
        let commandHelp = client.commands.get(Object.values(attachment[0])[1].slice(0,-3)).help
        fs.renameSync(filepath, `${config.ServerPath}/commands/${commandHelp.group}/${Object.values(attachment[0])[1]}`, function (err) {
            if (err) throw err
        })
        msg.channel.send("Added the command! To use it do ``" + config.prefix + commandHelp.usage + "``" + `\n${client.commands.size} currently loaded commands`)
    }, 2000);
}

exports.help = {
    name:"command-add",
    usage:"command-add",
    desc: "Add a command for the bot with a file embed",
    group: "admin",
    adminOnly: true,
    memberOnly: false,
    example: "commmand-add (file embeded)"
}