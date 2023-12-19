import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppTopbarComponent } from '../app-topbar/app-topbar.component';
import { AppSidebarComponent } from '../app-sidebar/app-sidebar.component';
import { AppFooterComponent } from '../app-footer/app-footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layoutpage',
  standalone: true,
  imports: [
    CommonModule, AppTopbarComponent,AppSidebarComponent,AppFooterComponent,RouterLink, RouterOutlet
  ],
  templateUrl: './layoutpage.component.html',
  styleUrl: './layoutpage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutpageComponent {

  get containerClass() {
    return {
        'layout-theme-light': 'light',
        'layout-theme-dark':  'dark',
        'layout-overlay': 'overlay',
        'layout-static': 'static',
        'layout-static-inactive':  'static',
        // 'layout-overlay-active': this.layoutService.state.overlayMenuActive,
        // 'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
        'p-input-filled': 'filled',
        // 'p-ripple-disabled': !this.layoutService.config.ripple
    }
}
 }
