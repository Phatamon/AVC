module.exports.run = async (bot, message, args,) => {
    let VC = message.member.voiceChannel;
    let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);
    //let ow = message.channel.permissionOverwrites.get(message.author.id)
    if (message.channel.name !== "《setting-rooms》")
    return message.reply("Gunakan Di 《setting-rooms》");
       // V//C.overwritePermissions(message.guild.roles.find('name', '@everyone'), {
            //'CONNECT': false
       // });   
if(VC.permissionsFor(message.author).has('MANAGE_CHANNELS')) {
       rMember.setVoiceChannel(null)
        return message.reply(`Successfully kick ${rMember} from your channel`)
    } else{
    // if(message.channel.permissionsFor(message.author).has('MANAGE_CHANNELS')=== true) 
     return message.reply("Only owner channel can use this command") 

    }
    
}
