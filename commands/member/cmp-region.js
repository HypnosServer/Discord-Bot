const Discord = require('discord.js')
const fs = require('fs')
const path = require('path')
module.exports.run = (client, msg, args, config) =>{
    if(args[0] == "ow"){
        let filepath = path.join(config.ServerPath + "/cmp/" + config.cmpWorldName + "/region/" + args[1] + ".mca")
        if(fs.existsSync(filepath) == true){
            let attachment = new Discord.MessageAttachment(fs.readFileSync(filepath), filepath)
            msg.channel.send("Here is the region", attachment)
        } else {
            msg.channel.send("Cant find that region in that dimention")
        }
    } else if(args[0] == "nether"){
        let filepath = path.join(config.ServerPath + "/cmp/" + config.cmpWorldName + "/DIM-1/region/" + args[1] + ".mca")
        if(fs.existsSync(filepath) == true){
            let attachment = new Discord.MessageAttachment(fs.readFileSync(filepath), filepath)
            msg.channel.send("Here is the region", attachment)
        } else {
            msg.channel.send("Cant find that region in that dimention")
        }
    } else if(args[0] == "end"){
        let filepath = path.join(config.ServerPath + "/cmp/" + config.cmpWorldName + "/DIM1/region/" + args[1] + ".mca")
        if(fs.existsSync(filepath) == true){
            let attachment = new Discord.MessageAttachment(fs.readFileSync(filepath), filepath)
            msg.channel.send("Here is the region", attachment)
        } else {
            msg.channel.send("Cant find that region in that dimention")
        }
    }
}

exports.help = {
    name:"cmp-region",
    usage:"cmp-region [region]",
    desc: "Send the specified region file",
    group: "member",
    adminOnly: false,
    memberOnly: true,
    example: "cmp-region r.0.0"
}
