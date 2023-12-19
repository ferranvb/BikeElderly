import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Ivoluntari } from '../shared/ivoluntari';
import { VoluntarisService } from '../voluntaris.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-voluntaris-llista',
  standalone: true,
  imports: [
    CommonModule,TableModule,ButtonModule,TagModule, RouterLink, RouterOutlet
  ],
  templateUrl: './voluntaris-llista.component.html',
  styleUrl: './voluntaris-llista.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VoluntarisLlistaComponent {

  private _voluntarisList?: Ivoluntari[];
  

  constructor(private service: VoluntarisService) { }

  public get voluntarisList(): Ivoluntari[] {
    this._voluntarisList = this.service.llistaVoluntaris;
    return this._voluntarisList;
  }


  // public get citesList(): Array<ICita> {
  //   this._citesList = this.service.citesListAux;
  //   return this._citesList;
  // }
 }
