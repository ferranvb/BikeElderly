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
    AutoCompleteModule
  ],
  templateUrl: './appointments-new.component.html',
  styleUrl: './appointments-new.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentsNewComponent implements OnInit{ 

  public date?: Date;

  private startTimeDefault = new Date();
  private endTimeDefault = new Date();

  
  public listGoods: Good[] = [
    {
    "id": 1,
    "name": 'Bici Cargo 1'
    },
    {
      "id": 2,
    "name": 'Bici Cargo 2'
    }
  ];
  public listVolunteersMinSelection: IVolunteer[] = [];
  public selectedVolunteer?: IVolunteer;
  public clientName?:string = '';
  
  public formAppointment!: FormGroup;

  private volunteersService = inject(VolunteersService);
  public clientsService = inject(ClientsService);
  
  private fb = inject(FormBuilder);
  constructor() {}

  ngOnInit() {
    
  
    this.startTimeDefault.setHours(8);
    this.startTimeDefault.setMinutes(0);
    this.startTimeDefault.setSeconds(0);
    this.endTimeDefault.setHours(9);
    this.endTimeDefault.setMinutes(0);
    this.endTimeDefault.setSeconds(0);
  



    this.formAppointment = this.fb.group({
      day: new FormControl('',[Validators.required],[]),
      good: new FormControl(null,[Validators.required],[]),
      startTime: new FormControl(this.startTimeDefault, [Validators.required], []),
      endTime: new FormControl(this.endTimeDefault, [Validators.required], []),
      volunteer:  new FormControl(null),
      client: new FormControl('', [Validators.required])
    })

    
    if ( this.clientsService.iClientSelected!=null ) {
      this.clientName = this.clientsService.iClientSelected.full_name;
      this.formAppointment.patchValue({'client': this.clientsService.iClientSelected});
    }

    this.getListVolunteersMinSelection();
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
    console.log ("Query", query);


    // for (let i = 0; i < (this.listVolunteersMinSelection as any[]).length; i++) {
    //     let volunteer = (this.listVolunteersMinSelection as any[])[i];
    //     if (volunteer.full_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
    //         filtered.push(volunteer);
    //     }
    // }
    this.listVolunteersMinSelection =
      this.listVolunteersMinSelection.filter(volunteer =>
      volunteer.full_name.toLowerCase().includes(query.toLowerCase()));
    
    console.log("Filtered",this.listVolunteersMinSelection);

    // if (this.listVolunteersMinSelection.length === 0 ) {
    //   console.log("listVolunteersMinSelection.length === 0");
    //    this.getListVolunteersMinSelection();
    // } 
  //   if ( query.length === 0) {
  //     console.log("query.length zero");
  //     this.getListVolunteersMinSelection();
  //  } 
  }

  public setDateAppointment():void {
    // let dateAux = this.formAppointment.value.day;
    // this.date = dateAux?.getDate() + "/"  + dateAux?.getMonth() + "/" + dateAux?.get
    this.date = this.formAppointment.value.day;
    console.log("setDateAppointment", this.date?.toISOString());
  }

  public addAppointment():void {
    let dayAux: Date = this.formAppointment.get('day')?.value;
    let startTimeAux: Date = this.formAppointment.get('startTime')?.value;
    let endTimeAux: Date = this.formAppointment.get('endTime')?.value;

    let appointmentAux: Appointment = new Appointment();
    
    console.log("dayAux.getDay()", dayAux.getDate().toString());
    console.log("dayAux.getMonth()", dayAux.getMonth().toString() +1 );
    console.log("dayAux.getFullYear()", dayAux.getFullYear().toString());

    appointmentAux.day = dayAux.getDate().toString() + '-' + dayAux.getMonth().toString() + '-' + dayAux.getFullYear().toString();
    appointmentAux.startTime = startTimeAux.getHours() + ':' + startTimeAux.getMinutes();
    appointmentAux.endTime = endTimeAux.getHours() + ':' + endTimeAux.getMinutes();
    appointmentAux.client = this.formAppointment.get('client')?.value;
    appointmentAux.volunteer = this.formAppointment.get('volunteer')?.value;
    appointmentAux.good = this.formAppointment.get('good')?.value;
    appointmentAux.day = this.formAppointment.get('day')?.value;
    appointmentAux.scheduled = false;
    appointmentAux.completed = false;


    console.log("addAppointment", JSON.stringify(appointmentAux));
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
