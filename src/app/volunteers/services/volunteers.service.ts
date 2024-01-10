import { Injectable, OnInit, inject} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { catchError, map, of, tap } from 'rxjs';
import { Message, MessageService } from 'primeng/api';
import { Volunteer } from '../model/volunteer';
import { IVolunteer } from '../model/iVolunteer';

@Injectable({
  providedIn: 'root'
})

export class VolunteersService {

  private messageAux?: Message;
  
  private urlServer = environment.baseUrl;
  private http = inject(HttpClient);

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private messageService = inject(MessageService);

  public editVolunteer:boolean = false;
  public volunteerSelected!: Volunteer;
  
  constructor() {
   }
  
  // getVolunteers(): Observable<Ivoluntari[]>  { 
  //   return this.http.get<Ivoluntari[]>(this.urlServer);
  // }

   /** GET volunteers from the server */
   getVolunteers(): Observable<Volunteer[]> {
    const url: string =this.urlServer + '/volunteers';
    
    const iVolunteerAux = this.http.get<Volunteer[]>(url);
    return iVolunteerAux;

    //TODO manca control errors
  }

  getVolunteersMin(): Observable<IVolunteer[]> {
    const url: string =this.urlServer + '/volunteers';
    
    return this.http.get<IVolunteer[]>(url);
    
    //TODO manca control errors
  }


  /** GET volunteer by id. Return `undefined` when id not found */
  // getVolunteerNo404<Data>(id: number): Observable<iVolunteer> {
  
  //   const url = 'http://localhost:3000/volunteers/?id_voluntari=28';

  //   return this.http.get<iVolunteer[]>(url)
  //     .pipe(
  //       map(volunteer => volunteer[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} volunteer id=${id}`);
  //       }),
  //       catchError(this.handleError<iVolunteer>(`getVolunteer id=${id}`))
  //     );
  // }

  /** GET volunteer by id. Will 404 if id not found */
  getVolunteerId(id: number): Observable<Volunteer> {
    const url = `${this.urlServer}/volunteers/${id}`;
  
    return this.http.get<Volunteer>(url);
    
    //TODO manca control errors
  }
  /* GET volunteer whose name contains search term */
  searchVolunteer(term: string): Observable<Volunteer[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Volunteer[]>(`${this.urlServer}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found volunteers matching "${term}"`) :
         this.log(`no volunteers matching "${term}"`)),
      catchError(this.handleError<Volunteer[]>('searchVolunteers', []))
    );
  }

  /** POST: add a new volunteer to the server */  
  addVolunteer(volunteer: Volunteer): Observable<Volunteer> {
    const url = `${this.urlServer}/volunteers`;
    const body=JSON.stringify(volunteer!);
    console.log(body)
    console.log('URL', url);
    return this.http.post<Volunteer>(url, body, this.httpOptions).pipe(
      tap((newVolunteer: Volunteer) => this.log(`added volunteer w/ id=${newVolunteer.id}`)),
      tap((newVolunteer: Volunteer) => console.log(`added volunteer`, body)),
      catchError(this.handleError<Volunteer>('addVolunteer'))
    );
  }

  /** DELETE: delete the volunteer from the server */
  deleteVolunteer(volunteer: Volunteer | number): Observable<Volunteer> {
    const id = typeof volunteer === 'number' ? volunteer : volunteer.id;
    const url = `${this.urlServer}/volunteers/${id}`;


    return this.http.delete<Volunteer>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted volunteer id=${id}`)),
      tap(_ => console.log(`deleted volunteer id=${id}`)),
      catchError(this.handleError<Volunteer>('deleteVolunteer'))
    );
  }

  /** PUT: update the volunteer on the server */
  updateVolunteer(volunteer: Volunteer): Observable<any> {
    const url = `${this.urlServer}/volunteers/${volunteer.id}`;
    const body=JSON.stringify(volunteer!);

    return this.http.put(url, volunteer, this.httpOptions).pipe(
      tap(_ => this.log(`updated volunteer id=${volunteer.id}`)),
      catchError(this.handleError<any>('updateVolunteer'))
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




  


  
  // getVolunteers(): Ivoluntari[] {
  //   this._llistaVoluntaris = Array({
  //   "id_voluntari": 1205,
  //   "dni": "78540274A",
  //   nom: "Josep",
  //   "cognom1": "Curto",
  //   "cognom2" : "Mestre",
  //   "data_naixement" : "1992-04-23",
  //   "urlFoto"  : "./assets/images/jcurto.jpg",
  //   telefon_contacte : "977454548",
  //   Email : "jcurto@gmail.com",
  //   "associacio" : 0,
  //   actiu : true},
  //     {
  //       "id_voluntari": 1206,
  //       "dni": "78540275B",
  //       nom: "Josep2",
  //       "cognom1": "Curto2",
  //       "cognom2" : "Mestre2",
  //       "data_naixement" : "2000-04-18",
  //       "urlFoto"  : "./assets/images/jcurto2.jpg",
  //       telefon_contacte : "977454549",
  //       Email : "jcurto2@gmail.com",
  //       "associacio" : 0,
  //       actiu : true},
  //      {
  //       "id_voluntari": 1207,
  //       "dni": "78540276C",
  //       nom: "Josep3",
  //       "cognom1": "Curto3",
  //       "cognom2" : "Mestre3",
  //       "data_naixement" : "1998-02-25",
  //       "urlFoto"  : "./assets/images/jcurto3.jpg",
  //       telefon_contacte : "977454548",
  //       Email : "jcurto3@gmail.com",
  //       "associacio" : 0,
  //       actiu : true,},
  //     {
  //       "id_voluntari": 1208,
  //       "dni": "78540277D",
  //       nom: "Josep4",
  //       "cognom1": "Curto4",
  //       "cognom2" : "Mestre4",
  //       "data_naixement" : "1999-07-08",
  //       "urlFoto"  : "./assets/images/jcurto4.jpg",
  //       telefon_contacte : "977454548",
  //       Email : "jcurto4@gmail.com",
  //       "associacio" : 0,
  //       actiu : true,},     
  //       );

  //       return this._llistaVoluntaris;
  //     }  

      


