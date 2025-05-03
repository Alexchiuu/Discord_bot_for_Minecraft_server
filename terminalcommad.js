const { error } = require('console');

function handleTerminalCommand (client, message){

    if( ! message || message.author.bot) return;

    if(message.content.startsWith('!execute')) {
        const perWrittenCommands = {
            startserver: {
                command: 'open.bat',
                response: 'Server started',
            },
            stopserver: {
                command: 'close.bat',
                response: 'Server closed',
            },
        };

        const commandName = message.content.slice('!execute'.length).trim();

        if(!commandName) {
            message.channel.send('Unvalid execution');
            return;
        }

        const commandData = perWrittenCommands[commandName];

        if(!commandData) {
            message.channel.send('Invalid command');
            return;
        }
        
        const { exec } = require('child_process');

        exec(commandData.command, (error, stdout, stderr) =>{
            if (error){
                console.error(`Error executing command: ${error.message}`);
                message.channel.send(`Error executing command: ${error.message}`);
                return;
            }

            const responseMessage = commandData.response;
            message.channel.send(responseMessage);
            console.log(`response: ${responseMessage}`);
        });
    }
}

module.exports = {
    handleTerminalCommand,
};