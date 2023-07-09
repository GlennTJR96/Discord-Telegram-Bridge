# Discord-Telegram-bridge
<p align="left">
<a href="https://github.com/Rikj000/Discord-Telegram-Bridge/blob/development/LICENSE">
        <img src="https://img.shields.io/github/license/Rikj000/Discord-Telegram-Bridge?label=License&logo=gnu" alt="GNU General Public License">
    </a> 
</p>

`Discord` ↔️ `Telegram` Bridge

### Credit:
Repository forked from [Rikj000](https://github.com/Rikj000/Discord-Telegram-Bridge). Thanks and show some support! 

#### Setup:
> If you want to run it on heroku, you can just click the button below. 

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Rikj000/Discord-Telegram-Bridge)

* Clone the GitHub repo
* Execute `npm install`
* Discord setup: 
    - [Web Hooks] You can do this by going to Server settings -> Webhooks. Copy the URL, you'll need it later.
    - [Bots] [Discord Developer Portal](https://discord.com/developers/applications) -> Create a bot and copy the token generated. Enable `MESSAGE CONTENT INTENT` in the same section.

* Telegram setup:
    - [Creation of bot] Create a new bot by speaking with @BotFather on telegram
    - [Privacy setting of bot] Enable or disable via BotFather too. 
        - If `enabled`, bot will pick up message from everybody. 
        - If `disabled`, bot will only pick up message sent to the bot.



* Set env variables:
    - `TELEGRAM_BOT_TOKEN` - token from the new telegram bot.
    - `DISCORD_TOKEN` - token from discord bot.
    - `TELEGRAM_CHAT_ID` - The chat ID of the telegram group you want to bridge. ID can be retrieved from telegram web by inspecting the element and look for `peer="-xxxxxxxxxx"`. [Stackover Flow Reference](https://stackoverflow.com/questions/32423837/telegram-bot-how-to-get-a-group-chat-id#:~:text=open%20web.telegram%20in%20browser,or%20peer%3D%22%2Dxxxxxxxxxx%22)
    - `DISCORD_CHANNEL_ID` - The Discord ChannelId of the channel you want to bridge
    - `DISCORD_WEBHOOK_ID` and `DISCORD_WEBHOOK_TOKEN`. Those are part of the webhook URL you copied. `DISCORD_WEBHOOK_ID` is a 18 characters long int, `DISCORD_WEBHOOK_TOKEN` is a ~70 chars long randomly generated string. Those are seperated by slashes in the url.
    - If you use Heroku, set `HEROKU_DYNO_URL` to make the dyno not timeout. You can find your dyno's URL in Heroku dashboard -> Open app
    - If you need to forward Discord Bot messages -> Telegram set `DISCORD_FORWARD_BOT` to `true`  (will cause duplicate messages in bridges that forward in both directions)

* Run `npm start` or `node server.js` and you're set!
