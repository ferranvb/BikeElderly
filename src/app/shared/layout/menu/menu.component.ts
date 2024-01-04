import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';

import { TieredMenuModule } from 'primeng/tieredmenu';



@Component({
  selector: 'shared-menu',
  standalone: true,
  imports: [
    CommonModule,TieredMenuModule 
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
            "routerLink": "./dashboard",
        },
        {
            label: 'Cites',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {label: 'Llistat Cites', icon: 'pi pi-fw pi-list', "routerLink": "./dashboard/appointments" },
                {label: 'Nova Cita', icon: 'pi pi-fw pi-calendar-plus', "routerLink": "./dashboard/appointment/new"}
            ]
        },
        {
            label: 'Voluntaris',
            icon: 'pi pi-fw pi-id-card',
            items: [
                {label: 'Llistat Voluntaris', icon: 'pi pi-fw pi-users', "routerLink": "./dashboard/volunteers"},
                {label: 'Nou Voluntari', icon: 'pi pi-fw pi-user-plus', "routerLink": "./dashboard/volunteer/new"}
            ]
        },
        {
          label: 'Usuaris',
          icon: 'pi pi-fw pi-server',
          items: [
              {label: 'Llistat Usuaris', icon: 'pi pi-fw pi-users',"routerLink": "./dashboard/clients"},
              {label: 'Nou Usuari', icon: 'pi pi-fw pi-user-plus',"routerLink": "./dashboard/clients/new"}
          ]
      },
      {
        label: 'Administració',
        icon: 'pi pi-fw pi-cog',
    }

    ];
}

  ngOnDestroy() {
  }

}

function addNewUser(): string {
  return "/alta"; 
}
