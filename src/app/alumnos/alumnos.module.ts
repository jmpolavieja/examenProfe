import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import {DetalleAlumnoComponent} from "./detalle-alumno/detalle-alumno.component";
import {AlumnosComponent} from "./listadoAlumnos/alumnos.component";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AlumnosComponent,
    DetalleAlumnoComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MatTableModule,
    MatCardModule,
    MatSlideToggleModule,
    MatButtonModule
  ]
})
export class AlumnosModule { }
