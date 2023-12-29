import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Ivoluntari } from '../shared/ivoluntari';
import { VoluntarisService } from '../voluntaris.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-voluntaris-llista',
  standalone: true,
  imports: [
    CommonModule,TableModule,ButtonModule,TagModule, RouterLink, RouterOutlet
  ],
  templateUrl: './voluntaris-llista.component.html',
  styleUrl: './voluntaris-llista.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VoluntarisLlistaComponent implements OnInit {

  public voluntarisList: Ivoluntari[] = [];
  
  constructor(private service: VoluntarisService, private router: Router) { 
  
  }

  ngOnInit(): void {
    this.service.getVolunteers().subscribe(
      (voluntaris) => {
        console.log("Data: " + voluntaris);
        this.voluntarisList = voluntaris;
      }
    )
    
    // .subscribe((comments) => {
    //   this.comments = comments;
    // });
  }

  
  

 }
