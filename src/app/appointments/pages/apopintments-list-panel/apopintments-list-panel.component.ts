import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { AppointmentPanelComponent } from '../../components/appointment-panel/appointment-panel.component';
import { Router, RouterLink } from '@angular/router';
import { DatePretyComponent } from '../../components/date-prety/date-prety.component';
import { FormsModule } from '@angular/forms';
import { AppointmentsService } from '../../appointments.service';
import { Appointment } from '../../model/appointment';
import { CalendarModule } from 'primeng/calendar';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-apopintments-list-panel',
  standalone: true,
  imports: [
    CommonModule,AppointmentPanelComponent, RouterLink, DatePretyComponent,
    FormsModule,CalendarModule,ImageModule
  ],
  templateUrl: './apopintments-list-panel.component.html',
  styleUrl: './apopintments-list-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApopintmentsListPanelComponent implements OnInit {

  dateToday: Date = new Date();

  date?:Date;
  dateSeg?:Date;
  dateAux2?:Date;

  private appointmentsService = inject(AppointmentsService);
  private router = inject(Router);

  public appointmentsListByDate!: Appointment[];
  public appointmentsListByDateSeg!: Appointment[];
  

  ngOnInit(): void {
    
  }

  creaData(): void {
    
    this.date! = this.dateAux2!;
    this.dateSeg! = new Date(this.date.getTime());
    
    
    this.date.setHours(1);
    
    this.dateSeg!.setDate(this.dateSeg.getDate()+1);
    this.dateSeg!.setHours(1);
        
    this.getAppointmentListByDate();
    this.getAppointmentListByDateSeg();
  }


  getAppointmentList(): void { 
    this.appointmentsService.getAppointments()
       .subscribe( (response) => 
        { 
          this.appointmentsListByDate = response;}
        );
  }

  getAppointmentListByDate(): void { 
    this.appointmentsService.getAppointmentsByDate( this.date!)
       .subscribe( (response) => 
        { 
          this.appointmentsListByDate = response;
        }
        );
  }

  getAppointmentListByDateSeg(): void { 
    this.appointmentsService.getAppointmentsByDate( this.dateSeg!)
       .subscribe( (response) => 
        {
          this.appointmentsListByDateSeg = response;}
        );
  }

  goEdit(appointment: Appointment):void {
    if ( appointment){
      this.appointmentsService.appointmentSelected = appointment;
      this.appointmentsService.editAppointment = true;
      let idAux: string = '/app/appointments/new';
      this.router.navigate([idAux]);
    }
  }

  

  

  // weekday: string = this.dateToday.get

 }
