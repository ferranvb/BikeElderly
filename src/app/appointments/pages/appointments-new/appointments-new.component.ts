import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DatePretyComponent } from '../../components/date-prety/date-prety.component';
import { AppointmentPanelComponent } from '../../components/appointment-panel/appointment-panel.component';
import { DropdownModule } from 'primeng/dropdown';
import { VolunteersService } from '../../../volunteers/services/volunteers.service';
import { IVolunteer } from 'src/app/volunteers/model/iVolunteer';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ClientsService } from 'src/app/clients/services/clients.service';
import { Appointment } from '../../model/appointment';
import { IGood } from 'src/app/goods/model/iGood';
import { GoodsService } from 'src/app/goods/services/goods.service';
import { map } from 'rxjs';
import { AppointmentsService } from '../../appointments.service';
import { Router } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
interface Good {
  id: number;
  name: string;
}

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'appointments-new',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule,CalendarModule,InputTextModule,
    DropdownModule,DatePretyComponent,AppointmentPanelComponent,
    AutoCompleteModule,CheckboxModule
  ],
  templateUrl: './appointments-new.component.html',
  styleUrl: './appointments-new.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentsNewComponent implements OnInit{ 

  public date?: Date;

  public showFullForm: boolean = false;

  private startTimeDefault = new Date();
  private endTimeDefault = new Date();

  
  public listGoodsMin: IGood[] = [];
  
  public listVolunteersMinSelection: IVolunteer[] = [];
  public selectedVolunteer?: IVolunteer;
  public clientName?:string = '';
  
  public formAppointment!: FormGroup;

  private appointmentsService = inject(AppointmentsService);
  private volunteersService = inject(VolunteersService);
  public clientsService = inject(ClientsService);
  private goodsService = inject(GoodsService);
  
  private router = inject(Router);
  private fb = inject(FormBuilder);
  
  constructor() {}

  ngOnInit() {
    
    this.showFullForm = false;
  
   
  



    this.formAppointment = this.fb.group({
      day: new FormControl('',[Validators.required],[]),
      good: new FormControl(null,[Validators.required],[]),
      startTime: new FormControl(this.startTimeDefault, [Validators.required], []),
      endTime: new FormControl(this.endTimeDefault, [Validators.required], []),
      volunteer:  new FormControl(null),
      client: new FormControl('', [Validators.required]),
      scheduled: new FormControl(false, [Validators.required])
    })

    
    if ( this.clientsService.iClientSelected!=null ) {
      this.clientName = this.clientsService.iClientSelected.full_name;
      this.formAppointment.patchValue({'client': this.clientsService.iClientSelected});
    }

    this.getListVolunteersMinSelection();
    this.getListGoodsMinSelection();
  }


  getListGoodsMinSelection(): void {
    
    const _this = this;
  
    this.goodsService.getGoodsMin()
    .subscribe( data => {
        this.listGoodsMin = data;
      }
      );  
    this.goodsService.getGoodsMin()
      .subscribe( data => {
        _this.listGoodsMin = data;
      }
      );  
    
 
 
  }

  getListVolunteersMinSelection() {
    this.volunteersService.getVolunteersMin()
    .subscribe( res => 
        this.listVolunteersMinSelection = res
      );
  }

  searchVolunteer(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    this.listVolunteersMinSelection =
      this.listVolunteersMinSelection.filter(volunteer =>
      volunteer.full_name.toLowerCase().includes(query.toLowerCase()));
 
  }

  public setStartEndTimeAppointment():void {
    
    this.date = this.formAppointment.value.day;
    this.date?.setHours(1);

    this.startTimeDefault =  new Date(this.date!.getTime());
    this.startTimeDefault.setHours(8);

    this.endTimeDefault = new Date(this.date!.getTime());
    
    this.endTimeDefault.setHours( this.startTimeDefault.getHours() +2);
    
    this.formAppointment.patchValue({'startTime': this.startTimeDefault});
    this.formAppointment.patchValue({'endTime': this.endTimeDefault});

    this.showFullForm = true;

  }

  updateEndDate() {
    
    let dateAux:Date = new Date(this.formAppointment.get('startTime')?.value);
    dateAux.setHours(dateAux.getHours() + 1);
    
    this.formAppointment.patchValue({'endTime': dateAux});
    
  }

  public addAppointment():void {
    

    let appointmentAux: Appointment = new Appointment();
    
    appointmentAux.day = this.formAppointment.get('day')?.value;
    appointmentAux.startTime = this.formAppointment.get('startTime')?.value;
    appointmentAux.endTime = this.formAppointment.get('endTime')?.value;
    appointmentAux.client = this.formAppointment.get('client')?.value;
    appointmentAux.volunteer = this.formAppointment.get('volunteer')?.value;
    appointmentAux.good = this.formAppointment.get('good')?.value;
    appointmentAux.scheduled = this.formAppointment.get('scheduled')?.value;
    appointmentAux.completed = false;

    this.appointmentsService.addAppointment(appointmentAux)
      .subscribe( {
        next: (res) => {
          this.router.navigate(['/app/appointments/p']);
        },
        error: (e) => console.error(e)
      });
  }

  resetAppointment(): void {
    this.formAppointment.reset();
  }

  
}

// id?: number;
//   day?: Date;
//   startTime?: Date;
//   endTime?: Date;
//   good?: number;
//   volunteer?: iVolunteer;
//   client?: Client;
//   scheduled?: boolean;
//   completed?: boolean;
