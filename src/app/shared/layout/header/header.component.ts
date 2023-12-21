import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'shared-header',
  standalone: true,
  imports: [
    CommonModule,PanelModule,AvatarModule,AvatarGroupModule,SidebarModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent implements OnInit {

  selectedItem?: string;
  visible!: boolean;
  sidebarVisible: boolean = false;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public toggleMenu(){}

  public logout() {}
  // user: User;

  // displayNotifications: boolean;

  // notifications?: notification[];

  // constructor(
  //   private router: Router,
  //   private routeStateService: RouteStateService,
  //   private sessionService: SessionService,
  //   private userIdle: UserIdleService,
  //   private themeService: ThemeService,
  //   private userContextService: UserContextService,
  //   private menuDataService: MenuDataService) {

  //   this.displayNotifications = false;

  //   var selectedTheme = this.sessionService.getItem("selected-theme");
  //   if (selectedTheme) {
  //     this.selectTheme(selectedTheme);
  //   }
  // }

  // ngOnInit() {
  //   this.user = this.sessionService.getItem("currentUser");
  //   this.notifications = [];
  //   for (var i = 1; i <= 5; i++) {
  //     var notificationObj = new notification("Message " + i, new Date(), null)
  //     this.notifications.push(notificationObj);
  //   }

  //   //Start watching for user inactivity.
  //   this.userIdle.startWatching();

  //   // Start watching when user idle is starting.
  //   this.userIdle.onTimerStart().subscribe();

  //   // Start watch when time is up.
  //   this.userIdle.onTimeout().subscribe(() => {
  //     this.logout();
  //   });
  // }

  // logout() {
  //   this.userIdle.stopWatching();
  //   this.routeStateService.removeAll();
  //   this.userContextService.logout();
  //   this.sessionService.removeItem('active-menu');
  //   this.router.navigate(['/login']);
  // }

  // showNotificationSidebar() {
  //   this.displayNotifications = true;
  // }

  // toggleMenu() {
  //   this.menuDataService.toggleMenuBar.next(true);
  // }

  // selectTheme(theme: string) {
  //   this.sessionService.setItem("selected-theme", theme);
  //   this.themeService.selectTheme(theme);
  // }

}
