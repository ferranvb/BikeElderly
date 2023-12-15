import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomePageComponent } from './shared/homePage/homePage.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CareElderly';
}
