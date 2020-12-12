var moment = require('moment');
var crypto = require('crypto');
var data;
var result;

module.exports = {
    name: 'hash',
    description: 'Hash text command!',
    execute(message, args, Discord, prefix) {
        var user = message.mentions.users.first() || message.member.user
        var dateNow = moment().format("DD-MM-YYYY hh:mm:ss");
        var errormsg = new Discord.MessageEmbed()
        .setColor('#bd1300')
        .setAuthor('ERROR !', 'https://i.imgur.com/8lE5n8M.png')
        .setDescription('Correct usage: ' + prefix + 'hash <sha1, md5, sha256, sha512>')
        .setFooter(`Sended to: ${user.username} | Date: ` + dateNow)
        if (!args[0]) return message.channel.send(errormsg);
        var errormsgTXT = new Discord.MessageEmbed()
        .setColor('#bd1300')
        .setAuthor('ERROR !', 'https://i.imgur.com/8lE5n8M.png')
        .setDescription('Where is the text ?')
        .setFooter(`Sended to: ${user.username} | Date: ` + dateNow)
        if (args[0].toLowerCase() === 'sha1') {
            if (args[1]) {
                data = args[1];
                result = crypto.createHash('sha1').update(data).digest("hex");
                message.channel.send('**SHA1:** ' + result);
            } else {
                message.channel.send(errormsgTXT);
            }
        } else if (args[0].toLowerCase() === 'md5') {
            if (args[1]) {
                data = args[1];
                result = crypto.createHash('md5').update(data).digest("hex");
                message.channel.send('**MD5:** ' + result);
            } else {
                message.channel.send(errormsgTXT);
            }
        } else if (args[0].toLowerCase() === 'sha256') {
            if (args[1]) {
                data = args[1];
                result = crypto.createHash('sha256').update(data).digest("hex");
                message.channel.send('**SHA256:** ' + result);
            } else {
                message.channel.send(errormsgTXT);
            }
        } else if (args[0].toLowerCase() === 'sha512') {
            if (args[1]) {
                data = args[1];
                result = crypto.createHash('sha512').update(data).digest("hex");
                message.channel.send('**SHA512:** ' + result);
            } else {
                message.channel.send(errormsgTXT);
            }
        } else {
            var errormsg = new Discord.MessageEmbed()
            .setColor('#bd1300')
            .setAuthor('ERROR !', 'https://i.imgur.com/8lE5n8M.png')
            .setDescription('Correct usage: ' + prefix + 'hash <sha1, md5, sha256, sha512>')
            .setFooter(`Sended to: ${user.username} | Date: ` + dateNow)
            message.channel.send(errormsg);
        }
    }
}