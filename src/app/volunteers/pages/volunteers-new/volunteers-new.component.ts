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
import { OrganizationsService } from 'src/app/organizations/services/organizations.service';


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

  listOrganizationsMin!: IOrganization[];
  org!:IOrganization;

  public volunteersMinSelectedList!: IVolunteer[];
  public volunteerSelected?: IVolunteer;


  private volunteersService = inject(VolunteersService);
  private organizationsService = inject(OrganizationsService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  public fotoUrl : string = "assets/images/no-foto.jpg";

  
  
  ngOnInit(): void {
    this.editForm = this.volunteersService.editVolunteer;
    this.getListGoodsMinSelection();

    if ( this.editForm ) {
      this.fillFormWithVolunteer(this.volunteersService.volunteerSelected);

      console.log("Edit",this.volunteerForm.value);
    }
  }

  getListGoodsMinSelection(): void {
    
    const _this = this;
  
    this.organizationsService.getOrganizationsMin()
      .subscribe( data => {
          this.listOrganizationsMin = data;
        }
      );  
      this.organizationsService.getOrganizationsMin()
      .subscribe( data => {
          this.listOrganizationsMin = data;
        }
      );    
  }

  ngOnChanges() {
    this.editForm = this.volunteersService.editVolunteer;
    if ( this.editForm ) {
      this.fillFormWithVolunteer(this.volunteersService.volunteerSelected);
    }
    console.log("STOP");
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
    observacions: ['']
  }

  );

  fillFormWithVolunteer(volunteerSelected: Volunteer):void {
    this.volunteerForm.patchValue({'dni': volunteerSelected.dni});
    this.volunteerForm.patchValue({'nom': volunteerSelected.nom});
    this.volunteerForm.patchValue({'cognom1': volunteerSelected.cognom1});
    this.volunteerForm.patchValue({'cognom2': volunteerSelected.cognom2});
    this.volunteerForm.patchValue({'url_foto': volunteerSelected.url_foto});
    this.volunteerForm.patchValue({'data_naixement': volunteerSelected.data_naixement});
    this.volunteerForm.patchValue({'telefon_contacte': volunteerSelected.telefon_contacte});
    this.volunteerForm.patchValue({'email': volunteerSelected.email});
    this.volunteerForm.patchValue({'adreca': volunteerSelected.adreca});
    this.volunteerForm.patchValue({'codi_postal': volunteerSelected.codi_postal});
    this.volunteerForm.patchValue({'poblacio': volunteerSelected.poblacio});
    this.volunteerForm.patchValue({'organitzacio': volunteerSelected.organitzacio});

    this.volunteerForm.patchValue({'actiu': volunteerSelected.actiu});
    this.volunteerForm.patchValue({'observacions': volunteerSelected.observacions});
    
    this.fotoUrl = this.volunteerForm.get('url_foto')!.value;
  }

  getVolunteersMinSelectedList(): void {
    this.volunteersService.getVolunteersMin()
    // .subscribe(response => console.log('data',response));
       .subscribe( (response) => 
        { 
          this.volunteersMinSelectedList = response;}
        );
  }

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
