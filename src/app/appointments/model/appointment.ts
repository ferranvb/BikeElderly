import { IClient } from "src/app/clients/model/iClient";
import { IGood } from "src/app/goods/model/iGood";
import { IVolunteer } from "src/app/volunteers/model/iVolunteer";

export class Appointment {

  id?: number;
  day?: string;
  startTime?: string;
  endTime?: string;
  good?: IGood;
  volunteer?: IVolunteer;
  client?: IClient;
  scheduled?: boolean;
  completed?: boolean;

  constructor() { }

}
