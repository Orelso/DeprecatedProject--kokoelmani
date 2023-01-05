import {NextFunction, Request, Response, Router} from 'express';
import {AnyCardCollection} from 'kokoelmani-shared/dist';
import {MtgCardModel} from '../schemas';


const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	try {
		// res.json(items);
		res.json(await MtgCardModel.find());
	} catch (err) {
		next(err);
	}
});

/**
 * GET /api/item get item or 404 error
 */
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
	try {
		/*const item = items.find((item) => item.id.toString() === req.params.id);
		if (!item) {
			return res.sendStatus(404);
		}
		res.json(item);*/
		const card = await MtgCardModel.findOne({id: req.params.id});
		if (!card) {
			return res.sendStatus(404);
		}
		res.json(card);
	} catch (err) {
		next(err);
	}
	return;
});

export const route = router;
