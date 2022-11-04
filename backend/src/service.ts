import * as express from 'express';
import {hello} from 'kokoelmani-shared/dist';
import {Server} from 'http';
import {setupExpress} from './middleware';

const app = express();

let server: undefined | Server;
export const startExpress = (port: string | number): Promise<express.Express> => {
    setupExpress(app);
	console.log(hello());
	return new Promise((resolve, reject) => {
		if (!app) {
			reject(new Error('no express instance found'));
		} else {
			server = app.listen(port, () => {
				resolve(app);
			});
		}
	});
};

export const stopExpress = (): Promise<void> => {
	return new Promise((resolve) => {
		if (server) {
			server.close(() => resolve());
		} else {
			resolve();
		}
	});
};

export const startAll = async (): Promise<void> => {
	await startExpress(3009);
	console.log(`backend listening on port ${3009} [${process.env.NODE_ENV}]`);
	// start mongo etc here if mongo is not required to be up before express
};

// tslint:disable: no-floating-promises
if (process.env.NODE_ENV !== 'test') {
	startAll();
}