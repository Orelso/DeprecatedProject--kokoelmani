export function hello() {
    return "hello";
}

export interface ApiStatus {
    database: boolean;
    uptime: number;
}

export interface BaseCollection {
    type: 'pokemoncard' | 'mtgcard' | 'digimoncard' | 'yugiohcard' | 'othertcgcard'
}


export interface PokemonCollection extends BaseCollection {
    type: 'pokemoncard';
    id: number;
    category: string;
    newItem: string;
    set?: string;
    quantity: number;
    year: number;
    cost: number;
    condition: string;
}

export interface MtgCollection extends BaseCollection {
    type: 'mtgcard';
    id: number;
    category: string;
    newItem: string;
    set?: string;
    quantity: number;
    year: number;
    cost: number;
    condition: string;

}

export interface DigimonCollection extends BaseCollection {
    type: 'digimoncard';
    id: number;
    category: string;
    newItem: string;
    set?: string;
    quantity: number;
    year: number;
    cost: number;
    condition: string;
}

export interface YugiohCollection extends BaseCollection {
    type: 'yugiohcard';
    id: number;
    category: string;
    newItem: string;
    set?: string;
    quantity: number;
    year: number;
    cost: number;
    condition: string;

}

export interface OthertcgCollection extends BaseCollection {
    type: 'othertcgcard';
    id: number;
    category: string;
    newItem: string;
    set?: string;
    quantity: number;
    year: number;
    cost: number;
    condition: string;

}
export type AnyCardCollection = PokemonCollection | MtgCollection | DigimonCollection | YugiohCollection | OthertcgCollection

// export type AnyCollection = AnyCardCollection