import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';


import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';


import { RouterLink, RouterOutlet } from '@angular/router';
import { iAppointment } from '../interface/iAppointment';
import { AppointmentsService } from '../appointments.service';

@Component({
  selector: 'appointments-list',
  standalone: true,
  imports: [
    CommonModule,TableModule,ButtonModule,TagModule, RouterLink, RouterOutlet
  ],
  templateUrl: './appointments-list.component.html',
  styleUrl: './appointments-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentListComponent {

  private _appointmentList?: iAppointment[];
  
  constructor(private appointmentService: AppointmentsService) { }

  public get appointmentList(): Array<iAppointment> {
    this._appointmentList = this.appointmentService.appointmentListAux;
    return this._appointmentList;
  }
 
  // getSeverity(status!: any) { 
  //   return 'warning';
  // }
 }
