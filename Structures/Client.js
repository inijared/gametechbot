/** @format */

const Discord = require("discord.js");

const Command = require("./Command.js");

const Event = require("./Event.js");

const config = require("../Data/config.json");

const fs = require("fs");

const intents = new Discord.Intents(32767);

class Client extends Discord.Client {
	constructor() {
		super({
			intents
		});

		/**
		 * @type {Discord.Collection<string, Command>}
		 */
		this.commands = new Discord.Collection();

		this.prefix = config.prefix;
	}

	start(token) {

		fs.readdir("./commands/", (err, files) => { //make sure you have a commands folder
			if (err) return console.error(err);
			files.forEach(file => {
				/**
				 * @type {Command}
				 */
				if (!file.endsWith(".js")) return; //ignore non js files
				let props = require(`../commands/${file}`);
				let commandName = file.split(".")[0];
				console.log(`Command ${commandName} loaded`);
				this.commands.set(commandName, props);
			});
		});

		fs.readdirSync("./Events")
			.filter(file => file.endsWith(".js"))
			.forEach(file => {
				/**
				 * @type {Event}
				 */
				const event = require(`../Events/${file}`);
				console.log(`Event ${event.event} loaded`);
				this.on(event.event, event.run.bind(null, this));
			});

		this.login(token)

	}

}

module.exports = Client;