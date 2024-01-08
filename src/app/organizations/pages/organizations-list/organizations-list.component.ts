import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ImageModule } from 'primeng/image';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { SpiningComponent } from 'src/app/shared/components/spining/spining.component';
import { Organization } from '../../model/organization';
import { OrganizationsService } from '../../services/organizations.service';

@Component({
  selector: 'app-organizations-list',
  standalone: true,
  imports: [
    CommonModule,TableModule,ButtonModule,ToastModule,ConfirmDialogModule,
    TagModule, RouterLink, RouterOutlet,HttpClientModule,
    AvatarModule,ImageModule,SpiningComponent
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './organizations-list.component.html',
  styleUrl: './organizations-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationsListComponent { 

  public organizationList!: Organization[];
  public selectedVolunteer?: Organization;

  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  private organizationsService = inject(OrganizationsService);
  private router = inject(Router);

  constructor() {
   
  }

  ngOnInit(): void {
    this.getOrganizations();
  }

  getOrganizations(): void {
    this.organizationsService.getOrganizations()
    // .subscribe(response => console.log('data',response));
       .subscribe( (response) => 
        { console.log('response',response);
          this.organizationList = response;}
        );
  }


  confirmDelete(event: Event,organization: Organization) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: `Estàs segur d´esborrar aquesta organització?`,
        header: 'Confirmació esborrat organització',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
            let messageAux ='';
            if (organization) {
              console.log("Organització", organization.name);
              this.organizationsService.deleteOrganization(organization).subscribe();
            }
            
            this.messageService.add({ severity: 'info', summary: 'Confirmat', detail: 'Voluntari esborrat' });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
  }

}
