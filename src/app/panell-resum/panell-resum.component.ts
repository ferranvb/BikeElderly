import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-panell-resum',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './panell-resum.component.html',
  styleUrl: './panell-resum.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanellResumComponent { }
