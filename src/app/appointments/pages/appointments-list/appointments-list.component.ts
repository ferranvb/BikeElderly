import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';


import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';


import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AppointmentsService } from '../../appointments.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Appointment } from '../../model/appointment';
import { SpiningComponent } from 'src/app/shared/components/spining/spining.component';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'appointments-list',
  standalone: true,
  imports: [
    CommonModule,TableModule,ButtonModule,TagModule, RouterLink, RouterOutlet,SpiningComponent,ImageModule
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './appointments-list.component.html',
  styleUrl: './appointments-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentListComponent implements OnInit {

  public appointmentsList!: Appointment[];
  public selectedAppointment?: Appointment;
  private appointmentsService = inject(AppointmentsService);

  private router = inject(Router);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  
  constructor() { }

  ngOnInit(): void {
    this.getAppointmentList();
  }

  getAppointmentList(): void { 
    this.appointmentsService.getAppointmentsFromToday()
       .subscribe( (response) => 
        { 
          this.appointmentsList = response;}
        );
  }

  goEdit(appointment: Appointment):void {
    if ( appointment){
      this.appointmentsService.appointmentSelected = appointment;
      this.appointmentsService.editAppointment = true;
      let idAux: string = '/app/appointments/edit';

      // console.log(idAux, " -- ", this.appointmentsService.appointmentSelected);

      this.router.navigate([idAux]);
    }
  }
 
 }
