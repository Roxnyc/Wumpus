const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  
const pink = new Discord.MessageEmbed()
  .setColor('#f698d4')
  .setThumbnail("https://cdn.discordapp.com/attachments/815177653162082337/815581805888798741/bc05d5d7859ba639aee30d2e38455739.png")
  .setTimestamp()
  .setFooter(`Wumpus Bot List`,client.user.avatarURL())  
  .setAuthor(client.user.username,"https://cdn.discordapp.com/attachments/815177653162082337/815581805888798741/bc05d5d7859ba639aee30d2e38455739.png")
  .addField('**» Wumpus Bot List Komutları**',`
╔═══════════════════════════════════╗
║**»** \`!bot-ekle\` **Bot eklersiniz.**
║══════════════════════════════════
║**»** \`!bot-onayla\` **Bot onaylarsınız.**
║══════════════════════════════════
║**»** \`!bot-reddet\` **Bot reddedersiniz.**
║══════════════════════════════════
║**»** \`!başvuru-log ayarla/sıfırla\` **Başvuru log kanalı ║ayarlarsınız.**
║══════════════════════════════════
║**»** \`!başvuru-kanal ayarla/sıfırla\` **Başvuru kanalı ayarlarsınız.**
║══════════════════════════════════
║**»** \`!bot-rol ayarla/sıfırla\` **Botlist botlarına otomatik rol ║verir.**
║══════════════════════════════════
║**»** \`!developer-rol ayarla/sıfırla\` **Developer rolü ayarlarsınız.**
║══════════════════════════════════
║**»** \`!yetkili-log ayarla/sıfırla\` **Yetkili log kanalı ayarlarsınız.**
║══════════════════════════════════
║**»** \`!yetkili-rol ayarla/sıfırla\` **Botları onaylatıcak test ║edicek yetkili rol ayarlarsınız.**
╚═══════════════════════════════════╝
`)
 return message.channel.send(pink)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'botlist-komutlar',
    description: 'BotList.',
    usage: 'botlist-komutlar'
}
