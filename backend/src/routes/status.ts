import {NextFunction, Request, Response, Router} from 'express';
import {ApiStatus} from 'kokoelmani-shared/dist';


const router = Router();

/**
 * GET /api/status (public)
 * TODO: build collection of public data which shows basic status of db connection and related info
 */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
	try {
		const now = new Date().getTime();
		const uptime = Math.ceil(process.uptime() * 1000);
        const payload: ApiStatus = {
            database: true /*  isMongoDbOnline(), */,
            uptime: Math.ceil((now - uptime) / 1000),
        }
        res.json(payload);
	} catch (err) {
		next(err);
	}
});

export const route = router;