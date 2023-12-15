import { Injectable } from '@angular/core';
import { ICita } from './ICita';

@Injectable({
  providedIn: 'root'
})
export class CitesServiceService {

  public citesListAux: Array<ICita>;

  constructor() { 
    this.citesListAux = Array({
     "id": "123",
      "dia": "2023-12-14",
      "hora": "12:30 - 13:30",
      "sollicitant": "Josefa Miralles",
      "estri": "eCargo-groga",
      "voluntari": "Ferran Vidal"},
    {
        "id": "125",
         "dia": "2023-12-15",
         "hora": "12:30 - 13:30",
         "sollicitant": "Josefa Miralles",
         "estri": "eCargo-groga",
         "voluntari": "Ferran Vidal"},
     {
            "id": "124",
            "dia": "2023-12-14",
            "hora": "14:30 - 15:30",
            "sollicitant": "Maria Coll",
            "estri": "eCargo-groga",
            "voluntari": "Anna Berme"},
    {
          "id": "126",
          "dia": "2023-12-16",
          "hora": "14:30 - 15:30",
          "sollicitant": "Maria Coll",
          "estri": "eCargo-groga",
          "voluntari": ""},     
      );

  
  }

}
