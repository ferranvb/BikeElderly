import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'clients-list',
  standalone: true,
  imports: [
    CommonModule,TableModule,ButtonModule,TagModule, RouterLink, RouterOutlet,LayoutComponent
  ],
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsListComponent { 
  private clientsService = inject(ClientsService);

}
