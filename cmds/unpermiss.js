module.exports.run = async (bot, message, args,) => {
    let VC = message.member.voiceChannel;
    let user = message.mentions.users.first() || message.guild.members.get(args[0]);
    //let ow = message.channel.permissionOverwrites.get(message.author.id)
    if (message.channel.name !== "《setting-rooms》")
    return message.reply("Gunakan Di 《setting-rooms》");
    if(VC.permissionsFor(message.author).has('MANAGE_CHANNELS')) {
       // V//C.overwritePermissions(message.guild.roles.find('name', '@everyone'), {
            //'CONNECT': false
       // });   

       VC.overwritePermissions(user, {
          
        CONNECT: null
    })
    message.reply(`Successfully to give ${user} permissions`)
    
       
    } else{
    // if(message.channel.permissionsFor(message.author).has('MANAGE_CHANNELS')=== true) 
     return message.reply("Only owner channel can use this command") 

    }
    
}
