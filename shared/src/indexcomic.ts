
export interface ApiStatus {
    database: boolean;
    uptime: number;
}

export interface BaseCollection {
    type: 'comic-book'
}


export interface ComicBookCollection extends BaseCollection {
    type: 'comic-book';
    id: number;
    category: string;
    newItem: string;
    set?: string;
    quantity: number;
    year: number;
    cost: number;
}



export type AnyComicBookCollection = ComicBookCollection

