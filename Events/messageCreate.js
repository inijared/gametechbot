const Event = require("../Structures/Event.js");

module.exports = new Event("messageCreate", (client, message) => {
    if (message.author.bot) return;

	if (!message.content.startsWith(client.prefix)) return;

	const args = message.content.substring(client.prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) return message.reply(`Command ${args[0]} tidak ditemukan!`);

	const permission = message.member.permissions.has(command.permission, true);

	if (!permission)
		return message.reply(
			`Kamu tidak memiliki izin \`${command.permission}\` untuk menjalankan perintah ini!`
		);

	command.run(message, args, client);
});