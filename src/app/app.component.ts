import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html',*/
  template: `
  <app-layout [menus]="menus" [title]="'My System'" (itemClick)="onItemClick($event)">
  <div style="padding:20px">
      <p *ngIf="selectedMenu">{{selectedMenu.text}}</p>
      <p *ngIf="!selectedMenu">Content.</p>
  </div>
</app-layout>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-easyui';
  menus = [{
    text: 'Forms',
    iconCls: 'fa fa-wpforms',
    state: 'open',
    children: [{
      text: 'Form Element'
    }, {
      text: 'Wizard'
    }, {
      text: 'File Upload'
    }]
  }, {
    text: 'Mail',
    iconCls: 'fa fa-at',
    selected: true,
    children: [{
      text: 'Inbox'
    }, {
      text: 'Sent'
    }, {
      text: 'Trash',
      children: [{
        text: 'Item1'
      }, {
        text: 'Item2'
      }]
    }]
  }, {
    text: 'Layout',
    iconCls: 'fa fa-table',
    children: [{
      text: 'Panel'
    }, {
      text: 'Accordion'
    }, {
      text: 'Tabs'
    }]
  }];

  selectedMenu = null;

  onItemClick(item) {
    this.selectedMenu = item;
  }
}
