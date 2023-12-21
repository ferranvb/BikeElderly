import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-alta-cita',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule,CalendarModule,InputTextModule
  ],
  templateUrl: './alta-cita.component.html',
  styleUrl: './alta-cita.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AltaCitaComponent implements OnInit{ 

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
