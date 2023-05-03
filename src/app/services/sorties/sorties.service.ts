import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Sortie } from 'src/app/models/sortie.model';

@Injectable({
  providedIn: 'root'
})
export class SortiesService {

  private SortieUrl = 'http://localhost:3000/Sorties';

  constructor(private http: HttpClient) { }


 // Récupérer un utilisateur à partir de son identifiant
 getEntrees(SortieId: number): Observable<Sortie> {
  const url = `${this.SortieUrl}/${SortieId}`;
  return this.http.get<Sortie>(url);
}

getSortie(): Observable<Sortie[]> {
  return this.http.get<Sortie[]>(this.SortieUrl);
}


getSortiesById(id: number): Observable<Sortie> {
  const url = `${this.SortieUrl}/${id}`;
  return this.http.get<Sortie>(url);
}



addSorties(Sortie: Sortie): Observable<Sortie> {
  return this.http.post<Sortie>(this.SortieUrl, Sortie).pipe(
    tap((response: Sortie) => {
      console.log('Utilisateur ajouté bloc service :', response);
    }),
    catchError((error: any) => {
      console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
      return throwError(error);
    })
  );
}


updateSorties(Sortie: Sortie): Observable<Sortie> {
  const url = `${this.SortieUrl}/${Sortie.id}`;
  return this.http.put<Sortie>(url, Sortie);
}

deleteSorties(id: number): Observable<Sortie> {
  const url = `${this.SortieUrl}/${id}`;
  return this.http.delete<Sortie>(url);
}}
