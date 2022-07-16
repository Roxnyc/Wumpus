const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  
const ZivoCode = new Discord.MessageEmbed()
  .setColor('#f698d4')
  .setTimestamp()
  .setFooter(`Wumpus Bot List`,client.user.avatarURL())  
  .setDescription(`Bilgilendirme kısmını okumayı unutmayın! \`(b!bilgilendirme)\``)
  .addField(`\`+bilgilendirme\``,`**Bot list hakkında bilgi**`, true) 
  .addField(`\`+botlist-komutlar\``,`**Bot list komutları**`, true)
  .addField(`\`+ayarlar-durum\``,`**Komutların Durumu**`, true)

return message.channel.send(ZivoCode)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'yardım',
    description: 'Yardım List.',
    usage: 'yardım'
}
