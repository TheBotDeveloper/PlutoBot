const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Visual Bot",
              icon_url: "https://i.hizliresim.com/EyyG8z.png"
            },
			    "thumbnail": {
				 "url": "https://i.hizliresim.com/EyyG8z.png"
			},
            title: "Visual Bot Nedir ?",
            url: "http://visualbot.rf.gd",
            description: "Visual bot kolay işlevli bir bottur .",
            fields: [
				{
                name: "Genel Komutlar",
				inline: true,
                value: "visual$**destek**\nvisual$**yardım**\nvisual$**değişiklikler**\nvisual$**istatistikler**\nvisual$**sunucubilgi**\nvisual$**davet**\nvisual$**seviye-sistemi**\nvisual$**kodtest**\nvisual$**ailemiz**"
			  },
				{
                name: "Mod komutları",
				inline: true,
                value: "visual$**temizle**\nvisual$**ban**\nvisual$**duyuruyap**\nvisual$**uyar**\nvisual$**kick**",
              },
			  {
                name: "Eğlenceli Komutlar",
				inline: true,
                value: "visual$**kedi**\nvisual$**köpek**\nvisual$**coolresim**\nvisual$**hastebin**\nvisual$**köpekadı**\nvisual$**kediadı**\nvisual$**randomşifre**\nvisual$**mcödül**\nvisual$**twerk**\nvisual$**sins-aga**"
              },
              {
                name: "Kullanıcı Komutları",
				inline: true,
                value: "visual$**kullanıcıbilgim**\nvisual$**avatarım**\nvisual$**ping**\nvisual$**altınlarım**\nvisual$**altın-kontrol**\nvisual$**madencilik**"
              },
              {
                name: "Güncel Sürüm",
                value: "v2.3 BETA"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "https://i.hizliresim.com/EyyG8z.png",
              text: "© Yeni neslin oyuncağı"
            }
          }
        });  
	    message.react("👍")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
