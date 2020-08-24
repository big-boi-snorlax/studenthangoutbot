const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require('fs');

const ms = require('ms');

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Student Hangout Bot is online!');
});


client.on('message', message =>{
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){

        case "poll":
            const Embed1 = new Discord.MessageEmbed()
            .setColor(0x44f258)
            .setTitle("Poll Help")
            .setDescription("To initiate a simple yes or no poll: -poll <question>");

            if(!args[1]){
                message.channel.send(Embed1);
                break;

            }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send("📊 " + "**" + msgArgs + "**").then(messageReaction => {
                messageReaction.react("👍");
                messageReaction.react("👎");
                message.delete({timeout: 2000})
            });

        break;
        }
    });


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'schedule'){
       client.commands.get('schedule').execute(message, args);
    } else if (command == 'invite'){
        client.commands.get('invite').execute(message, args);
    } else if (command == 'music'){
        client.commands.get('music').execute(message,args);
    }
    
});






client.login('NzQ0Mzc2NzE3NTUyMTIzOTY1.XziU1w.lRJJw3W5J1PzRTL4TsW1vk7wg7Y');