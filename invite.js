module.exports = {
    name: 'invite',
    description: "This gives a link to the Student Hangout server!",
    execute(message, args){
       if(message.member.roles.cache.has('730856549475418145')) {
        message.channel.send('https://discord.gg/yzkqrQU') 

       } else {
        message.channel.send('You are not verified yet. Go to #self-roles to verify yourself!');
       }
        
    }
}