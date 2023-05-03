 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private articlesUrl = 'http://localhost:3000/articles';

  private depotsUrl = 'http://localhost:3000/depots';


  constructor(private http: HttpClient) { }

  getArticlesByDepot(id: number): Observable<any> {
    return this.http.get(`${this.depotsUrl}/${id}`);
  }

  createArticle(article: Object): Observable<Object> {
    return this.http.post(`${this.articlesUrl}`, article);
  }

  updateArticle(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.articlesUrl}/${id}`, value);
  }

  deleteArticle(id: number): Observable<any> {
    return this.http.delete(`${this.articlesUrl}/${id}`, { responseType: 'text' });
  }

  getArticles(): Observable<any> {
     return this.http.get<Article[]>(this.articlesUrl);

  }

   // Récupère un Article par son id
   getById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.articlesUrl}/${id}`);
  }
}