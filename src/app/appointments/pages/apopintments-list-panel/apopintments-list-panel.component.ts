import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppointmentPanelComponent } from '../../components/appointment-panel/appointment-panel.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-apopintments-list-panel',
  standalone: true,
  imports: [
    CommonModule,AppointmentPanelComponent, RouterLink
  ],
  templateUrl: './apopintments-list-panel.component.html',
  styleUrl: './apopintments-list-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApopintmentsListPanelComponent implements OnInit {
  
  dateToday: Date = new Date();
  

  ngOnInit(): void {
    
  }

  

  // weekday: string = this.dateToday.get

 }
