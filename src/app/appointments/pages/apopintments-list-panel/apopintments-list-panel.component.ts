import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { AppointmentPanelComponent } from '../../components/appointment-panel/appointment-panel.component';
import { RouterLink } from '@angular/router';
import { DatePretyComponent } from '../../components/date-prety/date-prety.component';
import { FormsModule } from '@angular/forms';
import { AppointmentsService } from '../../appointments.service';
import { Appointment } from '../../model/appointment';

@Component({
  selector: 'app-apopintments-list-panel',
  standalone: true,
  imports: [
    CommonModule,AppointmentPanelComponent, RouterLink, DatePretyComponent,
    FormsModule
  ],
  templateUrl: './apopintments-list-panel.component.html',
  styleUrl: './apopintments-list-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApopintmentsListPanelComponent implements OnInit {

  dateToday: Date = new Date();

  date?:Date;
  dateAux2?:Date;

  private appointmentsService = inject(AppointmentsService);

  public appointmentsListByDate!: Appointment[];
  

  ngOnInit(): void {
    
    this.date = new Date();
    
    this.date.setMilliseconds(0);
    this.date.setHours(1);
    this.date.setMinutes(0);
    this.date.setSeconds(0);
    console.log("Date ISO ",this.date.toISOString());
    console.log("Date UTC ",this.date.toUTCString());
    
    this.getAppointmentListByDate();
    
  }

  creaData(): void {
    console.log('DateAux2',this.dateAux2);
    this.date = this.dateAux2;
    console.log('Date' ,this.date);
  }


  getAppointmentList(): void { 
    this.appointmentsService.getAppointments()
       .subscribe( (response) => 
        { console.log("getAppointmentList",response);
          this.appointmentsListByDate = response;}
        );
  }

  getAppointmentListByDate(): void { 
    this.appointmentsService.getAppointmentsByDate( this.date!)
       .subscribe( (response) => 
        { console.log("getAppointmentList",response);
          this.appointmentsListByDate = response;}
        );
  }
  

  

  // weekday: string = this.dateToday.get

 }
