module.exports.run = async (client, message, args,) => {
    let VC = message.member.voiceChannel;
    //let ow = message.channel.permissionOverwrites.get(message.author.id)
    if (message.channel.name !== "《setting-rooms》")
    return message.reply("Gunakan Di 《setting-rooms》");
   if(VC.permissionsFor(message.author).has('MANAGE_CHANNELS')) {
        VC.setName(args.join(' '));
        message.react("☑");
        
     } else{
    // if(message.channel.permissionsFor(message.author).has('MANAGE_CHANNELS')=== true) 
     return message.reply("Hanya owner channel yang dapat menggunakan command ini, jika owner channel out room silahkan gunakan command `Hfc.claim` untuk mengambil alih owner channel") 

    }
       
    
    // if(message.channel.permissionsFor(message.author).has('MANAGE_CHANNELS')=== true) 
     //return message.channel.send("Only owner channel can use this command") 

    
    
}
