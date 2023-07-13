import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  pacientesComponent} from './components/paciente/pacientes/pacientes.component';
import {  platosComponent} from './components/plato/platos/platos.component';
import {  registrosComponent} from './components/registro/registros/registros.component';




const routes: Routes = [
  {
    path:'pacientes',
    component:pacientesComponent
  },
  {
    path:'platos',
    component:platosComponent
  },
  {
    path:'registros',
    component:registrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
