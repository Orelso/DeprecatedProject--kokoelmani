// import * as fsPromise from 'fs/promises';
import * as fs from 'fs';
import * as bigjson from 'big-json';
import {openMongoConnection, setMongoConnectionUri} from './db';
import {getMongoUrl} from './env';
import {IMtgCard} from './interfaces/MtgCard';
import {MtgCardModel} from './schemas';

async function importAll() {
	setMongoConnectionUri(await getMongoUrl());
	await openMongoConnection();
	const stream = fs.createReadStream('import.json');
	const parser = bigjson.createParseStream();

	parser.on('data', async (cards: IMtgCard[]) => {
		// TODO: remove not existing from database
		for (const card of cards) {
			console.log(`save ${card.id}`);
			await MtgCardModel.updateOne({id: card.id}, card,{upsert: true});
		}
	});

	stream.pipe(parser);
}

// cd backend
// npx ts-node src/import.ts

importAll();
