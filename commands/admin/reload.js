const Discord = require('discord.js')
module.exports.run = (client, msg, args, config) =>{
    if(!args[0]) return msg.channel.send("You need to provide a command to reset")
    if(args[1]) return msg.channel.send("Too many args")

    let commmandname = args[0]

    let command = client.commands.get(args[0])

    try{
        delete require.cache[require.resolve(`../../commands/${command.help.group}/${commmandname}.js`)]
        client.commands.delete(commmandname)
        client.commands.set(commmandname, require(`../../commands/${command.help.group}/${commmandname}.js`))
    } catch(e) {
        console.log(e)
        return msg.channel.send("Could not reload that command")
    }

    return msg.channel.send(commmandname + " has been reloaded " + `\n${client.commands.size} currently loaded commands`)
}

exports.help = {
    name:"reload",
    usage:"reload command",
    desc: "Reloads a certain command",
    group: "admin",
    adminOnly: true,
    memberOnly: false,
    example: "reload ping"
}