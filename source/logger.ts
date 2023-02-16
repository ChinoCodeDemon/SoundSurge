import winston from 'winston';

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console(),
        // in case the bot crashes
        new winston.transports.File({
            filename: 'error.log',
            level: 'error'
        })
    ]
})