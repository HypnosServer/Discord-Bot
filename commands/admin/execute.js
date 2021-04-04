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
                server = args[1];
                break;
            default:
                msg.channel.send("Please enter a valid server, cmp, cmp2, or smpcopy. You can use `manual` in place of a server to specify the port.")
                return;
        }
        if (args[0] == "manual") {
            const client = new util.RCON(config.host, { port: parseInt(server), password: config.cmppass});
            client.connect()
                .then(async () => {
                    args.shift(0)
                    args.shift(0)
                    msg.channel.send(args.join(" "))
                    await client.run(`${args.join(" ")}`);
                    await client.close();
                    msg.channel.send(`command: ${args.join(" ")} was executed`)
                })
                .catch((error) => {
                    throw error;
                });
        }
        else {
            const client = new util.RCON(config.host, { port: parseInt(server), password: config.cmppass});
            client.connect()
                .then(async () => {
                    args.shift(0)
                    await client.run(`${args.join(" ")}`);
                    await client.close();
                    msg.channel.send('command: ' + `${args.join(" ")}` + ' was executed')
                })
                .catch((error) => {
                    throw error;
                });
        }
    }catch (err) {
        msg.channel.send("**Error Occured:** " + err[6])
    }
}

exports.help = {
    name:"execute",
    usage:"execute [server] [command] <port>",
    desc: "execute a command on the server over rcon",
    group: "admin",
    adminOnly: true,
    memberOnly: false,
    example: "execute cmp | say hello, execute manual 25565 | say hello"
}