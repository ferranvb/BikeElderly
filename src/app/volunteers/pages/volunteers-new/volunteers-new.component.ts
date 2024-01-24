import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule, UploadEvent } from 'primeng/fileupload';
import { VolunteersService } from '../../services/volunteers.service';
import { ImageModule } from 'primeng/image';
import { Router, RouterLink } from '@angular/router';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Volunteer } from '../../model/volunteer';
import { IOrganization } from 'src/app/organizations/model/iOrganization';
import { FieldsetModule } from 'primeng/fieldset'
import { IVolunteer } from '../../model/iVolunteer';
import { ToggleButtonModule } from 'primeng/togglebutton';

interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'voluntaris-alta',
  standalone: true,
  imports: [
    CommonModule,RouterLink,
    ReactiveFormsModule,InputTextModule,DropdownModule,ButtonModule,CheckboxModule,ImageModule,FileUploadModule,InputTextareaModule,
    FieldsetModule, ToggleButtonModule

  ],
  templateUrl: './volunteers-new.component.html',
  styleUrl: './volunteers-new.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolunteersNewComponent implements OnInit {

  @Input() 
  editForm: boolean = false;

  @Input() 
  volunteer!: Volunteer;

  org!:IOrganization;

  public volunteersMinSelectedList!: IVolunteer[];
  public volunteerSelected?: IVolunteer;


  private volunteersService = inject(VolunteersService);
  private router = inject(Router);
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
    data_naixement: [''],
    url_foto: [''],
    telefon_contacte: ['',[Validators.required]],
    email: ['',[Validators.required]],
    adreca: [''],
    codi_postal: [''],
    poblacio: [''],
    provincia: [''],
    organitzacio: [this.org],
    actiu: [false,[Validators.required]],

    // actiu: new FormControl(''),
    // rol: new FormControl(''),
    // address: new FormGroup({
    //   street: new FormControl(''),
    //   city: new FormControl(''),
    //   zip: new FormControl(''),
    // }),
  }

  );

  getVolunteersMinSelectedList(): void {
    this.volunteersService.getVolunteersMin()
    // .subscribe(response => console.log('data',response));
       .subscribe( (response) => 
        { 
          this.volunteersMinSelectedList = response;}
        );
  }

  // onBasicUploadAuto(event: UploadEvent) {
  //   console.log(event);
  //   // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
  // }

  addVolunteer(): void {
    let volunteer: Volunteer = this.volunteerForm.value;
    volunteer.url_foto = "assets/images/no-foto.jpg";

    this.volunteersService.addVolunteer(volunteer)
      .subscribe({
        next: (res) => {
          console.log("Add this.Volunteer", res);
          //this.submitted = true;
          this.router.navigate(['/app/volunteers/', res.id]);
        },
        error: (e) => console.error(e)
      });
  }

  editVolunteer(): void {
    let volunteer: Volunteer = this.volunteerForm.value;
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
          this.volunteersService.editVolunteer = false;
          this.router.navigate(['/app/volunteers/', res.id]);
        },
        error: (e) => console.error(e)
      });;
    
  }

}
