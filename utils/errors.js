const Discord = require("discord.js");
const fs = require("fs");
let ayarlar = require("../ayarlar.json");

module.exports.noPerms = (message, perm) => {

let motion42 = new Discord.MessageEmbed()

    .setAuthor(message.author.username)
    .setTitle("Yetersiz izin")
    .setColor(ayarlar.red)
    .addField("İzin gerekli", perm);

return message.channel.send(motion42).then(m => m.delete(5000));

};

module.exports.equalPerms = (message, user, perms) => {

let motion42 = new Discord.MessageEmbed()

    .setAuthor(message.author.username)
    .setColor(ayarlar.red)
    .setTitle("Error")
    .addField(`${user} izinleri var`, perms);

return message.channel.send(motion42).then(m => m.delete(5000));

};

module.exports.botuser = message => {

let motion42 = new Discord.MessageEmbed()

    .setTitle("Error")
    .setDescription("Bir botu yasaklayamazsınız.")
    .setColor(ayarlar.red);

return message.channel.send(motion42).then(m => m.delete(5000));

};

module.exports.cantfindUser = channel => {

let motion42 = new Discord.MessageEmbed()

    .setTitle("Error")
    .setDescription("Bu kullanıcı bulunamadı.")
    .setColor(ayarlar.red);

return channel.send(motion42).then(m => m.delete(5000));

};

module.exports.noReason = channel => {

let motion42 = new Discord.MessageEmbed()

    .setTitle("Error")
    .setDescription("Lütfen bir neden belirtin.")
    .setColor(ayarlar.red);

return channel.send(motion42).then(m => m.delete(5000));

};
