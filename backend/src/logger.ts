import * as winston from 'winston';

const alignColorsAndTime = winston.format.combine(
	winston.format.colorize({
		all: true,
	}),
	winston.format.timestamp({
		format: 'YYYY-MM-DD HH:mm:ss.SSS',
	}),
	winston.format.printf((info) => `[${info.timestamp}] [${info.level}] - ${info.message}`),
);

const getLoggerLevel = (): string => {
	switch (process.env.NODE_ENV) {
		case 'test':
			return 'emerg';
		case 'development':
			return 'debug';
		default:
			return 'info';
	}
};

const logConfiguration = {
	transports: [
		new winston.transports.Console({
			level: getLoggerLevel(),
			format: alignColorsAndTime,
		}),
	],
};
export const logger = winston.createLogger(logConfiguration);
logger.debug('logger loaded');
