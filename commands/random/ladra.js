const commando = require('discord.js-commando');

class LadraComand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ladra',
            group: 'random',
            memberName: 'ladra',
            description: 'Cody ladra',
            //examples: ['roll']
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 3) + 1;
        for(var i = 0; i< roll; i++){
        message.reply('Guau guau guau guau guau guau guau! grrrrrr :rage:');
        }
    }

}

module.exports = LadraComand;