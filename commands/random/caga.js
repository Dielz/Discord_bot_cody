const commando = require('discord.js-commando');

class cagaCommand extends commando.Command {

constructor(client) {
    super(client, {
        name:'caga',
        group: 'random',
        memberName: 'caga',
        description: 'cody se caga en todo discord' 
    });
}

async run(message, args){

    message.channel.sendMessage(":poop: :poop: :poop: :poop:");
} 

}



module.exports = cagaCommand;