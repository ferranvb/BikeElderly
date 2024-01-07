import { OrganizationType } from "src/app/shared/enums/organization-type.enum";
import { Status } from "src/app/shared/enums/status.enum";

export class Organization {

  id?: number;
  name?: string;
  description?: string;
  telefon_contacte?: string;
  email?: string;
  type?: OrganizationType;
  status?: Status;

  constructor() { }

}
