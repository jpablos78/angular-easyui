import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html',*/
  template: `
  <app-layout [menus]="menus" [title]="'Facturación Electrónica'" (itemClick)="onItemClick($event)">
    <div style="padding:20px">
      <div *ngIf="selectedMenu">
        <router-outlet></router-outlet>
      </div>
    </div>
  </app-layout>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-easyui';
  menus = [
    {
      text: 'Favoritos',
      iconCls: 'fa fa-star',
      state: 'open',
      children: [
        {
          text: 'Cambio de Clave',
          routerLink: '/ambiente'
        },
        {
          text: 'Favoritos',
          routerLink: '/ambiente'
        },
        {
          text: 'Ambiente',
          routerLink: '/ambiente'
        },
        {
          text: 'Parametros',
          routerLink: '/parametros'
        },
        {
          text: 'Unidades de Tiempo',
          routerLink: '/ambiente'
        },
        {
          text: 'Formas de Pago',
          routerLink: '/ambiente'
        },
        {
          text: 'Procesar Documentos Electronicos',
          routerLink: '/parametros'
        },
        {
          text: 'Consulta de Documentos Electrónicos',
          routerLink: '/parametros'
        }
      ]
    },
    {
      text: 'Modulo General',
      iconCls: 'fa fa-home',
      children: [
        {
          text: 'Usuarios',
          children: [
            {
              text: 'Mantenimiento de Usuarios',
              routerLink: '/ambiente'
            },
            {
              text: 'Cambio de Clave',
              routerLink: '/ambiente'
            },
            {
              text: 'Favoritos',
              routerLink: '/ambiente'
            }
          ]
        },
        {
          text: 'Seguridades',
          children: [
            {
              text: 'Mantenimiento de Perfil',
              routerLink: '/ambiente'
            },
            {
              text: 'Permisos',
              routerLink: '/ambiente'
            }
          ]
        }
      ]
    },
    {
      text: 'Parametros',
      iconCls: 'fa fa-wpforms',
      children: [
        {
          text: 'Ambiente',
          routerLink: '/ambiente'
        },
        {
          text: 'Parametros',
          routerLink: '/parametros'
        },
        {
          text: 'Unidades de Tiempo',
          routerLink: '/ambiente'
        },
        {
          text: 'Formas de Pago',
          routerLink: '/ambiente'
        }
      ]
    },
    {
      text: 'Transacciones',
      iconCls: 'fa fa-at',
      selected: true,
      children: [
        {
          text: 'Procesar Documentos Electronicos',
          routerLink: '/parametros'
        }
      ]
    }, {
      text: 'Consultas',
      iconCls: 'fa fa-table',
      children: [
        {
          text: 'Consulta de Documentos Electrónicos'
        }
      ]
    }
  ];

  selectedMenu = null;

  constructor(
    private router: Router
  ) { }

  onItemClick(item) {
    // alert('1');
    this.selectedMenu = item;
    // alert(this.selectedMenu.routerLink);

    /*
    if (this.selectedMenu.routerLink === 'ambiente') {
      alert(this.selectedMenu.routerLink);
    }

    if (this.selectedMenu.routerLink === 'parametros') {
      alert(this.selectedMenu.routerLink);
    }
    */


    this.router.navigate([this.selectedMenu.routerLink]);
    // this.router.navigate([this.selectedMenu.routerLink]);
  }
}
