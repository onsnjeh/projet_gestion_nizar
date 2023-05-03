 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MouvementsService {

  private baseUrl = 'http://localhost:8080/api/mouvements';

  constructor(private http: HttpClient) { }

  getMouvementsByDepot(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/depot/${id}`);
  }

  createMouvement(mouvement: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, mouvement);
  }

  updateMouvement(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMouvement(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMouvement(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
