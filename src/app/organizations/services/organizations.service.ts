import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { Organization } from '../model/organization';
import { Observable, map, tap } from 'rxjs';
import { IOrganization } from '../model/iOrganization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {

  // private messageAux?: Message;
  
  private urlServer = environment.baseUrl;
  private http = inject(HttpClient);

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // private messageService = inject(MessageService);

  public editOrganization:boolean = false;
  public organizationSelected!: Organization;

  constructor() { }

   /** GET organizations from the server */
   getOrganizations(): Observable<Organization[]> {
    const url: string =this.urlServer + '/organizations';
    console.log(url); 
    return this.http.get<Organization[]>(url);

    //TODO manca control errors
  }

   /** GET organizations from the server */
   getOrganizationsMin(): Observable<IOrganization[]> {
    const url: string =this.urlServer + '/organizations';
    console.log(url); 
    return this.http.get<IOrganization[]>(url)
      .pipe( map(organization => organization.map(organization => this.mapToIOrganizations(organization)))
      );

    //TODO manca control errors
  }

  public mapToIOrganizations(organization: Organization): IOrganization {
    // const full_name = `${client.nom} ${client.cognom1} ${client.cognom2}`;
    return {
      id: organization.id,
      name: organization.name
    };
  }





  /** GET organization by id. */
  getOrganizationId(id: number): Observable<Organization> {

    const url = `${this.urlServer}/organizations/${id}`;
  
    return this.http.get(url)

    //TODO manca control errors

    //     .pipe (
          
    //     catchError(this.handleError<iVolunteer>(`getVolunteer id=${id}`))
    // );
  }

  /** POST: add a new organization to the server */  
  addOrganization(organization: Organization): Observable<Organization> {
    const url = `${this.urlServer}/organizations`;
    const body=JSON.stringify(organization!);
    console.log(body)
    console.log('URL', url);
    return this.http.post<Organization>(url, body, this.httpOptions)
    .pipe(
      // tap((newVolunteer: Organization) => console.log(`added organization`, body)),
      // catchError(this.handleError<iVolunteer>('addVolunteer'))
  
      //TODO manca control errors
    );
  }

   /** DELETE: delete the organization from the server */
   deleteOrganization(organization: Organization | number): Observable<Organization> {
    const id = typeof organization === 'number' ? organization : organization.id;
    // const url = `${this.urlServer}/${id}`;
    const url = `${this.urlServer}/organizations/${id}`;


    return this.http.delete<Organization>(url, this.httpOptions).pipe(
      // tap(_ => this.log(`deleted volunteer id=${id}`)),
      // tap(_ => console.log(`deleted volunteer id=${id}`)),
      // catchError(this.handleError<iVolunteer>('deleteVolunteer'))

      //TODO manca control errors
    );
  }


}
