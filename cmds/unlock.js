module.exports.run = async (bot, message, args,) => {
    let VC = message.member.voiceChannel;
    //let ow = message.channel.permissionOverwrites.get(message.author.id)
    if (message.channel.name !== "《setting-rooms》")
    return message.reply("Gunakan Di 《setting-rooms》");
    if(VC.permissionsFor(message.author).has('MANAGE_CHANNELS')) {
        VC.overwritePermissions(message.guild.roles.find('name', '@everyone'), {
            'CONNECT': true
        }); 
        message.reply(`Successfully lock your channels`)
    
       
    } else{
    // if(message.channel.permissionsFor(message.author).has('MANAGE_CHANNELS')=== true) 
     return message.reply("Only owner channel can use this command") 

    }
    
}
