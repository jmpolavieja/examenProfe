import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/listadoAlumnos/alumnos.component';
import { DetalleAlumnoComponent } from './alumnos/detalle-alumno/detalle-alumno.component';
import {MatTableModule} from "@angular/material/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    DetalleAlumnoComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatTableModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
