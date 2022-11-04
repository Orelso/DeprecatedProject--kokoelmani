import {NextFunction, Request, Response, Router} from 'express';
import {AnyCardCollection} from 'kokoelmani-shared/dist';

const items: AnyCardCollection[] =  [
	  {
		'type': 'pokemoncard',
		"id": 100,
		"category": "Pokemon",
		"newItem": "Yoshi's birthday bash",
		"set": "Base",
		"quantity": 2,
		"cost": 475345,
		"year": 1990,
	  },
	  {
		'type': 'mtgcard',
		"id": 101,
		"category": "mtg",
		"newItem": "Yoshi's birthday bash",
		"set": "Alpha",
		"quantity": 2,
		"cost": 475345,
		"year": 1992,
	  },
	  {
		'type': 'digimoncard',
		"id": 102,
		"category": "digimon",
		"newItem": "Yoshi's birthday bash",
		"set": "Alpha",
		"quantity": 2,
		"cost": 475345,
		"year": 1992,
	  },
	  {
		'type': 'yugiohcard',
		"id": 103,
		"category": "digimon",
		"newItem": "Yoshi's birthday bash",
		"set": "Alpha",
		"quantity": 2,
		"cost": 475345,
		"year": 1992,
	  },
	  
	]
  


const router = Router();

/**
 * GET /api/item gets list of items
 */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
	try {
        res.json(items)
	} catch (err) {
		next(err);
	}
});

/**
 * GET /api/item get item or 404 error
 */
 router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
	try {
		
		const item = items.find((item) => item.id.toString() === req.params.id);
		if (! item) {
			return res.sendStatus(404);
		}
        res.json(item)
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