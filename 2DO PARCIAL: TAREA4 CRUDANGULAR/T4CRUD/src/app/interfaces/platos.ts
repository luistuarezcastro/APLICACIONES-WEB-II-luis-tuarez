export interface Iplatos {
    sum: number;
    platos: Iplato[];
}

export interface Iplato {
    _id?: string;
    nombre: string;
    calorias: number;
}
