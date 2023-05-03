import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, catchError, throwError } from "rxjs";
import { Produit } from "../models/produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private produitUrl = 'http://localhost:3000/produits';

  constructor(private http: HttpClient) { }


   // Récupérer un utilisateur à partir de son identifiant
   getProduit(ProduitId: number): Observable<Produit> {
    const url = `${this.produitUrl}/${ProduitId}`;
    return this.http.get<Produit>(url);
  }

  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.produitUrl);
  }


  getProduitById(id: number): Observable<Produit> {
    const url = `${this.produitUrl}/${id}`;
    return this.http.get<Produit>(url);
  }



  addProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.produitUrl, produit).pipe(
      tap((response: Produit) => {
        console.log('Utilisateur ajouté bloc service :', response);
      }),
      catchError((error: any) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
        return throwError(error);
      })
    );
  }


  updateProduit(Produit: Produit): Observable<Produit> {
    const url = `${this.produitUrl}/${Produit.id}`;
    return this.http.put<Produit>(url, Produit);
  }

  deleteProduit(id: number): Observable<Produit> {
    const url = `${this.produitUrl}/${id}`;
    return this.http.delete<Produit>(url);
  }}
