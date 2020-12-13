require('dotenv').config();
var Discord = require('discord.js');
var client = new Discord.Client();
var fs = require('fs');

var token = process.env.token; 
client.commands = new Discord.Collection();
var prefix = ";";   
var version = "v1.0.0";
var author = "vaneX86"
var githubURL = "https://github.com/vaneX86/hasher";
 
var commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(var file of commandFiles){
    var command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log('Hasher ' + version + ' Activated!');
    console.log('Author: ' + author);
    console.log('Github: ' + githubURL);
});

client.on('message', message =>{
    if (message.channel.type == "dm") return;
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    var args = message.content.slice(prefix.length).split(/ +/);
    var command = args.shift().toLowerCase();
    
    if (command === 'help') {
        client.commands.get('help').execute(message, Discord, client, prefix);
    } else if (command === 'hash') {
        client.commands.get('hash').execute(message, args, Discord, prefix);
    } else if (command === 'github') {
        client.commands.get('github').execute(message, Discord, client, version, author, githubURL);
    }
});

client.login(token);
