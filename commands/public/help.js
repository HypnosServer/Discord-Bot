const Discord = require('discord.js')
module.exports.run = (client, msg, args, config) =>{
    let array = ["member", "admin", "public", "secret"]
    if(args.length < 1){
        //Shows all categories
        let embed = new Discord.MessageEmbed()
        .setTitle("Hypnos help command")
        .setDescription(`The hypnos bot has 3 categories.
        \`\`${config.prefix}help public\`\` **>>** Shows all commands that everyone can use
        \`\`${config.prefix}help member\`\` **>>** Shows all commands that only members can use
        \`\`${config.prefix}help admin\`\` **>>** Shows all commands that only admins can use`)
        .setColor(config.color)
        .setFooter(config.footer)
        msg.channel.send(embed)
    } else if(array.includes(args[0])){
        //Shows specific category
        const commands = client.commands.filter(obj => obj.help.group === args[0])
        let commandsThingy = []
        
        commands.map(i => {
            commandsThingy.push(`\`\`${config.prefix}${i.help.usage}\`\`  **>>** ${i.help.desc}`)
        })
        
        let embed = new Discord.MessageEmbed()
        .setTitle("Command Catergories")
        .setColor(config.color)
        .setFooter(config.footer)
        .setDescription(`<optinal> [required] \n
        ${commandsThingy.join("\n")}`)
        msg.channel.send(embed)
    } else if (client.commands.get(args[0])){
        //Shows specific command
        let command = client.commands.get(args[0])
        let embed = new Discord.MessageEmbed()
        .setTitle(command.help.name)
        .addField("Group", command.help.group)
        .addField("Description", command.help.desc)
        .addField("Usage", config.prefix + command.help.usage)
        .addField("Example", config.prefix + command.help.example)
        .addField("Member only?", command.help.memberOnly)
        .addField("Admin only?", command.help.adminOnly)
        .setColor(config.color)
        .setFooter(config.footer)
        msg.channel.send(embed)
        return
    }
}

exports.help = {
    name:"help",
    usage:"help <category/command>",
    desc: "Shows all commands",
    group: "public",
    adminOnly: false,
    memberOnly: false,
    example: "help member"
}