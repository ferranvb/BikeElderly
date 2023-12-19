import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,MenubarModule
  ],
  templateUrl: './app-sidebar.component.html',
  styleUrl: './app-sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppSidebarComponent implements OnInit {

    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Inici',
                icon: 'pi pi-fw pi-file',
                
            },
            {
                label: 'Cites',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'llistat',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        label: 'alta',
                        icon: 'pi pi-fw pi-align-right'
                    }
                ]
            },
            {
                label: 'Voluntaris',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Llistat',
                        icon: 'pi pi-fw pi-users'
                    },
                    {
                        label: 'Nou usuari',
                        icon: 'pi pi-fw pi-user-plus'
                    }
                ]
                    
            },
            {
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }
 }
