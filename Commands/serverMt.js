/** @format */

const Command = require("../Structures/Command.js");
const {
    MessageEmbed
} = require("discord.js");

module.exports = new Command({
    name: "servermt",
    description: "Server Mt Command",

    async run(message, args, client, Discord) {
        const channel = client.channels.cache.get('881205529651851267');
        const embed = new MessageEmbed()
            .setColor('#00ffd5')
            .setTitle("🔌 PORTAL KOTA GAMETECH DI TUTUP 🔌")
            .setDescription("Check UPDATE terbaru kami di #📣server-update❗ooc❗\nBila kamu menemukan sebuah bug, laporkan di #📩laporan-bug❗ooc❗\nBeri kritik kamu di #📩saran-dan-kritik❗ooc❗")
            .setFooter("© GAMETECH DEVELOPER, ")
        let messageEmbed = await channel.send({
            embeds: [embed]
        });
        channel.send("@everyone");
        message.reply(`Pengumuman sudah dijalankan, cek <#881205529651851267>!`);
    }
});