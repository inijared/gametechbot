/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "test",
	description: "Test Command",

	async run(message, args, client) {
		message.reply("Mashok!");
	}
});
