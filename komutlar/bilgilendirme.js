const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  
const motion42 = new Discord.MessageEmbed()

  .setColor('#f698d4')
  .setThumbnail("https://cdn.discordapp.com/attachments/981155499292643388/984494544630456390/ds.png")
  .setTimestamp()
  .setFooter(`Wumpus Bot List`,client.user.avatarURL())
  .setAuthor(client.user.username,"https://cdn.discordapp.com/attachments/981155499292643388/984494544630456390/ds.png")
  .setDescription(`
:pushpin: **__Bot Listesi Kuralları__** :pushpin:

\`1)\` Botunuzun en az 25 komutu olmalıdır.

\`2)\`Botunuz en az 25 gün önce açılmış olmalıdır

\`3)\` Dm-Anons Komutu Olmamalı.

\`4)\` Botunuz bir Ban botu olmamalıdır.

\`5)\` Ailemiz İlk 10 Tarzı Komut Olmamalı.

\`6)\` Botunuz bir Saldırı Botu olmamalıdır.

\`7)\` AntiSpam ve Dm Hg BB komutları ayarlanmalıdır.

\`8)\` 90\` Saatten Fazla Çevrimdışı Olmamalı

\`9)\` Botunuzun en az \`40.000\` kullanıcısı ve \`40\` sunucusu olmalıdır.

\`10)\` Botunuzu Ekledikten Sonra Yetkilileri Ne Zaman Kontrol Edeceksiniz Yasaklanmış Gibi Yazmak.

\`11)\` \`b!bot-add\` komutunun spam olarak gönderilmesi yasaktır. \`(Kara listeye alınacaksınız)\`

\`12)\` Botunuzun herkese açık olarak etiketlemesi gerekiyorsa - burada veya herhangi bir rol, botunuz açıkça onaylanmayacaktır.

:gear: **__Bot Nasıl Eklenir?__** :gear:

<#KANAL İD> adresine gelin ve \`!bot-add\` \`bot-id\` \`prefix\` \`dbl-approval-state\` olarak bir başvuru gönderin

:dizzy: \`Not:\` Botunuz onaylanırsa doğrudan eklenecektir.
:dizzy: \`Not2:\` Botunuz **DBL** onaylıysa, doğrudan onaylanacaktır.

`)
 
return message.channel.send(motion42)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'bilgilendirme',
    description: 'information',
    usage: 'notify'
}
