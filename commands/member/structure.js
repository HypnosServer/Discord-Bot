const Discord = require('discord.js')
const fs = require("fs")
module.exports.run = (client, msg, args, config) =>{
    let filepath = args.join(" ").endsWith(".nbt") ? `${config.ServerPath}/cmp/hypnos_cmp/structures/${args.join(" ")}` : `${config.ServerPath}/${config.WorldName}/structures/${args.join(" ")}.nbt`
    if(fs.existsSync(filepath)){
        let attachment = new Discord.MessageAttachment(fs.readFileSync(filepath), filepath)
        msg.channel.send(attachment)
    } else {
        msg.channel.send("Cant find that one buddy")
    }
}

exports.help = {
    name:"structure",
    usage:"structure <name>",
    desc: "Get a structure file from cmp",
    group: "member",
    adminOnly: false,
    memberOnly: true,
    example: "structure ftl42069"
}