import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, audit } from 'rxjs';


import { Ipaciente, Ipacientes } from '../../interfaces/pacientes';



@Injectable({
  providedIn: 'root'
})
export class pacientesService {

  // BASE_URL:string = 'http://localhost:2500/v1/inventory/api';
  BASE_URL:string = 'http://localhost:2500/tarea6/calorias/api';

  constructor(private http: HttpClient) { }

  getpacientes(): Observable<Ipacientes> {
    return this.http.get<Ipacientes>(`${this.BASE_URL}/pacientes`);
  }
  // getpaciente(id: string):Observable<Ipaciente>{
  //   return this.http.get<Ipaciente>(`${this.BASE_URL}/paciente/${id}`);
  // }
  createpaciente(paciente:any):Observable<Ipaciente>{
    return this.http.post<Ipaciente>(`${this.BASE_URL}/pacientes`, paciente);

  }
  deletepaciente(id: string):Observable<Ipaciente>{
    return this.http.delete<Ipaciente>(`${this.BASE_URL}/pacientes/${id}`);
  }
  updatepacienteid(id: string, paciente:any):Observable<Ipaciente>{
    return this.http.put<Ipaciente>(`${this.BASE_URL}/pacientes/${id}`, paciente);
  }
}
