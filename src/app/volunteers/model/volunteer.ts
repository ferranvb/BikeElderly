import { IOrganization } from "src/app/organizations/model/iOrganization";
import { Person } from "src/app/shared/models/Person";

export class Volunteer extends Person{

  organitzacio? : IOrganization;
  

  constructor() { 
    super();
  }

  getNomComplet?() {
    return this.nom + ' ' + this.cognom1 + ' ' + this.cognom2;
  }


}
