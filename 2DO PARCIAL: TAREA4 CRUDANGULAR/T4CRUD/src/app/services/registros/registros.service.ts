import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, audit } from 'rxjs';

import { Iregistro, Iregistros } from '../../interfaces/registros';


@Injectable({
  providedIn: 'root'
})
export class registrosService {

  //BASE_URL:string = 'http://localhost:2500/v1/inventory/api';
  BASE_URL:string = 'http://localhost:2500/tarea6/calorias/api';


  constructor(private http: HttpClient) { }

  getregistros(): Observable<Iregistros> {
    return this.http.get<Iregistros>(`${this.BASE_URL}/registros`);
  }
  createregistro(registros:any):Observable<Iregistro>{
    return this.http.post<Iregistro>(`${this.BASE_URL}/registros`, registros);

  }
  deleteregistro(id: string):Observable<Iregistro>{
    return this.http.delete<Iregistro>(`${this.BASE_URL}/registros/${id}`);
  }
  updateregistro(id: string, registros:any):Observable<Iregistro>{
    return this.http.put<Iregistro>(`${this.BASE_URL}/registros/${id}`, registros);
  }

}
