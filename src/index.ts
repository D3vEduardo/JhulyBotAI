import { bootstrap } from "#base";
import { startServer } from "#server";
import { ActivityType } from "discord.js";

await bootstrap({
  meta: import.meta,
  whenReady: startServer,
  presence: {
    status: "online",
    activities: [
      {
        name: "by Dev Eduh",
        state: "Estou em desenvolvimento...",
        type: ActivityType.Playing,
        url: "https://cdn.discordapp.com/avatars/1195881086065049650/17f05b078d72c9e84a548199bce62256.png?size=2048",
      },
    ],
  },
});
