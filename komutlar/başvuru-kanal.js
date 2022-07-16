const Discord = require("discord.js");
const settings = require("../ayarlar.json");
const db = require("croxydb");

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(`Bu komutu kullanmak için \`Yönetici\` izniniz olmalıdır!`);
  if (!args[0])
    return message.channel.send(`**Yanlış kullanım.** \n\`Örnek:\` **!referans ayarlı kanal** \`#kanal\``);
  if (args[0] === "set") {
    let channel = message.mentions.channels.first();
    if (!channel) {
      return message.channel.send(`**Yanlış kullanım.** \n\`Örnek:\` **!referans ayarlı kanal** \`#kanal\``);
    }
    db.set(`submission.channel_${message.guild.id}`, channel.id);
    let a = new Discord.MessageEmbed()
    .setTitle("Referans kanal seti")
    .setDescription("```Referans kanalı ayarlandı. Botlist sisteminin düzgün çalışması için lütfen diğer ayarları yapın.```")
    .addField("Yapılandırılan Kanal", `<#${channel.id}>`)
    .setFooter(client.user.username, client.user.avatarURL())
    .setTimestamp()
    .setColor("#f698d4");
    message.channel.send(a)
  } else if (args[0] === "reset") {
    db.delete(`application.channel_${message.guild.id}`);
    message.channel.send("Başarıyla sıfırlayın.");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "referans-kanalı",
  description: "Sets referral channel.",
  usage: "reference-channel #channel"
};
