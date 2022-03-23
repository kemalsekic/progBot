const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGES],
});
// const Discord = require('discord.js');
// const client = new Discord.Client();
const config = require("./config.json");
client.login(config.token);

// const pozdrav = require("./pozdrav");

client.on("ready", () => {
  console.log("we here");

  // pozdrav(client);
});

client.on("messageCreate", (message) => {

    if(message.content === "!test"){
        const channel1 = client.channels.cache.find(channel => channel.id === config.channelId);
        channel1.send("Test Pass!");
    }

    if(message.content === "!features"){
        const channel1 = client.channels.cache.find(channel => channel.id === "951149154980208712");
        channel1.send("Ma jebla te fica");
    }

    
})
