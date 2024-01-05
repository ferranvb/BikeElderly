import { CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { VolunteersService } from '../volunteers.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { iVolunteer } from '../interface/iVolunteer';

import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { ImageModule } from 'primeng/image';
import { SpiningComponent } from 'src/app/shared/components/spining/spining.component';


@Component({
  selector: 'app-volunteer-detail',
  standalone: true,
  imports: [
    CommonModule,RouterLink,PanelModule,AvatarModule,ImageModule,SpiningComponent
  ],
  templateUrl: './volunteers-detail.component.html',
  styleUrl: './volunteers-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolunteersDetailComponent implements OnInit {
  
  private volunteersService = inject(VolunteersService);
  private route = inject(ActivatedRoute);
  public volunteer?: iVolunteer; 
  
  @Input() viewMode = false;

  @Input() currentVolunteer: iVolunteer = {
    actiu: true
  };

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
  }

}
