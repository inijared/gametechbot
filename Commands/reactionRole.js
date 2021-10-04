/** @format */

const Command = require("../Structures/Command.js");
const {
    MessageEmbed
} = require("discord.js");

module.exports = new Command({
    name: "reactionrole",
    description: "ReactionRole Command",

    async run(message, args, client, Discord) {
        const channel = '881205529651851270';
        const rank = message.guild.roles.cache.find(role => role.name === "FiveM");
        const emojis = '🔥';

        const embed = new MessageEmbed()
            .setAuthor("GAMETECH ADMIN", "", "")
            .setColor('#00ffd5')
            .setDescription("Silahakan mengambil Role dibawah ini untuk mulai bermain dan mengakses discord. Klik emoji dibawah ini ! ")
            .setFooter("© GAMETECH DEVELOPER, ")
        let messageEmbed = await message.channel.send({
            embeds: [embed]
        });
        messageEmbed.react(emojis);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === emojis) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(rank);
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === emojis) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(rank);
                }
            } else {
                return;
            }
        });
    }
});