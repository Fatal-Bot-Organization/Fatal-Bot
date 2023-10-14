require("dotenv").config();
const { token, clientId } = process.env;
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
  {
	name: "ping",
	description: "Replies with Pong!",
  },
  {
	name: "credits",
	description: "Shows the credits of the bot",
  },
  {
	name: "add",
	description: "Adds two numbers",
	options: [
		{
			name: "first-number",
			description: "The first number to add",
			type: ApplicationCommandOptionType.Number,
			required: true
		},
		{
			name: "second-number",
			description: "The Second number to add",
			type: ApplicationCommandOptionType.Number,
			required: true
		},

	],
  },
  {
	name: "blamedev",
	description: "A command that says blame dev",
  },
];

const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();
