require('dotenv').config();
const fs = require('node:fs')
const path = require('node:path')
const { Client, REST, Routes, GatewayIntentBits, Collection } =  require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log('Bot is on !');
    client.channels.cache.get("1223573780908212256")
    .send("I'm booted up ! <@713298191159918612> ")
});
const commandPath = path.join(__dirname,"commands")
const folderPath = fs.readdirSync(commandPath)
client.commands = new Collection();
for (folder of commandPath) {
    const commandsfs = fs.readdirSync("./commands").filter(file => file.endsWith('.js'))
    const commandName = path.join(folderPath, folder);
    const command = require(filepath)
    for (file of command) {
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}



client.login(process.env.TOKEN);


