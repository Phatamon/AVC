module.exports.run = async (client, message, args,) => {
    let VC = message.member.voiceChannel;
    //let ow = message.channel.permissionOverwrites.get(message.author.id)
    if (message.channel.name !== "《setting-rooms》")
    return message.reply("Gunakan Di 《setting-rooms》");
    if (!message.channel.permissionsFor(message.member).has('MANAGE_CHANNELS')) {
        return message.reply('Only owner channel can use this command');
    } 
        VC.setName(args.join(' '));
        message.reply(`Successfully change channels name to **${args.join(' ')}**`)
    
       
    
    // if(message.channel.permissionsFor(message.author).has('MANAGE_CHANNELS')=== true) 
     //return message.channel.send("Only owner channel can use this command") 

    
    
}