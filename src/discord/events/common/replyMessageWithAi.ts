import { createEvent } from "#base";
import { deepseekClient, deepseekPersonality } from "#lib";

createEvent({
  once: false,
  name: "Reply Message With AI",
  event: "messageCreate",
  run: async (event) => {
    const jhulyMention = `<@${event.client.user.id}>`;
    if (event.author.bot || !event.content.startsWith(jhulyMention)) return;

    const messsage = await event.channel.send({
      content: "Estou pensando...",
    });

    const aiResponse = await deepseekClient.chat.completions.create({
      model: "deepseek/deepseek-r1:free",
      //model: "qwen/qwen-2.5-coder-32b-instruct:free",
      messages: [
        {
          role: "system",
          content: deepseekPersonality
        },
        {
          role: "user",
          content: event.content.replace(jhulyMention, ""),
          name: event.author.username
        }
      ]
    }).catch(async e => {
      await event.reply({
        content: "Ocorreu um erro ao responder..."
      });

      throw new Error("Ocorreu um erro ao comunicar com a IA:", e);
    });

    await messsage.edit({
      content: aiResponse.choices[0].message.content
    });

  },
});
