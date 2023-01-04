import {NextFunction, Request, Response, Router} from 'express';
import {AnyCardCollection} from 'kokoelmani-shared/dist';
import {MtgCardModel} from '../schemas';

const items: AnyCardCollection[] = [
	{
		id: 0,
		category: 'Pokemon',
		language: 'English',
		newItem: 'Charizard',
		set: 'Base',
		quantity: 0,
		cost: 100000,
		condition: 'new',
		type: 'card',
	},
	{
		id: 1,
		category: 'MTG',
		language: 'English',
		newItem: 'Black Lotus',
		set: 'Alpha',
		quantity: 1,
		cost: 475345,
		condition: 'new',
		type: 'card',
	},
	{
		id: 2,
		category: 'Digimon',
		language: 'English',
		newItem: 'Angelmon',
		set: 'Alpha',
		quantity: 2,
		cost: 40,
		condition: 'new',
		type: 'card',
	},
	{
		id: 3,
		category: 'Yu-Gi-Oh',
		language: 'English',
		newItem: 'Dark Magician',
		set: 'Alpha',
		quantity: 2,
		cost: 20,
		condition: 'new',
		type: 'card',
	},
];

const router = Router();

/**
 * GET /api/item gets list of items
 */
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

router.post('/', (req: Request, res: Response, next: NextFunction) => {
	try {
		items.push({...req.body, id: items.slice(-1)[0].id + 1});
		res.end();
	} catch (err) {
		next(err);
	}
	return;
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
	try {
		const itemIdex = items.findIndex((item) => item.id.toString() === req.params.id);
		if (itemIdex !== -1) {
			items.splice(itemIdex, 1);
		}
		res.end();
	} catch (err) {
		next(err);
	}
	return;
});

export const route = router;
