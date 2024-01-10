import { Client } from "src/app/clients/model/client";
import { iVolunteer } from "src/app/volunteers/model/iVolunteer";

export class Appointment {

  id?: number;
  day?: Date;
  startTime?: Date;
  endTime?: Date;
  good?: number;
  volunteer?: iVolunteer;
  client?: Client;
  scheduled?: boolean;
  completed?: boolean;

  constructor() { }

}
