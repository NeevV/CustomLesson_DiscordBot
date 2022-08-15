const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

client.on("message", messageRun);

// Replace with your own initials!
const prefix = "!NV";
function messageRun(message) {
    
    if (message.author.bot == true) {
        return;
    }

    if (message.content.startsWith(prefix) == false){
        return;
    }

}
client.login(config.token);
