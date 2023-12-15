import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-alta-cita',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './alta-cita.component.html',
  styleUrl: './alta-cita.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AltaCitaComponent { }
