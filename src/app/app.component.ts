import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';

import { LayoutComponent } from './shared/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'CareElderly';
}
