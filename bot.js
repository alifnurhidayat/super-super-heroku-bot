const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDA0MjUyOTkyNjE5OTM3Nzky.DUTbnw.EXrDdYKfv3P6CVOzdiLbozTo7VY);
