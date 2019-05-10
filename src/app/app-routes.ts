import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MantenimientoUsuariosComponent } from './components/mod-general/usuarios/mantenimiento-usuarios/mantenimiento-usuarios.component';
import { CambioClaveComponent } from './components/mod-general/usuarios/cambio-clave/cambio-clave.component';
import { FavoritosComponent } from './components/mod-general/usuarios/favoritos/favoritos.component';
import { AmbienteComponent } from './ambiente/ambiente.component';
import { ParametrosComponent } from './parametros/parametros.component';

const appRoutes: Routes = [
    { path: 'mantenimiento-usuarios', component: MantenimientoUsuariosComponent },
    { path: 'cambio-clave', component: CambioClaveComponent },
    { path: 'favoritos', component: FavoritosComponent },
    { path: 'ambiente', component: AmbienteComponent },
    { path: 'parametros', component: ParametrosComponent },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutesModule { }
