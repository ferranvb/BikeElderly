import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CitesServiceService } from '../cites.service';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';


import { ICita } from '../ICita';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'cites-llista-cites',
  standalone: true,
  imports: [
    CommonModule,TableModule,ButtonModule,TagModule, RouterLink, RouterOutlet
  ],
  templateUrl: './llista-cites.component.html',
  styleUrl: './llista-cites.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LlistaCitesComponent {

  private _citesList?: ICita[];
  
  constructor(private service: CitesServiceService) { }

  public get citesList(): Array<ICita> {
    this._citesList = this.service.citesListAux;
    return this._citesList;
  }
 
  // getSeverity(status!: any) { 
  //   return 'warning';
  // }
 }
