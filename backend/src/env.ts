import * as dotenv from 'dotenv';
import {setLogger, getConfigVariable} from '@avanio/variable-util';
import {env} from '@avanio/variable-util/dist/loaders/EnvConfigLoader';
import {DockerSecretsConfigLoader, FileConfigLoader} from '@avanio/variable-util-node';
import {logger} from './logger';

// load environment variables from .env file
dotenv.config();

setLogger(logger);

const dockerEnv = new DockerSecretsConfigLoader({fileLowerCase: true}).getLoader;
const fileEnv = new FileConfigLoader({fileName: './settings.json', type: 'json'}).getLoader;

let httpPortPromise: Promise<string> | undefined;
export function getHttpPort(): Promise<string> {
	if (!httpPortPromise) {
		httpPortPromise = getConfigVariable('PORT', [env(), fileEnv(), dockerEnv()], '3009', {showValue: true});
	}
	return httpPortPromise;
}

let mongoUrlPromise: Promise<string> | undefined;
export function getMongoUrl(): Promise<string> {
	if (!mongoUrlPromise) {
		mongoUrlPromise = getConfigVariable('MONGODB_URL', [env(), fileEnv(), dockerEnv()], 'mongodb://localhost:27017/cards', {sanitizeUrl: true});
	}
	return mongoUrlPromise;
}