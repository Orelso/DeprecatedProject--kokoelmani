export interface ImageUris {
	small: string;
	normal: string;
	large: string;
	png: string;
	art_crop: string;
	border_crop: string;
}

export interface Legalities {
	standard: string;
	future: string;
	historic: string;
	gladiator: string;
	pioneer: string;
	explorer: string;
	modern: string;
	legacy: string;
	pauper: string;
	vintage: string;
	penny: string;
	commander: string;
	brawl: string;
	historicbrawl: string;
	alchemy: string;
	paupercommander: string;
	duel: string;
	oldschool: string;
	premodern: string;
}

export interface Prices {
	usd: string;
	usd_foil: string;
	usd_etched?: any;
	eur: string;
	eur_foil: string;
	tix: string;
}

export interface RelatedUris {
	gatherer: string;
	tcgplayer_infinite_articles: string;
	tcgplayer_infinite_decks: string;
	edhrec: string;
}

export interface IMtgCard {
	object: string;
	id: string;
	oracle_id: string | null;
	multiverse_ids: number[];
	mtgo_id: number;
	mtgo_foil_id: number;
	tcgplayer_id: number;
	cardmarket_id: number;
	name: string;
	lang: string;
	released_at: string;
	uri: string;
	scryfall_uri: string;
	layout: string;
	highres_image: boolean;
	image_status: string;
	image_uris: ImageUris;
	mana_cost: string;
	cmc: number;
	type_line: string;
	oracle_text: string;
	power: string;
	toughness: string;
	colors: string[];
	color_identity: string[];
	keywords: any[];
	legalities: Legalities;
	games: string[];
	reserved: boolean;
	foil: boolean;
	nonfoil: boolean;
	finishes: string[];
	oversized: boolean;
	promo: boolean;
	reprint: boolean;
	variation: boolean;
	set_id: string;
	set: string;
	set_name: string;
	set_type: string;
	set_uri: string;
	set_search_uri: string;
	scryfall_set_uri: string;
	rulings_uri: string;
	prints_search_uri: string;
	collector_number: string;
	digital: boolean;
	rarity: string;
	flavor_text: string;
	card_back_id: string;
	artist: string;
	artist_ids: string[];
	illustration_id: string;
	border_color: string;
	frame: string;
	full_art: boolean;
	textless: boolean;
	booster: boolean;
	story_spotlight: boolean;
	edhrec_rank: number;
	penny_rank: number;
	prices: Prices;
	related_uris: RelatedUris;
}
