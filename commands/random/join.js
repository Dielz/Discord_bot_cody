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
  console.log('paso 1');
    if(message.member.voiceChannel)
    {
      console.log('paso 2');
      console.log(message.guild.voiceConnection);
      // if(message.guild.voiceConnection)
      // {
        console.log('paso 3');
        message.member.voiceChannel.join()
        .then(connection => {
            console.log('Connected')
            message.channel.sendMessage("Aqui estoy! :poop:");
            
        })

      // }
    }

} 

}



module.exports = joinCommand;