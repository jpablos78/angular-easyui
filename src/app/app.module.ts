import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';

import { AppComponent } from './app.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    EasyUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
