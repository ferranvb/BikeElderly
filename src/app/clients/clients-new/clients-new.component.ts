import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'clients-new',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './clients-new.component.html',
  styleUrl: './clients-new.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsNewComponent implements OnInit {

  private clientsService = inject(ClientsService);

  ngOnInit(): void { }

}
