import { Client, Intents, WebhookClient } from "discord.js";

// const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
// const DISCORD_WEBHOOK_ID = process.env.DISCORD_WEBHOOK_ID;
// const DISCORD_WEBHOOK_TOKEN = process.env.DISCORD_WEBHOOK_TOKEN;

const DISCORD_TOKEN = 'MTEyNzIyNTQwOTI0NzkxMjA1Ng.GGb9CC.ZBbuaEMjBsP4M5hqumDze9rEFWqL-FmkCiERl4' ;
// webhook : https://discord.com/api/webhooks/1127227639975903322/__aYA7hWdHrztZ-KRKHTL45mnWBCCrFtn3USWkxB4vSElBj9QRfy4H7MGIxf-IJZcxkJ
const DISCORD_WEBHOOK_ID = '1127227639975903322';
const DISCORD_WEBHOOK_TOKEN = '__aYA7hWdHrztZ-KRKHTL45mnWBCCrFtn3USWkxB4vSElBj9QRfy4H7MGIxf-IJZcxkJ';

console.log("Discord token: " + DISCORD_TOKEN);
console.log("Discord webhook id: " + DISCORD_WEBHOOK_ID);
console.log("Discord webhook token: " + DISCORD_WEBHOOK_TOKEN);

export const discordClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

export const discordWebhookClient = new WebhookClient(
	DISCORD_WEBHOOK_ID,
	DISCORD_WEBHOOK_TOKEN
);

discordClient.once("ready", () => {
	console.log("Discord bot ready!");
});

discordClient.login(DISCORD_TOKEN);
