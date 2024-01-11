import { IOrganization } from "src/app/organizations/model/iOrganization";
import { Person } from "src/app/shared/models/Person";

export class Client extends Person{

  organitzacio? : IOrganization;
  remarks?: string;
  
  constructor() { 
    super();
  }


}
