import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { VolunteersService } from '../volunteers.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { iVolunteer } from '../model/iVolunteer';
import { AvatarModule } from 'primeng/avatar';
import { ImageModule } from 'primeng/image';

import { ConfirmationService, MessageService, ConfirmEventType, LazyLoadEvent } from 'primeng/api';
import { SpiningComponent } from 'src/app/shared/components/spining/spining.component';

@Component({
  selector: 'volunteers-list',
  standalone: true,
  imports: [
    CommonModule,TableModule,ButtonModule,ToastModule,ConfirmDialogModule,
    TagModule, RouterLink, RouterOutlet,HttpClientModule,
    AvatarModule,ImageModule,SpiningComponent
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './volunteers-list.component.html',
  styleUrl: './volunteers-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolunteerListComponent implements OnInit {

  public volunteersList!: iVolunteer[];
  public selectedVolunteer?: iVolunteer;

  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  private volunteersService = inject(VolunteersService);
  private router = inject(Router);

  constructor() {
   
  }

  ngOnInit(): void {
    this.getVolunteers();
  }
  
  // getV() : Ivoluntari[] {
  //   return this.volunteersService.getVolunteers()
  //     .subscribe(response => {return response.;});
  // }

  getVolunteers(): void {
    this.volunteersService.getVolunteers()
    // .subscribe(response => console.log('data',response));
       .subscribe( (response) => 
        { console.log('response',response);
          this.volunteersList = response;}
        );
  }

  btnClick() {
    this.router.navigateByUrl('login');
  };


  confirmDelete(event: Event, volunteer: iVolunteer) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: `Estàs segur d´esborrar aquest voluntari?`,
        header: 'Confirmació eborrat voluntari',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
            let messageAux ='';
            if (volunteer) {
              console.log("Volunteer", volunteer.nom);
              this.volunteersService.deleteVolunteer(volunteer).subscribe();
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
            this.messageService.add({ severity: 'info', summary: 'Confirmat', detail: 'Voluntari esborrat' });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
}

goDetail(volunteer: iVolunteer) {
  if ( volunteer){
    let idAux: string = '/app/volunteers/'+ volunteer.id?.toString();
    this.router.navigate([idAux]);
  }
}

goEdit(volunteer: iVolunteer) {
  if ( volunteer){
    this.volunteersService.volunteerSelected = volunteer;
    this.volunteersService.editVolunteer = true;
    let idAux: string = '/app/volunteers/new';
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
 
