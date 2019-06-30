const commando = require('discord.js-commando');

class HablarConLasNinas extends commando.Command {

constructor(client) {
    super(client, {
        name:'habla',
        group: 'random',
        memberName: 'habla',
        description: 'Saluda a las niñas' 
    });
}

async run(message, args){

    message.channel.sendMessage("Hola nathalie y valerie");
} 

}



module.exports = HablarConLasNinas;