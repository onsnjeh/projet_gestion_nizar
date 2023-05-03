import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { Article } from 'src/app/models/article';
import { Depot } from 'src/app/models/depot';

@Injectable({
  providedIn: 'root'
})
export class DepotsService {



  private depotsUrl = 'http://localhost:3000/depots';

  constructor(private http: HttpClient) { }


   // Récupérer un utilisateur à partir de son identifiant
   getDepot(depotId: number): Observable<Depot> {
    const url = `${this.depotsUrl}/${depotId}`;
    return this.http.get<Depot>(url);
  }

  getDepots(): Observable<Depot[]> {
    return this.http.get<Depot[]>(this.depotsUrl);
  }


  getDepotById(id: number): Observable<Depot> {
    const url = `${this.depotsUrl}/${id}`;
    return this.http.get<Depot>(url);
  }



  addDepot(depot: Depot): Observable<Depot> {
    return this.http.post<Depot>(this.depotsUrl, depot).pipe(
      tap((response: Depot) => {
        console.log('Utilisateur ajouté bloc service :', response);
      }),
      catchError((error: any) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
        return throwError(error);
      })
    );
  }


  updateDepot(depot: Depot): Observable<any> {
    const url = `${this.depotsUrl}/${depot.id}`;
    return this.http.put(url, depot);
  }

  deleteDepot(id: number): Observable<any> {
    const url = `${this.depotsUrl}/${id}`;
    return this.http.delete(url);
  }

  affecterArticleAunDepot(depot: Depot, article: Article): Observable<Depot> {
    depot.articles.push(article);
    const url = `${this.depotsUrl}/${depot.id}`;
    return this.http.put<Depot>(url, depot);
  }
}
