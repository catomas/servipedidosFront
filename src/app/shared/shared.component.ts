import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Ordenes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Crear',
            icon: 'pi pi-save',
            routerLink: '/order/create',
          },
          {
            label: 'Listar',
            icon: 'pi pi-list',
            routerLink: '/order/list',
          },
        ],
      },
    ];
  }
}
