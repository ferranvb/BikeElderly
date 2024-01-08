import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'appointment-panel',
  standalone: true,
  imports: [
    CommonModule,PanelModule
  ],
  templateUrl: './appointment-panel.component.html',
  styleUrl: './appointment-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentPanelComponent { }
