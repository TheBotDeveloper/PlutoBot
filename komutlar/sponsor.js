const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: ":tada: Döngü Yapım - Discord Sunucusu",
    url: "https://discordapp.com/invite/kbvn4C",
    description: "İlk sponsor , bu sunucu bir çok özellik barındırıyor.",
            }});
	message.channel.send({embed: {
    color: 0xD97634,
    title: ":ok_hand: Tuatara VDS - Discord Sunucusu",
    url: "https://discord.gg/invite/vH44qzg",
    description: "Türk bot yapımcılarına tam destek veriyorlar ayrıca botunuza ücretsiz vds sağlıyorlar.",
            }});
	message.channel.send({embed: {
    color: 0xD97634,
    title: ":heart: Zeki Bot Destek - Discord Sunucusu",
    url: "https://discordapp.com/invite/x98qawT",
    description: "Türk botlarından güzel bir bot olan Zeki Bot'un destek sunucusuna katılmayı unutmayın.",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'sponsor',
  description: 'sponsorları gösterir.',
  usage: 'sponsor'
};
