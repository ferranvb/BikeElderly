import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { Appointment } from '../../model/appointment';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'appointment-panel',
  standalone: true,
  imports: [
    CommonModule,PanelModule,ImageModule
  ],
  templateUrl: './appointment-panel.component.html',
  styleUrl: './appointment-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentPanelComponent {

  @Input() 
  appointment?: Appointment;

  ngAfterViewInit() {
    console.log(this.appointment);
  }


 }
