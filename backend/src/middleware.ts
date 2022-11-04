import {Express, urlencoded, json} from 'express';
import {corsMiddleware} from './middlewares/corsMiddleware';
import {routes} from './routes';

export const setupExpress = (app: Express) => {
	// express settings
	app.set('etag', false);
	app.disable('x-powered-by');
	// body parsers
	app.use(urlencoded({extended: false}));
	app.use(json());
	// apply middlewares here
	app.use(corsMiddleware);
	// routes
	app.use('/api', routes);
};