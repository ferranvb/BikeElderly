import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';

import { VoluntarisLlistaComponent } from './voluntaris/voluntaris-llista/voluntaris-llista.component';
import { LayoutComponent } from './shared/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterOutlet, LayoutComponent,VoluntarisLlistaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CareElderly';
}
