const Discord = require('discord.js');
const commando = require('discord.js-commando');
const bot = new commando.Client({
    commandPrefix: 'cody.'
});
//const client = new Discord.client();

bot.on("ready", async () => { 

   bot.user.setActivity('Jodiendo a luis');
  // console.log(bot.channels);
   var channel = bot.channels.get('322896774270550016');
   var vChannel = bot.channels.get('331650339990142978');

   vChannel.join().then(connection => console.log('Connected'))
   .catch(console.error);
   channel.send("Llegue yo... guau! :dog:");
});


bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');



// bot.on('message', (message) => {

//     if(message.author.bot) return;
//     message.channel.sendMessage('Guau guau guau guau guau guau guau! grrrrrr :rage:');
   
// });



bot.login('NDgzMzMxODk5MTYzNjcyNTc2.DmR6kg.jVpOpPE12T1haNKMD6JvlbcZ6Eo');



