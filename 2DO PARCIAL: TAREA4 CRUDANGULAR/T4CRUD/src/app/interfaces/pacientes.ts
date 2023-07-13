export interface Ipacientes {
    sum:number;
    pacientes: Ipaciente[];
}
export interface Ipaciente {
    _id?: string;
    nombre:string;
    identificacion:number;
    telefono:number;
    direccion:string;
}
