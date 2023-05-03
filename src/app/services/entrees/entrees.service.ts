import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Entree } from 'src/app/models/entree.model';

@Injectable({
  providedIn: 'root'
})
export class EntreesService{

    private entreeUrl = 'http://localhost:3000/entrees';

    constructor(private http: HttpClient) { }


   // Récupérer un utilisateur à partir de son identifiant
   getEntrees(entreeId: number): Observable<Entree> {
    const url = `${this.entreeUrl}/${entreeId}`;
    return this.http.get<Entree>(url);
  }

  getEntree(): Observable<Entree[]> {
    return this.http.get<Entree[]>(this.entreeUrl);
  }


  getEntreesById(id: number): Observable<Entree> {
    const url = `${this.entreeUrl}/${id}`;
    return this.http.get<Entree>(url);
  }



  addEntrees(entree: Entree): Observable<Entree> {
    return this.http.post<Entree>(this.entreeUrl, entree).pipe(
      tap((response: Entree) => {
        console.log('Utilisateur ajouté bloc service :', response);
      }),
      catchError((error: any) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
        return throwError(error);
      })
    );
  }


  updateEntrees(entree: Entree): Observable<any> {
    const url = `${this.entreeUrl}/${entree.id}`;
    return this.http.put(url, entree);
  }

  deleteEntrees(id: number): Observable<any> {
    const url = `${this.entreeUrl}/${id}`;
    return this.http.delete(url);
  }
}
