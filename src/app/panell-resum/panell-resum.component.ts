import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-panell-resum',
  standalone: true,
  imports: [
    CommonModule,CardModule, ButtonModule
  ],
  templateUrl: './panell-resum.component.html',
  styleUrl: './panell-resum.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanellResumComponent { }
