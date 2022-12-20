export function hello() {
    return "hello";
}

export interface ApiStatus {
    database: boolean;
    uptime: number;
}

export interface BaseCollection {
    type: 'card'
}


export interface PokemonCollection extends BaseCollection {
    type: 'card';
    id: number;
    category: string;
    language: string;
    newItem: string;
    set?: string;
    quantity: number;
    cost: number;
    condition: string;
}

export interface MtgCollection extends BaseCollection {
    type: 'card';
    id: number;
    category: string;
    language: string;
    newItem: string;
    set?: string;
    quantity: number;
    cost: number;
    condition: string;
}

export interface DigimonCollection extends BaseCollection {
    type: 'card';
    id: number;
    category: string;
    language: string;
    newItem: string;
    set?: string;
    quantity: number;
    cost: number;
    condition: string;
    
}

export interface YugiohCollection extends BaseCollection {
    type: 'card';
    id: number;
    category: string;
    language: string;
    newItem: string;
    set?: string;
    quantity: number;
    cost: number;
    condition: string;
   

}

export interface OthertcgCollection extends BaseCollection {
    type: 'card';
    id: number;
    category: string;
    language: string;
    newItem: string;
    set?: string;
    quantity: number;
    cost: number;
    condition: string;
    

}
export type AnyCardCollection = PokemonCollection | MtgCollection | DigimonCollection | YugiohCollection | OthertcgCollection

// export type AnyCollection = AnyCardCollection