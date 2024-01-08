import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OrganizationsService } from '../../services/organizations.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Status } from 'src/app/shared/enums/status.enum';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { OrganizationType } from 'src/app/shared/enums/organization-type.enum';
import { Organization } from '../../model/organization';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-organizations-new',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule,RouterLink,RouterOutlet,
    InputTextModule,ButtonModule,DropdownModule,InputTextareaModule
  ],
  templateUrl: './organizations-new.component.html',
  styleUrl: './organizations-new.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationsNewComponent {

  private organizationsService = inject(OrganizationsService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  public statusOptions = Object.values(Status);
  public statusSelected: Status = Status.ACTIVE

  
  public typeOptions = Object.values(OrganizationType);
  public typeSelected: OrganizationType = OrganizationType.CLIENTS;

  organizationForm = this.fb.nonNullable.group(
    {
      name: ['',[Validators.required]],
      description: [''],
      telefon_contact: ['',[Validators.required]],
      email: ['',[Validators.required]],
      type: [null],
      status: [null],
    }
  )

  addOrganization() {
    console.log( this.organizationForm.value)

    let organization: Organization =  new Organization();
      organization.name =  this.organizationForm.value.name;
      organization.description =  this.organizationForm.value.description;
      organization.telefon_contacte =  this.organizationForm.value.telefon_contact;
      organization.email =  this.organizationForm.value.email;
      organization.status = this.organizationForm.value.status!;
      organization.type = this.organizationForm.value.type!;
      // organization.type =  this.organizationForm.value.type?.CLIENTS;
      // statusAux : string = this.organizationForm.value.status?.
      // organization.status =  Status;
      console.log("Valors total",this.organizationForm.value);
      console.log("Valors status",this.organizationForm.value.status);




      
    // this.organizationsService.addVolunteer(organization)
    this.organizationsService.addOrganization(organization)
      .subscribe({
        next: (res) => {
          console.log(res);
          //this.submitted = true;
          // this.router.navigate(['/app/admin', res.id]);
        },
        error: (e) => console.error(e)
      });
  }
 }
