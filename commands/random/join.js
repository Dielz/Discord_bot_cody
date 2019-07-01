const commando = require('discord.js-commando');

class joinCommand extends commando.Command {

constructor(client) {
    super(client, {
        name:'join',
        group: 'random',
        memberName: 'join',
        description: 'cody entra a mi canal' 
    });
}

async run(message, args){

    if(message.member.voiceChannel)
    {
      if(message.guild.voiceConnection)
      {
        message.member.voiceChannel.join()
        .then(connection => {
            console.log('Connected')
            message.replay("Aqui estoy!");
        })

      }
    }

} 

}



module.exports = joinCommand;