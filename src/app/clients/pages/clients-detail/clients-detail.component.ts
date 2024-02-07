import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { FieldsetModule } from 'primeng/fieldset';
import { ImageModule } from 'primeng/image';
import { PanelModule } from 'primeng/panel';
import { SpiningComponent } from 'src/app/shared/components/spining/spining.component';
import { ClientsService } from '../../services/clients.service';
import { Client } from '../../model/client';

@Component({
  selector: 'app-clients-detail',
  standalone: true,
  imports: [
    CommonModule,RouterLink,PanelModule,AvatarModule,ImageModule,SpiningComponent,
    FieldsetModule
  ],
  templateUrl: './clients-detail.component.html',
  styleUrl: './clients-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsDetailComponent  implements OnInit {

  private clientsService = inject(ClientsService);
  private route = inject(ActivatedRoute);
  public client?: Client; 
  
  @Input() viewMode = false;

  @Input() currentClient: Client = {
    actiu: true
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.getClient(id);
    }
  } 
  

  getClient(id: string): void {
    console.log('id : ' ,id);
    this.clientsService.getClientId(+id)
      .subscribe ( (data: Client) => {
        this.client = data;        
      });
  }

}
