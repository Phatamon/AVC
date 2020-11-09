const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let embed = new discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setColor('RANDOM')
        .setThumbnail(bot.user.avatarURL)
        .setTitle(`${bot.user.username} Command`)
        .setDescription('**Bot Auto Create Voice Channel official Server ◣Have Fun Country◥** :relaxed:   ``-=- Help -=- <>: MUST, []: OPTIONAL``')
        .addField('Prefix','`A.`')
        .addField(`● lock`, 'Untuk mengunci voice channel kamu')
        .addField(`● claim`, 'Untuk mengambil alih voice channel yang tidak ada ownernya')
        .addField(`● unlock`, 'Untuk membuka voice channel kamu')
        .addField(`● name`, 'Untuk mengubah nama voice channel kamu')
        .addField(`● limit <angka>`, 'Untuk mengatur jumlah user yang boleh join di voice channel kamu')
        .addField(`● kick <@mentions>`, 'Untuk mengerluarkan user dari voic channel kamu')
        .addField(`● permiss <@mentions>`,'Untuk memberi permissions user supaya bisa join voice channel kamu saat sedang di lock')
        .addField(`● unpermiss <@mentions>`, 'Untuk menghapus permission user dari voice channel kamu')
        .addField(`● unlimit`, 'Untuk menghapus limit pada voice channel kamu')
        .addField(`● help`, 'Informasi tentang bot')
        .setImage("https://cdn.glitch.com/1b520242-110f-4e83-9bd6-51f86a4115dc%2Faaaaaaa.gif?1553404141952");
    message.channel.send(embed);

};
