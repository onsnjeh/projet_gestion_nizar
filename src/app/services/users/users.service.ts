import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';


import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }


   // Récupérer un utilisateur à partir de son identifiant
   getUser(userId: number): Observable<User> {
    const url = `${this.usersUrl}/${userId}`;
    return this.http.get<User>(url);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }


  getUserById(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user).pipe(
      tap((response: User) => {
        console.log('Utilisateur ajouté bloc service :', response);
      }),
      catchError((error: any) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
        return throwError(error);
      })
    );
  }
  

  updateUser(user: User): Observable<any> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.put(url, user);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url);
  }

}