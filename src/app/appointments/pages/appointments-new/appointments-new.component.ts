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
      client: new FormControl('', [Validators.required])
    })

    
    if ( this.clientsService.iClientSelected!=null ) {
      this.clientName = this.clientsService.iClientSelected.full_name;
      this.formAppointment.patchValue({'client': this.clientsService.iClientSelected});
    }

    this.getListVolunteersMinSelection();


    this.getListGoodsMinSelection();
    // console.log("Llista Goods passat", this.listGoodsMin);
    // this.getListGoodsMinSelection();
    // console.log("Llista Goods 2", this.listGoodsMin);


  }


  getListGoodsMinSelection(): void {
    
    const _this = this;
  
    this.goodsService.getGoodsMin()
    .subscribe( data => {
        console.log("Llista Goods pre data", data);
        this.listGoodsMin = data;
        console.log("Llista Goods this", data);
      }
      );  
    this.goodsService.getGoodsMin()
      .subscribe( data => {
        console.log("Llista Goods pre data", data);
        _this.listGoodsMin = data;
        console.log("Llista Goods _this", data);
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

  public setStartEndTimeAppointment():void {
    // let dateAux = this.formAppointment.value.day;
    // this.date = dateAux?.getDate() + "/"  + dateAux?.getMonth() + "/" + dateAux?.get
    this.date = this.formAppointment.value.day;

    this.startTimeDefault.setFullYear(this.date!.getFullYear());
    this.startTimeDefault.setMonth(this.date!.getMonth());
    this.startTimeDefault.setDate(this.date!.getDate());
    this.startTimeDefault.setHours(8);
    this.startTimeDefault.setMinutes(0);
    this.startTimeDefault.setSeconds(0);

    console.log("Hora inici",this.startTimeDefault)

    this.endTimeDefault = this.date!;
    
    this.endTimeDefault.setHours( this.startTimeDefault.getHours() +2);
    // this.endTimeDefault.setMinutes(0);
    // this.endTimeDefault.setSeconds(0);

    console.log("Hora Fi",this.endTimeDefault);

    this.formAppointment.patchValue({'startTime': this.startTimeDefault});
    this.formAppointment.patchValue({'endTime': this.endTimeDefault});

    this.showFullForm = true;

    
    console.log("setDateAppointment", this.date?.toISOString());
  }

  public addAppointment():void {
    // let dayAux: Date = this.formAppointment.get('day')?.value;
    // let startTimeAux: Date = this.formAppointment.get('startTime')?.value;
    // let endTimeAux: Date = this.formAppointment.get('endTime')?.value;

    let appointmentAux: Appointment = new Appointment();
    
    // console.log("dayAux.getDay()", dayAux.getDate().toString());
    // console.log("dayAux.getMonth()", dayAux.getMonth().toString() +1 );
    // console.log("dayAux.getFullYear()", dayAux.getFullYear().toString());

    appointmentAux.day = this.formAppointment.get('day')?.value;
    appointmentAux.startTime = this.formAppointment.get('startTime')?.value;
    appointmentAux.endTime = this.formAppointment.get('startTime')?.value;
    appointmentAux.client = this.formAppointment.get('client')?.value;
    appointmentAux.volunteer = this.formAppointment.get('volunteer')?.value;
    appointmentAux.good = this.formAppointment.get('good')?.value;
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
