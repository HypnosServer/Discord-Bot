const Discord = require('discord.js')
const editJsonFile = require("edit-json-file");
const path = require('path')

module.exports.run = (client, msg, args, config) =>{
    let file = editJsonFile(path.join(__dirname + "../../../location.json"))
    if(!args[0]){
        let prettyLocationsOW = []
        let prettyLocationsNETHER = []
        let prettyLocationsEND = []
        for(i in file.get()){
            if(file.get()[i].dimension == "ow"){
                prettyLocationsOW.push(`**${file.get()[i].name}** | X: ${file.get()[i].x} | Z: ${file.get()[i].z}`)
            } else if(file.get()[i].dimension == "nether"){
                prettyLocationsNETHER.push(`**${file.get()[i].name}** | X: ${file.get()[i].x} | Z: ${file.get()[i].z}`)
            } else if(file.get()[i].dimension == "end"){
                prettyLocationsEND.push(`**${file.get()[i].name}** | X: ${file.get()[i].x} | Z: ${file.get()[i].z}`)
            }
        }
        let embed = new Discord.MessageEmbed()
        .setTitle("Hypnos SMP locations")
        .addField("OW",prettyLocationsOW.join("\n"))
        .addField("Nether",prettyLocationsNETHER.join("\n"))
        .addField("End",prettyLocationsEND.join("\n"))
        .setColor(config.color)
        .setFooter(config.footer)
        msg.channel.send(embed)
    } else if(args[0] == "add"){
        if(file.get()[args[1]]) return msg.channel.send("Location already exits!")
        if(!args[1]) return msg.channel.send("Missing name")
        if(!args[2]) return msg.channel.send("Missing x cords")
        if(!args[3]) return msg.channel.send("Missing z cords")
        if(!args[4]) return msg.channel.send("Missing dimension")
        if(args[5]) return msg.channel.send("Too many args")
        if(args[4] != "ow" && args[4] != "nether" && args[4] != "end") return msg.channel.send("Make sure dimension is either: ``ow`` | ``nether`` | ``end``")

        file.set(args[1], {"name": args[1], "x": args[2], "z": args[3], "dimension": args[4]})
        file.save()
        msg.channel.send("Set the location!")
    } else if(args[0] == "remove"){
        if(!args[1]) return msg.channel.send("Missing location to remove")
        file.unset(args[1], undefined)
        file.save()
        msg.channel.send("Deleted the location: " + args[1])
    } else if(args[0] == "update"){
        if(!args[1]) return msg.channel.send("Missing location")
        if(!args[2]) return msg.channel.send("Missing x cords")
        if(!args[3]) return msg.channel.send("Missing z cords")
        if(!args[4]) return msg.channel.send("Missing dimension")
        if(args[5]) return msg.channel.send("Too many args")
        if(args[4] != "ow" || args[4] != "nether" || args[4] != "end") return msg.channel.send("Make sure dimension is either: ``ow`` | ``nether`` | ``end``")

        file.set(args[1], {"name": args[1], "x": args[2], "z": args[3], "dimension": args[4]})
        file.save()
        msg.channel.send("Updated the location!")

        msg.channel.send("Deleted the location: " + args[1])
    }
}

exports.help = {
    name:"location",
    usage:"location <add|remove|update>",
    desc: "Get/add/remove/update locations from the server",
    group: "member",
    adminOnly: false,
    memberOnly: true,
    example: "location add ftl 250 250"
}