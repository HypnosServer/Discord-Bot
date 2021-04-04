const Discord = require('discord.js')
const util = require('minecraft-server-util');
const fs = require('fs')

module.exports.run = (client, msg, args, config) =>{
    try {
        let server = 0;
        switch (args[0]) {
            case "cmp":
                server = config.cmp;
                break;
            case "cmp2":
                server = config.cmp2;
                break;
            case "smpcopy":
                server = config.smpcopy;
                break;
            case "manual":
                server = args[3];
                break;
            default:
                msg.channel.send("Please enter a valid server, cmp, cmp2, or smpcopy. You can use `manual` in place of a server to specify the port.")
                return;
        }
        const client = new util.RCON(config.host, { port: parseInt(server), password: config.cmppass});
        client.connect()
            .then(async () => {
                await client.run(`scoreboard teams join ${args[2]} ${args[1]}`);
                await client.close();
                msg.channel.send(`${args[1]} was given color ${args[2]} on server ${args[0]}`)
            })
            .catch((error) => {
                throw error;
            });
    }catch (err) {
        msg.channel.send("**Error Occured:** " + err[6])
    }
}

exports.help = {
    name:"color",
    usage:"color [inGameName] [serverName]",
    desc: "Set color for player on a server, you can do `color list serverName` to list the colors for a server",
    group: "admin",
    adminOnly: true,
    memberOnly: false,
    example: "color smp NotCreative_ hazza, color manual NotCreative_ aqua 25563"
}