const { Collection, Client } = require('discord.js');
const fs = require("fs")
require('dotenv').config();

const client = new Client({intents: ['5637']})