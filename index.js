require('dotenv').config()
const {Client, GatewayIntentBits} = require('discord.js');
const {handleTerminalCommand} = require('./terminalcommad');

const client = new Client({intents:3276799})

/*
const client = new Client({
    Intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],


});
*/

client.on('ready', () =>{
    console.log(`${client.user.tag} is online.`)
})

client.on('messageCreate', (message) =>{
    handleTerminalCommand(client,message);
})

client.on('messageCreate', (message) =>{
    if(message.author.bot) {
        return;
    }

    if (message.content ==='Hi') {
        message.reply('Hello Darling!');
    }
})

client.login(process.env.BOT_TOKEN);