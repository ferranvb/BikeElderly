import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { iVolunteer } from '../interface/iVolunteer';
import { VolunteersService } from '../volunteers.service';
import { ImageModule } from 'primeng/image';
import { RouterLink } from '@angular/router';

interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'voluntaris-alta',
  standalone: true,
  imports: [
    CommonModule,RouterLink,
    ReactiveFormsModule,InputTextModule,DropdownModule,ButtonModule,CheckboxModule,ImageModule
  ],
  templateUrl: './volunteers-new.component.html',
  styleUrl: './volunteers-new.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolunteersNewComponent implements OnInit {

  @Input() 
  editForm: boolean = false;

  @Input() 
  volunteer!: iVolunteer;


  private volunteersService = inject(VolunteersService);
  private fb = inject(FormBuilder);

  
  
  ngOnInit(): void {
    this.editForm = this.volunteersService.editVolunteer;

    // if ( this.editForm ) {
      this.volunteerForm.patchValue(this.volunteersService.volunteerSelected);
    // }

  }

  ngOnChanges() {
    this.editForm = this.volunteersService.editVolunteer;
    if ( this.editForm ) {
      this.volunteerForm.patchValue(this.volunteersService.volunteerSelected);
    }
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
    actiu: [false,[Validators.required]],

    // actiu: new FormControl(''),
    // rol: new FormControl(''),
    // address: new FormGroup({
    //   street: new FormControl(''),
    //   city: new FormControl(''),
    //   zip: new FormControl(''),
    // }),
  }

  )

  addVolunteer(): void {
    let volunteer: iVolunteer = this.volunteerForm.value;
    volunteer.url_foto = "assets/images/no-foto.jpg";

    this.volunteersService.addVolunteer(volunteer)
      .subscribe({
        next: (res) => {
          console.log(res);
          //this.submitted = true;
        },
        error: (e) => console.error(e)
      });;
  }

  editVolunteer(): void {
    let volunteer: iVolunteer = this.volunteerForm.value;
    volunteer.id = this.volunteersService.volunteerSelected.id;
    if ( volunteer.url_foto == null ) {
      volunteer.url_foto = "assets/images/no-foto.jpg";
    }
    console.log("volunteer ", volunteer);
    this.volunteersService.updateVolunteer( volunteer)
      .subscribe({
        next: (res) => {
         // console.log("editVolunteer() ",res);
          //this.submitted = true;
        },
        error: (e) => console.error(e)
      });;
  }

}
