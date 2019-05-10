import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AmbienteComponent } from './ambiente/ambiente.component';

import { AppRoutesModule } from './app-routes';
import { PrimeNGModule } from './png';
import { ParametrosComponent } from './parametros/parametros.component';
import { MantenimientoUsuariosComponent } from './components/mod-general/usuarios/mantenimiento-usuarios/mantenimiento-usuarios.component';
import { CambioClaveComponent } from './components/mod-general/usuarios/cambio-clave/cambio-clave.component';
import { FavoritosComponent } from './components/mod-general/usuarios/favoritos/favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AmbienteComponent,
    ParametrosComponent,
    MantenimientoUsuariosComponent,
    CambioClaveComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    EasyUIModule,
    AppRoutesModule,
    BrowserAnimationsModule,
    PrimeNGModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
