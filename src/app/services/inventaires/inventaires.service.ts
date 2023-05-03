 


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventairesService {

  private inventairesUrl = 'http://localhost:3000/inventaires';

  private depotsUrl = 'http://localhost:3000/depots';


  constructor(private http: HttpClient) { }

  getInventairesByDepot(id: number): Observable<any> {
    return this.http.get(`${this.depotsUrl}/${id}`);
  }

  createInventaire(inventaire: Object): Observable<Object> {
    return this.http.post(`${this.inventairesUrl}`, inventaire);
  }

  updateInventaire(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.inventairesUrl}/${id}`, value);
  }

  deleteInventaire(id: number): Observable<any> {
    return this.http.delete(`${this.inventairesUrl}/${id}`, { responseType: 'text' });
  }

  getInventaire(id: number): Observable<any> {
    return this.http.get(`${this.inventairesUrl}/${id}`);
  }
}
