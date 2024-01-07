import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { Client} from './model/client';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private messageAux?: Message;
  
  private urlServer = environment.baseUrl;
  private http = inject(HttpClient);

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private messageService = inject(MessageService);

  public editClient:boolean = false;
  public clientSelected!: Client;

  constructor() { }

  /** GET clients from the server */
  getClients(): Observable<Client[]> {
    const url: string =this.urlServer + '/clients';
    console.log(url); 
    const clientsAux = this.http.get<Client[]>(url);
    return clientsAux;
      // .pipe(
      //   tap(response => console.log(response)),
      //   // tap(_ => this.log('fetched volunteers')),
      //   catchError(this.handleError<Ivoluntari[]>('getVolunteers', []))
      // );
  }

  /** GET volunteer by id. Will 404 if id not found */
  getClientId(id: number): Observable<Client> {

    const url = `${this.urlServer}/clients/${id}`;
  
    return this.http.get(url)
        .pipe (
          
        catchError(this.handleError<Client>(`getClient id=${id}`))
    );
  }

    /** POST: add a new client to the server */  
    addVolunteer(client: Client): Observable<Client> {
      const url = `${this.urlServer}/volunteers`;
      const body=JSON.stringify(client!);
      console.log(body)
      console.log('URL', url);
      return this.http.post<Client>(url, body, this.httpOptions).pipe(
        tap((newVolunteer: Client) => this.log(`added Client w/ id=${client.id}`)),
        tap((newVolunteer: Client) => console.log(`added Client`, body)),
        catchError(this.handleError<Client>('addClient'))
      );
    }
  
    /** DELETE: delete the client from the server */
    deleteVolunteer(client: Client | number): Observable<Client> {
      const id = typeof client === 'number' ? client : client.id;
      // const url = `${this.urlServer}/${id}`;
      const url = `${this.urlServer}/clients/${id}`;
  
  
      return this.http.delete<Client>(url, this.httpOptions).pipe(
        tap(_ => this.log(`deleted client id=${id}`)),
        tap(_ => console.log(`deleted client id=${id}`)),
        catchError(this.handleError<Client>('delete client'))
      );
    }
  
    /** PUT: update the client on the server */
    updateVolunteer(client: Client): Observable<any> {
      //console.log("updateVolunteer(...) ",volunteer);
      
      const url = `${this.urlServer}/clients/${client.id}`;
      const body=JSON.stringify(client!);
  
      return this.http.put(url, body, this.httpOptions).pipe(
        tap(_ => this.log(`updated client id=${client.id}`)),
        catchError(this.handleError<any>('update client'))
      );
    }


    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      // this.messageAux!.detail = message;
      // this.messageService.add(this.messageAux);
    }
}
