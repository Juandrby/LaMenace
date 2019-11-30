const Discord = require("discord.js");
const client = new Discord.Client();

let prefix = "-LM"

client.login(process.env.TOKEN);
client.on(`ready` , () => console.log(`Coucou je suis démarrer`));
client.on(`ready` , function(){

    client.user.setActivity(`https://discord.gg/vzECwCe`)
})

client.on(`guildMemberAdd` , member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(`:tada: ` + member.user.username + ` à rejoint ! ` + member.guild.name)
        .setFooter(`Nous sommes désormais ` + member.guild.memberCount)
    member.guild.channels.get(`646065820862251011`).sendMessage(embed)
});

client.on(`guildMemberRemove` , member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(`:cry: ` + member.user.username + `** a quitté ! ` + member.guild.name)
        .setFooter(`Nous sommes désormais ` + member.guild.memberCount)
    member.guild.channels.get(`646065820862251011`).sendMessage(embed)
});

client.on("message", message =>{
    if(!message.guild) return 
    if(message.content === prefix + "Présentation"){
        message.channel.send("Bonjour , je suis le bot LaMenace , je souhaite la bienvenue au nouveau arrivant qui viennent de nous rejoindre!")
    }
});
