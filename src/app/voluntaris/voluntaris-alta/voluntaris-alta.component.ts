import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'voluntaris-alta',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule,InputTextModule,DropdownModule
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
    nom : new FormControl(''),
    cognom1: new FormControl(''),
    cognom2: new FormControl(''),
    data_naixement: new FormControl(''),
    telefon_contacte: new FormControl(''),
    email: new FormControl(''),
    associacio: new FormControl(''),
    actiu: new FormControl(''),
    rol: new FormControl(''),
    
  });

  
}
