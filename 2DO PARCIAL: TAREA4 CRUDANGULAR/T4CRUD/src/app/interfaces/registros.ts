export interface Iregistros {
    sum:number;
    registros: Iregistro[];
}
export interface Iregistro {
    _id?: string;
    descripcion:string;
    ID_Plato:string;
    ID_Paciente:string;
    fecha:string;
    hora:string;
    N_Calorias:string;
    N_Porciones:string;
}
