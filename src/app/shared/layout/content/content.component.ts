import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'shared-content',
  standalone: true,
  imports: [
    CommonModule,MenuComponent,RouterLink, RouterOutlet,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent { }
