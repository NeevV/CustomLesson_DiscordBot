const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

client.on("message", messageRun);

// Replace with own initials
const prefix = "!NV";
function messageRun(message) {
    
    if (message.author.bot == true) {
        return;
    }

    if (message.content.startsWith(prefix) == false){
        return;
    }

let seq = message.content.split(" "); // "!NV hot" --> ["!NV", "hot"]

if (seq[1] == "hot"){
    message.reply("cold!");
}

}
client.login(config.token);
