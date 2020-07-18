const Discord = require("discord.js");
const {inspect} = require ("util");
const ownerid = "670923597082263553";

module.exports.run = async (bot, message, args) => {
        if(message.author.id == ownerid)  {
            let toEval = args.join(" ");
            let evaluated = inspect(eval(toEval, { depth: 0 } ))
            try {
                if(toEval) {
                     let hrStart = process.hrtime()
                     let hrDiff;
                     hrDiff = process.hrtime(hrStart)
                  
                     let embed = new Discord.RichEmbed()
                     .setAuthor("Evaluate")
                     .addField(":inbox_tray: Input",` \`${toEval}\` `)
                     .addField(":outbox_tray: Output", `*Executed in ${hrDiff[0] > 0? `${hrDiff[0]}s` : ``}${hrDiff[1] / 1000000000}ms.*\`\`\`javascript\n${evaluated}\n\`\`\` ` )
                     .setColor("RANDOM");
                     return message.channel.send(embed)
                  
                     //return message.channel.send(`*Executed in ${hrDiff[0] > 0? `${hrDiff[0]}s` : ``}${hrDiff[1] / 1000000000}ms.*\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900})
                } else {
                   //message.channel.send("Error whilst evaluating: `cannot evaluated air`")
                  const embed = new Discord.RichEmbed()
                   .setAuthor("Evaluate")
                   .addField(":inbox_tray: **Input**", ` \`js\` `)
                   .addField(":outbox_tray: **Output**", ` \`js\` `)
                   .setColor("RANDOM");
                  message.channel.send(embed);
                }
            } catch(e) {
                message.channel.send(`Error whilst evaluating: \`${e.message}\``)
            }
        } else {
           return message.reply(" you dont have permission to use this command.").then(m => m.delete(10000))
        }
    
   }

module.exports.help = {
  name:"eval"
}
