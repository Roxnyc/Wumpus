const Discord = require("discord.js");
const settings = require("../ayarlar.json");
const db = require("croxydb");

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(`Bu komutu kullanmak için \`Yönetici\` izniniz olmalıdır!`);
  if (!args[0])
    return message.channel.send(`**Yanlış kullanım.** \n\`Örnek:\` **b!set referans günlüğü** \`#channel\``);
  if (args[0] === "set") {
    let channel = message.mentions.channels.first();
    if (!channel) {
      return message.channel.send(`**Yanlış kullanım.** \n\`Örnek:\` **b!set referans günlüğü** \`#channel\``);
    }
    db.set(`submission.log_${message.guild.id}`, channel.id);
    let a = new Discord.MessageEmbed()
    .setTitle("Referans günlük seti")
    .setDescription("```Uygulama günlüğü başarıyla ayarlandı. Botlist sisteminin düzgün çalışması için lütfen diğer ayarları yapın.```")
    .addField("Yeni Kanal", `<#${channel.id}>`)
    .setFooter(client.user.username, client.user.avatarURL())
    .setTimestamp()
    .setColor("#f698d4");
    message.channel.send(a)
  } else if (args[0] === "reset") {
    db.delete(`application.log_${message.guild.id}`);
    message.channel.send("Başarıyla sıfırlandı.");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "referans-log",
  description: "Referans kanalını ayarlar.",
  usage: "reference-channel #channel"
};
