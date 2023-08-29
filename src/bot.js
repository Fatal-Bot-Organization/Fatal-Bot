const { Client, GatewayIntentBits, Events } = require("discord.js");
require("dotenv").config();
const { token } = process.env;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});


client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, async message => {
	if (message.content === '!ping') {
		await message.reply('Pong!');
	}
});

client.login(token);
