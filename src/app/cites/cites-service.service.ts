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
      "hora_inici": "12:30",
      "hora_fi" : "13:30",
      "sollicitant": "Josefa Miralles",
      "estri": "eCargo-groga",
      "voluntari": "Ferran Vidal"},
    {
        "id": "125",
         "dia": "2023-12-15",
         "hora_inici": "12:30",
          "hora_fi" : "13:30",
         "sollicitant": "Josefa Miralles",
         "estri": "eCargo-groga",
         "voluntari": "Ferran Vidal"},
     {
            "id": "124",
            "dia": "2023-12-14",
            "hora_inici": "13:30",
            "hora_fi" : "14:30",
            "sollicitant": "Maria Coll",
            "estri": "eCargo-groga",
            "voluntari": "Anna Berme"},
    {
          "id": "126",
          "dia": "2023-12-16",
          "hora_inici": "14:30",
          "hora_fi" : "15:30",
          "sollicitant": "Maria Coll",
          "estri": "eCargo-groga",
          "voluntari": ""},     
      );

  
  }

}
