import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DatePretyComponent } from '../../components/date-prety/date-prety.component';
import { AppointmentPanelComponent } from '../../components/appointment-panel/appointment-panel.component';
import { DropdownModule } from 'primeng/dropdown';
import { iVolunteer } from 'src/app/volunteers/interface/iVolunteer';
import { VolunteersService } from '../../../volunteers/volunteers.service';
interface Good {
  id: number;
  name: string;
}

@Component({
  selector: 'appointments-new',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule,CalendarModule,InputTextModule,
    DropdownModule,DatePretyComponent,AppointmentPanelComponent
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
  public listVolunteers: iVolunteer[] = [];
  public selectedVolunteer?: iVolunteer;
  
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

    this.volunteersService.getVolunteers()
      .subscribe( res => this.listVolunteers = res
        
        );
    console.log(this.listVolunteers);

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
