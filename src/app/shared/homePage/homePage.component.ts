import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'shared-home-page',
  standalone: true,
  imports: [
    CommonModule,
    TableModule
  ],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
