import { createBotCommand, BotCommandContext } from '@twurple/easy-bot';

export const twitchCommands = [
    createBotCommand('ping', (params: string[], context: BotCommandContext) => {
        context.say('Pong!');
    }),
];
