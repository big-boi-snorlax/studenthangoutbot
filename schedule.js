module.exports = {
    name: 'schedule',
    description: "This gives the CMS schedule for 8th graders!",
    execute(message, args){
       if(message.member.roles.cache.has('741097137261117511')) {
        message.channel.send('https://cdn.discordapp.com/attachments/741828245296775179/743080248303681566/horario.jpg') 

       } else {
        message.channel.send('You are not in Brookwood! If you are assign it to yourself in https://discord.com/channels/728716559220211753/741890310442975312 !');
       }
        
    }
}