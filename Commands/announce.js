/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "announce",
	description: "Announce Command",
    permission: ["MANAGE_MESSAGES", "MANAGE_CHANNELS"],
	async run(message, args, client, Discord) {
        const channel = client.channels.cache.get('881205529651851267');
        let announcement = args.slice(1).join(" ");

        
        if (!announcement) return message.channel.reply(`Masukkan text untuk dijadikan pengumuman!`)
        channel.send("@everyone", announcement);
    }
});
