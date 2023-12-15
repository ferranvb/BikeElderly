import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LlistaCitesComponent } from 'src/app/cites/llista-cites/llista-cites.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    CommonModule,LlistaCitesComponent
  ],
  templateUrl: './aboutPage.component.html',
  styleUrl: './aboutPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent { 

  data: Date=  new Date("2023-12-16 12:30");
  titol: string = "Hola"
  
  Data() {
    return this.data;  
  }
  Titol() {
    return this.titol; 
  }
}