import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'shared-layout',
  standalone: true,
  imports: [
    CommonModule,HeaderComponent,FooterComponent,MenuComponent,ContentComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LayoutComponent implements OnInit {

  isMenuVisible!: boolean;

  constructor() {
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
  }

}
