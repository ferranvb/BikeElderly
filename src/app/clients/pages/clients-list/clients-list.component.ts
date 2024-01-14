import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { ClientsService } from '../../services/clients.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { AvatarModule } from 'primeng/avatar';
import { ImageModule } from 'primeng/image';

import { ConfirmationService, MessageService, ConfirmEventType, LazyLoadEvent } from 'primeng/api';
import { SpiningComponent } from 'src/app/shared/components/spining/spining.component';
import { Client } from '../../model/client';

@Component({
  selector: 'clients-list',
  standalone: true,
  imports: [
    CommonModule,TableModule,ButtonModule,ToastModule,ConfirmDialogModule,
    TagModule, RouterLink, RouterOutlet,HttpClientModule,
    AvatarModule,ImageModule,SpiningComponent
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsListComponent { 
  private clientsService = inject(ClientsService);
  public clientsList!: Client[];
  public selectedClient?: Client;

  // public volunteersMinList!: IVolunteer[];


  private confirmationServiceClients = inject(ConfirmationService);
  private messageService = inject(MessageService);
  private router = inject(Router);

  constructor() {
   
  }

  ngOnInit(): void {
    this.getClients();
    // this.getVolunteersMin();
  }
  
  getClients(): void {
    this.clientsService.getClients()
       .subscribe( (response) => 
        { console.log('response',response);
          this.clientsList = response;}
        );
  }

  // getVolunteersMin(): void {
  //   this.volunteersService.getVolunteersMin()
  //   // .subscribe(response => console.log('data',response));
  //      .subscribe( (response) => 
  //       { console.log('responseMin',response);
  //         this.volunteersMinList = response;}
  //       );
  // }

  confirmDelete(event: Event, client: Client) {
    this.confirmationServiceClients.confirm({
        target: event.target as EventTarget,
        message: `Estàs segur d´esborrar aquest client?`,
        header: 'Confirmació eborrat client',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
            let messageAux ='';
            if (client) {
              console.log("Client", client.nom);
              this.clientsService.deleteClient(client).subscribe();
            }
            //   {
            //     next: data => {
            //         console.log('Delete successful');
            //         messageAux = 'Delete successful';
            //     },
            //     error: error => {
            //         console.log('There was an error!', error);
            //         messageAux = error.message;
            //         console.error('There was an error!', error);
            //     }
            // } 

            // );
            this.messageService.add({ severity: 'info', summary: 'Confirmat', detail: 'Client esborrat' });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
}

goDetail(client: Client) {
  if ( client){
    let idAux: string = '/app/clients/'+ client.id?.toString();
    this.router.navigate([idAux]);
  }
}

goEdit(client: Client) {
  if ( client){
    this.clientsService.clientSelected = client;
    this.clientsService.editClient = true;
    let idAux: string = '/app/clients/new';
    this.router.navigate([idAux]);
  }
}

  // http.get('/images/dog.jpg', {responseType: 'arraybuffer'}).subscribe(buffer => {
  //   console.log('The image is ' + buffer.length + ' bytes large');
  // });

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }

  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero).subscribe();
  // }

}
 
