var moment = require('moment');

module.exports = {
    name: 'help',
    description: 'Help command! (cmds list)',
    execute(message, Discord, client) {
        const user = message.mentions.users.first() || message.member.user
        var dateNow = moment().format("DD-MM-YYYY hh:mm:ss");
        const help = new Discord.MessageEmbed()
        .setColor('#fc9803')
        .setAuthor(`Hasher Help Menu`, client.user.avatarURL())
        .setDescription([
            `**;hash <algorithm> <text>** - Hash text command`,
            `**;github** - Github repository URL`,
            `**;help** - Help command`,
        ])
        .setFooter(`Sended to: ${user.username} | Date: ` + dateNow)
        message.channel.send(help);
    }
}
