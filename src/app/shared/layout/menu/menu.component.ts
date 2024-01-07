import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';

import { TieredMenuModule } from 'primeng/tieredmenu';



@Component({
  selector: 'shared-menu',
  standalone: true,
  imports: [
    CommonModule,TieredMenuModule,RouterLink,RouterOutlet
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MenuComponent implements OnInit {

  items!: MenuItem[];
  displayPageName?: string;

  constructor() { }

  ngOnInit() {
    this.items = [
        {
            label: 'Inici',
            icon: 'pi pi-fw pi-home',
            "routerLink": "dashboard",
            routerLinkActiveOptions: { exact: true }
        },
        {
            label: 'Cites',
            icon: 'pi pi-fw pi-calendar',
            "routerLink": "dashboard",
            routerLinkActiveOptions: { exact: true }
            // items: [
            //     {label: 'Llistat Cites', icon: 'pi pi-fw pi-list', "routerLink": "./dashboard/appointments" },
            //     {label: 'Nova Cita', icon: 'pi pi-fw pi-calendar-plus', "routerLink": "./dashboard/appointment/new"}
            // ]
        },
        {
            label: 'Voluntaris',
            icon: 'pi pi-fw pi-id-card',
            "routerLink": "./volunteers",
            routerLinkActiveOptions: { exact: true }
            // items: [
            //     {label: 'Llistat Voluntaris', icon: 'pi pi-fw pi-users', "routerLink": "./volunteers"},
            //     {label: 'Nou Voluntari', icon: 'pi pi-fw pi-user-plus', "routerLink": "./volunteers/new"}
            // ]
        },
        {
          label: 'Clients',
          icon: 'pi pi-fw pi-server',
          "routerLink": "./clients",
          routerLinkActiveOptions: { exact: true }
          // items: [
          //     {label: 'Llistat Usuaris', icon: 'pi pi-fw pi-users',"routerLink": "./clients"},
          //     {label: 'Nou Usuari', icon: 'pi pi-fw pi-user-plus',"routerLink": "./clients/new"}
          // ]
      },
      {
        label: 'Administració',
        icon: 'pi pi-fw pi-cog',
        "routerLink": "./organizations",
    }

    ];
}

  ngOnDestroy() {
  }

}

function addNewUser(): string {
  return "/alta"; 
}
