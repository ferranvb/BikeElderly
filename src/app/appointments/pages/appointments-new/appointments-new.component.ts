import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DatePretyComponent } from '../../components/date-prety/date-prety.component';
import { AppointmentPanelComponent } from '../../components/appointment-panel/appointment-panel.component';

@Component({
  selector: 'appointments-new',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule,CalendarModule,InputTextModule,DatePretyComponent,AppointmentPanelComponent
  ],
  templateUrl: './appointments-new.component.html',
  styleUrl: './appointments-new.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentsNewComponent implements OnInit{ 

  public date: Date = new Date();

  formCita = new FormControl('');
  public myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      dia: new FormControl('',[
        Validators.required
      ],[]),
      hora: new FormControl('',[
        Validators.required
      ],[]),
      email: new FormControl('', [
        // validaciones síncronas
        Validators.required,
        Validators.email
      ], [
        // validaciones asíncronas
      ]),
      password: new FormControl('')
    })
  }

  public doSomething() {
    console.log(this.myForm.value);
  }
}
