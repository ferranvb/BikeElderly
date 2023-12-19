import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomePageComponent } from './shared/homePage/homePage.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LayoutpageComponent } from './shared/layout/layoutpage/layoutpage.component';
import { VoluntarisLlistaComponent } from './voluntaris/voluntaris-llista/voluntaris-llista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterOutlet, LayoutpageComponent,VoluntarisLlistaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CareElderly';
}
