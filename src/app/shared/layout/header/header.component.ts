import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';


@Component({
  selector: 'shared-header',
  standalone: true,
  imports: [
    CommonModule,PanelModule,AvatarModule,AvatarGroupModule,SidebarModule,ButtonModule

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent {

  private router = inject(Router);
  
  public onLogout() {
    this.router.navigate(['/']);
  }
}
