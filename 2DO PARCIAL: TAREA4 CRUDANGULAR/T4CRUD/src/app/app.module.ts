import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { pacientesComponent } from './components/paciente/pacientes/pacientes.component';
import { platosComponent } from './components/plato/platos/platos.component';
import { registrosComponent } from './components/registro/registros/registros.component';

@NgModule({
  declarations: [
    AppComponent,
    pacientesComponent,
    platosComponent,
    registrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
