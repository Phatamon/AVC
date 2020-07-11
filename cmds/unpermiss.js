module.exports.run = async (bot, message, args,) => {
    let VC = message.member.voiceChannel;
    let user = message.mentions.users.first() || message.guild.members.get(args[0]);
    //let ow = message.channel.permissionOverwrites.get(message.author.id)
    if (message.channel.name !== "《setting-rooms》")
    return message.reply("Gunakan Di 《setting-rooms》");
    if(message.channel.permissionsFor(message.author).has('MANAGE_CHANNELS')=== true) {
       // V//C.overwritePermissions(message.guild.roles.find('name', '@everyone'), {
            //'CONNECT': false
       // });   

       VC.overwritePermissions(user, {
          
        CONNECT: false
    })
    message.reply(`Successfully to give ${user} permissions`)
    
       
    } else{
    // if(message.channel.permissionsFor(message.author).has('MANAGE_CHANNELS')=== true) 
     return message.channel.send("Only owner channel can use this command") 

    }
    
}