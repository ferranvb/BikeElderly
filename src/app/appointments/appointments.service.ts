import { Injectable, inject } from '@angular/core';
import { ClientsService } from '../clients/services/clients.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from './model/appointment';
import { Observable, map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private urlServer = environment.baseUrl;
  private http = inject(HttpClient);

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public editAppointment:boolean = false;
  public appointmentSelected!: Appointment;
  

  constructor() { }

  getAppointments(): Observable<Appointment[]> {
    const url: string =this.urlServer + '/appointments';
    console.log(url);
    
    return this.http.get<Appointment[]>(url)
      .pipe( 
        map( appoint=> appoint.sort(
        (x:Appointment,y:Appointment) => 
          new Date(x.startTime!).getTime() > new Date(y.startTime!).getTime() ? 1 : -1
      )));

    //TODO manca control errors
  }

  getAppointmentsByDate(date: Date):  Observable<Appointment[]> {
    const url: string =this.urlServer + '/appointments?day=' + date.toISOString();
    console.log(url);
    return this.http.get<Appointment[]>(url)
        .pipe( 
          map( appoint=> appoint.sort(
          (x:Appointment,y:Appointment) => 
            new Date(x.startTime!).getTime() > new Date(y.startTime!).getTime() ? 1 : -1
        )));
  }

  /** POST: add a new Appointment to the server */  
  addAppointment(appointment: Appointment): Observable<Appointment> {
    const url = `${this.urlServer}/appointments`;
    const body=JSON.stringify(appointment!);
    console.log(body)
    console.log('URL', url);
    return this.http.post<Appointment>(url, body, this.httpOptions).pipe(
      // tap((newVolunteer: Appointment) => this.log(`added volunteer w/ id=${newVolunteer.id}`)),
      tap((newVolunteer: Appointment) => console.log(`added volunteer`, body)),
      // catchError(this.handleError<Appointment>('addVolunteer'))
    );
  }

}
