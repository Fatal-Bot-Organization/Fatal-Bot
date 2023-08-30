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

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;
  
  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
  if (interaction.commandName === "credits") {
    await interaction.reply("Main Developer: <@!1120137191557963806>\nHelper: <@!894783593694527499> ");
  }
  if (interaction.commandName === "add") {
    const num1 = interaction.options.getNumber("first-number").value;
    const num2 = interaction.options.getNumber("second-number").value;

    await interaction.reply(`The sum is ${num1 + num2}`);
  }

});

client.login(token);
