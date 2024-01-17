import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Good } from '../model/good';
import { IGood } from '../model/iGood';
import { Observable, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  @Injectable({
    providedIn: 'root'
  })

  
    // private messageAux?: Message;
    
    private urlServer = environment.baseUrl;
    private http = inject(HttpClient);
  
    private httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    // private messageService = inject(MessageService);
  
    public editClient:boolean = false;
    public goodSelected!: Good;
    public iGoodSelected!: IGood;
  
    constructor() { }
  
    /** GET clients from the server */
    getGoods(): Observable<Good[]> {
      const url: string =this.urlServer + '/goods';
      console.log(url); 
      return this.http.get<Good[]>(url);
      
      //TODO manca control errors
    }
  
    // getClientsMin(): Observable<IClient[]> {
    //   const url: string =this.urlServer + '/clients';
      
    //   return this.http.get<IClient[]>(url);
      
    //   //TODO manca control errors
    // }
  
    /** GET volunteer by id. Will 404 if id not found */
    getGoodId(id: number): Observable<Good> {
  
      const url = `${this.urlServer}/goods/${id}`;
    
      return this.http.get(url);
  
      //TODO manca control errors
    }
  
    /** POST: add a new client to the server */  
    addGood(good: Good): Observable<Good> {
      const url = `${this.urlServer}/goods`;
      const body=JSON.stringify(good!);
      console.log(body)
      console.log('URL', url);
      return this.http.post<Good>(url, body, this.httpOptions);
  
      //TODO manca control errors
  
      //   .pipe(
      //   tap((newVolunteer: Client) => this.log(`added Client w/ id=${client.id}`)),
      //   tap((newVolunteer: Client) => console.log(`added Client`, body)),
      //   catchError(this.handleError<Client>('addClient'))
      // );
    }
    
    /** DELETE: delete the client from the server */
    deleteGood(good: Good | number): Observable<Good> {
      const id = typeof good === 'number' ? good : good.id;
      // const url = `${this.urlServer}/${id}`;
      const url = `${this.urlServer}/goods/${id}`;
  
  
      return this.http.delete<Good>(url, this.httpOptions).pipe(
        tap(_ => this.log(`deleted client id=${id}`)),
        tap(_ => console.log(`deleted client id=${id}`)),
        // catchError(this.handleError<Good>('delete good'))
      );
    }
    
    /** PUT: update the client on the server */
    updateGood(good: Good): Observable<any> {     
      const url = `${this.urlServer}/clients/${good.id}`;
      const body=JSON.stringify(good!);
  
      return this.http.put(url, body, this.httpOptions);
  
      //TODO manca control errors
  
      //   .pipe(
      //   tap(_ => this.log(`updated client id=${client.id}`)),
      //   catchError(this.handleError<any>('update client'))
      // );
    }

    getGoodsMin(): Observable<IGood[]> {
      const url: string = this.urlServer + '/goods';
    
      return this.http.get<Good[]>(url).pipe(
        map(goods => goods.map(goods => this.mapToIGood(goods)))
      );
    }
  
    public mapToIGood(good: Good): IGood {
      // const full_name = `${client.nom} ${client.cognom1} ${client.cognom2}`;
      return {
        id: good.id,
        full_name: good.name
      };
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