import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AmbienteComponent } from './ambiente/ambiente.component';
import { ParametrosComponent } from './parametros/parametros.component';

const appRoutes: Routes = [
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
