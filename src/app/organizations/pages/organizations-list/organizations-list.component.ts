import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-organizations-list',
  standalone: true,
  imports: [
    CommonModule,RouterLink,RouterOutlet
  ],
  templateUrl: './organizations-list.component.html',
  styleUrl: './organizations-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationsListComponent { }
