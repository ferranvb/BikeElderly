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
            "routerLink": "./home",
        },
        {
            label: 'Cites',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {label: 'Llistat Cites', icon: 'pi pi-fw pi-list', "routerLink": "./appointments-list" },
                {label: 'Nova Cita', icon: 'pi pi-fw pi-calendar-plus', "routerLink": "./appointment-registration"}
            ]
        },
        {
            label: 'Voluntaris',
            icon: 'pi pi-fw pi-id-card',
            items: [
                {label: 'Llistat Voluntaris', icon: 'pi pi-fw pi-users', "routerLink": "./volunteers-list"},
                {label: 'Nou Voluntari', icon: 'pi pi-fw pi-user-plus', "routerLink": "./volunteer-registration"}
            ]
        },
        {
          label: 'Usuaris',
          icon: 'pi pi-fw pi-server',
          items: [
              {label: 'Llistat Usuaris', icon: 'pi pi-fw pi-users',"routerLink": "./users-list"},
              {label: 'Nou Usuari', icon: 'pi pi-fw pi-user-plus',"routerLink": "./user-registration"}
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
