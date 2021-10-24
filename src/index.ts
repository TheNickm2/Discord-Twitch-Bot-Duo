import * as dotenv from 'dotenv';
import { Bot } from '@twurple/easy-bot';
import { twitchCommands } from './TwitchCommands';

async function main() {
    const configResult = dotenv.config();
    if (configResult.error) {
        throw configResult.error;
    }

    const twitchAuth = process.env.TWITCH_OAUTH_TOKEN;
    const twitchChannel = process.env.TWITCH_CHANNEL_NAMES;
    if (!twitchAuth || !twitchChannel) throw new Error(`Twitch oauth token or channel not specified`);
    const twitchChannels = twitchChannel.replace(' ', '').split(',');
    await Bot.create({
        auth: twitchAuth,
        channels: twitchChannels,
        commands: twitchCommands,
    });
    console.log(`Bot connected to Twitch IRC!`);
}

main();
