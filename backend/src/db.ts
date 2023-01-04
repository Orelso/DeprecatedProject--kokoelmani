/* eslint-disable no-async-promise-executor */
import * as mongoose from 'mongoose';
// import {closeWatchers, startWatchers} from './dbWatch';
import {sleep} from './lib/dateUtil';
import {logger} from './logger';
import './schemas';
import {isError} from './lib/errorUtil';

let mongodbAlive = false;

export const getMongoStatus = (): boolean => {
	return mongodbAlive;
};

let retry = true;
export function cancelMongoRetry(): void {
	retry = false;
}

mongoose.connection.on('disconnected', () => {
	logger.warn('mongodb: default disconnected');
	mongodbAlive = false;
});

mongoose.connection.on('reconnect', () => {
	logger.info('mongodb: default reconnect');
});

mongoose.connection.on('connected', () => {
	logger.info('mongodb: default connected');
	mongodbAlive = true;
});

let mongoUri: string | undefined;
export function setMongoConnectionUri(uri: string): void {
	logger.debug(`mongodb: set connection uri`);
	mongoUri = uri;
}

let connectionPromise: Promise<void> | undefined;
export function openMongoConnection(): Promise<void> {
	retry = true;
	if (!connectionPromise) {
		connectionPromise = new Promise(async (resolve, reject) => {
			while (retry) {
				try {
					if (!mongoUri) {
						return reject(new Error('no mongo URI defined'));
					}
					logger.debug('mongodb: connecting');
					await mongoose.connect(mongoUri);
					return resolve();
				} catch (err) {
					mongodbAlive = false;
					if (isError(err)) {
						logger.error(`mongodb: ${err.message}`);
					} else {
						logger.error(`Unexpected error ${JSON.stringify(err)}`);
					}
					await sleep(5000);
				}
			}
		});
	}
	return connectionPromise;
}

export const closeMongoConnection = async (): Promise<void> => {
	cancelMongoRetry();
	await mongoose.connection.close();
	connectionPromise = undefined;
	mongodbAlive = false;
};
