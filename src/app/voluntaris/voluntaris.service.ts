import { Injectable, OnInit } from '@angular/core';
import { Ivoluntari } from './shared/ivoluntari';

@Injectable({
  providedIn: 'root'
})

export class VoluntarisService {

  private _llistaVoluntaris: Ivoluntari[]  = []; //
  
  constructor() { 
   this._llistaVoluntaris = Array({
    "id_voluntari": 1205,
    "dni": "78540274A",
    nom: "Josep",
    "cognom1": "Curto",
    "cognom2" : "Mestre",
    "data_naixement" : "1992-04-23",
    "urlFoto"  : "./assets/images/jcurto.jpg",
    telefon_contacte : "977454548",
    Email : "jcurto@gmail.com",
    "associacio" : 0,
    actiu : true},
      {
        "id_voluntari": 1206,
        "dni": "78540275B",
        nom: "Josep2",
        "cognom1": "Curto2",
        "cognom2" : "Mestre2",
        "data_naixement" : "2000-04-18",
        "urlFoto"  : "./assets/images/jcurto2.jpg",
        telefon_contacte : "977454549",
        Email : "jcurto2@gmail.com",
        "associacio" : 0,
        actiu : true},
       {
        "id_voluntari": 1207,
        "dni": "78540276C",
        nom: "Josep3",
        "cognom1": "Curto3",
        "cognom2" : "Mestre3",
        "data_naixement" : "1998-02-25",
        "urlFoto"  : "./assets/images/jcurto3.jpg",
        telefon_contacte : "977454548",
        Email : "jcurto3@gmail.com",
        "associacio" : 0,
        actiu : true,},
      {
        "id_voluntari": 1208,
        "dni": "78540277D",
        nom: "Josep4",
        "cognom1": "Curto4",
        "cognom2" : "Mestre4",
        "data_naixement" : "1999-07-08",
        "urlFoto"  : "./assets/images/jcurto4.jpg",
        telefon_contacte : "977454548",
        Email : "jcurto4@gmail.com",
        "associacio" : 0,
        actiu : true,},     
        );
  
    
    }

    public get llistaVoluntaris(): Ivoluntari[] {
      return this._llistaVoluntaris;
    }
  


  }

  


  


