import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';

import { AppComponent } from './app.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AmbienteComponent } from './ambiente/ambiente.component';

import { AppRoutesModule } from './app-routes';
import { PrimeNGModule } from './png';
import { ParametrosComponent } from './parametros/parametros.component';
import { MantenimientoUsuariosComponent } from './components/modulo-general/usuarios/mantenimiento-usuarios/mantenimiento-usuarios.component';
import { CambioClaveComponent } from './components/modulo-general/usuarios/cambio-clave/cambio-clave.component';
import { FavoritosComponent } from './components/modulo-general/usuarios/favoritos/favoritos.component';

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
    PrimeNGModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
