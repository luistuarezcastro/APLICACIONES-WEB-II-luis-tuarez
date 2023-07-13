import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, audit } from 'rxjs';

import { Iplato, Iplatos } from '../../interfaces/platos';

@Injectable({
  providedIn: 'root'
})
export class platosService {

  //BASE_URL:string = 'http://localhost:2500/v1/inventory/api';
  BASE_URL:string = 'http://localhost:2500/tarea6/calorias/api';


  constructor(private http: HttpClient) { }

  getplatos(): Observable<Iplatos> {
    return this.http.get<Iplatos>(`${this.BASE_URL}/platos`);
  }
  createplato(platos:any):Observable<Iplato>{
    return this.http.post<Iplato>(`${this.BASE_URL}/platos`, platos);

  }
  deleteplato(id: string):Observable<Iplato>{
    return this.http.delete<Iplato>(`${this.BASE_URL}/platos/${id}`);
  }
  updateplato(id: string, platos:any):Observable<Iplato>{
    return this.http.put<Iplato>(`${this.BASE_URL}/platos/${id}`, platos);
  }

}
