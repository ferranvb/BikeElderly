import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { AppointmentPanelComponent } from '../../components/appointment-panel/appointment-panel.component';
import { DatePretyComponent } from '../../components/date-prety/date-prety.component';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { IVolunteer } from 'src/app/volunteers/model/iVolunteer';
import { AppointmentsService } from '../../appointments.service';
import { VolunteersService } from 'src/app/volunteers/services/volunteers.service';
import { ClientsService } from 'src/app/clients/services/clients.service';
import { GoodsService } from 'src/app/goods/services/goods.service';
import { Appointment } from '../../model/appointment';
import { IClient } from 'src/app/clients/model/iClient';
import { IGood } from 'src/app/goods/model/iGood';
import { SpiningComponent } from 'src/app/shared/components/spining/spining.component';

@Component({
  selector: 'app-appointments-edit',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule,CalendarModule,InputTextModule,
    DropdownModule,DatePretyComponent,AppointmentPanelComponent,
    AutoCompleteModule,CheckboxModule,SpiningComponent
  ],
  templateUrl: './appointments-edit.component.html',
  styleUrl: './appointments-edit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentsEditComponent implements OnInit { 

  public date?: Date;

  private appointmentsService = inject(AppointmentsService);
  private volunteersService = inject(VolunteersService);
  public clientsService = inject(ClientsService);
  private goodsService = inject(GoodsService);

  private startTimeDefault = new Date();
  private endTimeDefault = new Date();

  public formAppointment!: FormGroup;
  private fb = inject(FormBuilder);

  public clientName?:string = '';

  public listVolunteersMinSelection: IVolunteer[] = [];
  public selectedVolunteer?: IVolunteer;
  
  public listGoodsMin: IGood[] = [];

  public dateDefault!: Date;
  public startDefault!: Date;
  public endDefault!: Date;

  ngOnInit() {
 
  
    this.formAppointment = this.fb.group({
      day: new FormControl('',[Validators.required],[]),
      good: new FormControl(null,[Validators.required],[]),
      startTime: new FormControl(null, [Validators.required], []),
      endTime: new FormControl(null, [Validators.required], []),
      volunteer:  new FormControl(null),
      client: new FormControl('', [Validators.required]),
      scheduled: new FormControl(false, [Validators.required])
    })

    this.getListVolunteersMinSelection();
    this.getListGoodsMinSelection();
    
    this.fillFormWithAppointment( this.appointmentsService.appointmentSelected );

    
  }

  fillFormWithAppointment(appointmentSelected: Appointment):void {
    this.formAppointment.patchValue({'day': appointmentSelected.day});
    this.formAppointment.patchValue({'startTime': appointmentSelected.startTime});
    this.formAppointment.patchValue({'endTime': appointmentSelected.endTime});
    this.formAppointment.patchValue({'client': appointmentSelected.client});
    this.formAppointment.patchValue({'volunteer': appointmentSelected.volunteer});
    this.formAppointment.patchValue({'good': appointmentSelected.good});
    this.formAppointment.patchValue({'scheduled': appointmentSelected.scheduled});
    this.formAppointment.patchValue({'completed': appointmentSelected.completed});

    this.dateDefault = new Date(appointmentSelected.day!);
    this.startDefault = new Date(appointmentSelected.startTime!);
    this.endDefault = new Date(appointmentSelected.endTime!);
    console.log("fillFormWithAppointment", this.formAppointment.value);

    console.log("Sata", this.dateDefault);
  
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

  public setStartEndTimeAppointment():void {
    console.log("Data",this.formAppointment.value.day)
    this.date = this.formAppointment.value.day;
    // this.date?.setHours(1);

    this.startTimeDefault =  new Date(this.date!.getTime());
    this.startTimeDefault.setHours(8,0,0,0);

    this.endTimeDefault = new Date(this.date!.getTime());
    
    this.endTimeDefault.setHours( this.startTimeDefault.getHours() +2);
    
    this.formAppointment.patchValue({'startTime': this.startTimeDefault});
    this.formAppointment.patchValue({'endTime': this.endTimeDefault});
  }

  updateEndDate() {
    console.log("Hira inici",this.formAppointment.value.startDate);
    let dateAux:Date = new Date(this.formAppointment.get('startTime')?.value);
    dateAux.setHours(dateAux.getHours() + 1);
    
    this.formAppointment.patchValue({'endTime': dateAux});
    
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

  updateAppointment() {
    console.log(this.formAppointment.value);
  }



}
