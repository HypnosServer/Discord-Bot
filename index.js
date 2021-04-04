//Defines Discord and client
const Discord = require('discord.js')
const client = new Discord.Client()
client.commands = new Discord.Collection()

//Defines config file to a value
const fs = require('fs')
const config = JSON.parse(fs.readFileSync("./config.json"))

// Command Handler
fs.readdirSync("./commands").forEach(folders => {
    fs.readdirSync(`./commands/${folders}`).forEach(i => { 
        if (!i.endsWith(".js")) return;
        let commandFile = i.split(".")[0].trim()
        client.commands.set(commandFile, require(`./commands/${folders}/${commandFile}.js`))
    })
})
console.log(`Loaded ${client.commands.size} commands.`)

//When bot is up and running it just logs it to console
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ activity: { name: config.botstatus}, status: 'online'});
})

client.on('message', msg => {
    //Returns if msg doesn't start with prefix
    if(!msg.content.startsWith(config.prefix)) return

    //Declares args and command value
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase()

    if (!client.commands.get(command)) return msg.channel.send("Unable to find the command :sob:")
    if (client.commands.get(command).help.guildOnly && !msg.guild) return msg.send('This command may only be used in a guild!')
    if (client.commands.get(command).help.memberOnly && !msg.member.roles.cache.has(config.memberRole)) return msg.channel.send("This command is only for members :|")
    if (client.commands.get(command).help.adminOnly && !msg.member.roles.cache.has(config.adminRole)) return msg.channel.send("This command is only for admins :|")
    client.commands.get(command).run(client, msg, args, config)
})

//Logs into the bot
client.login(config.token).catch(()=>{
    console.error("Invalid token")
})