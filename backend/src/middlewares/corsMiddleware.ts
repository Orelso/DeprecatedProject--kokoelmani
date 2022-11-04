import {Request, RequestHandler} from 'express';

const getOrigin = (req: Request): string | undefined => {
	const {origin} = req.headers;
	if (Array.isArray(origin)) {
		return origin[0];
	} else {
		return origin;
	}
};

// This applies CORS if origin matches to array (NOTE: does not deny access)
export const corsMiddleware: RequestHandler = (req, res, next) => {
	const method = req.method && req.method.toUpperCase && req.method.toUpperCase();
	const origin = getOrigin(req);
	if (origin) {
		res.set('Access-Control-Allow-Origin', '*');
		res.set('Access-Control-Allow-Credentials', 'true');
		res.set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH');
		res.set('Access-Control-Allow-Headers', 'Origin, Authorization, Content-Type, If-None-Match, If-Match');
		res.set('Vary', 'Origin');
	}
	if (method === 'OPTIONS') {
		res.setHeader('Content-Length', '0');
		res.status(204).end();
	} else {
		next();
	}
};