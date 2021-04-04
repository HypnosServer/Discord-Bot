const Discord = require('discord.js')
module.exports.run = (client, msg, args, config) =>{
    const calc = require('math-expression-evaluator')
    if (msg.channel.id == 641509498573422602) {
        try {
            msg.channel.send(calc.lex(args).toPostfix().postfixEval())
        } catch {
            msg.channel.send("An error occured you lazy jerk")
        }
    }else {
        try{
            let embed = new Discord.MessageEmbed()
                .setTitle("Math machine")
                .addField("Question", args.join(" "))
                .addField("Answer", calc.lex(args.join(" ")).toPostfix().postfixEval() + '')
                .setFooter(config.footer)
                .setColor(config.color)
            msg.channel.send(embed)
        }catch{
            msg.channel.send("An error occured  :pleading_face: :point_right: :point_left:")
        }
    }
}

exports.help = {
    name:"math",
    usage:"math (question)",
    desc: "Does the math for you!",
    group: "punlic",
    adminOnly: false,
    memberOnly: false,
    example: "math 2+2"
}