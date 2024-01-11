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
  
  public formAppointment!: FormGroup;

  private volunteersService = inject(VolunteersService);
  private fb = inject(FormBuilder);
  constructor() {}

  ngOnInit() {
    this.formAppointment = this.fb.group({
      day: new FormControl('',[Validators.required],[]),
      good: new FormControl(null,[Validators.required],[]),
      startTime: new FormControl(null, [Validators.required], []),
      endTime: new FormControl(null, [Validators.required], []),
      volunteer:  new FormControl(null),
    })

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
    this.date = this.formAppointment.value.day;
  }

  public addAppointment():void {
    console.log("addAppointment", this.formAppointment.value);
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
