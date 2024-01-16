import { Injectable, inject } from '@angular/core';
import { ClientsService } from '../clients/services/clients.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from './model/appointment';
import { Observable } from 'rxjs';


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
    return this.http.get<Appointment[]>(url);

    //TODO manca control errors
  }

}
