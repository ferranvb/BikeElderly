import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppointmentPanelComponent } from '../../components/appointment-panel/appointment-panel.component';
import { RouterLink } from '@angular/router';
import { DatePretyComponent } from '../../components/date-prety/date-prety.component';
import { FormsModule } from '@angular/forms';

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

  date?:Date = new Date();
  dateAux2?:Date;
  

  ngOnInit(): void {
    
  }

  creaData(): void {
    console.log('DateAux2',this.dateAux2);
    this.date = this.dateAux2;
    console.log('Date' ,this.date);
  }
  

  

  // weekday: string = this.dateToday.get

 }
