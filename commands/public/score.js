const Discord = require('discord.js')
const fs = require('fs')
const nbt = require('nbt')
module.exports.run = (client, msg, args, config) =>{
    whitelistJSON = JSON.parse(fs.readFileSync(config.ServerPath + '/smp/whitelist.json'));
    whitelist = []
    for (i=0;i<whitelistJSON.length;i++) {
        whitelist.push(whitelistJSON[i].name);
    }

    var data = fs.readFileSync(config.ServerPath + '/smp/' + config.WorldName + "/data/scoreboard.dat");

    try {
        // Read nbt scoreboard file.
        nbt.parse(data, function(error, data) {
            if (error) { throw error; }
            
            // Removes unwhitelisted players unless otherwise specified. Also removes "Total" player if it exists.
            scoreboardData = data.value.data.value;
            
            scoreboard = {};
            scores = scoreboardData.PlayerScores.value.value;
            for (i=0;i<scores.length;i++) {
                if (scores[i].Score.value != 0 && scores[i].Objective.value == args[0] && scores[i].Name.value != 'Total' && (msg.content.split(' ').length > 2 || whitelist.indexOf(scores[i].Name.value) >= 0)) {
                    scoreboard[scores[i].Name.value] = scores[i].Score.value;
                }
            }
            
            
            // Sort the scoreboard
            scoreboard = Object.keys(scoreboard).map(function(key) {
                return [key, scoreboard[key]];
            });
            scoreboard.sort(function(first, second) {
                return second[1] - first[1];
            });
            // Calculate the total
            total = 0;
            for (i=0;i<scoreboard.length;i++) {
                total = total + scoreboard[i][1];
            }
            // Adding the total to the top of the players
            scoreboard.unshift(["Total", total]);
            let players = []
            let scoresForPlayers = []
            let bigPlayers = []
            let bigScoresForPlayers = []

            for(i in scoreboard){
                if(players.join().length > 900 || scoresForPlayers.join().length > 900){
                    bigPlayers.push(players.join("\n"))
                    players = []
                    bigScoresForPlayers.push(scoresForPlayers.join("\n"))
                    scoresForPlayers = []
                }
                players.push(scoreboard[i][0])
                scoresForPlayers.push(scoreboard[i][1])
            }

            let embed = new Discord.MessageEmbed()
            .setTitle("Score: " + args.join(" "))
            .setColor(config.color)
            .setFooter(config.footer)

            if(bigPlayers){
                for(i in bigPlayers){
                    embed
                    .addField("Players", bigPlayers[i].toString().replace(/_/g,"\\_"), true) //replacing _ to \_ to not make it do cursive or underline
                    .addField("Scores", bigScoresForPlayers[i], true)
                    .addField("⠀", "⠀")
                }
                embed
                .addField("Players", players.join("\n").toString().replace(/_/g,"\\_"), true) //replacing _ to \_ to not make it do cursive or underline
                .addField("Scores", scoresForPlayers, true)
            }

            msg.channel.send(embed)
        });
    } catch(err) {
        console.log(err);
    }
}

exports.help = {
    name:"score",
    usage:"score [score]",
    desc: "Shows everyones score of the desired score",
    group: "public",
    adminOnly: false,
    memberOnly: false,
    example: "score digged"
}