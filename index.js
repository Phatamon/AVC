const Discord = require('discord.js');
const moment = require("moment");
const { Client, Collection } = require("discord.js");
const config = require("./config.json");
const settings = require("./rainbow.json");
const client = new Discord.Client();
const superagent = require("superagent");
const fs = require('fs');
var temporary = [];
client.on('message', async message => { // eslint-disable-line
	if (message.author.bot) return undefined;
	let prefix = config.prefix;
  if (message.channel.type === "dm") return;
	if (!message.content.startsWith(prefix)) return undefined;
  
  
	let command = message.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length);
	let args = message.content.slice(prefix.length).trim().split(" ");
	let cmd = args.shift().toLowerCase();
  
  // CMD Handler
	try {
		let commandFile = require(`./cmds/${cmd}.js`);
		commandFile.run(client, message, args);
	} catch (e) {
		console.log(e.message)
	} finally {
		console.log(`${message.author.username} using command ${cmd}`);
	}
})

client.on("ready", message => {
  console.log(`BOT SIAP BERMAIN DI ${client.guilds.size} SERVER !!`);
  client.user.setActivity("iMighty");
  const status = 
      `A.help||Create Channel`
	    
   // let random = Math.floor(Math.random() * status.length);
    client.user.setPresence({
      game: {
        name: status,
        type: "watching",
        //url: "https://www.twitch.tv/elarsyah"
      }
    });
		
//function botStatus() {
  //let waktu2 = client.channels.find("id", "696197547038998568");
//waktu2.setName(
   //` ${timezone()
      //.tz("Asia/Jakarta")
    // .format("🕛 HH:mm [[WIB]]") + " "}`
// );
  //let waktu3 = client.channels.find("id", "696197614172897381");
  //waktu3.setName(
   // `//${timezone()
      //.tz("Asia/Makassar")
      //.format("🕐 HH:mm [[WITA]]") + " "}`
 //);
//  let waktu4 = client.channels.find("id", "696197630077829220");
  //waktu4.setName(
   // `${timezone()
    //  .tz("Asia/Jayapura")
     // .format("🕑 HH:mm [[WIT]]") + " "}`
  //);
  //let tanggal1 = client.channels.find("id", "696197657550520383");
  //tanggal1.setName(
   // `${timezone()
       //.tz("Asia/Jakarta")
      // .locale("id")
      // .format("📅 dddd, LL") + " "}`
   // );
//}

//setInterval(botStatus,10000)






//client.on('message', message => {
   // let messageArray = message.content.split(" ");
   // let command = messageArray[0];
   // let args = messageArray.slice(1);
   // if(command === config.prefix + settings.rainbowcommand) {
      //  const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
       // if(!rolez) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
       // if(!message.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(settings.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
       // var colors = settings.rainbowrole
      //  var rolestart = setInterval(function() {
       //     var colorsz = colors[Math.floor(Math.random() * colors.length)];
        //    rolez.setColor(colorsz)
     //   }, settings.rainbowdelay); 
      //      message.channel.send(settings.messageresponse.success).catch(err=> message.channel.send("No response"))

  //  }
  //  if(command === config.prefix + settings.rainbowstop) {
   //         setTimeout(function () {
    //       process.exit()
    ///          message.channel.send(settings.messageresponse.rainbowstop).catch(err=> message.channel.send("No response"))
           //            }
	
//});

client.on('voiceStateUpdate', async (oldMember, newMember) => {
  const mainCatagory = '772441130855694336';
     const mainChannel = '775267107008806952';

     if(newMember.voiceChannelID == mainChannel){
        // Create channel...
         await newMember.guild.createChannel(`${newMember.user.username}'s channel`, {type: 'voice', parent: mainCatagory})
             .then(async channel => {
                 temporary.push({ newID: channel.id, guild: channel.guild })
                 
                 channel.overwritePermissions(newMember.id, {
          
                  MANAGE_CHANNELS: true
              })
                 // A new element has been added to temporary array!
                 await newMember.setVoiceChannel(channel.id)
             })
     }

     if(oldMember.voiceChannelID) {

      const lama = oldMember.guild.channels.get(oldMember.voiceChannelID)

      if(lama.permissionsFor(oldMember.id).has('MANAGE_CHANNELS')) {//.startsWith(channel)) {
        
        lama.overwritePermissions(newMember.id, {
          
          MANAGE_CHANNELS: null
      })
      }
    }
 // })

    // if(newMember.overwritePermissions("MANAGE_CHANNELS")) {


   //  }

     if(temporary.length >= 0) for(let i = 0; i < temporary.length; i++) {
         // Finding...
         let ch = temporary[i].guild.channels.find(x => x.id == temporary[i].newID)
         // Channel Found!         
         if(ch.members.size <= 0){

             await ch.delete()
             // Channel has been deleted!
             return temporary.splice(i, 1)
         }
     }


});

//////////////////////////// ROLE VOICE //////////////////////
//client.on('voiceStateUpdate', async (oldMember, newMember) => {

  //let role = newMember.guild.roles.find("name", "📣|IN VOICE")
  //newMember.guild.channels.forEach(channel => { 
  //  if(newMember.voiceChannelID){
      
  //    newMember.addRole("775940050068045894")

 //   }

 //  if(oldMember.voiceChannelID) {

  //    const lama = oldMember.guild.channels.get(oldMember.voiceChannelID)

  //    if(lama) {//.startsWith(channel)) {
  //      oldMember.removeRole("775940050068045894")
  //    }
    }
 // })

 // });

  


client.login(process.env.token);
