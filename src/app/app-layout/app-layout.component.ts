import { Component, Input, ViewChild, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
/*import { LayoutComponent } from 'ng-easyui/layout/layout.component';*/
/*import { LayoutComponent } from './easyui/LayoutComponent';*/

@Component({
  selector: 'app-layout',
  template: `
        <div class="f-column">
            <div class="main-header f-row">
                <div class="f-row f-full">
                    <div class="main-title f-animate f-row" [style.width.px]="width">
                        <img class="app-logo" src="https://www.jeasyui.com/favicon.ico">
                        <span *ngIf="!collapsed">{{title}}</span>
                    </div>
                    <div class="main-bar f-full">
                        <span class="main-toggle fa fa-bars" (click)="toggle()"></span>
                    </div>
                </div>
            </div>
            <div class="f-row f-full">
                <div class="sidebar-body f-animate" [style.width.px]="width">
                    <div *ngIf="!collapsed" class="sidebar-user">
                        User Panel
                    </div>
                    <eui-sidemenu [data]="menus" [border]="false" [collapsed]="collapsed" (itemClick)="onItemClick($event)"></eui-sidemenu>
                </div>
                <div class="main-body f-full">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    `,
  styleUrls: ['./app-layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppLayoutComponent {
  @Input() menus;
  @Input() title = null;
  @Output() itemClick = new EventEmitter();

  width = 200;
  collapsed = false;

  toggle() {
    this.collapsed = !this.collapsed;
    this.width = this.collapsed ? 50 : 200;
  }

  onItemClick(item) {
    this.itemClick.emit(item);
    if (!this.collapsed) {
      this.toggle();
    }
  }



}
