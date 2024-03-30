require('dotenv').config();
const { Client, REST, Routes, GatewayIntentBits } =  require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log('Bot is on !');
    client.channels.cache.get("1223573780908212256")
    .send("I'm booted up ! <@713298191159918612> ")
});



client.login(process.env.TOKEN);


