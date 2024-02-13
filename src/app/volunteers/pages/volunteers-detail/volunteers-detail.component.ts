import { CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { VolunteersService } from '../../services/volunteers.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { ImageModule } from 'primeng/image';
import { SpiningComponent } from 'src/app/shared/components/spining/spining.component';
import { Volunteer } from '../../model/volunteer';
import { FieldsetModule } from 'primeng/fieldset';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-volunteer-detail',
  standalone: true,
  imports: [
    CommonModule,RouterLink,PanelModule,AvatarModule,ImageModule,SpiningComponent,
    FieldsetModule,ChipModule
  ],
  templateUrl: './volunteers-detail.component.html',
  styleUrl: './volunteers-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolunteersDetailComponent implements OnInit {
  
  private volunteersService = inject(VolunteersService);
  private route = inject(ActivatedRoute);
  public volunteer?: Volunteer; 
  
  @Input() viewMode = false;

  @Input() currentVolunteer: Volunteer = {
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
      .subscribe ( (data: Volunteer) => {
        this.volunteer = data;        
      });
  }

}
