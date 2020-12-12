var moment = require('moment');

module.exports = {
    name: 'github',
    description: 'Github URL command',
    execute(message, Discord, client, version, author, githubURL) {
        const user = message.mentions.users.first() || message.member.user
        var dateNow = moment().format("DD-MM-YYYY hh:mm:ss");
        const help = new Discord.MessageEmbed()
        .setColor('#fc9803')
        .setDescription([
            `**Name:** Hasher`,
            `**Version:** ` + version,
            `**Author:** ` + author,
            `**Github:** ` + githubURL,
        ])
        .setFooter(`Sended to: ${user.username} | Date: ` + dateNow)
        message.channel.send(help);
    }
}