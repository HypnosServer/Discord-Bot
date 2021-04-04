const Discord = require('discord.js')
const util = require('minecraft-server-util')
const fs = require('fs')

module.exports.run = (client, msg, args, config) =>{
    if (args[0] == "list") {
        try {
            opsJSON = JSON.parse(fs.readFileSync(config.ServerPath + `/${args[1]}/ops.json`));
            ops = []
            for (i=0;i<opsJSON.length;i++) {
                ops.push(opsJSON[i].name);
            }
            let embed = new Discord.MessageEmbed()
                .setTitle("OP list: " + args[1])
                .setDescription(ops.join("\n").toString().replace("/_/g", "\\_")).replace(/_/g,"\\_")
                .setColor(config.color)
                .setFooter(config.footer)
            msg.channel.send(embed)
            return;
        } catch (err ){
            msg.channel.send("**Error Occured:** " + err[6] + " | " + config.ServerPath + `/${args[1]}/ops.json`)
            return;
        }
    }
    try {
        let server = 0;
        switch (args[1]) {
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
        //prevents people from oping themselves on smp
        if (args[0] !== 25565) {
            const client = new util.RCON(config.host, { port: parseInt(server), password: config.cmppass});
            client.connect()
                .then(async () => {
                    //checks if you want to deop a player
                    let message
                    let response
                    if (args[0] === "give") {
                        message = `op ${args[2]}`
                        response = `${args[2]} was given op`
                    }
                    else if (args[0] === "remove") {
                        message = `deop ${args[2]}`
                        response = `${args[2]} was deopped`
                    }
                    else {
                        msg.channel.send("Use give or remove to grant or remove the op from a player")
                        return;
                    }
                    await client.run(message);
                    await client.close();
                    msg.channel.send(response)
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
    name:"op",
    usage:"op [inGameName] [serverName]",
    desc: "op people on a server with this command",
    group: "admin",
    adminOnly: true,
    memberOnly: false,
    example: "op remove NotCreative_ cmp, op give NotCreative_ manual 25563"
}
