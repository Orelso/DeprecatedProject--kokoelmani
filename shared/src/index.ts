export function hello() {
    return "hello";
}

export interface ApiStatus {
    database: boolean;
    uptime: number;
}

export interface BaseCollection {
    type: 'card' | string
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

export interface DigimonCardDetails extends BaseCollection {
    name: string;
    type: string;
    color: string;
    stage: string;
    digi_type: string;
    attribute: string;
    level: number;
    play_cost: number,
    evolution_cost: number,
    cardrarity: string,
    artist: string,
    dp: number,
    cardnumber: number,
    maineffect: string,
    soureeffect: string,
    set_name: string,



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
export type AnyCardCollection =  MtgCollection  
// | PokemonCollection | DigimonCollection | YugiohCollection | OthertcgCollection | DigimonCardDetails

// export type AnyCollection = AnyCardCollection