import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;  
  private user?: User ;

  constructor(private http: HttpClient) { }

  getCurrenrUser(): User|undefined {
    if ( !this.user) return undefined;

    return structuredClone(this.user);
  }

  login( email: string, password: string) : Observable<User> {
 
    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap( user =>  this.user = user),
        tap ( user => localStorage.setItem('token', user.id.toString() ))
      );
  }
  
  getUser(userId: number):  Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap( user =>  this.user = user),
        tap ( user => localStorage.setItem('token', user.id.toString() ))
      );
  }
  

}
