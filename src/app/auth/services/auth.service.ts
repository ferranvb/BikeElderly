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

  getCurrentUser(): User|undefined {
    if ( !this.user) return undefined;

    return structuredClone(this.user);
  }

  login( email: string, password: string) : Observable<User> {
 
    return this.http.get<User>(`${this.baseUrl}/users/2`)
      .pipe(
        tap( user =>  
          user.id===2? this.user = user: undefined
        ),
        tap ( user => localStorage.setItem('token', user.id.toString() ))
      );
  }
  
  // getUser(userId: number):  Observable<User> {
  //   return this.http.get<User>(`${this.baseUrl}/users/1`)
  //     .pipe(
  //       tap( user =>  this.user = user),
  //       tap( user => console.log(user.email)),
  //       tap ( user => localStorage.setItem('token', user.id.toString() ))
  //     );
  // }

  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('token');
  //   // Check whether the token is expired and return
  //   // true or false
  //   return !this.jwtHelper.isTokenExpired(token);
  // }
  

}
