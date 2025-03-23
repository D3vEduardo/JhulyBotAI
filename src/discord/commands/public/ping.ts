import { createCommand } from "#base";
import { ApplicationCommandType, ButtonBuilder, ButtonStyle } from "discord.js";

createCommand({
  name: "ping",
  description: "Replies with pong 🏓",
  type: ApplicationCommandType.ChatInput,
  async run(interaction) {
    await interaction.reply({
      flags,
      content: `Pong! 🏓`,
    });
  },
});
