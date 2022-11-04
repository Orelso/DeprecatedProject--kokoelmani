
export interface ApiStatus {
    database: boolean;
    uptime: number;
}

export interface BaseCollection {
    type: 'toy'
}


export interface ToyCollection extends BaseCollection {
    type: 'toy';
    id: number;
    category: string;
    newItem: string;
    set?: string;
    quantity: number;
    year: number;
    cost: number;
}



export type AnyToyCollection = ToyCollection
