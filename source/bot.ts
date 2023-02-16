// The bot itself


// Imports
import discord from 'discord.js'
import { logger } from './logger';

// Custom Bot class, mostly to avoid problems because of API changes.
export class BotClient extends discord.Client{
    
    constructor(options: discord.ClientOptions){
        super(options)

        // add listener methods, to parent emitter.
        this.on('error', this.on_error);
    }

    on_error(err: Error) {
        logger.error(err.message);
    }
}