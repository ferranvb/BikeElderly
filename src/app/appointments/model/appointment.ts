import { IClient } from "src/app/clients/model/iClient";
import { IVolunteer } from "src/app/volunteers/model/iVolunteer";

export class Appointment {

  id?: number;
  day?: Date;
  startTime?: Date;
  endTime?: Date;
  good?: number;
  volunteer?: IVolunteer;
  client?: IClient;
  scheduled?: boolean;
  completed?: boolean;

  constructor() { }

}
