import * as fsPromise from 'fs/promises';
import {openMongoConnection, setMongoConnectionUri} from './db';
import {getMongoUrl} from './env';
import {IMtgCard} from './interfaces/MtgCard';
import {MtgCardModel} from './schemas';

async function importAll() {
	setMongoConnectionUri(await getMongoUrl());
	await openMongoConnection();
	const cards = JSON.parse((await fsPromise.readFile('import.json')).toString()) as IMtgCard[];
    await MtgCardModel.deleteMany();
	for (const card of cards) {
		await new MtgCardModel(card).save();
	}
}

// cd backend
// npx ts-node src/import.ts

importAll();
