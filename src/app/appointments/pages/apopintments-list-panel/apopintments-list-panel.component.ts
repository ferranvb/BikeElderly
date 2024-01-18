import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { AppointmentPanelComponent } from '../../components/appointment-panel/appointment-panel.component';
import { RouterLink } from '@angular/router';
import { DatePretyComponent } from '../../components/date-prety/date-prety.component';
import { FormsModule } from '@angular/forms';
import { AppointmentsService } from '../../appointments.service';

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
  

  ngOnInit(): void {
    
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US");
    console.log("Data FER", date); // e.g., 10/16/2023

    console.log("Data FER LOCALE", formattedDate); // e.g., 10/16/2023



    // this.appointmentsService.getAppointmentsByDate('25-01-2024')
    //   .subscribe(data => {
    //     console.log(data);
    //   });
    
  }

  creaData(): void {
    console.log('DateAux2',this.dateAux2);
    this.date = this.dateAux2;
    console.log('Date' ,this.date);
  }
  

  

  // weekday: string = this.dateToday.get

 }
