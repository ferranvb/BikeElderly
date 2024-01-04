import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { iVolunteer } from '../interface/iVolunteer';
import { VolunteersService } from '../volunteers.service';

interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'voluntaris-alta',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule,InputTextModule,DropdownModule,ButtonModule,CheckboxModule
  ],
  templateUrl: './volunteers-new.component.html',
  styleUrl: './volunteers-new.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolunteersNewComponent implements OnInit {

  cities!: City[];

  private volunteersService = inject(VolunteersService);
  private fb = inject(FormBuilder);
  
  ngOnInit(): void {
    
      this.cities = [
          { name: 'Administrador', code: 'ADMIN' },
          { name: 'Voluntari', code: 'RM' },
          { name: 'Usuari', code: 'LDN' },
          { name: 'Gestor', code: 'IST' },
          { name: 'Altres', code: 'PRS' }
      ];

  }

  volunteerForm = this.fb.nonNullable.group(
  {
    dni: ['',[Validators.required]],
    nom : ['',[Validators.required]],
    cognom1: ['',[Validators.required]],
    cognom2: [('')],
    data_naixement: [('')],
    urlFoto: [''],
    telefon_contacte: ['',[Validators.required]],
    email: ['',[Validators.required]],
    associacio: [''],
    actiu: [true, Validators.required],

    // actiu: new FormControl(''),
    // rol: new FormControl(''),
    // address: new FormGroup({
    //   street: new FormControl(''),
    //   city: new FormControl(''),
    //   zip: new FormControl(''),
    // }),
  }

  )

  onSubmit() {
    this.addVolunteer(this.volunteerForm.value);
  }

  addVolunteer(volunteer: iVolunteer): void {

    this.volunteersService.addVolunteer(volunteer);
  }

  // addVolunteer() {
  //   console.log('addVolunteer');
  //   console.log(this.profileForm.value)
  //   throw new Error('Method not implemented.');
  //   }
  
}
