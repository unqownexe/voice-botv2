var Discord = require('discord.js');
var client = new Discord.Client();
var aktif = true;

client.on("voiceStateUpdate", async (oldMember, newMember) => {
  let kanalID = ""; //SES KANALI
  let logID = "" // LOG KANALI
  let kanaldlink = "" // SES KANALININ DAVET LINKI (SINIRSIZ)
  let üyerol = "678279073658830908" // ÜYE ROL ID
  let hayıremoji = "<a:hayir2:678582047283085322>" // HAYIR EMOJİSİ
  let evetemoji = "<a:hayir2:678582047283085322>" // HAYIR EMOJİSİ
  let user = client.users.get(newMember.id);
  const moment = require ("moment")
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = moment.duration(kurulus).format("D");
  if (newMember.id !== client.user.id && newMember.voiceChannel && newMember.voiceChannel.id === kanalID) {
    if(newMember.selfDeaf == true){
      newMember.setVoiceChannel(null)
   client.channels.get(kanalID).leave();
     client.channels.get(kanalID).setUserLimit(99)
     client.channels.get(logID).send(new Discord.RichEmbed().addField(`${hayıremoji} Kayıt: Başarısız`,`Kişi kendini sağırlaştırmış.
Bilgileri;
Etiketli hali: ${newMember.toString()}
ID: ${newMember.id}
`).setColor("RED"))
let kanalad = client.channels.get(kanalID).name
return newMember.send(new Discord.RichEmbed().addField(`${hayıremoji} Kayıt olmak için sağırlaştırmanı kaldırman gerek.`,`Merak etme ses teyiti almayacağız. Beni duyman yeterli olacak. Eğer kaldırdıysan tekrar \`${kanalad}\` kanalına katıl ya da [Tıkla](${kanaldlink})!`).setImage("https://cdn.discordapp.com/attachments/732129628407201883/759808060863807538/unknown.png").setColor("RANDOM"))
    }
 if(newMember.roles.has(üyerol)){
  client.channels.get(logID).send(new Discord.RichEmbed().addField(`${hayıremoji} Kayıt: Başarısız`,`Kişi zaten kayıt olmuş.
  Bilgileri;
  Etiketli hali: ${newMember.toString()}
  ID: ${newMember.id}
  `).setColor("RED"))

  const dispatcher = connection.playFile('./Ses Dosyalari/kayitolunmus.mp3');
  dispatcher.on("end", end => {
  newMember.setVoiceChannel(null)
  voiceChannel.leave();
  return client.channels.get(kanalID).setUserLimit(99)
  
})
 }
    if (gün < 7){
      client.channels.get(logID).send(new Discord.RichEmbed().addField(`${hayıremoji} Kayıt: Başarısız`,`Kişinin hesabı 7 gün içerisinde kurulmuş."

Bilgileri;
Etiketli hali: <@${newMember.id}>
ID: ${newMember.id}
Gün: ${gün}
`).setColor("RED"))
const dispatcher = connection.playFile('./Ses Dosyalari/hesapyeni.mp3');
dispatcher.on("end", end => {
  newMember.setVoiceChannel(null)
  voiceChannel.leave();
  return client.channels.get(kanalID).setUserLimit(99)
  
})
    }
  aktif = false;
  client.channels.get(kanalID).setUserLimit(1)
  var voiceChannel = newMember.guild.members.get(newMember.id).voiceChannel;
  if(!voiceChannel) return
  voiceChannel.join().then(connection => {
    const dispatcher = connection.playFile('./Ses Dosyalari/onayla.mp3');
      dispatcher.on("end", end => {
        newMember.setVoiceChannel(null)
      voiceChannel.leave();
      client.channels.get(kanalID).setUserLimit(99)
      client.channels.get(logID).send(new Discord.RichEmbed().addField(`${evetemoji} Kayıt: Başarılı`,`Kişi kayıt edildi.
      Bilgileri;
      Etiketli hali: ${newMember.toString()}
      ID: ${newMember.id}
      `).setColor("GREEN"))
    
      return newMember.addRole(üyerol);
      });
    }).catch(err => console.log(err));
    aktif = true;
  }
});



    client.on("ready", () => {
      console.log("-Aktif-")
    })

client.login('NzE1NTAyODczNzU2MTcyMzIw.Xs-J-g.8vNsV2h_MNCtvCGukrlXz-p2LDY');