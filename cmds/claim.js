module.exports.run = async (bot, message, args,) => {
    let VC = message.member.voiceChannel;
    let user = message.mentions.users.first() 
    //let ow = message.channel.permissionOverwrites.get(message.author.id)
    if (message.channel.name !== "《setting-rooms》")
    return message.reply("Gunakan Di 《setting-rooms》");

    if(VC.permissionsFor(message.author).has('MANAGE_CHANNELS')) {
        return message.reply("You are owner this channel !")
    } else{
        VC.overwritePermissions(message.author, {
          
            MANAGE_CHANNELS: true
        })
        message.reply(`Successfully to give owner this channel to you !`)
    }

};
