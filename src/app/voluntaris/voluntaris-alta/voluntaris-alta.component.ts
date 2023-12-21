import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'voluntaris-alta',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule,InputTextModule,DropdownModule,ButtonModule
  ],
  templateUrl: './voluntaris-alta.component.html',
  styleUrl: './voluntaris-alta.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VoluntarisAltaComponent implements OnInit {

  cities!: City[];
  
  ngOnInit(): void {
    
      this.cities = [
          { name: 'Administrador', code: 'ADMIN' },
          { name: 'Voluntari', code: 'RM' },
          { name: 'Usuari', code: 'LDN' },
          { name: 'Gestor', code: 'IST' },
          { name: 'Altres', code: 'PRS' }
      ];

  } 

  

  profileForm = new FormGroup({
    nom : new FormControl('',[Validators.required]),
    cognom1: new FormControl('',[Validators.required]),
    cognom2: new FormControl(''),
    data_naixement: new FormControl(''),
    telefon_contacte: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    associacio: new FormControl(''),
    actiu: new FormControl(''),
    rol: new FormControl(''),

    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl(''),
    }),
    
  });

  addVolunteer() {
    console.log('addVolunteer');
    console.log(this.profileForm.value)
    throw new Error('Method not implemented.');
    }
  
}
