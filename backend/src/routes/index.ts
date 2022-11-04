import {Router} from 'express';
import {route as statusRoute} from './status';
import {route as itemRoute} from './item';
const router = Router();

router.use('/status', statusRoute);
router.use('/item', itemRoute);

export const routes = router;