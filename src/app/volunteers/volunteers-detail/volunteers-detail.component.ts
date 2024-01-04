import { CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { VolunteersService } from '../volunteers.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { iVolunteer } from '../interface/iVolunteer';

import { PanelModule } from 'primeng/panel';


@Component({
  selector: 'app-volunteer-detail',
  standalone: true,
  imports: [
    CommonModule,RouterLink,PanelModule
  ],
  templateUrl: './volunteers-detail.component.html',
  styleUrl: './volunteers-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolunteersDetailComponent implements OnInit {
  
  private volunteersService = inject(VolunteersService);
  //private router = inject(Router);
  private route = inject(ActivatedRoute);
  public volunteer?: iVolunteer; 
  loaded: boolean = false;
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.getVolunteer(id);
    }
  } 
  

  getVolunteer(id: string): void {
    console.log('id : ' ,id);
    this.volunteersService.getVolunteerId(+id)
      .subscribe ( (data: iVolunteer) => {
        this.volunteer = data;        
      });
     this.loaded = true;    
  }

}
